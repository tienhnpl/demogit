import React from 'react';
import ReactDOM from 'react-dom/client';
// import {Routes,Route,Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import { useState } from 'react';
import App from './App';
// import { Form } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>

 
);
