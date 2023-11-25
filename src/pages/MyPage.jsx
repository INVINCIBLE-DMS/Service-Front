import styled from "styled-components";
import Profile from "../asset/imgs/profilePicture.svg";
import School from "../asset/imgs/schoolIcon.svg";
import Box from "../asset/imgs/Ticket.svg";
import Letter from "../asset/imgs/letter.svg";

export const MyPage = () => {
    return (
        <>
            <Wrapper>
                <InfoWrapper>
                    <ProfilePicture src={Profile}></ProfilePicture>
                    <MyInfos>
                        <NameWrapper>
                            <Title>이름</Title>
                            <Infos>이의진</Infos>
                        </NameWrapper>
                        <NumberWrapper>
                            <Title>학번</Title>
                            <Infos>1211</Infos>
                        </NumberWrapper>
                    </MyInfos>
                    <TitleWrapper>
                        <ClassTitle>우리 반 정보</ClassTitle>
                        <SchoolIcon src={School}></SchoolIcon>
                    </TitleWrapper>
                    <ClassInfoBox src={Box}></ClassInfoBox>
                    <CandyWrapper>
                        <Text>사탕</Text>
                        <Number>230</Number>
                    </CandyWrapper>
                    <RankingWrapper>
                        <Text>랭킹</Text>
                        <Number>10</Number>
                    </RankingWrapper>
                    <EditButton>수정하기</EditButton>
                    <MyBoardButton>내 게시물 보기</MyBoardButton>
                </InfoWrapper>
                <LetterWrapper>
                    <LetterImg src={Letter}></LetterImg>
                    <Contents>
                        <Texts>지금까지 저희를 이용해주셔서 감사합니다!
                            가장 궁합이 좋은 사람은         님으로 궁합이              .............였네요!
                            회원님이 포함되어있는 반의 궁합 랭킹은 무려
                            이랍니다!</Texts>
                    </Contents>
                </LetterWrapper>
            </Wrapper>
        </>
    )
}

const Texts = styled.div`
    padding: 30px;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.53);
`;

const Contents = styled.div`
    width: 500px;
    height: 570px;
    border: 1px solid rgba(0, 0, 0, 0.21);
`;

const LetterImg = styled.img`
    width: 350px;
    margin-left: 130px;
`;

const MyBoardButton = styled.button`
    margin-top: 13px;
    width: 190px;
    height: 45px;
    border-radius: 100px;
    font-weight: bold;
    font-size: 15px;
    color: white;
    border: none;
    background-color: ${({ theme }) => theme.color.milkPink};
    &:hover {
        background-color: ${({ theme }) => theme.color.lightPink};
        cursor: pointer;
        transition: 0.2s;
    }
`;

const EditButton = styled.button`
    margin-top: 120px;
    width: 190px;
    height: 45px;
    border-radius: 100px;
    font-weight: bold;
    font-size: 15px;
    color: white;
    border: none;
    background-color: ${({ theme }) => theme.color.lightPink};
    &:hover {
        background-color: ${({ theme }) => theme.color.normalPink};
        cursor: pointer;
        transition: 0.2s;
    }
`;

const RankingWrapper = styled.div`
    position: absolute;
    top: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 120px;
    margin-left: 20px;
`;

const Number = styled.div`
    font-weight: bold;
`;

const Text = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkGray};

`;

const CandyWrapper = styled.div`
    position: absolute;
    top: 365px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 120px;
    margin-left: 20px;
`;


const ClassInfoBox = styled.img`
    width: 200px;
    margin-top: 5px;
    position: relative;
`;

const Infos = styled.div`
    font-weight: bold;
`;

const Title = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkGray};
`;


const SchoolIcon = styled.img`
    height: 25px;
`;

const ClassTitle = styled.div`
    font-weight: bold;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 120px;
    margin-top: 80px;
`;

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 140px;
`;

const NameWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 140px;
    margin-bottom: 10px;
`;

const MyInfos = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfilePicture = styled.img`
    width: 100px;
    margin-bottom: 40px;
`;

const LetterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 85px;
    margin-top: 12px; //여기다... 여기.... infoWrapper 박스 가로선 기준으로 제발 중앙으로 오게 해조
    width: 240px;
    height: 680px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.color.strongPink};
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export default MyPage;