import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#ff9e08',
        secondary: '#673ab7',
        accent: '#82B1FF',
        error: '#f44336',
        info: '#03a9f4',
        success: '#4CAF50',
        warning: '#ffc107'
      },
      
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
