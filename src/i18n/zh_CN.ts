export default {
  root: {
    order: {
      title: (args: {number: number}) => `订购 #${args.number}`,
      remove: '去掉',
      submit: '下订单'
    },
    room: (args: {number: number}) =>  `房间 #${args.number}`,
    summary: {
      item: '食品项目',
      price: '价钱',
      total: '总',
      subtotal: '小计',
      tax: '税金'
    },
    dialog: {
      confirmation: {
        title: (args: {number: number}) =>  `确认订单 #${args.number}`,
        submit: '确认',
        cancel: '取消'
      },
      summary: {
        title: (args: {number: number}) =>  `摘要 #${args.number}`,
        close: '关'
      }
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
      title: '促销活动',
      subtitle: '利用我们为您提供的这些优惠'
    },
    events: {
      title: '大事记',
      subtitle: '这些是本周的活动'
    },
    featured: {
      title: '推荐的',
      subtitle: '主厨的建议'
    }
  }
};