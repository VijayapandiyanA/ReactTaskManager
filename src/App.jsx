import { useReducer, useEffect, useContext } from "react";
import { taskReducer } from "./reducers/taskReducer";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

function AppContent() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = `Tasks (${tasks.length})`;
  }, [tasks]);

  const appStyle = {
    padding: "20px",
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#ffffff" : "#1e1e1e",
    color: theme === "light" ? "#000000" : "#ffffff",
    transition: "all 0.3s ease"
  };

  return (
    <div style={appStyle}>
      <h1>React Task Manager Pro</h1>
      <ThemeToggle />
      <TaskInput dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}