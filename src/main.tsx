import React from 'react';
import ReactDOM from 'react-dom/client';
import { SystemPreview } from './pages/SystemPreview';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SystemPreview />
    </React.StrictMode>,
);
