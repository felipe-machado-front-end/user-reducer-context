import React, { useContext } from "react";
import { Context } from "../contexts/Context";

const SignUp = () => {
  const { state, dispatch } = useContext(Context);
  const handleChangeName = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: "João",
      },
    });
  };
  return (
    <div>
      <h2>Tela SignUp</h2>
      <p>
        {state.user.name} que tem a idade {state.user.idade} anos
      </p>
      <button onClick={handleChangeName}>Trocar nome para João</button>
    </div>
  );
};

export default SignUp;
