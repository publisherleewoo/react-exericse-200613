//contexts/color.js

import React, { createContext, useState } from "react";
//상태 초기화

const ColorContext = createContext({
    state: { color: "black", subcolor: "red" },
    actions: {
        setColor: () => {},
        setSubcolor: () => {},
    },
});

//상태 제공하는부분.
//set
const ColorProvider = ({ children }) => {
    const [color, setColor] = useState("black");
    const [subcolor, setSubcolor] = useState("red");

    return (
        <ColorContext.Provider
            value={{
                state: { color, subcolor },
                actions: {
                    setColor,
                    setSubcolor,
                },
            }}
        >
            {children}
        </ColorContext.Provider>
    );
};

const { Consumer: ColorConsumer } = ColorContext;
// const ColorConsumer = ColorContext.Consumer
export { ColorProvider, ColorConsumer };

export default ColorContext;
