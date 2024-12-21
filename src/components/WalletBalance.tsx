
interface Props {
    balance: number
}

export default function WalletBalance({ balance }: Props) {
	let color;
	if (balance > 0) {
		color = 'text-orange-400';
	} else if (balance < 0) {
		color = 'text-red-400';
	} else {
		color = 'text-gray-400';
	}

	return (
		<>
			<h1 className={`font-bold ${color}`}>
				{ balance } $
			</h1>
		</>
	);
}