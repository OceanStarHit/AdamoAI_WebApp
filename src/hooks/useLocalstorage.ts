import React from 'react';

const useLocalStorageState = (defaultValue: null, key: string) => {
  const getStorage = () => {
    const localStorageValue = localStorage.getItem(key);
    if (localStorageValue) {
      try {
        return JSON.parse(localStorageValue);
      } catch (error) {
        removeStorage(key);
      }
    }
    return defaultValue;
  };

  const [value, setValue] = React.useState(getStorage());

  React.useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
};

const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

export { removeStorage, useLocalStorageState };
