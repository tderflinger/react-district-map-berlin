import React, { useState } from "react";
import BerlinMap from "./components/BerlinMap/BerlinMap";
import styled from "@emotion/styled";

function App() {
  const [borough, setBorough] = useState("");

  const handleBorough = (name) => {
    setBorough(name);
  };

  return (
    <>
      <Container>
        <h1>Berliner Bezirke</h1>
        <BerlinMap callback={handleBorough} />
        <h1>{borough}</h1>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 800px;
`;

export default App;
