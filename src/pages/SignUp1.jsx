import React, { useState } from 'react';
import styled from 'styled-components';
import NameIcon from "../asset/imgs/NameIcon.png";
import NumberIcon from "../asset/imgs/NumberIcon.png";
import { Link, useNavigate } from 'react-router-dom';

export const SignUp1 = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const navigate = useNavigate();

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
        navigate('/SignUp2');
    };

    return (
        <Wrapper>
            <Box>
                <Title>회원가입</Title>
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
                <NextBtn disabled={isButtonDisabled} onClick={handleNextClick}>다음</NextBtn>
            </Box>
        </Wrapper>
    );
}

const NextBtn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-top: 190px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 95px;
    margin-top: 60px;
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
    margin-top: 50px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 430px;
    height: 532px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid lightgray;
    box-shadow: 3px 3px 5px lightgray;
`;

export default SignUp1;
