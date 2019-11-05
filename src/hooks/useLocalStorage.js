import { useState } from 'react';
import ls from 'local-storage';




export const useLocalStorage = (key, initialValue) => {

    const[storedValue, setStoredValue] = useState(() => {

        const item = ls.get(key);
        return item !== undefined ? item : initialValue;
    });

    const setValue = value => {
        // Save state
        setStoredValue(value);
        // Save to local storage
        ls.set(key, value);
      };

    return [storedValue, setValue];
};