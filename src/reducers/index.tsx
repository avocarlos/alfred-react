import { Languages } from '../i18n';

export enum ActionEnum {
  SET_LANGUAGE = 'SET_LANGUAGE'
}

type LanguageAction = {
  type: typeof ActionEnum.SET_LANGUAGE;
  payload: {
    language: Languages;
  };
}

export type Action = LanguageAction;

export interface State {
  language: Languages;
}

export const initialState = {
  language: Languages.ES
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default reducer;