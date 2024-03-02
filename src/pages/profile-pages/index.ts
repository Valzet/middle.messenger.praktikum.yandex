export { ProfilePage } from './profile-page';
export {ProfileEditPage} from './profile-edit-page'
export {ProfilePasswordPage} from './profile-password-page'
import Handlebars from "handlebars";
Handlebars.registerHelper("profile", () => ({
    avatar: "../assets/images/avatar-plug.png",
    email: "mail@mail.ru",
    login: "loginIvan",
    lastName: "Фамилия",
    firstName: "Имя",
    visibleName: "Нагибатор2000",
    phone: '8-800-535-35-35'
  }));