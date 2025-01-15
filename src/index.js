import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import NewRoamer from './pages/new-roamer';


const root = document.getElementById("root");

// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={
        <App /> 
      }/>
      <Route path="/new-roamer" element={
        <NewRoamer />
      }/>
    </Routes>
  </BrowserRouter>
);
