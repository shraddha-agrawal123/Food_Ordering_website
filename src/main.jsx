import ReactDOM from 'react-dom/client';
import React from 'react'; // Ensure React is imported
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/storeContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Wrap everything with StrictMode for development warnings */}
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
