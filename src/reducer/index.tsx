import { Languages } from '../i18n';

interface Item {
  id?: string;
  name: string;
  quantity: number;
  price: number;
  thumbnail: string;
}

export interface Order {
  id?: string;
  number: number;
  status?: string;
  items:  Item[];
  totalItems: number;
}

export enum ActionEnum {
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_ORDER = 'SET_ORDER',
  SET_ORDERS = 'SET_ORDERS'
}

type LanguageAction = {
  type: typeof ActionEnum.SET_LANGUAGE;
  payload: {
    language: Languages;
  };
}

type OrderAction = {
  type: typeof ActionEnum.SET_ORDER;
  payload: {
    order: Order;
  };
}

type OrdersAction = {
  type: typeof ActionEnum.SET_ORDERS;
  payload: {
    orders: Order[];
  };
}

export type Action = LanguageAction | OrderAction | OrdersAction;


export interface State {
  language: Languages;
  orders: Order[];
  order: Order;
}

export const initialState = {
  language: Languages.ES,
  orders: [],
  order: {
    number: 1,
    items: [],
    totalItems: 0
  }
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return Object.assign({}, state, action.payload);
    case 'SET_ORDERS':
      const {payload: {orders}} = action;
      
      return Object.assign({}, state, {
        orders: orders,
        order: Object.assign({}, state.order, {
          number: orders.length + 1
        })
      });
    case 'SET_ORDER':
      const {payload: {order}} = action;

      return Object.assign({}, state, {
        order: Object.assign(order, {
          totalItems: order.items.reduce((acc, item) => acc += item.quantity, 0)
        })
      });
    default:
      return state;
  }
}

export default reducer;