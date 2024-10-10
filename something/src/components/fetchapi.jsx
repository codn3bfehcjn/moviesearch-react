import React, { useCallback, useEffect, useState } from "react";

function FetchApi({ moviename, fn }) {
  useEffect(() => {
    async function apifn() {
      let url = `http://www.omdbapi.com/?s=${moviename}&apikey=1f803699`;
      try {
        let response = await fetch(url);
        let data = await response.json();
        if (typeof fn == "function") {
          //typeof returns a string
          fn(data.Search[0]); // Pass the first movie data to Home that is relevant data
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (moviename) {
      apifn();
    } else {
      fn(null); // if moviename is empty pass null to the home component so the info we get got cleared
    }
  }, [moviename]);
}
//   else{
//     fn(null)  // if moviename is empty pass null to the home component so the info part is cleared automatically no need to refresh page
//   }
// }, [moviename]); // dependency on fn will call api infinitely. because setdata is called everytime the data is send by fn causing home to re-render also fn is also reinitialised on ecah re render

export default FetchApi;
