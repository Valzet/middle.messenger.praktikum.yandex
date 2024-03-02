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
  changePassword: [Pages.ProfilePasswordPage],
  404: [Pages.NotFoundErrorPage],
  500: [Pages.ServerErrorPage]
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

//todo перенести в helpers
function resolvePath(path:string) {
  return path;
}

Handlebars.registerHelper('resolve', resolvePath);

window.addEventListener("popstate", (event) => {
  const page = event.state.page;
  if (page) {
    navigate(page);
  }
});
