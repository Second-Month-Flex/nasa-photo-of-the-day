import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import img from "./Rocket.png";

const Main = styled.div`
  width: 100%;
  background-image: url(${img});
  background-size: cover;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin: 0 auto;
  color: White;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Image = styled.img`
  height: 500px;
  width: 75%;
  margin: 0 auto;
  border: 10px solid white;
`;

const H3 = styled.h3`
  color: White;
`;

const P = styled.p`
  color: White;
  font-size: 1.5rem;
`;

function Nasa() {
  const [data, setData] = useState([]);
  const [day, setDay] = useState(``);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Uqb7Xj3AUngMG9kUuUIM5iNlQ1wcvsXPEfuzrA6b&date=${day}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [day]);

  function change(event) {
    setDay(event.target.value);
  }

  // function onSubmit(event) {
  //   event.preventDefault();
  //   setDay(input.target.value);
  // }
  return (
    <Main>
      <Div>
        <Title> Nasa Photo of the day : {data.title}</Title>
        <Image src={data.hdurl} alt="Nasa photo of the day"></Image>
      </Div>
      <form>
        <input type="date" onChange={change} />
      </form>
      <H3>Current Date and Format: {data.date} </H3>
      <P>Explanation: {data.explanation} </P>
    </Main>
  );
}

export default Nasa;
