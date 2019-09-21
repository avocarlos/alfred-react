import faker from 'faker';

export const order = {
  id: 1,
  number: 1,
  items: [{
    id: 1,
    name: faker.commerce.productName(),
    quantity: 1,
    category: {
      id: 1,
      name: 'Emparedados'
    },
    price: faker.commerce.price(),
    thumbnail: `${faker.image.food()}?random=1`
  }, {
    id: 2,
    name: faker.commerce.productName(),
    quantity: 3,
    category: {
      id: 1,
      name: 'Emparedados'
    },
    price: faker.commerce.price(),
    thumbnail: `${faker.image.food()}?random=2`
  }]
};