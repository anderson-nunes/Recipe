import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RecipeProvider from './hooks/useRecipeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecipeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecipeProvider>
);


