import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faCode, faEnvelope, faLocationDot, faPhone, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faPhone, faEnvelope, faLocationDot, faLinkedin, faUserGraduate, faCode)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount('#app');
