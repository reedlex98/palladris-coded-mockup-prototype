import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-tagsinput/react-tagsinput.css'
import "bulma"
import "./sass/index.scss"
import "react-datepicker/dist/react-datepicker.css"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

serviceWorker.unregister();