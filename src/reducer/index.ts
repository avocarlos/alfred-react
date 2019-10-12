import { Languages } from '../i18n';
import { Action } from './actions';

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
      return {...state, ...action.payload};
    case 'SET_ORDERS':
      const {payload: {orders}} = action;
      
      return {
        ...state,
        orders,
        order: {
          ...state.order,
          number: orders.length + 1
        }
      };
    case 'SET_ORDER':
      const {payload: {order}} = action;

      return {
        ...state, 
        order: {
          ...order,
          totalItems: order.items.reduce((acc, item) => acc += item.quantity, 0)
        }
      };
    default:
      return state;
  }
}

export default reducer;