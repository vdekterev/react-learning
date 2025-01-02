import loadingGIF from '@/assets/loading.gif';

export default function Loading() {
	return (
		<div className="loading-container">
			<img src={loadingGIF} alt=""/>
		</div>
	);
}