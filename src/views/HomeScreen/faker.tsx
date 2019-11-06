import faker from 'faker';
import promo1 from './images/promo1.png';
import promo2 from './images/promo2.jpg';
import promo3 from './images/promo3.jpeg';
import promo4 from './images/promo4.jpg';
import event1 from './images/event1.jpg';
import event2 from './images/event2.jpg';
import event3 from './images/event3.png';
import event4 from './images/event4.png';
import food1 from './images/food1.jpeg';
import food2 from './images/food2.jpeg';

export const categories = [{
  id: '1',
  name: 'restaurant'
}, {
  id: '2',
  name: 'coffee'
}, {
  id: '3',
  name: 'dessert'
}, {
  id: '4',
  name: 'gift'
}, {
  id: '5',
  name: 'room'
},  {
  id: '6',
  name: 'deals'
}];

export const featured = [{
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  category: categories[0],
  price: Number(faker.commerce.price(0, 99)),
  thumbnail: food1
}, {
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  category: categories[0],
  price: Number(faker.commerce.price(0, 99)),
  thumbnail: food2
}, {
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  category: categories[0],
  price: Number(faker.commerce.price(0, 99)),
  thumbnail: food1
}, {
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  category: categories[0],
  price: Number(faker.commerce.price(0, 99)),
  thumbnail: food2
}];

export const orders = [{
  id: faker.random.uuid(),
  number: 1,
  status: 'Pending',
  items: [{
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    quantity: 1,
    category: {
      id: faker.random.uuid(),
      name: 'Emparedados'
    },
    price: Number(faker.commerce.price(0, 99)),
    thumbnail: `${faker.image.food()}?random=1`
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    quantity: 3,
    category: {
      id: faker.random.uuid(),
      name: 'Emparedados'
    },
    price: Number(faker.commerce.price(0, 99)),
    thumbnail: `${faker.image.food()}?random=2`
  }]
}];

export const deals = [{
  title: 'Deal 1',
  image: promo1
}, {
  title: 'Deal 2',
  image: promo3
}, {
  title: 'Deal 3',
  image: promo2
}, {
  title: 'Deal 4',
  image: promo4
}];

export const events = [{
  title: 'Event 1',
  image: event1
}, {
  title: 'Event 2',
  image: event2
}, {
  title: 'Event 3',
  image: event3
}, {
  title: 'Event 4',
  image: event4
}];