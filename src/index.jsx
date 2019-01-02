import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';

import Root from './components/Root';

const store = configureStore();
const root = document.getElementById('root');

// Check if service works is available in the browsers...
// if ('serviceWorker' in navigator) {
//   // Load service workers
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/serviceWorker.js');
//   });
// }

ReactDOM.render(<Root store={store} />, root);
