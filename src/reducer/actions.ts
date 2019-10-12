import { Languages } from '../i18n';
import { Order } from './index';

enum ActionEnum {
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

export const setLanguage = (language: Languages): LanguageAction => ({type: ActionEnum.SET_LANGUAGE, payload: {language}});
export const setOrder = (order: Order): OrderAction => ({type: ActionEnum.SET_ORDER, payload: {order}});
export const setOrders = (orders: Order[]): OrdersAction => ({type: ActionEnum.SET_ORDERS, payload: {orders}});