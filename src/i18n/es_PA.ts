export default {
  root: {
    order: {
      title: (args: {number: number}) => `Orden #${args.number}`,
      remove: 'Remover',
      submit: 'Realizar pedido'
    },
    orders: {
      title: 'Ordenes realizadas',
      order: {
        title: (args: {number: number}) => `Orden #${args.number}`,
        cancel: 'Cancelar'
      }
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
    },
    orderStatuses: {
      submitted: 'Enviada',
      preparing: 'Cocinando',
      completed: 'Completado',
      delivered: 'Entregado',
      cancelled: 'Cancelada'
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
      title: 'Promociones',
      subtitle: 'Aprovecha estas grandes ofertas que tenemos para ti'
    },
    events: {
      title: 'Eventos',
      subtitle: 'Estos son los eventos de esta semana'
    },
    featured: {
      title: 'Recomendamos',
      subtitle: 'Sugerencias de nuestro chef'
    }
  }
};