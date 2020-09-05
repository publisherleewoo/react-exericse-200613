import React from "react";
import { ColorConsumer } from "../contexts/color";

const ChildComponent = () => {
    return (
        <div style={{ background: "gray", border: "1px solid black" }}>
            <ColorConsumer>
                {(value) => {
                    return <div>{value.state.color}</div>;
                }}
            </ColorConsumer>
        </div>
    );
};

export default ChildComponent;
