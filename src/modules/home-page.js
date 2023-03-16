import createAllCards from "./cards-module";

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
  logoImg.src = '../src/assets/images/Logo.svg';
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
  menuLinkAnchor.textContent = 'Products';
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
  image1.src = '../src/assets/images/backgrounds/Vegan-Food.png';
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
  image2.src = '../src/assets/images/backgrounds/Mailbox-Quality.png';
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

const cardsInfo = [
    {
      category: 'Vegetable',
      imgSrc: '../src/assets/images/products/broccoli.png',
      title: 'Calabrese Broccoli',
      price: '$15.00',
    },
    {
      category: 'Vegetable',
      imgSrc: '../src/assets/images/products/tomatos.png',
      title: 'Vegan Red Tomato',
      price: '$17.00',
    },
    {
      category: 'Millets',
      imgSrc: '../src/assets/images/products/nuts.png',
      title: 'White Nuts',
      price: '$14.00',
    },
    {
      category: 'Fresh',
      imgSrc: '../src/assets/images/products/bananas.png',
      title: 'Fresh Banana Fruites',
      price: '$12.00',
    },
    {
      category: 'Vegetable',
      imgSrc: '../src/assets/images/products/broccoli.png',
      title: 'Calabrese Broccoli',
      price: '$15.00',
    },
    {
      category: 'Fresh',
      imgSrc: '../src/assets/images/products/bananas.png',
      title: 'Fresh Banana Fruites',
      price: '$12.00',
    },
    {
      category: 'Millets',
      imgSrc: '../src/assets/images/products/nuts.png',
      title: 'White Nuts',
      price: '$14.00',
    },
    {
      category: 'Vegetable',
      imgSrc: '../src/assets/images/products/tomatos.png',
      title: 'Vegan Red Tomato',
      price: '$17.00',
    },
  ];

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
