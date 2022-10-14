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
  FaRegularComment,
  LaRetweetSolid,
  FaRegularHeart,
  GiShare,
  HiDotsHorizontal,
  BiTwitter,
  BiTrash,
  CoUserFollow,
  CoUserUnfollow,
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
  CoUserUnfollow
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
