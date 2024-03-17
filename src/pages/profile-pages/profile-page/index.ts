import '../profile-page.scss';
import ProfilePageBlock from './profile-page.hbs?raw';
import Block from 'utils/block/Block';
import LinkBlock from 'components/link';
import ProfileAvatar from 'components/profile/profile-avatar';
import ProfileUserTitleBlock from 'components/profile/profile-title';
import { user } from 'data/tempData';
import ProfileInput from 'components/profile/profile-input';
import Modal from 'components/modal';
export class ProfilePage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });

    this.props.isModalOpen = false;
  }
  handleOpenModal = (event: Event) => {
    if (event.target instanceof HTMLElement) {
      if (event.target.classList.contains('modal__content')) {
        return;
      }
      const element = document.querySelector(`.modal`);
      if (element) {
        element.classList.toggle('hidden');
      }
    }
  };

  render() {
    this.children = {
      ProfileAvatar: new ProfileAvatar({
        alt: 'Мой аватар',
        src: user.avatar,
        id: this.props.id,
        events: {
          mousedown: (e: Event) => this.handleOpenModal(e),
        },
      }),
      UserTitle: new ProfileUserTitleBlock({
        username: user.first_name,
      }),
      InputLoginField: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'login',
        type: 'text',
        value: user.login,
        disabled: true,
        inputName: 'Логин',
      }),
      InputEmailField: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'email',
        type: 'text',
        value: user.email,
        disabled: true,
        inputName: 'Почта',
      }),
      ProfileFirstNameInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'first_name',
        type: 'text',
        value: user.first_name,
        disabled: true,
        inputName: 'Имя',
      }),
      ProfileSecondNameInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'second_name',
        type: 'text',
        value: user.second_name,
        disabled: true,
        inputName: 'Фамилия',
      }),
      ProfileDisplayNameInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'display_name',
        type: 'text',
        value: user.display_name,
        disabled: true,
        inputName: 'Почта',
      }),
      ProfilePhoneInput: new ProfileInput({
        className: 'input-field__bottom-border',
        name: 'phone',
        type: 'text',
        value: user.phone,
        disabled: true,
        inputName: 'Телефон',
      }),
      EditProfileLink: new LinkBlock({
        attr: {
          class: '',
          href: 'editProfile',
        },

        text: 'Изменить данные',
      }),
      EditPasswordLink: new LinkBlock({
        attr: {
          class: '',
          href: 'changePassword',
        },

        text: 'Изменить пароль',
      }),
      ExitLink: new LinkBlock({
        attr: {
          class: 'link__right_type_right link__secondary',
          href: 'login',
        },
        text: 'Выйти',
      }),
      Modal: new Modal({
        events: {
          click: (e: Event) => this.handleOpenModal(e),
        },
      }),
    };

    return this.compile(ProfilePageBlock, this.props);
  }
}
