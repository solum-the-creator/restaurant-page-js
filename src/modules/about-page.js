export const aboutContainerHomePage = function () {
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


  const aboutPage = function() {
    const main = document.createElement('main');
    const headerMain = document.createElement('div');
    const h2 = document.createElement('h2');
    const aboutContainer = aboutContainerHomePage();

    headerMain.classList.add('header-main');

    h2.textContent = 'About Us';

    headerMain.appendChild(h2);

    main.appendChild(headerMain);
    main.appendChild(aboutContainer);

    return main;
  }

export default aboutPage;