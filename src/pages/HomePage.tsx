import MainHeader from '@/components/MainHeader.tsx';
import CardList from '@/components/CardList.tsx';
import { useFetchRecipes } from '@/hooks/useFetchRecipes';
import Loading from '@/components/Loading.tsx';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
	const [fetchRecipes, { data, loading, error }] = useFetchRecipes();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		fetchRecipes(searchParams.get('search'));
	}, []);

	const handleSearch = (search: string) => {
		if (search.length < 1) return;
		fetchRecipes(search);
	};

	return (
		<>
			<MainHeader handleSearch={handleSearch}/>
			{ loading && <Loading/> }
			{ error && <p>Something went wrong: {error} </p> }
			{ data && <CardList cards={data} />}
		</>
	);
}