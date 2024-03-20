import './chat-area.scss';
import ChatAreaBlock from './chat-area.hbs?raw';
import Block from 'utils/block/Block';

export class ChatArea extends Block {
  render() {
    return this.compile(ChatAreaBlock, this.props, 'chat-area');
  }
}
