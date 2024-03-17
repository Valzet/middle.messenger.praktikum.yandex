import './input.scss';
import ProfileInputBlock from './input.hbs?raw';
import Block from 'utils/block/Block';

export default class ProfileInput extends Block {
  constructor(props: any) {
    super('div', props);
  }
  render() {
    return this.compile(ProfileInputBlock, this.props);
  }
}
