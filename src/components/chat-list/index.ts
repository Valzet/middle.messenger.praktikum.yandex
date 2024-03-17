import './chat-list.scss';
import ChatListBlock from './chat-list.hbs?raw';

import Block from 'utils/block/Block';

export default class ChatList extends Block {
  render() {
    console.log(this.props)
    return this.compile(ChatListBlock, this.props, 'chat-list chat-page__list');
  }
}
