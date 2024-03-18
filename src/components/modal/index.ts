import ModalBlock from './modal.hbs?raw';
import './modal.scss';

import Block from 'utils/block/Block';
export default class Modal extends Block {
  constructor(props: any) {
    super('div', props);
  }
  render() {
    return this.compile(ModalBlock, this.props, 'modal hidden');
  }
}
