import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => {
        const json = response.json();
        if (response.ok) {
          return json;
        }
        return json.then((data) => Promise.reject(data));
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>Retrieving Data From Backend</h1>
      <div>{loading ? <p>Loading...</p> : <p>{JSON.stringify(data)}</p>}</div>
    </div>
  );
};

export default App;
