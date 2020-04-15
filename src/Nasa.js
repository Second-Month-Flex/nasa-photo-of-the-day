import React, { useState, useEffect } from "react";
import axios from "axios";

function Nasa() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Uqb7Xj3AUngMG9kUuUIM5iNlQ1wcvsXPEfuzrA6b`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>
        <img src={data.hdurl} alt="Nasa photo of the day"></img>
      </div>
      <h2> {data.title}</h2>
      <h3>{data.date} </h3>
      <p>{data.explanation} </p>
    </div>
  );
}

export default Nasa;
