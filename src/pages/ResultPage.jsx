import { useState } from "react";
import styled from "styled-components";
import HeartAnimation from "../Components/ResultPage/load";

const ResultPage = () => {
  const [load, setLoag] = useState(false);

  return (
    <Wrapper>
      {load ? (
        <>
          <HeartAnimation />
          <LoadText>
            '<span>강태양</span>'님과의 궁합률을 측정하는 중이에요!
          </LoadText>
        </>
      ) : (
        <>
          <Img />
          <PerText>
            '<div>이의진</div>'님과의 궁합률은 <span>50%</span> 입니다!
          </PerText>
          <Message>" 궁합이 맞는 사람을 찾아가고 있어요! "</Message>
          <Aster>- 에스터가 전하는 말 -</Aster>
          <Button>테스트 끝내기</Button>
        </>
      )}
    </Wrapper>
  );
};

export default ResultPage;

const Wrapper = styled.div`
  width: calc(100vw);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadText = styled.div`
  font-size: 20px;
  margin-top: 30px;
  span {
    color: ${({ theme }) => theme.color.strongPink};
  }
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;

const PerText = styled.div`
  font-size: 34px;
  margin-top: 30px;
  div {
    display: inline;
    color: ${({ theme }) => theme.color.strongPink};
  }
  span {
    font-size: 50px;
  }
`;

const Message = styled.div`
  margin-top: 60px;
  font-size: 30px;
`;

const Aster = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.color.darkGray};
`;

const Button = styled.div`
  margin-top: 140px;
  width: 320px;
  height: 70px;
  background-color: ${({ theme }) => theme.color.normalPink};
  color: white;
  font-size: 26px;
  text-align: center;
  line-height: 66px;
  border-radius: 50px;
  cursor: pointer;
`;
