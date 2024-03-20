import '../profile.scss';
import ProfileAvatarBlock from './avatar.hbs?raw';
import Block from 'utils/block/Block';
export default class ProfileAvatar extends Block {
  constructor(props: Record<string, unknown>) {
    super('form', props);
  }
  render() {
    return this.compile(ProfileAvatarBlock, this.props);
  }
}
