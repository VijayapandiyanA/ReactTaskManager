import { useState, useRef, useEffect } from "react";

export default function TaskInput({ dispatch }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleAdd = () => {
    if (!input.trim()) return;

    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        text: input,
        completed: false
      }
    });

    setInput("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}