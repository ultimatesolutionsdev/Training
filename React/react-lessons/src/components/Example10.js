"use client";

import { useState } from "react";

function LoginButton({ onClickButton }) {
  return (
    <div>
      <button onClick={onClickButton}>Login Button</button>
    </div>
  );
}

function UsernameInput({ value, onChangeName }) {
  return (
    <div>
      <input onChange={(e) => onChangeName(e.target.value)} />
    </div>
  );
}

//Example10: Passing a Function as a Prop
function Parent() {
  const [username, setUsername] = useState();
  return (
    <div>
      <UsernameInput
        value={username}
        onChangeName={(changedName) => setUsername(changedName)}
      />
      <LoginButton onClick={() => alert("Clicked Login Button.")} />
    </div>
  );
}

export default Parent;
