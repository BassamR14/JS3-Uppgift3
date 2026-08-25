import { useState } from "react";

function Profile({ data, index, handleRemove }) {
  const { firstName, lastName, hobby } = data;
  const [show, setShow] = useState(false);
  //age needs to be re-rendered after it changes so it must have a state
  const [age, setAge] = useState(data.age);

  function addOne() {
    //use setter to change age
    setAge(age + 1);
  }

  function removePerson() {
    // cant access setpeople from child Component, use callback function
    handleRemove(index);
  }

  return (
    <>
      <div className="person-div">
        <h2>
          {firstName} {show ? lastName : ""}
        </h2>
        {/* The two p tags need to be wrapped inside something */}
        {show && (
          <>
            {" "}
            <p>Age: {age}</p>
            <p>Hobby: {hobby}</p>{" "}
          </>
        )}
        <button
          onClick={() => {
            setShow(!show);
          }}>
          {show ? "Show Less" : "Show More"}
        </button>
        <br />
        <button onClick={addOne}>+1</button> <br />
        <button onClick={removePerson}>Delete</button>
      </div>
    </>
  );
}

export default Profile;
