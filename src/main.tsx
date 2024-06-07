import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ListPage from './pages/list-page.js';
import SinglePage from './pages/details-page.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/listings',
		element: <ListPage />,
	},
	{
		path: '/details/:id',
		element: <SinglePage />,
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
