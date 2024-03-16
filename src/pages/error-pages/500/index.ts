import '../error-pages.scss';
import ServerErrorPageBlock from './server-error-page.hbs?raw';
import Link from '../../../components/link';
import Block from '../../../utils/block/Block';

export class ServerErrorPage extends Block {
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

    return this.compile(ServerErrorPageBlock, this.props);
  }
}
