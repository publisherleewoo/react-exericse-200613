import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
    console.log("평균값 계산중...");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setlist] = useState([]);
    const [number, setNumber] = useState("");
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(
        (e) => {
            const nextList = list.concat(parseInt(number));
            setlist(nextList);
            setNumber("");
            inputEl.current.focus();
        },
        [list, number]
    );

    const avg = useMemo(() => getAverage(list), [list]); //값, 객체

    return (
        <div>
            <input
                type="text"
                value={number}
                onChange={onChange}
                ref={inputEl}
            />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
            <div>평균값:{avg}</div>
        </div>
    );
};

export default Average;
