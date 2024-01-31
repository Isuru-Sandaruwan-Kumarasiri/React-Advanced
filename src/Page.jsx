import React, { useState } from "react";

function Page() {
 

  const [state, setState] = useState({
    name: "isuru",
    reg_number: "23",
    city: "ratnapura",
  });

  const handleClick = () => {
    setState({
      ...state,
      name: "Thilini",
    });
  };
  console.log(state);

  return (
    <>
      <div>{state.name}</div>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default Page;
