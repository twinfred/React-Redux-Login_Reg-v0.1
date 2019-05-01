import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App/App'

render (
    <App />,
    document.getElementById('app')
);