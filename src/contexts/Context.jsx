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
