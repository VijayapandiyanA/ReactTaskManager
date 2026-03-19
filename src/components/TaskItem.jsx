import React from "react";

function TaskItem({ task, onDelete, onToggle }) {
    console.log("Rendering:", task.text);
  if (!task) return null;

  return (
    <li style={{ marginBottom: "10px" }}>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px"
        }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>

      <button onClick={() => onDelete(task.id)}>❌</button>
    </li>
  );
}

export default React.memo(TaskItem);