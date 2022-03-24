import React, { useContext } from "react";
import { Context } from "../contexts/Context";

const SignUp = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      <h2>Tela SignUp</h2>
      <p>
        {state.user.name} que tem a idade {state.user.idade} anos
      </p>
    </div>
  );
};

export default SignUp;
