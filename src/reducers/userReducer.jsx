export const userInitialState = {
  name: "Felipe",
  idade: 26,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };

      break;
    case "CHANGE_AGE":
      return { ...state, idade: action.payload.idade };
      break;
  }

  return state;
};
