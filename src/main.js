import { createApp } from "vue";
import { createPinia } from "pinia";
import { firebase } from "./firebase.js";
import router from "./router/index.js";

import App from "./App.vue";
import "normalize.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  HiSearch,
  GiFeather,
  GiBirdHouse,
  HiHashtag,
  BiBell,
  BiPerson,
  IoPerson,
  FaRegularComment,
  LaRetweetSolid,
  FaRegularHeart,
  BiHeartFill,
  GiShare,
  HiDotsHorizontal,
  BiTwitter,
  BiTrash,
  CoUserFollow,
  CoUserUnfollow,
  MdArrowback,
  RiImageAddLine,
  BiX,
  MdLocationonOutlined,
  OiLink,
  LaBirthdayCakeSolid,
  BiCalendar3,
  MdAddaphotoOutlined,
} from "oh-vue-icons/icons";

addIcons(
  HiSearch,
  GiFeather,
  GiBirdHouse,
  HiHashtag,
  BiBell,
  BiPerson,
  IoPerson,
  FaRegularComment,
  LaRetweetSolid,
  FaRegularHeart,
  BiHeartFill,
  GiShare,
  HiDotsHorizontal,
  BiTwitter,
  BiTrash,
  CoUserFollow,
  CoUserUnfollow,
  MdArrowback,
  RiImageAddLine,
  BiX,
  MdLocationonOutlined,
  OiLink,
  LaBirthdayCakeSolid,
  BiCalendar3,
  MdAddaphotoOutlined
);

const pinia = createPinia();
const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(pinia, firebase);
app.use(router).mount("#app");
