import MainHeader from '@/components/MainHeader.tsx';
import CardList from '@/components/CardList.tsx';
import { useFetchRecipes } from '@/hooks/useFetchRecipes';

export default function HomePage() {
	const [recipes] = useFetchRecipes();

	return (
		<>
			<MainHeader/>
			<CardList cards={recipes}/>
		</>
	);
}