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
        className: 'link__align-right link__sidebar',
        text: 'Профиль >',
        page: 'profile',
        url: 'profile',
      }),
      ReturnLink: new Link({
        className: '',
        text: 'Назад к логину',
        page: 'login',
        url: 'login',
      }),
      SearchInput: new SearchInputBlock({
        page: 'chat',
        placeholder: 'Поиск',
      }),
    };
    return this.compile(ChatPageBlock, this.props, 'chat-page');
  }
}
