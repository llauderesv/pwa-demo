import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';

import Root from './components/Root';

import './styles/bootstrap.scss';
import './styles/main.scss';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
