import { Languages } from '../i18n';

interface Item {
  id: string;
  name: string;
  quantity: number;
  price: number;
  thumbnail: string;
}

export interface Order {
  number: number;
  items:  Item[];
  totalItems: number;
}

export interface SubmittedOrder extends Order {
  id: string;
  status: string;
}

export interface State {
  language: Languages;
  orders: SubmittedOrder[];
  order: Order;
}