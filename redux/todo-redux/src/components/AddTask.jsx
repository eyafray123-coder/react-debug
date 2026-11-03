import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";

export default function AddTask() {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = description.trim();
    if (!text) return;
    dispatch(addTask(text));
    setDescription("");
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Nouvelle tâche…"
        aria-label="Description de la nouvelle tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
