import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from './router'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app">
        <Switch>
          {routes.map((route) => (
            <Route path={route.path} key={route.path} exact>
              {route.component}
            </Route>
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
