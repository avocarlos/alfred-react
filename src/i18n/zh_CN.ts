export default {
  root: {
    order: {
      title: (args: {number: number}) => `订购 #${args.number}`,
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
  categories: {
    orders: {
      title: '有效订单',
      order: (args: {number: number}) => `订购 #${args.number}`
    },
    featured: {
      title: '推荐的'
    },
    categories: {
      title: '分类',
      products: (args: {count: number}) => `产品展示 (${args.count})`
    }
  }
};