import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './Components/Containers/App';
import GlobalState from './Components/Containers/GlobalState';

render(
    <GlobalState>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </GlobalState>,
    document.getElementById('root')
);
