import { createApp } from "vue";
import { createPinia } from "pinia";
import withUUID from "vue-uuid";
import App from "./App.vue";
import "normalize.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  HiSearch,
  GiFeather,
  GiBirdHouse,
  MdAccesstimeRound,
  BiPerson,
  FaRegularComment,
  LaRetweetSolid,
  FaRegularHeart,
  GiShare,
  HiDotsHorizontal,
  BiTwitter,
  BiTrash,
  CoUserFollow,
  CoUserUnfollow,
  MdArrowback,
} from "oh-vue-icons/icons";

addIcons(
  HiSearch,
  GiFeather,
  GiBirdHouse,
  MdAccesstimeRound,
  BiPerson,
  FaRegularComment,
  LaRetweetSolid,
  FaRegularHeart,
  GiShare,
  HiDotsHorizontal,
  BiTwitter,
  BiTrash,
  CoUserFollow,
  CoUserUnfollow,
  MdArrowback
);

const pinia = createPinia();
const app = withUUID(createApp(App));
app.component("v-icon", OhVueIcon);
app.use(pinia);
app.mount("#app");
