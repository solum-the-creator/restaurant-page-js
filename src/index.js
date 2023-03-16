import {
  headerHomePage,
  mainHomePage,
  footerMainPage,
} from './modules/home-page';

const content = document.querySelector('#content');
content.appendChild(headerHomePage());
content.appendChild(mainHomePage());
content.appendChild(footerMainPage());
