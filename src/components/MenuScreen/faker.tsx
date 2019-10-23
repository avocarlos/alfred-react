import faker from 'faker';
import food1 from '../HomeScreen/images/food1.jpeg';
import food2 from '../HomeScreen/images/food2.jpeg';

export const menuCategories = [{
  id: faker.random.uuid(),
  name: 'Entradas',
  items: [{
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productAdjective(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food1
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food2
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food1
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food2
  }]
}, {
  id: faker.random.uuid(),
  name: 'Bowls',
  items: [{
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productAdjective(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food1
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food2
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food1
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food2
  }]
}, {
  id: faker.random.uuid(),
  name: 'Emparedados',
  items: [{
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productAdjective(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food1
  }, {
    id: '5',
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food2
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food1
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food2
  }]
}, {
  id: faker.random.uuid(),
  name: 'Hamburguesas',
  items: [{
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productAdjective(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food1
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food2
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food1
  }, {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price(0, 20)),
    thumbnail: food2
  }]
}];