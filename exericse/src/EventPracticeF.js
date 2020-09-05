import React, { useState } from "react"
import { useRef } from "react"

const init = {
  message: "",
  username: "",
}



const EventPracticeF = () => {
  const [form, setForm] = useState(init)

  const onSubmit = (e) => {
    e.preventDefault()
    input.current.focus()
    setForm(init)
  }

  const onChange = (e) => {
    const nextState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextState)
  
  }  

  const input =useRef()
  return (
    <>
      <h1>Hooks 이벤트 연습</h1>
      메세지:{form.message}
      <br />
      유저네임:{form.username}
      <form id="a" onSubmit={onSubmit}>
        <label htmlFor="message">메세지</label>
        <input
          id="message"
          onChange={onChange}
          name="message"
          value={form.message}
         
          placeholder="아무값이나 입력해보세요"
        />{" "}
        <br />
        <label htmlFor="username">유저네임</label>
        <input
          id="username"
          onChange={onChange}
          name="username"
          value={form.username}
          ref={input}
          placeholder="아무값이나 입력해보세요"
        />
        <button type="submit">확인</button>
      </form>
    </>
  )
}

export default EventPracticeF
