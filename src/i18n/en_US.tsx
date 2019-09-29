export default {
  root: {
    language: {
      en: 'English',
      es: 'Spanish'
    },
    order: {
      title: (args: {number: number}) => `Order #${args.number}`,
      submit: 'Place order'
    },
    room: (args: {number: number}) =>  `Room #${args.number}`,
    summary: {
      item: 'Item',
      price: 'Price',
      total: 'Total',
      subtotal: 'Subtotal',
      tax: 'ITBMS'
    },
    dialog: {
      confirmation: {
        title: (args: {number: number}) =>  `Confirm Order #${args.number}`,
        submit: 'Confirm',
        cancel: 'Cancel'
      },
      summary: {
        title: (args: {number: number}) =>  `Summary Order #${args.number}`,
        close: 'Close'
      }
    }
  },
  categories: {
    orders: {
      title: 'Active Orders',
      order: (args: {number: number}) => `Order #${args.number}`
    },
    featured: {
      title: 'Featured'
    },
    categories: {
      title: 'Categories',
      products: (args: {count: number}) => `Products (${args.count})`
    }
  }
};