import React from "react";
import styled from "styled-components";
import Button from "./Components/Button";

const MainWrapper = styled.section`
    width: 100%
    max-width: 1200px;
    margin: 0 auto;
   
`;
function App() {
  return (
    <MainWrapper>
      <Button primary>Primary</Button>
      <Button>Primary</Button>
    </MainWrapper>
  );
}
export default App;
