import { useState, useEffect } from "react";

export function useMouse() {
  const [mousePosition, setMousePosition] = useState<
    Record<string, number | null>
  >({ x: null, y: null });
  // 绑定[]就是组件渲染完成时执行
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition); // 非jsx绑定的事件，浏览器自己绑定的监听事件必须得清除，定时器也
    // useEffect销毁时候执行解开绑
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}
