import ProfileUserTitle from './profile-user.hbs?raw';
import Block from 'utils/block/Block';

export default class ProfileUserTitleBlock extends Block {
  constructor(props: any) {
    super('div', props);
  }
  render() {
    return this.compile(ProfileUserTitle, this.props, this.props.className);
  }
}
