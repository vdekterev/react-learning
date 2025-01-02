import ErrorBanner from '@/components/ErrorBanner.tsx';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const { statusText, data } = useRouteError();
	
	return (
		<div className="error-page">
			<ErrorBanner message={statusText} explanation={data}/>
		</div>
	);
}