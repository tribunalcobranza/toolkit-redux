import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import {PokemonApp} from './PokemonApp'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    {/* <App /> */}
    <PokemonApp />
  </Provider>
  </React.StrictMode>
)
