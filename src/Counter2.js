//6.24 useReducer 하려고!!
// import React, { useState } from 'react';
import React, { useReducer, useContext } from 'react';
import { MyContext } from './component/MyContext'; 

//dispatch해주면 함수 reducer가 실행되는거임!!
function reducer(state,action){
    switch(action.type){
        //action개체가 가지고 있는 type으로 구분하겠다!
        //상태도 관리하고 상태관리하는 경우도 관리하는거! -> INCREASE일 때는 상태를 +1하겠다! / DECREASE일 때는 상태를 -1을 하겠다! -> 이런 걸 미리 틀을 만들어두는거!!
        case "INCREASE":
        return state+1;
        case "DECREASE":
        return state-1;
        default:
        return state;
    }
}

const Counter2 = (props) => {
    //6.27 
    const contextText = useContext(MyContext);
    console.log(contextText);

    const [ number, dispatch ] = useReducer(reducer,0);      
    function Increase(){
        dispatch({type:"INCREASE"});
        // dispatch라는 애는 action을 발동(실행)시킴 -> 함수 reducer가 실행됨
    }
    function Decrease(){
        dispatch({type:"DECREASE"});
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={Decrease}>-1</button>
            <button onClick={Increase}>+1</button>
        </div>
    );
};

//*단순 작업은 useState()가 편함!
// const Counter2 = (props) => {
//     // let number = 0; 변수로 하면 안됨!   -> react는 state라는 애 사용
//     const [ number, setNumber ] = useState(0);      //관리해야할 상태가 적으면 useState()쓰면 됨 -> 관리할 상태가 많으면 useReducer()를 이용해야함
//     function Increase(){
//         // number += 1;     변수처럼 해주면 안됨  -> react는 state라는 애 사용
//         // console.log(number);
//         setNumber(number+1);

//     }
//     function Decrease(){
//         setNumber(number-1);  
//         // dispatch({type:"DECREASE"});
//     }
//     return (
//         <div>
//             <h2>{number}</h2>
//             <button onClick={Decrease}>-1</button>
//             <button onClick={Increase}>+1</button>
//         </div>
//     );
// };

export default Counter2;