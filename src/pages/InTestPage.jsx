import React from "react";
import { styled } from "styled-components";
import { Progress } from "../Components/InTestPage/prgress";
import { EndBtn } from "../Components/InTestPage/endBtn";
import { useEffect } from "react";
import { newSurvey, ansSurvey } from "../apis/Survey";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { theme } from "../styles/theme";

export default function InTestPage() {
  const buttons = [
    { size: 100, color: theme.color.strongPink },
    { size: 80, color: theme.color.normalPink },
    { size: 60, color: theme.color.lightPink },
    { size: 80, color: theme.color.milkPink },
    { size: 100, color: theme.color.whitePink },
  ];

  const link = useNavigate();
  const [data, setData] = useState();
  const [id, setId] = useState(0);
  const [select, setSelect] = useState(null);
  const [wait, setWait] = useState(false);
  const [end, setEnd] = useState(false);

  const value = (num) => {
    if (num == 0) return "STRONGLY_AGREE";
    else if (num == 1) return "AGREE";
    else if (num == 2) return "NEUTRAL";
    else if (num == 3) return "DISAGREE";
    else if (num == 4) return "STRONGLY_DISAGREE";
  };

  useEffect(() => {
    if (data) return;
    newSurvey()
      .then((res) => {
        setData([...res.data, { content: "끝", surveyType: "끝" }]);
      })
      .catch((err) => {
        link("/home");
      });
  }, []);

  const onClick = (num) => {
    if (wait) return;
    setSelect(num);
    setWait(true);
    ansSurvey({
      surveyType: data[id].surveyType,
      answerType: value(num),
    });
    setTimeout(() => {
      setId(id + 1);
      setSelect(null);
      setWait(false);
      if (id + 1 == 3) setEnd(true);
    }, 2000);
  };

  return (
    <Wrapper>
      {data ? (
        end ? (
          <EndBtn />
        ) : (
          <>
            <Progress number={id} />
            <Text>{data[id].content}</Text>
            <Line />
            <BtnContainer>
              <span>매우 그렇다</span>
              {buttons.map((button, index) => (
                <Btn
                  size={button.size}
                  backColor={button.color}
                  key={index}
                  onClick={() => {
                    onClick(index);
                  }}>
                  <InnerBall
                    backColor={button.color}
                    selected={index === select}
                  />
                </Btn>
              ))}
              <span>매우 아니다</span>
            </BtnContainer>
          </>
        )
      ) : (
        <>Loading..</>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;

const Text = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-top: 70px;
`;

const Line = styled.div`
  background-color: #a49595;
  width: 1600px;
  height: 1px;
  margin-top: 90px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 96px;
  margin-top: 200px;
  align-items: center;
  > :first-child {
    margin-right: -64px;
  }
  > :last-child {
    margin-left: -64px;
  }
`;

const Btn = styled.div`
  width: ${({ size }) => size + "px"};
  height: ${({ size }) => size + "px"};
  border-radius: 50%;
  border: ${({ backColor }) => backColor} 8px solid;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerBall = styled.div`
  width: ${({ selected }) => (selected ? "90%" : 0)};
  background-color: ${({ backColor }) => backColor};
  height: ${({ selected }) => (selected ? "90%" : 0)};
  border-radius: 50%;
  transition: 0.2s linear;
`;
