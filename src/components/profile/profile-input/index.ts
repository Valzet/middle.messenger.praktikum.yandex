import '../profile.scss';
import ProfileInputBlock from './input.hbs?raw';
import Block from 'utils/block/Block';

export default class ProfileInput extends Block {
  constructor(props: Record<string, unknown>) {
    super('li', props);
  }
  render() {
    return this.compile(ProfileInputBlock, this.props, `input__wrapper ${this.props.className}`);
  }
}
