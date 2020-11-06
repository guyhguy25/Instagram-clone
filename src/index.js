import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
// const showLoader = () => loader.classList.remove('loader--hide');

// const hideLoader = () => loader.classList.add('loader--hide');

const showLoader = () => loader.classList.add('backgroundAnimation');

const hideLoader = () => loader.classList.remove('backgroundAnimation');

//Time out for firebase to load
setTimeout(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App hideLoader={hideLoader} showLoader={showLoader}/>
    </React.StrictMode>,
    document.getElementById('root')
  )
}, 900)
