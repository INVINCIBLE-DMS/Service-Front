import styled, { createGlobalStyle } from "styled-components";
import GoldCrown from "../asset/imgs/goldCrown.svg";
import SilverCrown from "../asset/imgs/silverCrown.svg";
import ThirdCrown from "../asset/imgs/thirdCrown.svg";
import Candy from "../asset/imgs/candy.svg";
import RankingIcon from "../asset/imgs/ranking.svg";
import { getRanking } from "../apis/Ranking";

export const Ranking = () => {

    getRanking().then(res => {
        const rankingData = res.data;

        console.log(rankingData)

    })
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Box1>
                    <ClassInfo1>
                        <SecondWrapper>
                            <Img src={SilverCrown}></Img>
                            <ClassNumber>1-8</ClassNumber>
                            <CandyWrapper>
                                <Icon src={Candy}></Icon>
                                <CandyNumber>500개</CandyNumber>
                            </CandyWrapper>
                        </SecondWrapper>
                        <FirstWrapper>
                            <Img src={GoldCrown}></Img>
                            <ClassNumber>1-2</ClassNumber>
                            <CandyWrapper>
                                <Icon src={Candy}></Icon>
                                <CandyNumber>500개</CandyNumber>
                            </CandyWrapper>
                        </FirstWrapper>
                        <ThirdWrapper>
                            <Img src={ThirdCrown}></Img>
                            <ClassNumber>1-8</ClassNumber>
                            <CandyWrapper>
                                <Icon src={Candy}></Icon>
                                <CandyNumber>500개</CandyNumber>
                            </CandyWrapper>
                        </ThirdWrapper>
                    </ClassInfo1>
                </Box1>
                <Box2>
                    <ClassInfo2>
                        <InfoWrapper>
                            <RankingImg src={RankingIcon}></RankingImg>
                            <OtherNumbers>1학년 7반</OtherNumbers>
                            <CandyImg src={Candy}></CandyImg>
                            <CandyNumbers>사탕  - 90개</CandyNumbers>
                        </InfoWrapper>
                        <InfoWrapper>
                            <RankingImg src={RankingIcon}></RankingImg>
                            <OtherNumbers>1학년 7반</OtherNumbers>
                            <CandyImg src={Candy}></CandyImg>
                            <CandyNumbers>사탕  - 90개</CandyNumbers>
                        </InfoWrapper>
                        <InfoWrapper>
                            <RankingImg src={RankingIcon}></RankingImg>
                            <OtherNumbers>1학년 7반</OtherNumbers>
                            <CandyImg src={Candy}></CandyImg>
                            <CandyNumbers>사탕  - 90개</CandyNumbers>
                        </InfoWrapper>
                        <InfoWrapper>
                            <RankingImg src={RankingIcon}></RankingImg>
                            <OtherNumbers>1학년 7반</OtherNumbers>
                            <CandyImg src={Candy}></CandyImg>
                            <CandyNumbers>사탕  - 90개</CandyNumbers>
                        </InfoWrapper>
                        <InfoWrapper>
                            <RankingImg src={RankingIcon}></RankingImg>
                            <OtherNumbers>1학년 7반</OtherNumbers>
                            <CandyImg src={Candy}></CandyImg>
                            <CandyNumbers>사탕  - 90개</CandyNumbers>
                        </InfoWrapper>
                        <InfoWrapper>
                            <RankingImg src={RankingIcon}></RankingImg>
                            <OtherNumbers>1학년 7반</OtherNumbers>
                            <CandyImg src={Candy}></CandyImg>
                            <CandyNumbers>사탕  - 90개</CandyNumbers>
                        </InfoWrapper>
                    </ClassInfo2>
                </Box2>
            </Wrapper>
        </>
    )
}

const CandyNumbers = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkGray};
    margin-left: 25px;
    font-size: 20px;
`;

const CandyImg = styled.img`
    margin-left: 700px;
`;

const OtherNumbers = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-left: 25px;
`;

const RankingImg = styled.img`
    width: 35px;
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1100px;
    height: 77px;
    background-color: white;
    border: 1px solid #d1cfcf;
    border-radius: 100px;
    box-shadow: 2px 4px 2px 0px rgb(0, 0, 0, 0.1);
`;

const CandyNumber = styled.div`
    font-size: 12px;
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 5px;
`;

const CandyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 26px;
    border-radius: 30px;
    box-shadow: 2px 4px 2px 0px rgb(0, 0, 0, 0.2);
    background-color: white;
`;

const ClassNumber = styled.div`
    font-weight: bold;
    font-size: 45px;
    color: white;
`;

const Img = styled.img`
    width: 120px;
    margin-top: -80px;
`;

const ThirdWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 190px;
    border-radius: 30px 30px 0px 0px;
    margin-top: 150px;
    background-color: ${({ theme }) => theme.color.milkPink};
`;

const FirstWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 340px;
    border-radius: 30px 30px 0px 0px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.normalPink};
`;

const SecondWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
/* justify-content: center; */
    width: 200px;
    height: 240px;
    border-radius: 30px 30px 0px 0px;
    margin-top: 100px;
    background-color: ${({ theme }) => theme.color.lightPink};
`;

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.color.whitePink};
        margin: 0;
        padding: 0;
    }
`;

const ClassInfo2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    height: 600px;
    margin-top: 50px;
`;

const ClassInfo1 = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 85px;
    justify-content: space-between;
    width: 900px;
`;

const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 1451px;
    margin-left: 85px;
    height: 800px;
    background-color: white;
    border-radius: 70px 70px 0px 0px;
`;

const Box1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
`;


export default Ranking;