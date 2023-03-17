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
content.appendChild(mainHomePage());
//content.appendChild(productsPage());
//content.appendChild(aboutPage());
content.appendChild(footerMainPage());

function tabChange(e){
  e.preventDefault();
  const main = document.querySelector('main');
  if(this.dataset.pageName === 'home') {
    content.replaceChild(mainHomePage(), main);
  }
  if(this.dataset.pageName === 'about') {
    content.replaceChild(aboutPage(), main);
  }
  if(this.dataset.pageName === 'products') {
    content.replaceChild(productsPage(), main);
  }
}

const menuLinks = document.querySelectorAll('a');

menuLinks.forEach(link =>{
  link.addEventListener('click', tabChange);
});

