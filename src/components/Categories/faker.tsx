import faker from 'faker';

export const categories = [{
  id: '1',
  name: 'Emparedados',
  amount: 4,
  items: [{
    id: 1,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    thumbnail: `${faker.image.food()}?random=1`
  }, {
    id: 2,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    thumbnail: `${faker.image.food()}?random=2`
  }, {
    id: 3,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    thumbnail: `${faker.image.food()}?random=3`
  }, {
    id: 4,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    thumbnail: `${faker.image.food()}?random=4`
  }]
}, {
  id: '2',
  name: 'Ensaladas',
  amount: 7
}, {
  id: '3',
  name: 'Platos Fuertes',
  amount: 5
}, {
  id: '4',
  name: 'Postres',
  amount: 9
}, {
  id: '5',
  name: 'Bebidas',
  amount: 4
}, {
  id: '6',
  name: 'Servicios',
  amount: 2
}];

export const featured = [{
  id: 1,
  name: faker.commerce.productName(),
  category: categories[0],
  price: faker.commerce.price(),
  thumbnail: `${faker.image.food()}?random=1`
}, {
  id: 2,
  name: faker.commerce.productName(),
  category: categories[0],
  price: faker.commerce.price(),
  thumbnail: `${faker.image.food()}?random=2`
}, {
  id: 3,
  name: faker.commerce.productName(),
  category: categories[0],
  price: faker.commerce.price(),
  thumbnail: `${faker.image.food()}?random=3`
}, {
  id: 4,
  name: faker.commerce.productName(),
  category: categories[0],
  price: faker.commerce.price(),
  thumbnail: `${faker.image.food()}?random=4`
}];