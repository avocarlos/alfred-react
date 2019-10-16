import faker from 'faker';

export const categories = [{
  id: '1',
  name: 'Restaurant'
}, {
  id: '2',
  name: 'Cafe'
}, {
  id: '3',
  name: 'Postres'
}, {
  id: '4',
  name: 'Tienda de regalos'
}, {
  id: '5',
  name: 'Servicio al cuarto'
},  {
  id: '6',
  name: 'Promociones'
}];

export const featured = [{
  id: 1,
  name: faker.commerce.productName(),
  category: categories[0],
  price: Number(faker.commerce.price(0, 99)),
  thumbnail: `${faker.image.food()}?random=1`
}, {
  id: 2,
  name: faker.commerce.productName(),
  category: categories[0],
  price: Number(faker.commerce.price(0, 99)),
  thumbnail: `${faker.image.food()}?random=2`
}, {
  id: 3,
  name: faker.commerce.productName(),
  category: categories[0],
  price: Number(faker.commerce.price(0, 99)),
  thumbnail: `${faker.image.food()}?random=3`
}, {
  id: 4,
  name: faker.commerce.productName(),
  category: categories[0],
  price: Number(faker.commerce.price(0, 99)),
  thumbnail: `${faker.image.food()}?random=4`
}];

export const orders = [{
  id: 1,
  number: 1,
  status: 'Pending',
  items: [{
    id: 1,
    name: faker.commerce.productName(),
    quantity: 1,
    category: {
      id: 1,
      name: 'Emparedados'
    },
    price: Number(faker.commerce.price(0, 99)),
    thumbnail: `${faker.image.food()}?random=1`
  }, {
    id: 2,
    name: faker.commerce.productName(),
    quantity: 3,
    category: {
      id: 1,
      name: 'Emparedados'
    },
    price: Number(faker.commerce.price(0, 99)),
    thumbnail: `${faker.image.food()}?random=2`
  }]
}];