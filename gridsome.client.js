import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(faTelegram, faYoutube, faPhone);

export default function(Vue) {
  Vue.component('font-awesome', FontAwesomeIcon);
}
