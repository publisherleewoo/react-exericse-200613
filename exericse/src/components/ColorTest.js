import React from "react";
import { ColorConsumer } from "../contexts/color";

//상태 받는부분
//get

const ColorBox = () => {
    return (
        <ColorConsumer>
            {(value) => {
                // console.log(value);
                return (
                    <>
                        {value.state.color === "red" ? "hi" : value.state.color}
                    </>
                );
            }}
        </ColorConsumer>
    );
};

export default ColorBox;
