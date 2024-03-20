import './chat-page.scss';
import ChatPageBlock from './chat-page.hbs?raw';
import { chatData } from '../../data/tempData';
import Block from 'utils/block/Block';
import Link from 'components/link';
import SearchInputBlock from 'components/search-input';
import ChatList from 'components/chat-list';
import { ChatArea } from 'components/chat-area';

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

      ChatList: new ChatList('div', {
        chats: chatData,
      }),
      ChatArea: new ChatArea('div', {
        chat: null,
      }),
    };
    return this.compile(ChatPageBlock, this.props, 'chat-page');
  }
}
