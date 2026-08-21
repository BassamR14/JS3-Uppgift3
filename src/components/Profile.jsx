import { useState } from "react";

function Profile({ data }) {
  const { firstName, lastName, age, hobby } = data;
  const [show, setShow] = useState(false);

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
          }}
        >
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}

export default Profile;
