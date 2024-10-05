import React, { useEffect, useState } from "react";

function posters({ imdbid }) {
  let [img, setimg] = useState([]);
  let url = `https://img.omdbapi.com/?apikey=1f803699&i=${imdbid}`;
  useEffect(() => {
   if (imdbid) {
    setimg(url)
   }
  }, [imdbid]);
  return (
    <>
     <img src={img} className="m-auto border-solid h-52 rounded"/>
    </>
  );
}

export default posters;
