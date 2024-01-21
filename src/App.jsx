import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


const SelfIntroduction = ({ name = "unknown", dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>"My name is {name}."</h1>
      {dateOfBirth ? <h2>I was born in {dateOfBirth}</h2> : null}
      {hobbies.length > 0 ? (
        <div>
          <h2>My hobbies are: </h2>
          {hobbies.map((item, index) => (
            <div key={item}>
              {index + 1}. {item}
            </div>
          ))}
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
        name=""
      />

      <Test>
        123
      </Test>
    </div>
  );
}

export default App;
