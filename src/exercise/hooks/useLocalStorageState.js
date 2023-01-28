import React from 'react'

export const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = React.useState(() => {
    const storedItem = window.localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : defaultValue;
  })

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const previousKey = prevKeyRef.current;
    if (previousKey !== key) {
      window.localStorage.removeItem(previousKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
