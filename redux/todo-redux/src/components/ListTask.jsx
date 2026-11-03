import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../tasksSlice";
import Task from "./Task";

const FILTERS = [
  { value: "all", label: "Toutes" },
  { value: "done", label: "Faites" },
  { value: "notDone", label: "Pas faites" },
];

export default function ListTask() {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.tasks);

  const visibleTasks = items.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <section>
      <div className="filters" role="group" aria-label="Filtrer les tâches">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={filter === f.value ? "active" : ""}
            aria-pressed={filter === f.value}
            onClick={() => dispatch(setFilter(f.value))}
          >
            {f.label}
          </button>
        ))}
      </div>

      {visibleTasks.length === 0 ? (
        <p className="empty">Aucune tâche à afficher.</p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </section>
  );
}
