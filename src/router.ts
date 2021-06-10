import { ComparePage } from './pages/Compare'
import { HomePage } from './pages/Home'

interface Route {
  path: string
  component: () => JSX.Element
  title?: string
}

export const routes: Route[] = [
  { path: '/', component: HomePage },

  {
    path: '/compare',
    title: 'Компонент сравнения фото',
    component: ComparePage,
  },
]
