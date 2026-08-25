import { useState } from "react";
import Profile from "./components/Profile";
import AddPerson from "./components/AddPerson";
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

  function handleAddPerson(firstName, lastName, age, hobby) {
    const newPerson = {
      firstName,
      lastName,
      age,
      hobby,
    };

    //Can't mutate state, so use a copy
    setPeople((people) => [...people, newPerson]);
  }

  function handleRemovePerson(index) {
    setPeople((people) => people.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="App">
        {/* send handleaddperson as a callback */}
        <AddPerson handleFunction={handleAddPerson} />
        <h1>List of People</h1>
        {people.map((person, i) => (
          <Profile
            key={i}
            data={person}
            index={i}
            handleRemove={handleRemovePerson}
          />
        ))}
      </div>
    </>
  );
}

export default App;
