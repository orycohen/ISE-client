import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Axios from 'axios';

(async () => {
  Axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:8080/users/user"
  })
  .then(res => {ReactDOM.render(<App user={res.data}/>, document.getElementById('root'))})
})();
