import './link.scss';
import Link from './link.hbs?raw';
import Block from 'utils/block/Block';

export default class LinkBlock extends Block {
  constructor(props: Record<string, unknown>) {
    super('a', props);
  }

  render() {
    return this.compile(Link, this.props);
  }
}
