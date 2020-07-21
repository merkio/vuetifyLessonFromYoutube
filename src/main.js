import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import  'firebase/firestore'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp( {
    apiKey: "AIzaSyAqo9ni9y98_XQ0jBoqEGApBrGtO9EqGpE",
    authDomain: "vue-calendar-bad1e.firebaseapp.com",
    databaseURL: "https://vue-calendar-bad1e.firebaseio.com",
    projectId: "vue-calendar-bad1e",
    storageBucket: "vue-calendar-bad1e.appspot.com",
    messagingSenderId: "248956671738",
    appId: "1:248956671738:web:6e3134be05af38e7049b43"
} );

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
