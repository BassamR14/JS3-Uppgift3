import { useState } from "react";

function AddPerson({ handleFunction }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");

  function addFirstName(e) {
    setFirstName(e.target.value);
  }

  function addLastName(e) {
    setLastName(e.target.value);
  }

  function addAge(e) {
    //make the value a number so the +1 button works with it, otherwise the value is a string
    setAge(Number(e.target.value));
  }

  function addHobby(e) {
    setHobby(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={addFirstName}
      />
      <br />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={addLastName}
      />
      <br />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={addAge}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Hobby"
        value={hobby}
        onChange={addHobby}
      />{" "}
      <br />
      {/* handlefunction is a callback function, it needs the values/varialbles
      that will be saved. Then setfunction("") to clear the input fields */}
      <button
        onClick={() => {
          handleFunction(firstName, lastName, age, hobby);
          setFirstName("");
          setLastName("");
          setAge("");
          setHobby("");
        }}>
        Add Person
      </button>
    </>
  );
}

export default AddPerson;
