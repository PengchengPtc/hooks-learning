import { FC } from "react";
import { useMouse } from "../hooks/useMouse";

export const Mouse: FC = () => {
  const { x, y } = useMouse();
  return (
    <div>
      <h1>Mouse</h1>
      <p>x: {x}</p>
      <p>y: {y}</p>
    </div>
  );
};
