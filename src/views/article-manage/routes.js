import loadView from 'utils/async-view-loader'

export default {
  component: require('./containner.vue'),
  subRoutes: {
    '/article-add': {
      component: loadView((loaded) => {
        require(['./add-article.vue'], loaded)
      }),
      title: '列表信息',
    },
    '/article-list': {
      component: loadView((loaded) => {
        require(['./article-list.vue'], loaded)
      }),
      title: '列表信息',
    },
  },
}
