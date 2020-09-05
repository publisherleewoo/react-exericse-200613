import React, { useState, useEffect } from "react";

const Info = () => {
    const [name, setname] = useState("");
    const [nickname, setnickname] = useState("");

    useEffect(() => {
        console.log("마운트되었습니다.");
        return () => {
            console.log("언마운트");
        };
    }, []);

    useEffect(() => {
        console.log("랜더링이 완료되었습니다");
        console.log({ name, nickname });
        return () => {
            console.log("cleanup");
        };
    });

    useEffect(() => {
        console.log("마운트되었을때, name값이 변할때만 실행됩니다.");
        return () => {
            console.log("name클린업");
            console.log(name);
        };
    }, [name]);

    const onChangename = (e) => {
        setname(e.target.value);
    };
    const onChangenickname = (e) => {
        setnickname(e.target.value);
    };

    return (
        <div>
            <input value={name} onChange={onChangename}></input>
            <input value={nickname} onChange={onChangenickname}></input>
        </div>
    );
};

export default Info;
