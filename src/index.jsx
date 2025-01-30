import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Import your main App component
import StoreContextProvider from './context/StoreContext'; // Import StoreContextProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreContextProvider> {/* Wrap the application with StoreContextProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContextProvider>
  </React.StrictMode>
);
