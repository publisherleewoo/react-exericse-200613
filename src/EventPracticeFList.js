import React, { useState } from "react"

const EventPracticeFList = () => {
  const [todoList,setTodoList] = useState([

  ])
  const [form, setForm] = useState({
    message: "",
    username: "",
  })
  const onSubmit = (e) => {
    e.preventDefault()
    const nextArray = [...todoList,{message:form.message, username:form.username}]
    setTodoList(nextArray)
    setForm({
      message: "",
      username: "",
    })
  }
  const onChange = (e) => {
    e.preventDefault()
    const nextState = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextState)
  }

  return (
    <div>
      <h1>Hooks 이벤트 연습</h1>
      {todoList&&todoList.map((t,i)=><p key={i}>{t.message},{t.username}</p>)}
      <form onSubmit={onSubmit}>
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
          placeholder="아무값이나 입력해보세요"
        />
        <button type="submit">확인</button>
      </form>
      {form.message}
      <br />
      {form.username}
    </div>
  )
}

export default EventPracticeFList
