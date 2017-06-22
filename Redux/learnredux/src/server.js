import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import App from './containers/App';
import { renderToString } from 'react-dom/server'

const app = Express();
const port = 3000;

app.use(handleRender);

function handleRender(req, res) {
  const store = createStore(counterApp);
  const html = renderToString(
    <Provider store={store}><App /></Provider>
  );
  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
}
function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body>
      <div id="root">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
      </script>
      <script src="/static/bundle.js"></script>
    </body></html>
  `;
}

app.listen(port);