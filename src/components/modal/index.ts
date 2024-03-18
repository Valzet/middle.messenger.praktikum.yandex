import ButtonBlock from 'components/button';
import ModalBlock from './modal.hbs?raw';
import './modal.scss';

import Block from 'utils/block/Block';
export default class Modal extends Block {
  constructor(props: any) {
    super('div', props);
  }
  render() {
    this.children = {
      Button: new ButtonBlock({
        text: 'Поменять',
        className: 'button button_primary button_primary_size_small',
      }),
    };
    return this.compile(ModalBlock, this.props, 'modal hidden');
  }
}
