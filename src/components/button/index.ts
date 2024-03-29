import './button.scss';
import Button from './button.hbs?raw';
import Block from 'utils/block/Block';

export default class ButtonBlock extends Block {
  constructor(props: Record<string, unknown>) {
    super('button', props);
  }
  render() {
    return this.compile(Button, this.props, this.props.className);
  }
}
