import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';

import Root from './components/Root';

const store = configureStore();

// Check if service works is available in the browsers...
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
      registration.pushManager.subscribe({ userVisibleOnly: true });
    });
  });
}

render(<Root store={store} />, document.getElementById('root'));
