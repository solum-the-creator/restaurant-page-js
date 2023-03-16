import createAllCards from "./cards-module";

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

const productsPage = function() {
    const main = document.createElement('main');
    const products = document.createElement('div');
    const h3 = document.createElement('h3');
    const cards = createAllCards(cardsInfo);
    products.classList.add('related-products');

    h3.textContent = 'Related products';

    products.appendChild(h3);
    products.appendChild(cards);
    main.appendChild(products);

    return main;
}

export default productsPage;