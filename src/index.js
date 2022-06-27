import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DarkProvider } from './context/darkContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter><DarkProvider><App /></DarkProvider></BrowserRouter> 
  </React.StrictMode>
);

