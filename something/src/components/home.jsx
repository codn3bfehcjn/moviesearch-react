import React, { useState } from "react";
import FetchApi from "./fetchapi";
import Input from "./input";
import Posters from "./posters";

function Home() {
  const [name, setmoviename] = useState("");
  // state to store the movie data
  const [data, setdata] = useState({ title: "", year: "", imdbID: " " });
  let handleonclick = (movie) => {
    if (movie) {
      setdata({ title: movie.Title, year: movie.Year, imdbID: movie.imdbID });
    } else {
      setdata({ title: "", year: "" });
    }
  };

  return (
    <>
      <Input movie={setmoviename}></Input>
      <div>
        <div className="font-edu flex justify-center text-metal text-lg">
          {data.title && ( //conditional rendering if data does not come do not render it (truth and falsy values )
            <p>
              <strong>TITLE :- </strong> {data.title.toUpperCase()}
            </p>
          )}
        </div>
        <div className="font-edu flex justify-center text-metal text-lg ">
          {data.year && (
            <p>
              <strong>YEAR :- </strong> {data.year}
            </p>
          )}
        </div>
        <div className="font-edu flex justify-center text-metal text-lg">
          {data.imdbID && (
            <p>
              <strong>IMDB-ID :- </strong> {data.imdbID}
            </p>
          )}
        </div>
      </div>
      <FetchApi fn={handleonclick} moviename={name} />
      {data.imdbID && <Posters imdbid={data.imdbID}></Posters>}
    </>
  );
}

export default Home;
