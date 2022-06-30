import { Component } from "react";

//클래스형
class Counter extends Component {
    //이렇게 적어주면 위에 import가 자동으로 생김!(우리가 적어주는게 아님!)
    //컴포넌트 생성자 메서드 counstructor()
    //★클래스형 컴포넌트에서 constructor를 작성시 필수 super(props);★
    //super(props); : 리액트의 component 클래스가 지닌 생성자 함수를 호출!
    //state 상태관리 ->객체형태(그냥 값이 아니고 객체임 -> {중괄호}로 열고 닫음)
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0,
    //     }
    // }
    //위에껄 state 객체 만들어서 해준거 (위에처럼 적으면 복잡해서)
    state = {
        number: 0,
        fixedNumber: 0,
    }
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={()=>{
                    //❤클래스형에서는 setState
                    this.setState({ number: number+1 },()=>{
                                                       //callback함수 넣어줄 수 있음!
                        console.log('setState가 호출되었습니다.');
                    });
                }}> +1 </button>
            </div>
        );
    }
}

export default Counter;