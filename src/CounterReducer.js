import React, { useReducer } from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.value,
    };
}

const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, { name: "", email: "" });

    const onChangeEvent = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        dispatch({ type: e.target.name, value: e.target.value });
    };

    return (
        <div>
            <input
                name="name"
                value={state.name}
                onChange={onChangeEvent}
            ></input>
            <input
                name="email"
                value={state.email}
                onChange={onChangeEvent}
            ></input>

            {state.name}
            {state.email}
        </div>
    );
};

export default CounterReducer;
