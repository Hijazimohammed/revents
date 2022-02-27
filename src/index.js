import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import { EventProvider } from './context/EventContext';

const rootEl = document.getElementById('root');
function render() {
  ReactDOM.render(
    <EventProvider>
      <App />
    </EventProvider>,
    rootEl
  );
}
if (module.hot) {
  module.hot.accept('./App', function () {
    setTimeout(render);
  });
}
render();
