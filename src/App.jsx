// (in terminal) yarn add prop-types -D
import PropTypes from "prop-types";

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
        //{/* อยากได้ JSX (no string) -> use .map() instead of .join() */}
        <div>
          {/* <h2>My hobbies are: {hobbies.join(", ")}</h2> */}
          <h2>My hobbies are: </h2>
          {hobbies.map((item, index) => (
            //{/* Must have KEY!!! */}
            <div key={item}>
              {index + 1}. {item}
            </div>
          ))}
          {/* {hobbies.map()} */}
        </div>
      ) : null}
    </div>
  );
};
SelfIntroduction.propTypes = {
  name: PropTypes.string.isRequired,
};

const Test = ({ children }) => {
  return <h2>{children}</h2>;
};

function App() {
  return (
    <div className="App">
      <SelfIntroduction
        name="BEAM"
        dateOfBirth="22 Sep 1994"
        hobbies={["test", "Eat"]}
      />

      <Test>
        <div>test2</div>
        {/* 123 -> string not number */}
        123
      </Test>
    </div>
  );
}

export default App;
