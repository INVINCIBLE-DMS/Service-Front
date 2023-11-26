import React, { useState } from 'react';
import styled from 'styled-components';
import NameIcon from "../asset/imgs/NameIcon.png";
import NumberIcon from "../asset/imgs/NumberIcon.png";
import Profile from "../asset/imgs/Profile.svg";
import { Link, useNavigate } from 'react-router-dom';
import { theme } from '../styles/theme';

export const SignUp1 = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [page, SetPage] = useState(1);
    const navigate = useNavigate();
    const [file, setFile] = useState(undefined);

    const onChange = (e) => {
        const image = Array.from(e.target.files);
        if (image[0]) {
            setFile(URL.createObjectURL(image[0]));
        }
    }

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        updateButtonState(newName, number);
    };

    const handleNumberChange = (e) => {
        const newNumber = e.target.value;
        setNumber(newNumber);
        updateButtonState(name, newNumber);
    };

    const updateButtonState = (newName, newNumber) => {
        setIsButtonDisabled(!(newName && newNumber));
    };

    const handleNextClick = () => {
        SetPage(2);
    };

    return (
        <Wrapper>
            <Box>
                <Dots>
                    <Dot selected={page === 1 && true} />
                    <Dot selected={page === 2 && true} />
                </Dots>
                <Title>회원가입</Title>
                {
                    page === 1 && <>
                        <InputWrapper>
                            <NameWrapper>
                                <NameImg src={NameIcon} alt="" />
                                <Name
                                    placeholder='이름'
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </NameWrapper>
                            <NumberWrapper>
                                <NumberImg src={NumberIcon} alt='' />
                                <Number
                                    placeholder='학번'
                                    value={number}
                                    onChange={handleNumberChange}
                                />
                            </NumberWrapper>
                        </InputWrapper>
                    </>
                }{
                    page === 2 && <>
                        <PictureWrapper>
                            <ProfileTitle>프로필 사진 선택</ProfileTitle>
                            <Label>
                                <ProfilePicture src={file ? file : Profile}></ProfilePicture>
                                <input onChange={onChange} type="file" accept='image/png, image/jpeg, image/jpg'></input>
                            </Label>
                        </PictureWrapper>
                    </>
                }
                <NextBtn disabled={isButtonDisabled} onClick={handleNextClick}>다음</NextBtn>
            </Box>
        </Wrapper>
    );
}

const Label = styled.label`
    cursor: pointer;
    & > input {
        display: none;
    }
`;

const ProfilePicture = styled.img`
    width: 100px;
    border-radius: 50px;

`;

const ProfileTitle = styled.div``;

const PictureWrapper = styled.div`
    place-self: start center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 190px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
`;

const NextBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 250px;
    height: 40px;
    font-size: 17px;
    background-color: ${({ theme }) => theme.color.strongPink}; opacity: ${({ disabled }) => (disabled ? '60%' : '100%')};
    font-weight: bolder;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
        background-color: ${({ theme }) => theme.color.strongPink}; opacity: ${({ disabled }) => (disabled ? '60%' : '100%')};
        transition: 0.3s;
    }
`;

const NumberImg = styled.img`
    width: 19px;
    height: 22px;
    position: absolute;
    left: 10px; 
    top: 50%; 
    transform: translateY(-50%);
`;

const NumberWrapper = styled.div`
    display: flex;
    position: relative;
`;

const NameImg = styled.img`
    width: 19px;
    height: 23px;
    position: absolute;
    left: 10px; 
    top: 50%; 
    transform: translateY(-50%);
`;

const NameWrapper = styled.div`
    display: flex;
    position: relative;
`;

const InputWrapper = styled.div`
    place-self: start center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 95px;
`;

const Name = styled.input`
    border-radius: 5px;
    border: 1.5px solid lightgray;
    width: 210px; 
    height: 40px;
    padding-left: 40px;
    &:focus{
       border: 1px solid ${({ theme }) => theme.color.strongPink};
       outline: none;
    }
`;

const Number = styled.input`
    border-radius: 5px;
    border: 1.5px solid lightgray;
    width: 210px;
    height: 40px;
    padding-left: 40px; 
    &:focus{
       border: 1px solid ${({ theme }) => theme.color.strongPink};
       outline: none;
    }
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 900;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Box = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    display: grid;
    grid-template-rows: 0.1fr 0.3fr 1fr 0.1fr;
    place-items: center center;
    width: 430px;
    height: 532px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid lightgray;
    box-shadow: 3px 3px 5px lightgray;
    box-sizing: border-box;
    padding: 20px;
`;

const Dots = styled.div`
    place-self: start center;
    display: flex;
    gap: 10px;
    margin-top: 10px;
`

const Dot = styled.div`
    border-radius: 50px;
    width: ${({ selected }) => selected ? "20px" : "10px"};
    height: 10px;
    background: ${({ selected }) => selected ? theme.color.strongPink : theme.color.darkGray};
`

export default SignUp1;
