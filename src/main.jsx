import React from 'react'
import ReactDOM from 'react-dom'
import Store from "./redux/store"
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
