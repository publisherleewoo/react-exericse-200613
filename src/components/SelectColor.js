//components/SelectColor.js

import React from "react";
import { ColorConsumer } from "../contexts/color";

const color = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColor = () => {
    return (
        <div>
            <h2>색상을 선택하세요</h2>
            <ColorConsumer>
                {(value) => {
                    console.log("SelectColor > ColorConsumer", value);
                    return (
                        <div style={{ display: "flex" }}>
                            {color.map((color) => (
                                <div
                                    key={color}
                                    style={{
                                        background: color,
                                        width: "24px",
                                        height: "24px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        value.actions.setColor(color)
                                    }
                                    onContextMenu={(e) => {
                                        e.preventDefault();
                                        value.actions.setSubcolor(color);
                                    }}
                                />
                            ))}
                        </div>
                    );
                }}
            </ColorConsumer>
            <hr />
        </div>
    );
};

export default SelectColor;
