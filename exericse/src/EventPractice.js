import React, { Component } from "react"

class EventPractice extends Component {
  state={
    message:"",
    username:""
  }
  constructor(props) {
    super(props)
    //jsx                 //class,  
    this.handleOnChange = this.handleChange.bind(this)  
    this.handleOnClick = this.handleClick.bind(this)
    console.log(this);
    //추측.
    //class의 this를 jsx에 바인딩.
    //비동기로 jsx가 먼저 실행되고, constructor이 실행되는듯 보이는데,
    //class와 jsx의 this가 다르기 때문에 this를 바인딩
  }
  handleChange(e) {
    //뒤에꺼 handleChange=(e)=>{}
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleClick(e) {
    console.log(this.state)
    console.log("이전", e)
    console.log(e.persist())
    setTimeout(() => {
      console.log("나중", e)
    }, 1000)
    this.setState({
      message: "",
      username: "",
    })
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick()
    }
  }

  render() {
   console.log("2");

    return (
      <div>
        <h1>이벤트 연습</h1>
        {this.state.message}
        <br />
        {this.state.username}
        <br />
        메세지
        <input
          type="text"
          value={this.state.message}
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={this.handleOnChange}
        />{" "}
        <br />
        유저네임
        <input
          type="text"
          value={this.state.username}
          name="username"
          placeholder="아무거나 입력해 보세요"
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleOnClick}>확인</button>
      </div>
    )
  }
}

export default EventPractice
