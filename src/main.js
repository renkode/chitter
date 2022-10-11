import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  HiSearch,
  GiFeather,
  GiBirdHouse,
  MdAccesstimeRound,
  BiPerson,
} from "oh-vue-icons/icons";

addIcons(HiSearch, GiFeather, GiBirdHouse, MdAccesstimeRound, BiPerson);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
