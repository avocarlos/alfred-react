import { Languages } from '../i18n';
import { State } from './types';

export const initialState: State = {
  language: Languages.ES,
  orders: [],
  order: {
    number: 1,
    items: [],
    totalItems: 0
  }
}