import { Component } from "react";

//클래스형
class EventPractice extends Component {
    state = {
        message: '',
    }
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="아무거나 입력하세요"
                onChange={(e)=>{
                    // console.log(e.target.value);
                    //e.target 이벤트가 실행되는
                    //value는 input의 값
                    this.setState({
                        message: e.target.value
                    })
                }}></input>
                <button onClick={()=>{
                    console.log(this.state.message);
                }}>확인</button>
            </div>
        )
    }
}
export default EventPractice;