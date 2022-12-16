import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};
// managing outside so every component gets the same data

export const useStore = () => {
  const setState = useState(globalState)[1]; //since only concered with the setter function (not worried with the state snapshot)

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};
