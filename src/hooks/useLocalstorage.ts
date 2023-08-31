import React from 'react';

const useLocalStorageState = (defaultValue: null, key: string) => {
  const getStorage = () => {
    const localStorageValue = localStorage.getItem(key);
    if (localStorageValue) {
      try {
        return JSON.parse(localStorageValue);
      } catch (error) {
        removeStorage();
      }
    }
    return defaultValue;
  };

  const [value, setValue] = React.useState(getStorage());

  const removeStorage = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  React.useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue, removeStorage];
};

export { useLocalStorageState };
