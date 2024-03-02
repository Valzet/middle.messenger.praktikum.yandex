import Handlebars from 'handlebars';
import './chat-page.scss';
export { default as ChatPage } from './chat-page.hbs?raw';
import opossum from '../../assets/images/opossum_1.png';
import badger from '../../assets/images/badger_1.png';
import raccoon from '../../assets/images/enot_1.jpg';

Handlebars.registerHelper('chat-page-list', () => {
  return [
    { name: 'Опоссум', message: 'Изображение', unread: '2', avatar: opossum },
    { name: 'Енот', message: 'Go на свалку!', avatar: raccoon },
    { name: 'Барсук', message: 'А у кого ключи от сарая?', unread: '4', avatar: badger },
  ];
});
