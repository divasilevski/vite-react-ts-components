import * as React from 'react'
import { routes } from '../router'
import { Link } from 'react-router-dom'

export const HomePage = () => (
  <div>
    <div>
      <h1>Страницы с компонентами:</h1>
      <ul>
        {routes.slice(1).map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.title || route.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)
