import '../error-pages.scss';
import NotFoundErrorPageBlock from './not-found-page.hbs?raw';
import Link from '../../../components/link';
import Block from '../../../utils/block/Block';

export class NotFoundPage extends Block {
  constructor(props: { name?: string }) {
    super('div', { ...props });
  }

  render() {
    this.children = {
      Link: new Link({
        className: 'list-element',
        text: 'Назад',
        page: 'chat',
        url: 'chat',
      }),
    };

    return this.compile(NotFoundErrorPageBlock, this.props);
  }
}
