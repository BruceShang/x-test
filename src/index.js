import './config'
import App from './views/app.vue'
import router from './router'

require('./assets/styles/theme.styl')
require('./assets/fonts/font-awesome.css')
// require('./components/quilljs/quill-snow.css')

router.start(App, '#app')
