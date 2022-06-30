import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 컴포넌트를 페이지에 렌더링을 해줌
//public 폴더의 index.html에서 <div id="root"></div> id가 root임 -> id가 root인 애를 render해주겠다! => F12해서 보면 렌더링된게 보임
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
