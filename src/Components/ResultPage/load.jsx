import React from "react";
import styled, { keyframes, css } from "styled-components";

const Unit = styled.div`
  text-align: center;
  width: 138px;
  height: 138px;
`;

const Heart = styled.div`
  position: relative;
  font-size: 0;
  width: 138px;
`;

const HeartPiece = styled.div`
  position: absolute;
  top: 0px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

const pieceAnimation = (height, top) => keyframes`
  0%,100% {
    height: 10px;
    top: 50px;
  }
  25%, 75% {
    height: ${height}px;
    top: ${top}px;
  }
`;

const AnimatedHeartPiece = styled(HeartPiece)`
  top: 50px;
  ${({ height, top }) =>
    css`
      animation: ${pieceAnimation(height, top)} 3.2s infinite;
    `}
`;

const HeartAnimation = () => {
  const colors = [
    { id: 0, color: "#FF49C2", height: 40, top: 24 },
    { id: 1, color: "#FF49C2", height: 70, top: 34 },
    { id: 2, color: "#FF49C2", height: 80, top: 39 },
    { id: 3, color: "#FF49C2", height: 90, top: 34 },
    { id: 4, color: "#FF49C2", height: 90, top: 24 },
    { id: 5, color: "#FF49C2", height: 90, top: 34 },
    { id: 6, color: "#FF49C2", height: 80, top: 39 },
    { id: 7, color: "#FF49C2", height: 70, top: 34 },
    { id: 8, color: "#FF49C2", height: 40, top: 24 },
  ];

  return (
    <Unit>
      <Heart>
        {colors.map((element) => (
          <AnimatedHeartPiece
            key={element.id}
            style={{
              left: `${16 * element.id}px`,
              animationDelay: `${0.15 * element.id}s`,
            }}
            color={element.color}
            height={element.height}
            top={-element.top + 50}
          />
        ))}
      </Heart>
    </Unit>
  );
};

export default HeartAnimation;
