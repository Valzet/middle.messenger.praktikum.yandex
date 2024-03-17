import Handlebars from 'handlebars';
import './chat-page.scss';
import ChatPageBlock from './chat-page.hbs?raw';
import { chatData } from '../../data/tempData';
import Block from 'utils/block/Block';
import Link from 'components/link';
import SearchInputBlock from 'components/search-input';
Handlebars.registerHelper('chat-page-list', () => {
  return chatData;
});

export class ChatPage extends Block {
  constructor(props: any) {
    super('div', props);
  }

  render() {
    this.children = {
      ProfileLink: new Link({
        attr: {
          class: 'link__align-right link__sidebar',
          href: 'profile',
        },
        text: 'Профиль >',
      }),
      ReturnLink: new Link({
        attr: {
          href: 'login',
        },
        text: 'Назад к логину',
      }),
      SearchInput: new SearchInputBlock({
        placeholder: 'Поиск',
      }),
    };
    return this.compile(ChatPageBlock, this.props, 'chat-page');
  }
}
