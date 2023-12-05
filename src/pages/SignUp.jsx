import React, { useState } from 'react';
import styled from 'styled-components';
import NameIcon from "../asset/imgs/NameIcon.png";
import NumberIcon from "../asset/imgs/NumberIcon.png";
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { getXquareUserInfo, postLogin, postXquareLogin } from '../apis/SignUp';
import { Cookies } from 'react-cookie';

export const SignUp = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [data, setData] = useState({
        account_id: '',
        password: '',
        device_token: ''
    });
    const cookie = new Cookies();

    const onClick = (e) => {
        postXquareLogin(data).then(res => {
            getXquareUserInfo(res.data.access_token, data.account_id).then(res => {
                const userInfo = res.data;

                const loginData = {
                    username: userInfo.name,
                    studentId: `${userInfo.grade}${userInfo.class_num}${userInfo.num}`,
                    profileImgUrl: userInfo.profile_file_name
                }

                postLogin(loginData).then(res => {
                    cookie.set("accessToken", res.data.accessToken);
                })
            })
        })
    }

    const handleChange = (e) => {
        setData(prev => { return { ...prev, [e.target.id]: e.target.value } });
    }

    console.log(data);

    const updateButtonState = (newName, newNumber) => {
        setIsButtonDisabled(!(newName && newNumber));
    };

    return (
        <Wrapper>
            <Box>
                <Title>회원가입</Title>
                <InputWrapper>
                    <NameWrapper>
                        <NameImg src={NameIcon} alt="" />
                        <Name
                            placeholder='아이디'
                            value={data.account_id}
                            onChange={handleChange}
                            id="account_id"
                        />
                    </NameWrapper>
                    <NumberWrapper>
                        <NumberImg src={NumberIcon} alt='' />
                        <Number
                            placeholder='비밀번호'
                            value={data.password}
                            onChange={handleChange}
                            id="password"
                            type="password"
                        />
                    </NumberWrapper>
                </InputWrapper>
                <NextBtn theme={theme} disabled={isButtonDisabled} onClick={onClick} >회원가입</NextBtn>
            </Box>
        </Wrapper>
    );
}

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
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
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

export default SignUp;
