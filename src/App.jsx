import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "dayjs/locale/th";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale("th");
dayjs.extend(localizedFormat);
dayjs.extend(buddhistEra);

const SelfIntroduction = ({ name = "unknown", dateOfBirth, hobbies = [] }) => {
  return (
    <div>
      <h1>
        "My name is <span style={{ color: "tomato" }}>{name}</span>"
      </h1>
      {dateOfBirth ? (
        <h2>I was born in {dayjs(dateOfBirth).format("D MMM BBBB")}</h2>
      ) : null}
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
  const [data, setData] = useState({ name: undefined, dob: undefined }); //เก็บเป็น obj โดย udf name ไปก่อน
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [hobbies, setHobbies] = useState([""]);

  console.log(hobbies);

  return (
    <div className="App">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label htmlFor="dob">Date of Birth:</label>
      <input
        id="dob"
        type="date"
        value={dob}
        onChange={(event) => {
          setDob(event.target.value);
        }}
      />
      <div>
        {hobbies.map((item, index) => (
          //{/* พยายามอย่าใช้ keyเป็นindex -> bug */}
          <div key={index}>
            <label htmlFor={`hobby-${index}`}>Hobby {index + 1}:</label>
            <input
              //bug เพราะ id hobby เหมือนกัน
              // id="hobby"
              id={`hobby-${index}`}
              value={item}
              onChange={(event) => {
                const newValue = event.target.value;
                const newHobbies = hobbies.map((hobby, hobbyIndex) =>
                  hobbyIndex === index ? newValue : hobby
                );
                setHobbies(newHobbies);
              }}
            />
          </div>
        ))}
        <button
          onClick={() => {
            setHobbies([...hobbies, ""]);
          }}
        >
          Add another hobby
        </button>
      </div>
      <button
        onClick={() => {
          setData({ name, dob }); //remember value
          setName(""); //reset after click save button
          setDob("");
        }}
      >
        Save
      </button>

      <SelfIntroduction
        name={data.name}
        dateOfBirth={data.dob}
        hobbies={["Playing Golf", "Boardgames"]}
      />

      <Test>123</Test>
    </div>
  );
}

export default App;
