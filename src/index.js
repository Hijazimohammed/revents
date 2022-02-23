import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

const rootEl = document.getElementById('root');
function render() {
  ReactDOM.render(<App />, rootEl);
}
if (module.hot) {
  module.hot.accept('./App', function () {
    setTimeout(render);
  });
}
render();
