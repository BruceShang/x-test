import loadView from 'utils/async-view-loader'
import Layout from 'components/layout/layout.vue'

import articleManageRoutes from './views/article-manage/routes'

const routes = {
  '/': {
    component: Layout,
    subRoutes: {
      '/article': articleManageRoutes,
    },
  },
  '/error/:msg': {
    name: 'error',
    component: loadView(loaded => {
      require(['views/error/error.vue'], loaded)
    }),
  },
}

export default routes
