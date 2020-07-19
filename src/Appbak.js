import React, { useState, useCallback, useRef } from "react";

// import EventPractice from './EventPractice';
// import EventPracticeF from './EventPracticeF';
// import ValidationSample from './ValidationSample';
// import EventPracticeFList from './EventPracticeFList';
// import Info from "./Info";
// import CounterReducer from "./CounterReducer";
// import Average from "./Average";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const App = () => {
    // const [visible, setVisible] = useState(false);
    const nextId = useRef(4);
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "리액트의 기초 알아보기",
            checked: true,
        },
        {
            id: 2,
            text: "컴포넌트 스타일링해 보기",
            checked: true,
        },
        {
            id: 3,
            text: "일정 관리 앱 만들어 보기",
            checked: false,
        },
    ]);

    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId,
                text,
                checked: false,
            };
            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos]
    );

    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            );
        },
        [todos]
    );

    return (
        <div>
            {/* <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? "숨기기" : "보이기"}
            </button>
            {visible && <Info></Info>} */}
            {/* <CounterReducer></CounterReducer> */}
            {/* <Average></Average> */}
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}></TodoInsert>
                <TodoList
                    todos={todos}
                    onRemove={onRemove}
                    onToggle={onToggle}
                ></TodoList>
            </TodoTemplate>
        </div>
    );
};

export default App;
