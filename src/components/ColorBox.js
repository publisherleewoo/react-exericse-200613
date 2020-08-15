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
                        <div
                            style={{
                                width: "64px",
                                height: "64px",
                                background: value.state.color,
                            }}
                        ></div>
                        <div
                            style={{
                                width: "32px",
                                height: "32px",
                                background: value.state.subcolor,
                            }}
                        ></div>
                    </>
                );
            }}
        </ColorConsumer>
    );
};

export default ColorBox;
