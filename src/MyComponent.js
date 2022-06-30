// https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/
//함수표현식(화살표함수 이용)
// const MyComponent = () => {
//     return <div>새로운 컴포넌트 생성</div>
// }

// //함수선언문 (위에랑 같은거임!)
// function MyComponent(){
//     return <div>새로운 컴포넌트 생성</div>;
// }
// export default MyComponent;

//rsc 엔터 해주면,
// import React from 'react';

// const componentName = (props) => {
//     return (
        
//         </div>
//     );
// };

// export default componentName;


//rsc
import React from 'react';
import PropTypes from 'prop-types';

//2.'객체 구조분해할당'으로 해보기
//{name, age} : 객체라서 {중괄호}감싼거
const MyComponent = ({name, age, children}) => {
    return (
        <div>
            안녕하세요 제이름은 {name}입니다.<br/>
            제 나이는 {age}입니다.
            {children}
        </div>
    );
};

//3.이렇게 한걸 위에껀 객체구조분해할당 한거임!
// const MyComponent = (props) => {
//     const { name, age, children } = props;
//     return (
//         <div>
//             안녕하세요 제이름은 {name}입니다.<br/>
//             제 나이는 {age}입니다.<br/>
//             {children}
//         </div>
//     );
// };

//1. props로 받아서 
// const MyComponent = (props) => {
//                     //props 객체로 받음!
//     return (
//         <div>
//             안녕하세요 제이름은 {props.name}입니다.
//             제 나이는 {props.age}입니다.
//                     {/* props 객체로 받아서 그래서 속성명 접근시 이렇게 접근 */}
//         </div>
//     );
// };


// props 기본값설정
MyComponent.defaultProps = {
    name: "기본이름",
    age : 1,
    //name, age에 값이 없으면 기본이름, 1로 들어감
};
MyComponent.propTypes = {
    name: PropTypes.string      //name의 타입을 문자열로 지정하겠다!!
}
//https://github.com/facebook/prop-types        : prop-types에 대한 설명 나와있음!!
//array : 배열
//bool : true 혹은 false
//func : 함수
//number : 숫자
//object : 객체
//string : 문자
//any : 아무 종류 다 됨
export default MyComponent;
