import './chat-item.scss';
import ChatItemBlock from './chat-item.hbs?raw';
import Block from 'utils/block/Block';

export default class ChatItem extends Block {
  render() {
    console.log(this.props)
    return this.compile(ChatItemBlock, this.props);
  }
}
