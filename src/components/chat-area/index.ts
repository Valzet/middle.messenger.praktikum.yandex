import './chat-area.scss';
import ChatArea from './chat-area.hbs?raw';
import Block from 'utils/block/Block';

export class ChatAreaBlock extends Block {
  constructor(props: any) {
    super('div', props);
  }

  render() {
    return this.compile(ChatArea, this.props);
  }
}
