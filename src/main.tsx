import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import ListPage from './pages/list-page.js';
import SinglePage from './pages/details-page.js';

ReactDOM.createRoot(document.getElementById('root')).render(<SinglePage />);
