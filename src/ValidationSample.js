import React, { useState } from "react"
import "./ValidationSample.css"
import { useCallback } from "react"
import { useRef } from "react"
const ValidationSample = () => {
  const input =useRef()
  const [form, setForm] = useState({
    password: "",
    clicked: null,
    validated: false,
  })
  const { password, clicked, validated } = form
  const handleChange = useCallback((e) => {
    const nextItem = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextItem)
  }, [form])
  const handleButtonClick = useCallback(() => {
    const validated = password === "000"
    setForm({ ...form, clicked: true, validated })
    if (!validated) {
      input.current.focus()
    }
  }, [form,input,password])

  return (
    <div>
      <span className="success">비밀번호 000 입력시</span>
      <br />
      <span className="failure">그 외 </span>
      <br />
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
        className={clicked && (validated ? "success" : "failure") }
        ref={input}
      />
      <button onClick={handleButtonClick}> 검증하기</button>
    </div>
  )
}

export default ValidationSample
