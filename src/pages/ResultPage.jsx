import { useEffect, useState } from "react";
import styled from "styled-components";
import HeartAnimation from "../Components/ResultPage/load";
import { useNavigate, useParams } from "react-router-dom";
import { match, bothMatch } from "../apis/Match";

const ResultPage = () => {
  const [load, setLoad] = useState(true);
  const [result, setResult] = useState();
  const [on, setOn] = useState(false);
  const { name1, name2 } = useParams();
  const link = useNavigate();

  useEffect(() => {
    if (result) return;

    if (name2 === "null") {
      match(name1)
        .then((res) => {
          setResult(res.data.matchScore);
          const timer = setTimeout(() => {
            setLoad(false);
            setTimeout(() => {
              setOn(true);
            }, 2000);
          }, 3000);
        })
        .catch((err) => {
          link("/");
        });
    } else {
      bothMatch(name1, name2)
        .then((res) => {
          setResult(res.data.matchScore);
          const timer = setTimeout(() => {
            setLoad(false);
            setTimeout(() => {
              setOn(true);
            }, 2000);
          }, 3000);
        })
        .catch((err) => {
          link("/");
        });
    }
  }, []);

  return (
    <Wrapper>
      {load ? (
        <>
          <HeartAnimation />
          <LoadText>
            {name2 === "null" ? (
              <>
                '<span>{name1}</span>'님과의 궁합률을 측정하는 중이에요!
              </>
            ) : (
              <>
                '<span>{name1}</span>'님과 '<span>{name2}</span>'님과의 궁합률을
                측정하는 중이에요!
              </>
            )}
          </LoadText>
        </>
      ) : (
        <>
          <Img />
          <PerText>
            {name2 === "null" ? (
              <>
                '<div>{name1}</div>'님과의 궁합률은 <span>{result}%</span>{" "}
                입니다!
              </>
            ) : (
              <>
                '<div>{name1}</div>'님과 '<div>{name2}</div>'님과의 궁합률은{" "}
                <span>{result}%</span> 입니다!
              </>
            )}
          </PerText>
          {/* <Message>" 궁합이 맞는 사람을 찾아가고 있어요! "</Message>a */}
          {on && (
            <Button
              on={on}
              onClick={() => {
                link("/");
              }}
            >
              테스트 끝내기
            </Button>
          )}
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
  transition: 0.2s ease-in-out;
  opacity: ${({ on }) => (on ? 1 : 0)};
  &:hover {
    opacity: 0.8;
  }
`;
