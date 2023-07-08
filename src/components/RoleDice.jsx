import { useState } from "react";
import styled from "styled-components";
import dice_1 from "./images/dice/dice_1.png";
import dice_2 from "./images/dice/dice_2.png";
import dice_3 from "./images/dice/dice_3.png";
import dice_4 from "./images/dice/dice_4.png";
import dice_5 from "./images/dice/dice_5.png";
import dice_6 from "./images/dice/dice_6.png";
function RoleDice({ currentDice, roleDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          src={
            currentDice === 1
              ? dice_1
              : currentDice === 2
              ? dice_2
              : currentDice === 3
              ? dice_3
              : currentDice === 4
              ? dice_4
              : currentDice === 5
              ? dice_5
              : currentDice === 6
              && dice_6
        
          }
          alt={`dice${currentDice}`}
        />
      </div>
      <p>Click on Dice to role</p>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
