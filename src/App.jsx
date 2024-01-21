import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// props is an immutable obj
//---------------------------------------------------
// const SelfIntroduction = (props) => {
//   return <h1>"My name is {props.name}."</h1>;
// };
//default -> use when undefied only
const SelfIntroduction = ({ name = "unknown", dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>"My name is {name}."</h1>
      {/* <h2>I was born in {dateOfBirth}</h2> */}

      {/* write a short-if */}
      {dateOfBirth ? <h2>I was born in {dateOfBirth}</h2> : null}
      {/* --------------------- */}
      {hobbies.length > 0 ? (
        <h2>My hobbies are: {hobbies.join(", ")}</h2>
      ) : null}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <SelfIntroduction name="BEAM" dateOfBirth="22 Sep 1994" hobbies = {['test']} />
    </div>
  );
}

export default App;
