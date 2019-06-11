import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppViews from './components/AppViews';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./nav/NavBar";
import Nutshell from './Kennel';
import "./nav/NavBar.css"

ReactDOM.render(
<BrowserRouter>
       <Nutshell />
       
</BrowserRouter>,
 
document.getElementById('root')
);
