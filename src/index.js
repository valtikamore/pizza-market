import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';

import {BrowserRouter} from 'react-router-dom'
import store from "./redux/store";
import {Provider} from 'react-redux'
import App from "./App";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>

        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

