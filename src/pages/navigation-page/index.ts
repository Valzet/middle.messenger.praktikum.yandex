import Block from 'utils/block/Block';
import './navigation-page.scss';
import NavigationPageBlock from './navigation-page.hbs?raw';
import PageTitle from 'components/page-title';
import Link from 'components/link';
export class NavigationPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
  }

  render() {
    this.children = {
      PageTitle: new PageTitle({
        title: 'Навигация по страницам',
        className: 'page-title',
      }),
      LoginLink: new Link({
        attr: {
          href: 'login',
          class: 'link',
        },
        text: 'Логин',
      }),
      SigninLink: new Link({
        attr: {
          href: 'signin',
          class: 'link',
        },
        text: 'Регистрация',
      }),
      ChatLink: new Link({
        attr: {
          href: 'chat',
          class: 'link',
        },
        text: 'Чат',
      }),
      ProfileLink: new Link({
        attr: {
          href: 'profile',
          class: 'link',
        },
        text: 'Профиль',
      }),
      EditProfileLink: new Link({
        attr: {
          href: 'editProfile',
          class: 'link',
        },
        text: 'Изменить профиль',
      }),
      ChangePasswordLink: new Link({
        attr: {
          href: 'changePassword',
          class: 'link',
        },
        text: 'Изменить пароль',
      }),
      NotFoundLink: new Link({
        attr: {
          href: '404',
          class: 'link',
        },
        text: '404',
      }),
      ServerErrorLink: new Link({
        attr: {
          href: '500',
          class: 'link',
        },
        text: '500',
      }),
    };

    return this.compile(NavigationPageBlock, this.props);
  }
}
