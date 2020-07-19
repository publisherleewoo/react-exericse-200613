import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { List } from "react-virtualized";
const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                ></TodoListItem>
            );
        },
        [todos, onRemove, onToggle]
    );

    return (
        <List
            className="TodoList"
            width={512}
            height={513}
            rowCount={todos.length} //항목 갯수
            rowHeight={57}
            rowRenderer={rowRenderer} //항목을 랜더링할때 쓰이는 함수
            list={todos}
            style={{ outline: "none" }} //List에 기본 적용되는 outline 스타일 제거
        ></List>
    );
};

export default TodoList;
