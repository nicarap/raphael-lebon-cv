import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBurger, faCertificate, faChevronDown, faCode, faEnvelope, faLocationDot, faPhone, faUserGraduate, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown, faPhone, faEnvelope, faLocationDot, faLinkedin, faUserGraduate, faCode, faUserTie, faBurger, faCertificate)

createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount('#app');
