import { useEffect, useState, } from "react";

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    // Retrive from localStorage
    const item = localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, [key]);

  const setValue = (value: T) => {
    // save to State
    setStoredValue(value);
    // Save to localStorate
  localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
