import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';

import App from '@/App.tsx';
import AboutPage from '@/pages/AboutPage.tsx';
import HomePage from '@/pages/HomePage.tsx';
import RecipePage from '@/pages/RecipePage.tsx';
import ErrorPage from '@/pages/ErrorPage.tsx';
import Ingredients from '@/components/Ingredients.tsx';
import Instructions from '@/components/Instructions.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={ <App/> } errorElement={ <ErrorPage /> }>
			<Route path="/" element={ <HomePage /> } />
			<Route path="/about" element={ <AboutPage /> } />
			<Route path="/recipe/:id" element={ <RecipePage /> }>
				<Route path="/recipe/:id/ingredients" element={ <Ingredients/> } />
				<Route path="/recipe/:id/instructions" element={ <Instructions/> } />
			</Route>
		</Route>
	)
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
);
