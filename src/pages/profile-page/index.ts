import "./profile-page.scss";
import Handlebars from "handlebars";
export { default as ProfilePage } from "./profile-page.hbs?raw";

Handlebars.registerHelper("profile", () => ({
  avatar: "../assets/images/avatar-plug.png",
  email: "mail@mail.ru",
  login: "loginIvan",
  lastName: "Фамилия",
  firstName: "Имя",
  visibleName: "Нагибатор2000",
  phone: '8-800-535-35-35'
}));
