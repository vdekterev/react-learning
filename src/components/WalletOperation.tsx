import {IOperationType} from '@/enums.ts';
import {Operation} from '@/types.ts';

interface Props {
    operation: Operation
}

export default function WalletOperation({ operation }: Props) {
	const color = operation.operationType===IOperationType.INCOME ? 'text-orange-400' : 'text-red-400';
	const sign = operation.operationType === IOperationType.INCOME ? '+' : '-';
	const date = operation.date.toLocaleDateString();

	return (
		<div className="bg-black w-full flex justify-between rounded-lg p-4">
			<div className="flex flex-col grow text-start">
				<h4>
					{operation.title}
				</h4>
				<span>
					{ date }
				</span>
			</div>

			<div className="flex items-center">
				<h2 className={`text-4xl font-bold ${color}`}>
					{ sign } { operation.amount } $
				</h2>
			</div>
		</div>
	);
}