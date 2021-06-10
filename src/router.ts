import { AboutPage } from './pages/About'
import { HomePage } from './pages/Home'

interface Route {
  path: string
  component: () => JSX.Element
  name?: string
}

export const routes: Route[] = [
  { path: '/', component: HomePage },

  { path: '/about', name: 'О проекте', component: AboutPage },
]
