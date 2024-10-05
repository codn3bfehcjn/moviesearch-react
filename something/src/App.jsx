import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return {
    /*
In the initial phase, rendering FetchApi in both Input and Home caused multiple unnecessary API calls and redundant responsibilities. The Input component was handling both user input and fetching data, which made the code less efficient and harder to manage.

The correct approach is to separate concerns: let Input handle user input and pass the movie name to Home, where FetchApi is responsible for making the API call. This centralizes the logic, reduces redundant API requests, and simplifies state management.*/
  };
}

export default App;
