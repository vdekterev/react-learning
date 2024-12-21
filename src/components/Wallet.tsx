import {useEffect, useState} from 'react';
import WalletForm from '@/components/WalletForm.tsx';
import WalletOperation from '@/components/WalletOperation.tsx';
import WalletBalance from '@/components/WalletBalance.tsx';
import { IOperationType } from '@/enums.ts';
import { Operation } from '@/types.ts';


export default function Wallet() {
	const sampleOperations = [
		{
			id: 1,
			title: 'Salary',
			amount: 5000,
			operationType: IOperationType.INCOME,
			date: new Date()
		},
		{
			id: 2,
			title: 'Debt',
			amount: 2000,
			operationType: IOperationType.OUTCOME,
			date: new Date()
		}
	];
	const [balance, setBalance] = useState<number>(0);
	const [operations, setOperations] = useState<Operation[]>(sampleOperations);

	useEffect(() => {
		const currBalance = [...operations].reduce((acc: number, item: Operation) => {
			if (item.operationType === IOperationType.OUTCOME) {
				return acc - item.amount;
			}
			return acc + item.amount;
		}, 0);
		setBalance(currBalance);
	}, [operations]);

	const addOperation = (operation: Operation) => {
		setOperations([...operations, operation]);
	};

	return (
		<div className="flex flex-col gap-4">
			<WalletBalance balance={balance} />
			<WalletForm onAddOperation={addOperation} />
			<div className="flex flex-col gap-4">
				{operations.map(op => (
					<WalletOperation key={op.id} operation={op} />
				))}
			</div>
		</div>
	);
}