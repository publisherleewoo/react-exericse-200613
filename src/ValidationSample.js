import React, { useState } from "react"
import "./test.css"
const ValidationSample = () => {
  const input = React.createRef()
  const [form, setForm] = useState({
    password: "",
    clicked: false,
    validated: false,
  })
  const { password, clicked, validated } = form
  const handleChange = (e) => {
    const nextItem = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextItem)
  }
  const handleButtonClick = () => {
    const validated = password === "000"
    setForm({ ...form, clicked: true, validated })
    if (!validated) {
      input.current.focus()
      alert("포커스")
    }
  }

  return (
    <div>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
        ref={input}
      />
      <button onClick={handleButtonClick}> 검증하기</button>
    </div>
  )
}

export default ValidationSample
