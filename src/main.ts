import Block from './utils/block/Block';
import * as Pages from './pages';

// const pages: { [key: string]: [string | Handlebars.TemplateDelegate] } = {
//   'chat': [Pages.ChatPage],
//   'login': [Pages.LoginPage],
//   '/': [Pages.NavigationPage],
//   'signin': [Pages.SigninPage],
//   'profile': [Pages.ProfilePage],
//   'editProfile': [Pages.ProfileEditPage],
//   'changePassword': [Pages.ProfilePasswordPage],
//   404: [Pages.NotFoundErrorPage],
//   500: [Pages.ServerErrorPage],
// };

// Object.entries(Components).forEach(([name, component]) => {
//   Handlebars.registerPartial(name, <Handlebars.TemplateDelegate | string>component);
// });

// function navigate(page: string) {
//   const [source] = pages[page];
//   const handlebarsFunct = Handlebars.compile(source);
//   document.querySelector('main')!.innerHTML = handlebarsFunct(source);
//   updateURL(page);
// }
// function updateURL(page: string) {
//   history.pushState({ page }, '', `${page}`);
// }
// document.addEventListener('DOMContentLoaded', () => navigate('/'));

// document.addEventListener('click', (e) => {
//   const page = (e.target as Element)?.getAttribute('page');
//   if (page) {
//     navigate(page);
//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// });

// window.addEventListener('popstate', (event) => {
//   const page = event.state.page;
//   if (page) {
//     navigate(page);
//   }
// });

const renderDOM = (query: string, block: Block) => {
  const root = document.querySelector(query);
  if (root) {
    root.appendChild(block.getContent() as HTMLElement);
  }
  block.dispatchComponentDidMount();
  return root;
};

const render = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case '/':
      renderDOM('.app', new Pages.NavigationPage({ name: 'Navigation' }));
      break;
    case '/login':
      renderDOM('.app', new Pages.LoginPage({ name: 'Login' }));
      break;
    case '/404':
      renderDOM('.app', new Pages.NotFoundPage({ name: 'NotFound' }));
      break;
    case '/500':
      renderDOM('.app', new Pages.ServerErrorPage({ name: 'Server Error' }));
      break;
      case '/signin': 
      renderDOM('.app', new Pages.SinginPage({name: 'Signin page'}))
  }
};

document.addEventListener('DOMContentLoaded', function () {
  render();
});
