import './avatar.scss';
import ProfileAvatarBlock from './avatar.hbs?raw';
import Block from 'utils/block/Block';

export default class ProfileAvatar extends Block {
  constructor(props: any) {
    super('div', props);
  }
  render() {
    return this.compile(ProfileAvatarBlock, this.props);
  }
}
