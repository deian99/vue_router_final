import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faHatWizard,
  faUserSecret,
  faUsers,
  faUserTie,
  faBasketShopping,
  faEllipsisVertical
);

const app = createApp(App);

let store = createStore({
  state: {
    users: [],
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    data: "",
  },
  mutations: {
    addUser(state, user) {
      this.state.users.push(user);
    },
  },
  actions: {},
  getters: {},
  modules: {},
});

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);

app.mount("#app");
