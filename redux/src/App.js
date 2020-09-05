import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
    return (
        <div className="App">
            <Counter number={0} />
            <Todos />
        </div>
    );
}

export default App;
