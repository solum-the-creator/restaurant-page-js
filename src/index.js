import "./styles/home.css";
import "./styles/products.css";
import "./styles/about.css";

import {
  headerHomePage,
  mainHomePage,
  footerMainPage,
} from './modules/home-page';
import productsPage from "./modules/products-page";
import aboutPage from "./modules/about-page";

const content = document.querySelector('#content');
content.appendChild(headerHomePage());
//content.appendChild(mainHomePage());
//content.appendChild(productsPage());
content.appendChild(aboutPage());
content.appendChild(footerMainPage());
