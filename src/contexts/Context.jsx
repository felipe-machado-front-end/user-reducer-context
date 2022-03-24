import React, { createContext } from "react";

import { userInitialState, userReducer } from "../reducers/userReducer";

const initialState = {
  user: userInitialState,
};

export const Context = createContext({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ user }, action) => ({
  user: userReducer(user, action),
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
