import React, { Dispatch } from 'react';
import { State, Action } from '../reducers';

export interface Context {
  state: Partial<State>;
  dispatch: Dispatch<Action>;
}

const initialContext = {
  state: {},
  dispatch: () => 0
}

const StoreContext = React.createContext<Context>(initialContext);

export default StoreContext;