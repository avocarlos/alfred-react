import { Action } from './actions';
import { State } from './types';

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
          number: orders.length + 1,
          items: [],
          totalItems: 0
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