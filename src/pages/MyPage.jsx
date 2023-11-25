import styled from "styled-components";
import Profile from "../asset/imgs/profilePicture.svg";
import School from "../asset/imgs/schoolIcon.svg";
import Box from "../asset/imgs/Ticket.svg";

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
                <LetterWrapper></LetterWrapper>
            </Wrapper>
        </>
    )
}

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
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 110px;
    width: 240px;
    height: 680px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.color.strongPink};
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default MyPage;