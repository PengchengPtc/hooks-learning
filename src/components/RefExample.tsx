import { FC, useRef } from "react";

export const RefExample: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  function selectInput() {
    const inputElem = inputRef.current; // inputElem就是dom节点
    inputElem && inputElem.focus();
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={selectInput}>选中 input</button>
    </div>
  );
};
