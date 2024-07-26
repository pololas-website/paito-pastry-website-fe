import { createRoot } from 'react-dom/client';

import App from './App';

import '../public/css/base.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
