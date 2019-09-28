import faker from 'faker';

export const category = {
  id: '1',
  name: 'Emparedados',
  items: [{
    id: 1,
    name: faker.commerce.productName(),
    description: faker.commerce.productAdjective(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: `${faker.image.food()}?random=1`
  }, {
    id: 2,
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: `${faker.image.food()}?random=2`
  }, {
    id: 3,
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: `${faker.image.food()}?random=3`
  }, {
    id: 4,
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: `${faker.image.food()}?random=4`
  }]
};