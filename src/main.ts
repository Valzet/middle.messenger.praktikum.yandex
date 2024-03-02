import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";

const pages: { [key: string]: [string | Handlebars.TemplateDelegate<any>] } = {
  chat: [Pages.ChatPage],
  login: [Pages.LoginPage],
  nav: [Pages.NavigationPage],
  signin: [Pages.SigninPage],
  profile: [Pages.ProfilePage],
  editProfile: [Pages.ProfileEditPage],
  changePassword: [Pages.ProfilePasswordPage]
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(
    name,
    <Handlebars.TemplateDelegate<any> | string>component
  );
});

function navigate(page: string) {
  const [source] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(source);
  updateURL(page);
}
function updateURL(page: string) {
  history.pushState({ page }, "", `/${page}`);
}
document.addEventListener("DOMContentLoaded", () => navigate("nav"));

document.addEventListener("click", (e) => {
  const page = (e.target as Element)?.getAttribute("page");
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

window.addEventListener("popstate", (event) => {
  const page = event.state.page;
  if (page) {
    navigate(page);
  }
});
