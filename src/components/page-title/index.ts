import './page-title.scss';
import PageTitle from './page-title.hbs?raw';
import Block from '../../utils/block/Block';

export default class PageTitleBlock extends Block {
  constructor(props:any) {
      super("h1", props);
  }
  render() {  
    return this.compile(PageTitle, this.props, this.props.className);
  }
}

