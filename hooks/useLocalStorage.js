import { useState } from "react";
const PROJECT_NAME = "Digital-Tech";

function today() {
  return new Date().toJSON().slice(0, 10);
}

function currentKey(key) {
  return `${PROJECT_NAME}:${today()}:${key}`;
}

function getStorageValue(key) {
  if (typeof window !== "undefined") {
    const savedCollection = localStorage.getItem(currentKey(key))
      ? JSON.parse(localStorage.getItem(currentKey(key)))
      : [];
    return savedCollection;
  }
}

export const useLocalStorage = (key) => {
  const [arrayCollection, setValue] = useState(() => {
    return getStorageValue(key);
  });

  const updateLocalStorage = (obj) => {
    setValue((v) => {
      v = [...v, obj];
      return localStorage.setItem(currentKey(key), JSON.stringify(v));
    });
  };

  const setLocalStorage = (obj) =>{
    setValue((v) => {
      v = [obj];
      return localStorage.setItem(currentKey(key), JSON.stringify(v));
    });
  }


  return [arrayCollection, setLocalStorage, updateLocalStorage ];
};
