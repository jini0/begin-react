import React, { useState } from "react"

//함수형
//화살표함수 쓴거를 변수에 넣어준거임!
const EventPracticeF = () => {
    const [ event, setEvent ] = useState('');  
                                // 값이 비어도 이렇게 무슨 타입인지 적어주자!
                                // ''라고 적어주면 문자열 타입임!! cf. console.log(typeof({})) ->object / console.log(typeof('')) ->string
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="message" placeholder="아무거나 입력하세요" 
            onChange={(e)=>{
                setEvent(e.target.value);
            }}>
            </input>
            <button onClick={()=>{
                console.log(event);
            }}>확인</button>
        </div>
    );
}
export default EventPracticeF;