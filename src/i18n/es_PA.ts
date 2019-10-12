export default {
  root: {
    order: {
      title: (args: {number: number}) => `Orden #${args.number}`,
      submit: 'Realizar pedido'
    },
    room: (args: {number: number}) =>  `Habitación #${args.number}`,
    summary: {
      item: 'Pedido',
      price: 'Precio',
      total: 'Total',
      subtotal: 'Subtotal',
      tax: 'ITBMS'
    },
    dialog: {
      confirmation: {
        title: (args: {number: number}) =>  `Confirmar Orden #${args.number}`,
        submit: 'Confirmar',
        cancel: 'Cancelar'
      },
      summary: {
        title: (args: {number: number}) =>  `Resumen Orden #${args.number}`,
        close: 'Cerrar'
      }
    }
  },
  categories: {
    orders: {
      title: 'Ordenes Activas',
      order: (args: {number: number}) => `Orden #${args.number}`
    },
    featured: {
      title: 'Recomendados'
    },
    categories: {
      title: 'Categorias',
      products: (args: {count: number}) => `Productos (${args.count})`
    }
  }
};