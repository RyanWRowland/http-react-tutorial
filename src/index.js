import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Axios from 'axios';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
Axios.defaults.headers.common.Authorization = 'AUTH TOKEN';
// default already but put here for demonstration
Axios.defaults.headers.post['Content-Type'] = 'application.json';

Axios.interceptors.request.use(
  request => {
    console.log(request);
    // can edit request config here
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  response => {
    console.log(response);
    // can edit response config here
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
