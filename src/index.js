// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { FronteggProvider } from '@frontegg/react';
const contextOptions = {
baseUrl: 'https://workspace.frontegg.com',
};
// Replace this with your app logo
const headerImage = 'https://assets.frontegg.com/public-frontegg-assets/acme-logo.svg';
ReactDOM.render(
document.getElementById('root')
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
