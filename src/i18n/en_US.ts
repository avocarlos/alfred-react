export default {
  root: {
    order: {
      title: (args: {number: number}) => `Order #${args.number}`,
      remove: 'Remove',
      submit: 'Place order'
    },
    orders: {
      title: 'Placed Orders',
      order: {
        title: (args: {number: number}) => `Order #${args.number}`,
        cancel: 'Cancel'
      }
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
    },
    orderStatuses: {
      submitted: 'Submitted',
      preparing: 'Cooking',
      completed: 'Completed',
      delivered: 'Delivered',
      cancelled: 'Cancelled'
    }
  },
  home: {
    categories: {
      restaurant: 'Restaurant',
      coffee: 'Cafe',
      dessert: 'Postres',
      shop: 'Tienda de regalos',
      roomService: 'Servicio al cuarto',
      promociones: 'Promociones'
    },
    deals: {
      title: 'Deals',
      subtitle: 'Take advantage of these great offers'
    },
    events: {
      title: 'Events',
      subtitle: 'These are the events of this week'
    },
    featured: {
      title: 'We recommend',
      subtitle: 'Suggestions from our chef'
    }
  }
};