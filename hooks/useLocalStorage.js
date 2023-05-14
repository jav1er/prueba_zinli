import { useState, useEffect } from "react";
const PROJECT_NAME = "zinli";

function today() {
  return new Date().toJSON().slice(0, 10);
}

function currentKey(key) {
  return `${PROJECT_NAME}:${today()}:${key}`;
}

function getStorageValue(key) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(currentKey(key))
      ? JSON.parse(localStorage.getItem(currentKey(key)))
      : [];
    return saved;
  }
}

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key);
  });

  const setLocalStorage = (obj) => {
    setValue((v) => {
      v = [...v, obj];
      return localStorage.setItem(currentKey(key), JSON.stringify(v));
    });
  };

  //   const delete_id = (key, value) => {
  //     DB = DB.filter((x) => x[key] != value);
  //     window.localStorage.setItem(currentKey(), JSON.stringify(DB));
  //   };

  return [value, setLocalStorage];
};
