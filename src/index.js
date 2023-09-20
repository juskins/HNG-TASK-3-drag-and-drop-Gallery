import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import './index.css';
import AppList from './appList';
// import dotenv from 'dotenv';

// dotenv.config(); // Load environment variables from .env file


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <AppList />
  </Router>,
 
);




 
