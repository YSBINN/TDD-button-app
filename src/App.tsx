import { useState } from "react";
import { styled } from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  const [diabled, setDiabled] = useState(false);

  return (
    <div>
      <header>
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testid="minus-button"
          disabled={diabled}
          onClick={() => setCount(prev => prev - 1)}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          disabled={diabled}
          onClick={() => setCount(prev => prev + 1)}
        >
          +
        </button>
        <OnOffBtn
          onClick={() => setDiabled(prev => !prev)}
          data-testid="on-off-button"
        >
          on/off
        </OnOffBtn>
      </header>
    </div>
  );
}

export default App;

const OnOffBtn = styled.button`
  background-color: blue;
`;
