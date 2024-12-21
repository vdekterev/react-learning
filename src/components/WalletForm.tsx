import React, {useState} from 'react';
import {IOperationType} from '@/enums.ts';
import {Operation} from '@/types.ts';

interface Props {
	onAddOperation: (operation: Operation) => void
}

export default function WalletForm({ onAddOperation }: Props) {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [operation, setOperation] = useState<IOperationType>(IOperationType.INCOME);

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
		if (!title || !amount) {
			alert('Все поля обязательны!');
			return;
		}

		const numAmount = amount === '' ? 0 : Number(amount);
		
		onAddOperation({
			id: Math.floor(Math.random() * 10000),
			title: title,
			amount: numAmount,
			operationType: operation,
			date: new Date()
		});

		setTitle('');
		setAmount('');
	};

	return (
		<form className="flex gap-2" onSubmit={handleFormSubmit}>
			<input type="text" className="p-2 rounded-lg"
				   value={title} onChange={handleTitleChange}
				   placeholder="Income or Expense... "

			/>
			<input type="number" className="p-2 rounded-lg"
				   value={amount} onChange={handleAmountChange}
				   placeholder="Amount..."
			/>

			<select name="operation" id="operation"
				value={operation} onChange={handleOperationChange}
				className="p-2 rounded-lg">
				<option value={IOperationType.INCOME}>Income</option>
				<option value={IOperationType.OUTCOME}>Outcome</option>
			</select>

			<button>Send</button>
		</form>
	);
}