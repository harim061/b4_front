import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputForm from '../Login/InputForm';
import LButton from '../Login/LButton';
import Lock1 from '../../svg/Lock.svg';
import Lock2 from '../../svg/Lock2.svg';
import axios from 'axios';

const LoginPart = styled.div`
    height: 600px;
    width: 800px;
    background: #fffcf8;
    border-radius: 50px;
    display: flex;

    flex-direction: column;
    box-shadow: 6px 6px 30px rgba(170, 170, 170, 0.6);
    background: rgba(255, 252, 248, 0.3);
    backdrop-filter: blur(25px);
    overflow-y: scroll;
    padding-top: 50px;
    @media screen and (max-width: 1024px) {
        width: 500px;
        height: 600px;
        margin: 0 auto;
        align-items: center;
        margin-top: 250px;
    }

    @media screen and (max-width: 510px) {
        width: 330px;
        height: 600px;
        padding: 0;
        margin: 0 auto;
        align-items: center;
        margin-top: 200px;
    }
`;

const Welcome = styled.div`
    margin-top: -30px;
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #3465c9;
    margin-bottom: 50px;
`;

const Container = styled.div`
    height: fit-content;
    width: fit-content;
    padding: 0;
    margin: 0 auto;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const CheckBox = styled.input`
    display: flex;
    float: left;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-left: 160px;

    @media screen and (max-width: 1024px) {
        margin-left: 13px;
    }

    @media screen and (max-width: 510px) {
        margin-left: 10px;
    }
`;

const CheckDiv = styled.p`
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #3465c9;
    margin-bottom: 40px;
`;

const Find = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0 auto;

    li {
        list-style: none;
        color: #3465c9;
        margin: 0px 16px;
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }

    @media screen and (max-width: 510px) {
        li {
            font-size: 5px;
        }
    }
`;

const LockImg1 = styled.img`
    position: absolute;
    width: 179.86px;
    height: 226.6px;
    left: calc(50% - 179.86px / 2 - 472.07px);
    top: calc(50% - 226.6px / 2 - 120.04px);

    transform: rotate(-7.24deg);
    z-index: -1;

    @media screen and (max-width: 1024px) {
        left: calc(70% - 179.86px / 2 - 472.07px);
        top: calc(50% - 226.6px / 2 - 120.04px);
    }

    @media screen and (max-width: 510px) {
        left: calc(105% - 179.86px / 2 - 472.07px);
        top: calc(50% - 226.6px / 2 - 120.04px);
    }
`;
const LockImg2 = styled.img`
    position: absolute;
    width: 234px;
    height: 317px;
    left: calc(50% - 234px / 2 + 445px);
    top: calc(50% - 317px / 2 + 340.97px);
    z-index: -1;

    @media screen and (max-width: 1024px) {
        left: calc(35% - 234px / 2 + 445px);
        top: calc(50% - 317px / 2 + 340.97px);
    }

    @media screen and (max-width: 510px) {
        left: calc(0% - 234px / 2 + 445px);
        top: calc(50% - 317px / 2 + 340.97px);
    }
`;

const LoginBox = () => {
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [loginRePw, setLoginRePw] = useState('');
    const [userRole, setUserRole] = useState('');
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userBirth, setUserBirth] = useState('');
    const [userJob, setUserJob] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const [nickname, setNickname] = useState('');
    useEffect(() => {
        getDatas();
    }, []);

    const ChangeName = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    };
    const ChangeId = (e) => {
        e.preventDefault();
        setLoginId(e.target.value);
    };
    const ChangePw = (e) => {
        e.preventDefault();
        setLoginPw(e.target.value);
    };
    const ChangeRePw = (e) => {
        e.preventDefault();
        loginPw === e.target.value
            ? setLoginRePw(e.target.value)
            : setLoginRePw('');
    };
    const ChangeRole = (e) => {
        e.preventDefault();
        setUserRole(e.target.value);
    };
    const ChangePhone = (e) => {
        e.preventDefault();
        setUserPhone(e.target.value);
    };
    const ChangeBirth = (e) => {
        e.preventDefault();
        setUserBirth(e.target.value);
    };
    const ChangeJob = (e) => {
        e.preventDefault();
        setUserJob(e.target.value);
    };
    const ChangeEmail = (e) => {
        e.preventDefault();
        setUserEmail(e.target.value);
    };
    const ChangeNickname = (e) => {
        e.preventDefault();
        setNickname(e.target.value);
    };
    const [datas, setDatas] = useState([]);

    const getDatas = async () => {
        // const response = await axios
        //     .get('http://3.38.52.33:8080/mypage')
        //     .then((response) => {
        //         setDatas(response.data);
        //         console.log(datas);
        //     })
        //     .catch((error) => {
        //         console.log('회원 불러오기 실패', error.message);
        //     });
    };

    const submit = (e) => {
        e.preventDefault();
        if (loginPw != loginRePw) return alert('비밀번호가 틀려요 '); //비밀번호 유효성 체크
        axios
            .post('http://3.38.52.33:8080/signup', {
                loginId: loginId,
                loginPw: loginPw,
                userRole: userRole,
                userName: userName,
                userPhone: userPhone,
                userBirth: userBirth,
                userJob: userJob,
                userEmail: userEmail,
                nickname: nickname,
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log('우앙 회원가입 성공');
                }
            })
            .catch((error) => console.log(error));
    };
    return (
        <Container>
            <Welcome>고유정보를 입력해주세요.</Welcome>
            <LoginPart>
                <form
                    onSubmit={submit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <InputForm
                        type="text"
                        placeholder="이름을 입력해주세요."
                        onChange={ChangeName}
                        required
                    />
                    <InputForm
                        type="date"
                        placeholder="생년월일을 입력해주세요."
                        onChange={ChangeBirth}
                        required
                    />
                    <InputForm
                        type="email"
                        placeholder="이메일을 입력해주세요."
                        onChange={ChangeEmail}
                        required
                    />

                    <InputForm
                        type="text"
                        placeholder="아이디"
                        onChange={ChangeId}
                        required
                    ></InputForm>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#3465C9',
                            justifyContent: 'center',
                            marginBottom: '25px',
                        }}
                    >
                        아이디 중복확인
                    </button>
                    <InputForm
                        type="password"
                        placeholder="비밀번호"
                        onChange={ChangePw}
                        required
                    />
                    <InputForm
                        type="password"
                        placeholder="비밀번호 재확인"
                        onChange={ChangeRePw}
                        required
                    />
                    <InputForm
                        type="text"
                        placeholder="닉네임"
                        onChange={ChangeNickname}
                        required
                    ></InputForm>
                    <button
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#3465C9',
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '25px',
                        }}
                    >
                        닉네임 중복확인
                    </button>
                    <InputForm
                        type="tel"
                        placeholder="전화번호"
                        onChange={ChangePhone}
                        required
                    />
                    <InputForm
                        type="text"
                        placeholder="직업"
                        onChange={ChangeJob}
                        required
                    />
                    <InputForm
                        type="text"
                        placeholder="사용목적"
                        onChange={ChangeRole}
                        required
                    />
                    <LButton>회원가입</LButton>
                </form>
            </LoginPart>
        </Container>
    );
};

export default LoginBox;
