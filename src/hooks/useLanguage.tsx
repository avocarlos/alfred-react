import {useState, useEffect, useContext} from 'react';
import StoreContext from '../context';
import { ActionEnum as ReducerAction } from '../reducers';

import I18n, { Languages } from '../i18n';

const { SET_LANGUAGE } = ReducerAction;

function getValue(keys: string, args = {}, language: Languages): string {
  const splittedKeys = keys.split('.');
  // @ts-ignore
  return splittedKeys.reduce((acc, key) => {
    // @ts-ignore
    if (typeof acc[key] === 'function' && args) {
      // @ts-ignore
      return acc[key](args);
    }
    // @ts-ignore
    return acc[key];
  }, I18n[language])
}


const useLanguage =  () => {
  const [language, setLanguage] = useState();
  const {state, dispatch} = useContext(StoreContext);

  useEffect(() => {
    if (language && (state.language !== language)) {
      dispatch({type: SET_LANGUAGE, payload: {language}});
      localStorage.setItem('sessionLanguage', language);
    }
  }, [language, state.language, dispatch]);

  function t(key: string, args = {}) {
    return getValue(key, args, state.language || 'es' as Languages)
  };

  return {t, setLanguage};
}

export default useLanguage;