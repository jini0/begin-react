import React, { useState } from 'react';

//함수형
const CounterF = () => {
    //useState합수를 호출하면 배열을 반환해줌
    //배열의 0번째에는 초기값
    //배열의 1번째에는 이 값은 업데이트 해주는 함수
    // [ message, setMessage ] 대괄호 -> 배열
    //❤화면에 변경되는 값은 다 state❤
    const [ message, setMessage ] = useState('안녕');

    //❤함수형은 무조건 useState로!
    //State는 message에 담기고!
    //message의 값을 바꾸고 싶으면 setMessage 해줘야함!
    // console.log(useState(0));

    //변수에 넣어서 해주기!
    const onClickEnter = ()=>setMessage('안녕하세요!');
    const onClickLeave = ()=>setMessage('안녕히가세요!');
    return (
        <div>
            {/* message값을 setMessage가 바꿔줌 */}
            {/* <button onClick={()=>{
                setMessage('안녕하세요!');
            }}>입장</button>
            <button onClick={()=>{
                setMessage('안녕히가세요!');
            }}>퇴장</button> */}

            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <p>{message}</p>
        </div>
    );
};

export default CounterF;