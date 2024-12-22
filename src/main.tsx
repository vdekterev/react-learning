import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';

import App from '@/App.tsx';
import AboutPage from '@/pages/AboutPage.tsx';
import HomePage from '@/pages/HomePage.tsx';
import RecipePage from '@/pages/RecipePage.tsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={ <App/> }>
			<Route path="/" element={ <HomePage /> } />
			<Route path="/about" element={ <AboutPage /> } />
			<Route path="/recipe/:id" element={ <RecipePage /> } />
		</Route>
	)
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
);
