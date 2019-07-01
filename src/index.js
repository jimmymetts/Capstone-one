import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ShowPosterNow from './ShowPosterNow';
import "./nav/NavBar.css"

ReactDOM.render(
<BrowserRouter>
       <ShowPosterNow />
       
</BrowserRouter>,
 
document.getElementById('root')
);
