import React, { Dispatch } from 'react';
import { State, Action, initialState } from '../reducer';

export interface Context {
  state: State;
  dispatch: Dispatch<Action>;
}

const initialContext = {
  state: initialState,
  dispatch: () => 0
}

const StoreContext = React.createContext<Context>(initialContext);

export default StoreContext;