import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import leftPhone from "../asset/imgs/leftPhone.svg";
import rightPhone from "../asset/imgs/rightPhone.svg";
import FadeInBox from "../Components/HomePage/FadeInBox";
import { Speech } from "../Components/HomePage/Speech";
import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";

const HomePage = () => {
  const link = useNavigate();

  const cookie = new Cookies();
  const navigate = new useNavigate();

  useEffect(() => {
    const token = cookie.get("accessToken");
    if (!token) {
      navigate("/signup");
    }
  });

  const [inputState, setInputState] = useState({
    name: "",
    name1: "",
    name2: "",
  });

  const { name, name1, name2 } = inputState;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const onMatch = (name) => {
    link(`/result/${name}/null`);
  };

  const onBothMatch = (name1, name2) => {
    link(`/result/${name1}/${name2}`);
  };

  return (
    <Body>
      <TopWrapper>
        <Left>
          <TextContainer>
            <Sub>나와의 궁합률이 궁금한 사람의 이름을 적어주세요</Sub>
            <Main>
              나와 <span>최고의 궁합</span>은 누구일까
              <QuestionMark>?</QuestionMark>
            </Main>
            <TopInput
              placeholder="ex ) 홍길동"
              onChange={onChange}
              name="name"
              value={name}
            />
            <Button
              onClick={() => {
                onMatch(name);
              }}
            >
              궁합 맞춰보기
            </Button>
          </TextContainer>
        </Left>
        <Right>
          <Rectangle>
            <Tip>지목을 가장 많이 받은 반은 랭킹 순위가 올라갑니다!</Tip>
            <Img src={leftPhone} />
            <Img src={rightPhone} />
          </Rectangle>
        </Right>
      </TopWrapper>
      <BottomWrapper>
        <BottomLeft>
          <FadeInBox>
            <Sub>나와의 궁합률이 궁금한 사람의 이름을 적어주세요</Sub>
          </FadeInBox>
          <FadeInBox>
            <Main>
              나와 <span>최고의 궁합</span>은 누구일까
              <QuestionMark>?</QuestionMark>
            </Main>
          </FadeInBox>
          <FadeInBox>
            <BottomInputContainer>
              <BottomInput
                placeholder="ex ) 왕자님"
                onChange={onChange}
                name="name1"
                value={name1}
              />
              <BottomInput
                placeholder="ex ) 공주님"
                onChange={onChange}
                name="name2"
                value={name2}
              />
            </BottomInputContainer>
          </FadeInBox>
          <FadeInBox>
            <Button
              onClick={() => {
                onBothMatch(name1, name2);
              }}
            >
              친구들의 궁합은?
            </Button>
          </FadeInBox>
        </BottomLeft>
        <BottomRight>
          <SpeechBox>
            <FadeInBox>
              <Speech messege="변정현의 강요 - 태규" />
            </FadeInBox>
            <FadeInBox>
              <Speech messege="하는 이유 없음 - 태양" />
            </FadeInBox>
            <FadeInBox>
              <Speech messege="깡깡깡 - 의엘" />
            </FadeInBox>
            <FadeInBox>
              <Speech messege="더나은 dms를 위해 - 의진" />
            </FadeInBox>
          </SpeechBox>
        </BottomRight>
      </BottomWrapper>
    </Body>
  );
};

export default HomePage;

const Body = styled.div``;

const TopWrapper = styled.div`
  width: calc(100vw);
  height: 100vh;
  background-color: ${({ theme }) => theme.color.whitePink};
  display: flex;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  margin-left: 210px;
  height: 260px;
  display: flex;
  flex-direction: column;
`;

const Sub = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

const Main = styled.div`
  font-size: 40px;
  font-weight: 700;
  span {
    color: ${({ theme }) => theme.color.strongPink};
  }
`;

const QuestionMark = styled.div`
  width: 0;
  font-size: 40px;
  font-weight: 700;
  transform: rotate(10deg);
  position: relative;
  bottom: 68px;
  left: 492px;
`;

const TopInput = styled.input`
  width: 530px;
  padding-left: 22px;
  padding-right: 22px;
  height: 64px;
  font-size: 22px;
  font-weight: 400;
  background-color: white;
  margin-top: 32px;
  outline: none;
  border: none;
  border-radius: 50px;
`;

const Right = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
`;

const Rectangle = styled.div`
  width: 770px;
  height: 100%;
  background-color: white;
  border-radius: 100px 0 0 0;
  display: flex;
  justify-content: end;
  align-items: end;
  position: relative;
`;

const Tip = styled.div`
  font-size: 25px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.darkGray};
  margin-bottom: 32px;
  margin-right: 32px;
`;

const Img = styled.img`
  position: absolute;
  &[src="${leftPhone}"] {
    right: 450px;
    bottom: 260px;
  }
  &[src="${rightPhone}"] {
    right: 140px;
    bottom: 144px;
  }
`;

const BottomWrapper = styled.div`
  width: calc(100vw - 104px);
  margin-left: 84px;
  height: 100vh;
  display: flex;
`;

const BottomLeft = styled.div`
  width: 810px;
  padding: 132px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BottomInputContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 33px;
`;

const BottomInput = styled.input`
  width: 374px;
  height: 56px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.strongPink};
  font-size: 22px;
  font-weight: 400;
`;

const BottomRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpeechBox = styled.div`
  width: 560px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > :nth-child(2n) {
    margin-left: 200px;
  }

  > :nth-child(2) {
    opacity: 0.8;
  }

  > :nth-child(3) {
    opacity: 0.6;
  }

  > :nth-child(4) {
    opacity: 0.4;
  }
`;

const Button = styled.div`
  width: 240px;
  height: 32px;
  font-size: 16px;
  line-height: 30px;
  background-color: ${({ theme }) => theme.color.strongPink};
  border-radius: 12px;
  text-align: center;
  color: white;
  margin-top: 20px;
  cursor: pointer;
`;
