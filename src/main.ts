import Block from './utils/block/Block';
import * as Pages from './pages';

document.addEventListener('DOMContentLoaded', function () {
  const { pathname } = window.location;
  const renderDOM = (query: string, block: Block) => {
    const root = document.querySelector(query);
    if (root) {
      root.appendChild(block.getContent() as HTMLElement);
    }
    block.dispatchComponentDidMount();
    return root;
  };

  const pages: { [key: string]: Block } = {
    '/': new Pages.NavigationPage({ name: 'Navigation' }),
    '/login': new Pages.LoginPage({ name: 'Login' }),
    '/404': new Pages.NotFoundPage({ name: 'NotFound' }),
    '/500': new Pages.ServerErrorPage({ name: 'Server Error' }),
    '/signin': new Pages.SigninPage({ name: 'Signin' }),
    '/chat': new Pages.ChatPage({ name: 'Chat' }),
    '/profile': new Pages.ProfilePage({ name: 'Profile' }),
    '/changePassword': new Pages.ProfileChangePasswordPage({ name: 'Change password' }),
  };

  const render = () => {
    const Page = pages[pathname];
    if (Page) {
      renderDOM('.app', Page);
    }
  };

  render();
});
