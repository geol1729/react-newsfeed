import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './containers/app-container'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
