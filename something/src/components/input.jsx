import React, { useState } from "react";

function Input({ movie }) {
  const [name, setname] = useState("");

  let handlechange = (e) => {
    let i = e.target.value;
    setname(i);
    if (i === "") {
      movie(null);  // dont pass empty string will not clear the movie info field
    }
  };

  let handlekey = (e) => {
    if (e.code == "Enter") {
      movie(name);
    }
  };
  let handleonclick = () => {
    movie(name);
  };

  return (
    <>
      <div className="font-edu font-bold text-white flex justify-center flex-wrap m-6">
        <input
          type="search"
          placeholder="Search for a movie"
          className="bg-gray-700 text-white rounded p-2 text-center w-96 max-[732px]:w-72 "
          value={name}
          onChange={handlechange}
          onKeyUp={handlekey}
        />
        <button
          onClick={handleonclick}
          className="bg-amber rounded p-2 max-[425px]:hidden"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Input;
