import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Matches from "./routes/matches";
import Settings from "./routes/settings";
import Likes from "./routes/likes"
import Conversation from "./routes/conversation"


ReactDOM.render(
  
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="likes" element={<Likes />} />  
      <Route path="matches" element={<Matches />} />
      <Route path="settings" element={<Settings />} />  
      <Route path="conversation" element={<Conversation />} />  
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
