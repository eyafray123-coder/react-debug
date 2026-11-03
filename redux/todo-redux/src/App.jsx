import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

export default function App() {
  return (
    <main className="app">
      <h1>Mes tâches</h1>
      <AddTask />
      <ListTask />
    </main>
  );
}
