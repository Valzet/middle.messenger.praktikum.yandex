import Handlebars from 'handlebars';
import './chat-page.scss';
export { default as ChatPage } from './chat-page.hbs?raw';
import {chatData} from '../../data/chatData'

Handlebars.registerHelper('chat-page-list', () => {
  return chatData;
});
