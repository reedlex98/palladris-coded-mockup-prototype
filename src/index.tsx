import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-tagsinput/react-tagsinput.css'
import "react-datepicker/dist/react-datepicker.css"
import "bulma"
import "./sass/index.scss"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

serviceWorker.unregister();