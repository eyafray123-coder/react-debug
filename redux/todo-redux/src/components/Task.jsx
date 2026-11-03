import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask } from "../tasksSlice";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.description);

  const save = () => {
    const text = draft.trim();
    if (text) dispatch(editTask({ id: task.id, description: text }));
    else setDraft(task.description);
    setIsEditing(false);
  };

  const cancel = () => {
    setDraft(task.description);
    setIsEditing(false);
  };

  return (
    <li className={`task ${task.isDone ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
        aria-label="Marquer comme faite"
      />

      {isEditing ? (
        <>
          <input
            className="edit-input"
            type="text"
            value={draft}
            autoFocus
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") cancel();
            }}
          />
          <button onClick={save}>Enregistrer</button>
          <button className="secondary" onClick={cancel}>
            Annuler
          </button>
        </>
      ) : (
        <>
          <span className="description">{task.description}</span>
          <button className="secondary" onClick={() => setIsEditing(true)}>
            Modifier
          </button>
        </>
      )}
    </li>
  );
}
