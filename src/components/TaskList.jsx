import {
  useMemo,
  useState,
  useDeferredValue,
  useTransition
} from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks = [], dispatch }) {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const [isPending, startTransition] = useTransition();

  // SAFE FILTER
  const filteredTasks = useMemo(() => {
     console.log("Filtering tasks...");
    if (!Array.isArray(tasks)) return [];

    return tasks.filter(task =>
      task?.text
        ?.toLowerCase()
        .includes(deferredSearch.toLowerCase())
    );
  }, [tasks, deferredSearch]);

  // IMPORTANT: onChange must receive a function
  const handleSearch = (e) => {
    const value = e.target.value;

    startTransition(() => {
        console.log("Is pending:", isPending);
      setSearch(value);
    });
  };

  return (
    <>
      <input
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        style={{ marginBottom: "20px" }}
      />

      {isPending && <p>Searching...</p>}

      <ul>
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={(id) =>
              dispatch({ type: "DELETE", payload: id })
            }
            onToggle={(id) =>
              dispatch({ type: "TOGGLE", payload: id })
            }
          />
        ))}
      </ul>
    </>
  );
}