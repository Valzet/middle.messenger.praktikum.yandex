import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages: { [key: string]: [string | Handlebars.TemplateDelegate<any>] } = {
  
  'chat': [ Pages.ChatPage ],
  'login': [ Pages.LoginPage ],
  'nav': [Pages.NavigationPage],
  'signin': [Pages.SigninPage]
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, <Handlebars.TemplateDelegate<any> | string>component);
});


function navigate(page: string) {
  const [source, args] = pages[page]
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(args);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', e => {
  const page = (e.target as Element)?.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
