import React, { useCallback, useRef, useReducer } from "react";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

function createBulkTodos() {
    const arr = [];
    for (let i = 1; i <= 2500; i++) {
        arr.push({
            id: i,
            text: `할일:${i}`,
            checked: false,
        });
    }
    return arr;
}

function todoReducer(todos, action) {
    switch (action.type) {
        case "INSERT":
            return todos.concat(action.todo);
        case "REMOVE":
            return todos.filter((todo) => todo.id !== action.id);
        case "TOGGLE":
            return todos.map((todo) =>
                todo.id === action.id
                    ? { ...todo, checked: !todo.checked }
                    : todo
            );
        default:
            return todos;
    }
}

const App = () => {
    const [todos, dispatch] = useReducer(
        todoReducer,
        undefined,
        createBulkTodos
    );

    const nextId = useRef(2501);

    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId,
                text,
                checked: false,
            };
            dispatch({ type: "INSERT", todo });
            nextId.current += 1;
        },
        [todos]
    );

    const onRemove = useCallback((id) => {
        dispatch({ type: "REMOVE", id });
    }, []);

    const onToggle = useCallback(
        (id) => {
            dispatch({ type: "TOGGLE", id });
        },
        [todos]
    );
    return (
        <div>
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
