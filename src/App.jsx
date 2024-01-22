import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const SelfIntroduction = ({ name = "unknown", dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>
        "My name is <span style={{ color: "tomato" }}>{name}</span>"
      </h1>
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

const Test = ({ children }) => {
  return <h2>{children}</h2>;
};

function App() {
  const [data, setData] = useState({name: undefined}) //เก็บเป็น obj โดย udf name ไปก่อน
  const [name, setName] = useState("");

  return (
    <div className="App">
      {/* create an Input */}
      {/* rerender ทุกๆครั้งที่พิมพ์ milli sec */}
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setData({ name }) //remember value
          setName(""); //reset after click save button
        }}
      >
        Save
      </button>

      <SelfIntroduction
        // name = {name ? name : undefined} //real-time (before use save button)
        name={data.name}
        dateOfBirth="22 Sep 1994"
        hobbies={["Playing Golf", "Boardgames"]}
      />

      <Test>123</Test>
    </div>
  );
}

export default App;
