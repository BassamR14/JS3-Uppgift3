import { useState } from "react";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const [people, setPeople] = useState([
    {
      firstName: "Emma",
      lastName: "Johnson",
      age: 28,
      hobby: "Painting",
    },
    {
      firstName: "Liam",
      lastName: "Smith",
      age: 34,
      hobby: "Cycling",
    },
    {
      firstName: "Olivia",
      lastName: "Brown",
      age: 22,
      hobby: "Photography",
    },
    {
      firstName: "Noah",
      lastName: "Davis",
      age: 41,
      hobby: "Chess",
    },
    {
      firstName: "Ava",
      lastName: "Wilson",
      age: 30,
      hobby: "Cooking",
    },
  ]);

  return (
    <>
      <div className="App">
        <h1>List of People</h1>
        {people.map((person, i) => (
          <Profile key={i} data={person} />
        ))}
      </div>
    </>
  );
}

export default App;
