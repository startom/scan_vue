import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketIO from 'vue-socket.io'

const bodyParser = require('body-parser');

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://192.168.0.174:8090',
    vuex: {
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
