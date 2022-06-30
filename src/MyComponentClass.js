import { Component } from "react";      //{중괄호} 이것도 구조분해할당! / 여러개의 클래스가 있어서 -> react안에 있는 component만 받겠다!

//선언
class MyComponentClass extends Component {
    //extends 상속받아라  / 항상 render 함수 넣어줘야함!
    render() {
        const { name, age, children } = this.props;
        return(
            <div>
                제 이름은 {name}입니다.
                나이는 {age}입니다.
                {children}
            </div>
        );
    };
}
MyComponentClass.defaultProps = {
    name: '기본이름',
    age: 20,
    children: "aaa",
}
export default MyComponentClass;        //사용도함 -> 선언만 하고 사용안하면 노란줄이 그어짐