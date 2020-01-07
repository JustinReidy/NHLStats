import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import TeamProvider from './context/TeamProvider'
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <TeamProvider>
            <App />
        </TeamProvider>
    </BrowserRouter>
, document.getElementById('root'));
