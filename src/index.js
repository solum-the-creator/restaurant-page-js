import "./styles/home.css";
import "./styles/products.css";

import {
  headerHomePage,
  mainHomePage,
  footerMainPage,
} from './modules/home-page';
import productsPage from "./modules/products-page";

const content = document.querySelector('#content');
content.appendChild(headerHomePage());
//content.appendChild(mainHomePage());
content.appendChild(productsPage());
content.appendChild(footerMainPage());
