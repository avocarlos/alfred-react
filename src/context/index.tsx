import React, { Dispatch, useContext } from 'react';
import { State } from '../reducer/types';
import { initialState } from '../reducer/initialState';
import { Action } from '../reducer/actions';

export interface Context {
  state: State;
  dispatch: Dispatch<Action>;
}

const initialContext = {
  state: initialState,
  dispatch: () => 0
}

const StoreContext = React.createContext<Context>(initialContext);

export const useStore = (): Context => useContext(StoreContext);

export default StoreContext;