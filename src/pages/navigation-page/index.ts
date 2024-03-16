import Block from '../../utils/block/Block';
import './navigation-page.scss';
import NavigationPageBlock from './navigation-page.hbs?raw';
import PageTitle from '../../components/page-title';
import Link from '../../components/link';
export class NavigationPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
  }

  render() {
    this.children = {
      PageTitle: new PageTitle({
        title: 'Навигация по страницам',
        className: 'page-title'
      }),
      LoginLink: new Link({
        className: '',
        text: 'Логин',
        page: 'login',
        url: 'login',
      }),
      SigninLink: new Link({
        className: '',
        text: 'Регистрация',
        page: 'signin',
        url: 'signin',
      }),
      ChatLink: new Link({
        className: '',
        text: 'Чат',
        page: 'chat',
        url: 'chat',
      }),
      ProfileLink: new Link({
        className: '',
        text: 'Профиль',
        page: 'profile',
        url: 'profile',
      }),
      EditProfileLink: new Link({
        className: '',
        text: 'Изменить профиль',
        page: 'editProfile',
        url: 'editProfile',
      }),
      ChangePasswordLink: new Link({
        className: '',
        text: 'Изменить пароль',
        page: 'changePassword',
        url: 'changePassword',
      }),
      NotFoundLink: new Link({
        className: '',
        text: '404',
        page: '404',
        url: '404',
      }),
      ServerErrorLink: new Link({
        className: '',
        text: '500',
        page: '500',
        url: '500',
      }),
    };

    return this.compile(NavigationPageBlock, this.props);
  }
}
