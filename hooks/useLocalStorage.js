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




// import { useState } from "react"

// const useLocalStorage = (key, initialValue) => {
//   const [state, setState] = useState(() => {
//     // Initialize the state
//     try {
//       const value = window.localStorage.getItem(key)
//       // Check if the local storage already has any values,
//       // otherwise initialize it with the passed initialValue
//       return value ? JSON.parse(value) : initialValue
//     } catch (error) {
//       console.log(error)
//     }
//   })

//   const setValue = value => {
//     try {
//       // If the passed value is a callback function,
//       //  then call it with the existing state.
//       const valueToStore = value instanceof Function ? value(state) : value
//       window.localStorage.setItem(key, JSON.stringify(valueToStore))
//       setState(value)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return [state, setValue]
// }

// export default useLocalStorage
