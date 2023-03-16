import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'tachyons'
import App from './containers/App'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { searchRobots, requestRobots } from './reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'



const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunk ,logger))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
