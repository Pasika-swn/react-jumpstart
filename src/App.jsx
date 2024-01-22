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
  const [name, setName] = useState("");

  return (
    <div className="App">
      {/*create label+input -> button  */}
      {/* [New] Rerender = เชื่อม state เข้าไปที่ UI */}
      <label htmlFor="name">Name:</label>
      <input
        id="name"

        // ส่งค่า state เข้า input ผ่าน value={name}
        value={name}

        //[นี่คือการดึงค่า จำ]:onChangeเพื่อให้พิมพ์เปลี่ยนแปลงได้ ->trigger event เมื่อกดอักษร
        onChange={(event) => {
          // save for reuse
          setName(event.target.value);
        }}
      />
      <button>Save</button>
      {/* --------------------- */}

      <SelfIntroduction
        name="BEAM"
        dateOfBirth="22 Sep 1994"
        hobbies={["Playing Golf", "Boardgames"]}
      />

      <Test>123</Test>
    </div>
  );
}

export default App;
