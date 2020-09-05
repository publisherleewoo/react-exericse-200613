//App.js
import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColor from "./components/SelectColor";
import ColorTest from "./components/ColorTest";
import ParentComponent from "./components/ParentComponent";

const App = () => {
    return (
        <ColorProvider>
            <div>
                <ColorTest />
                <SelectColor />
                <ParentComponent />
                <ColorBox />
                <ColorBox />
                <ColorBox />

                <ColorBox />
                <ColorBox />
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default App;
