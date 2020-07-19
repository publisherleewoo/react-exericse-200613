import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem" style={style}>
            <div
                className={cn("checkbox", { checked })}
                onClick={() => onToggle(id)}
            >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div
                className="remove"
                onClick={() => {
                    onRemove(id);
                }}
            >
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default React.memo(TodoListItem, (prevProps, nextProps) => {
    //true가 나오면 memo가 실행이 되서 랜더링이 안된다.

    //false가 나오면 memo가 실행이 안되서 랜더링이 된다.
    return prevProps.todo === nextProps.todo;
});
