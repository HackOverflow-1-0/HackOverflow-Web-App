import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import HorizontalScroll from "./horizontal-scroll";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
`;

const SampleCards = React.memo(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);

const Horizontal = () => (
  <>
    <GlobalStyle />
    <Main>
      <BumperSection>
        <h2>Scroll down to reach the horizontal scroll section</h2>
      </BumperSection>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <SampleCards />
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <BumperSection>
        <h2>You have left the horizontal horizontal scroll section</h2>
      </BumperSection>
    </Main>
  </>
);
export default Horizontal;
