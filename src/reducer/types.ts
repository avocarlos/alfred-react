interface Item {
  id: string;
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