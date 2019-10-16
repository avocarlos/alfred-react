import {useState, useEffect, useContext} from 'react';
import StoreContext from '../context';
import { setLanguage } from '../reducer/actions';

import I18n, { Languages } from '../i18n';

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
  const [selectedLanguage, setSelectedLanguage] = useState();
  const {state, dispatch} = useContext(StoreContext);

  useEffect(() => {
    if (selectedLanguage && (state.language !== selectedLanguage)) {
      dispatch(setLanguage(selectedLanguage));
      localStorage.setItem('sessionLanguage', selectedLanguage);
    }
  }, [selectedLanguage, state.language, dispatch]);

  function t(key: string, args = {}) {
    return getValue(key, args, state.language || Languages.ES)
  };

  return {t, setSelectedLanguage};
}

export default useLanguage;