import { FC, useRef } from "react";

// useRef可以作为普通的js变量，同时不触发 reRender
export const RefExample2: FC = () => {
  const nameRef = useRef("ptc"); // 不是 dom 节点，是普通的js变量
  function changeName() {
    nameRef.current = "ptc2"; // 修改 ref 值，不会触发 rerender，修改 state 才会
    console.log(nameRef.current);
  }
  return (
    <div>
      <p>name: {nameRef.current}</p>
      <div>
        <button onClick={changeName}>change name</button>
      </div>
    </div>
  );
};
