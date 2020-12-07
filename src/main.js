import Vue from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeart);
library.add(faComment);
library.add(faPaperPlane);
library.add(faBookmark);


Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
