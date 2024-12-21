import React, { useState} from 'react';
import { IOperationType } from '@/enums.ts';
import { Operation } from '@/types.ts';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';


interface Props {
	onAddOperation: (operation: Operation) => void
}

const OperationSchema = z.object({
	title: z.string().min(1, 'Title is required!'),
	amount: z.string().refine(
		(val) => !isNaN(Number(val)) && Number(val) > 0,
		'Amount must be a positive number!'
	),
	operationType: z.nativeEnum(IOperationType, {
		errorMap: () => ({ message: 'Invalid operation type' })
	})
});

export default function WalletForm({ onAddOperation }: Props) {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [operation, setOperation] = useState<IOperationType>(IOperationType.INCOME);
	const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(e.target.value);
	};
	const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setOperation(e.target.value as IOperationType);
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const result = OperationSchema.safeParse({
			title,
			amount,
			operationType: operation
		});

		if (!result.success) {
			const fieldErrors = result.error.format();
			const formattedErrors: { [key:string]: string } = {};

			if (fieldErrors.title?._errors) formattedErrors.title = fieldErrors.title._errors[0];
			if (fieldErrors.amount?._errors) formattedErrors.amount = fieldErrors.amount._errors[0];
			if (fieldErrors.operationType?._errors) formattedErrors.operationType = fieldErrors.operationType._errors[0];

			setFormErrors(formattedErrors);
			return;
		}

		const numAmount = Number(amount);
		
		onAddOperation({
			id: uuidv4(),
			title: title,
			amount: numAmount,
			operationType: operation,
			date: new Date()
		});

		setTitle('');
		setAmount('');
	};

	return (
		<form className="flex gap-2 items-start" onSubmit={handleFormSubmit}>
			<div className="flex flex-col gap-1">
				<input type="text" className="p-2 rounded-lg"
					   value={title} onChange={handleTitleChange}
					   placeholder="Income or Expense... "

				/>
				{ formErrors.title && <p className="text-red-500 text-sm">{formErrors.title}</p> }
			</div>
			<div className="flex flex-col gap-1">
				<input type="number" className="p-2 rounded-lg"
					   value={amount} onChange={handleAmountChange}
					   placeholder="Amount..."
				/>
				{ formErrors.amount && <p className="text-red-500 text-sm">{formErrors.amount}</p> }
				
			</div>
			<div className="flex flex-col gap-1">
				<select name="operation" id="operation"
					value={operation} onChange={handleOperationChange}
					className="p-2 rounded-lg">
					<option value={IOperationType.INCOME}>Income</option>
					<option value={IOperationType.OUTCOME}>Outcome</option>
				</select>
				{ formErrors.operationType && <p className="text-red-500 text-sm">{formErrors.operationType}</p> }
			</div>

			<button>Send</button>
		</form>
	);
}