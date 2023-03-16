const headerHomePage = function () {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const logoDiv = document.createElement('div');
  const logoLink = document.createElement('a');
  const logoImg = document.createElement('img');
  const mainMenu = document.createElement('ul');

  header.appendChild(nav);
  nav.appendChild(logoDiv);
  logoDiv.appendChild(logoLink);
  logoLink.appendChild(logoImg);
  nav.appendChild(mainMenu);

  header.classList.add('header');
  logoDiv.classList.add('logo');
  mainMenu.classList.add('main-menu');

  logoLink.href = '#';
  logoImg.src = '../src/images/Logo.svg';
  logoImg.alt = 'Organick Logo';

  const homeLink = document.createElement('li');
  const menuLink = document.createElement('li');
  const aboutUsLink = document.createElement('li');
  const homeLinkAnchor = document.createElement('a');
  const menuLinkAnchor = document.createElement('a');
  const aboutUsLinkAnchor = document.createElement('a');

  mainMenu.appendChild(homeLink);
  mainMenu.appendChild(menuLink);
  mainMenu.appendChild(aboutUsLink);

  homeLink.appendChild(homeLinkAnchor);
  menuLink.appendChild(menuLinkAnchor);
  aboutUsLink.appendChild(aboutUsLinkAnchor);

  homeLinkAnchor.href = '#';
  menuLinkAnchor.href = '#';
  aboutUsLinkAnchor.href = '#';

  homeLinkAnchor.textContent = 'Home';
  menuLinkAnchor.textContent = 'Menu';
  aboutUsLinkAnchor.textContent = 'About Us';

  return header;
};

const bannerHomePage = function () {
  const banner = document.createElement('div');
  const leftContent = document.createElement('div');
  const title = document.createElement('div');
  const buttonExplore = document.createElement('div');
  const pGreenTitle = document.createElement('p');
  const hTitle = document.createElement('h2');
  const button = document.createElement('button');

  banner.classList.add('banner');
  leftContent.classList.add('left-content');
  title.classList.add('title');
  buttonExplore.classList.add('button-explore');
  pGreenTitle.classList.add('green-title');

  banner.appendChild(leftContent);
  leftContent.appendChild(title);
  leftContent.appendChild(buttonExplore);
  title.appendChild(pGreenTitle);
  title.appendChild(hTitle);
  buttonExplore.appendChild(button);

  pGreenTitle.textContent = '100% Natural Food';
  hTitle.innerHTML = 'Choose the best <br> healthier way <br> of life';
  button.textContent = 'Explore Now';

  return banner;
};

const otherbannerHomePage = function () {
  const otherBanner = document.createElement('div');
  otherBanner.classList.add('other-banner');

  const leftBanner = document.createElement('div');
  leftBanner.classList.add('small-banner', 'left-banner');

  const leftBannerTitle = document.createElement('h4');
  leftBannerTitle.classList.add('banner-title');
  leftBannerTitle.innerHTML = 'Get Garden <br> Fresh Fruits';

  const leftBannerItalicTitle = document.createElement('p');
  leftBannerItalicTitle.classList.add('italic-title');
  leftBannerItalicTitle.innerHTML = 'Natural!!';

  leftBanner.appendChild(leftBannerItalicTitle);
  leftBanner.appendChild(leftBannerTitle);

  const rightBanner = document.createElement('div');
  rightBanner.classList.add('small-banner', 'right-banner');

  const rightBannerTitle = document.createElement('h4');
  rightBannerTitle.classList.add('banner-title');
  rightBannerTitle.innerHTML = 'Get 10% off <br> on Vegetables';

  const rightBannerItalicTitle = document.createElement('p');
  rightBannerItalicTitle.classList.add('italic-title');
  rightBannerItalicTitle.innerHTML = 'Other!!';

  rightBanner.appendChild(rightBannerItalicTitle);
  rightBanner.appendChild(rightBannerTitle);

  otherBanner.appendChild(leftBanner);
  otherBanner.appendChild(rightBanner);

  return otherBanner;
};

const aboutContainerHomePage = function () {
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  const rightContent = document.createElement('div');
  rightContent.classList.add('right-content');

  const italicTitle = document.createElement('p');
  italicTitle.classList.add('italic-title');
  italicTitle.textContent = 'About Us';

  const heading = document.createElement('h3');
  heading.innerHTML = 'We Believe in Working <br> Accredited Farmers';

  const aboutText = document.createElement('p');
  aboutText.classList.add('about-text');
  aboutText.textContent =
    "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.";

  const pointsContainer = document.createElement('div');
  pointsContainer.classList.add('points');

  const point1 = document.createElement('div');
  point1.classList.add('point');

  const imagePoint1 = document.createElement('div');
  imagePoint1.classList.add('image-point');

  const image1 = document.createElement('img');
  image1.src = '../src/images/backgrounds/Vegan-Food.png';
  image1.alt = 'Vegan food icon';

  const point1Title = document.createElement('h5');
  point1Title.classList.add('point-title');
  point1Title.textContent = 'Organic Foods only';

  const point1Text = document.createElement('p');
  point1Text.textContent =
    'Simply dummy text of the printing and typesetting industry. Lorem Ipsum';

  imagePoint1.appendChild(image1);

  point1.appendChild(imagePoint1);
  point1.appendChild(point1Title);
  point1.appendChild(point1Text);

  const point2 = document.createElement('div');
  point2.classList.add('point');

  const imagePoint2 = document.createElement('div');
  imagePoint2.classList.add('image-point');

  const image2 = document.createElement('img');
  image2.src = '../src/images/backgrounds/Mailbox-Quality.png';
  image2.alt = 'Mailbox Quality Icon';

  const point2Title = document.createElement('h5');
  point2Title.classList.add('point-title');
  point2Title.textContent = 'Quality Standards';

  const point2Text = document.createElement('p');
  point2Text.textContent =
    'Simply dummy text of the printing and typesetting industry. Lorem Ipsum';

  imagePoint2.appendChild(image2);

  point2.appendChild(imagePoint2);
  point2.appendChild(point2Title);
  point2.appendChild(point2Text);

  pointsContainer.appendChild(point1);
  pointsContainer.appendChild(point2);

  const shopNowButton = document.createElement('button');
  shopNowButton.classList.add('blue-button');
  shopNowButton.textContent = 'Shop Now';

  rightContent.appendChild(italicTitle);
  rightContent.appendChild(heading);
  rightContent.appendChild(aboutText);
  rightContent.appendChild(pointsContainer);
  rightContent.appendChild(shopNowButton);

  aboutContainer.appendChild(rightContent);
  return aboutContainer;
};

const createCard = function (category, imgSrc, title, priceContent) {
  const div = document.createElement('div');
  div.classList.add('card');

  const categoryTitle = document.createElement('div');
  categoryTitle.classList.add('category-title');
  categoryTitle.textContent = category;
  div.appendChild(categoryTitle);

  const imageCard = document.createElement('div');
  imageCard.classList.add('image-card');
  const img = document.createElement('img');
  img.setAttribute('src', imgSrc);
  img.setAttribute('alt', title);
  imageCard.appendChild(img);
  div.appendChild(imageCard);

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = title;
  div.appendChild(cardTitle);

  const footerCard = document.createElement('div');
  footerCard.classList.add('footer-card');
  const price = document.createElement('div');
  price.classList.add('price');
  const priceSpan = document.createElement('span');
  priceSpan.textContent = '$20.00';
  price.appendChild(priceSpan);
  price.appendChild(document.createTextNode(priceContent));

  const stars = document.createElement('div');

  stars.classList.add('stars');
  const ulStar = document.createElement('ul');
  //Create star in li
  for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.classList.add('star');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 576 512');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute(
      'd',
      'M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'
    );

    svg.appendChild(path);
    li.appendChild(svg);
    ulStar.appendChild(li);
  }

  stars.appendChild(ulStar);
  /////////////////////////////////////////

  footerCard.appendChild(price);
  footerCard.appendChild(stars);
  div.appendChild(footerCard);

  return div;
};

const cardsInfo = [
  {
    category: 'Vegetable',
    imgSrc: '../src/images/products/broccoli.png',
    title: 'Calabrese Broccoli',
    price: '$15.00',
  },
  {
    category: 'Vegetable',
    imgSrc: '../src/images/products/tomatos.png',
    title: 'Vegan Red Tomato',
    price: '$17.00',
  },
  {
    category: 'Millets',
    imgSrc: '../src/images/products/nuts.png',
    title: 'White Nuts',
    price: '$14.00',
  },
  {
    category: 'Fresh',
    imgSrc: '../src/images/products/bananas.png',
    title: 'Fresh Banana Fruites',
    price: '$12.00',
  },
  {
    category: 'Vegetable',
    imgSrc: '../src/images/products/broccoli.png',
    title: 'Calabrese Broccoli',
    price: '$15.00',
  },
  {
    category: 'Fresh',
    imgSrc: '../src/images/products/bananas.png',
    title: 'Fresh Banana Fruites',
    price: '$12.00',
  },
  {
    category: 'Millets',
    imgSrc: '../src/images/products/nuts.png',
    title: 'White Nuts',
    price: '$14.00',
  },
  {
    category: 'Vegetable',
    imgSrc: '../src/images/products/tomatos.png',
    title: 'Vegan Red Tomato',
    price: '$17.00',
  },
];

const createAllCards = function(arrCardsInfo){
    const cards = document.createElement('div');

    cards.classList.add('cards');
    arrCardsInfo.forEach(cardInfo =>{
        const newCard = createCard(cardInfo.category, cardInfo.imgSrc, cardInfo.title, cardInfo.price);
        cards.appendChild(newCard);
    });
    return cards;
};

const ourProductsHomePage = function () {
  const ourProducts = document.createElement('div');
  const titleBlock = document.createElement('div');
  const cards = createAllCards(cardsInfo);
  const buttonMore = document.createElement('div');

  const h4 = document.createElement('h4');
  const h3 = document.createElement('h3');
  const button = document.createElement('button');

  h4.classList.add('italic-title');
  button.classList.add('blue-button');

  h4.textContent = 'Categories';
  h3.textContent = 'Our Products';
  button.textContent = 'Load More';

  titleBlock.appendChild(h4);
  titleBlock.appendChild(h3);
  buttonMore.appendChild(button);

  ourProducts.classList.add('our-products');
  titleBlock.classList.add('title-block');
  buttonMore.classList.add('button-more');

  ourProducts.appendChild(titleBlock);
  ourProducts.appendChild(cards);
  ourProducts.appendChild(buttonMore);

  return ourProducts;
};




const mainHomePage = function () {
  const main = document.createElement('main');
  const bannerFirst = bannerHomePage();
  const otherBanner = otherbannerHomePage();
  const aboutContainer = aboutContainerHomePage();
  const ourProducts = ourProductsHomePage();

  main.appendChild(bannerFirst);
  main.appendChild(otherBanner);
  main.appendChild(aboutContainer);
  main.appendChild(ourProducts);
  //add all blocks

  return main;
};

const footerMainPage = function () {
  const footer = document.createElement('footer');
  const h5 = document.createElement('h5');
  const span = document.createElement('span');

  h5.classList.add('footer-title');

  h5.textContent = 'Copyright © ';
  span.textContent = 'github@solum-the-creator';

  h5.appendChild(span);

  footer.appendChild(h5);
  return footer;
};

export { headerHomePage, mainHomePage, footerMainPage };
