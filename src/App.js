// * npm이 잘 안되면(끊기면?), 터미널에서 npm start 다시해줘야함! => 얘는 새로 열면 터미널에서 npm start 계속 해줘야함!
// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import MyComponent from './MyComponent';
import Counter2 from './Counter2';
import { MyContext } from './component/MyContext';
// import MyComponent from './MyComponent';
// import MyComponentClass from './MyComponentClass';
// import Counter from './Counter';
// import CounterF from './CounterF';
// import EventPractice from './EventPractice';
// import EventPracticeF from './EventPracticeF';


function App() {
  //6.27(context API)
  //주로 reducer랑 많이 쓰임! -> 파일을 따로 관리할 수 있음!
  const newtext = "안녕하세요";
  
  // const name = "트";
  return (
    //6.27
    <MyContext.Provider value={newtext}>
      <div className='react'>
        <Counter2 />
      </div>
    </MyContext.Provider>


    //6.23..?
    // // cf. <b></b> : bold 두껍게 하는거!
    // // <div className="App">
    // //   Hello <b>react</b> 
    // // </div>
    
    // // * JSX에서 자바스크립트 표현식을 사용하려면 {중괄호}로 감싼다.
    // // * JSX는 if문을 쓸 수 없음! -> if문 대신 조건부연산자 - 삼항연산자를 사용.
    // <div className='react'>
    //   {/* 동등아니고 일치(===)로 해줘야함 */}
    //   {/* 아무것도 안나타내고 싶을 때는 null */}
    //   {/* name변수를 불러오고 싶을 때 -> 자바스크립트 => 중괄호로 감싸서 불러옴 */}
    //   {/* <h1>{ name === '리액트' ? (<span>리액트입니다.</span>) : (<span>리액트가 아닙니다.</span>) } 안녕!</h1> */}
    //   {/* <h1>{ name === '리액트' ? (<span>리액트입니다.</span>) : null }</h1> */}

    //   {/* <MyComponent name='Green' age='30'><h3>하하하</h3></MyComponent>
    //   <MyComponent name='Blue' age={50}><h3>하하하</h3></MyComponent>
    //   <MyComponent>하하하</MyComponent> */}

    //   {/* <MyComponentClass name="classGreen" age={30}>
    //     <h3>children</h3>
    //   </MyComponentClass>
    //   <MyComponentClass></MyComponentClass> */}

    //   {/* <Counter></Counter> */}

    //   {/* <CounterF></CounterF> */}

    //   {/* <EventPractice></EventPractice> */}

    //   {/* <EventPracticeF></EventPracticeF> */}

    //   {/* <MyComponent name='green' age='20'><h2>h2입니다.</h2></MyComponent>
    //   <h2>하이하이</h2>
    //   <input type="text"></input> */}

    //   {/* 6.24 */}
    //   <Counter2 />
    // </div>
  );
  //숫자 {50} '50'
  // <MyComponent name='Green' age='30' /> 셀프클로징해도 되고 
  // <MyComponent name='Green' age='30'>여러분</MyComponent> 닫기태그 해도 됨 -> 닫기태그하면 그 안에 적어주는 내용(여러분)이 children => props.children
  //JSX는 감싸야한다!(div로 태그들을 감싸거나) 감싸는 애를 추가하기 싫으면 '프레그먼트'써야한다.(빈태그) <></>

  //html아니고 JSX임! -> 위에처럼 해주면 jsx로 코드로 작성해주면 바벨이 밑에처럼 이렇게 코드를 자동적으로 만들어줌  / UI를 편하게 작성할 수 있음
  // return React.createElement("div", null, "Hello", React.createElement("b",null,"react"));
}

export default App;
