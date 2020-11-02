import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';

import stores from '~s'

stores.products.load()


ReactDom.render(<App/>, document.querySelector('#app'));
