import { useState } from "react";
import { styled } from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <header>
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testid="minus-button"
          onClick={() => setCount(prev => prev - 1)}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCount(prev => prev + 1)}
        >
          +
        </button>
        <OnOffBtn data-testid="on-off-button">on/off</OnOffBtn>
      </header>
    </div>
  );
}

export default App;

const OnOffBtn = styled.button`
  background-color: blue;
`;
