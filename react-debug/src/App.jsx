import { useState } from "react";

function UserProfile({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

function App() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <main>
      <h1>React Developer Tools Checkpoint</h1>

      <UserProfile name="Eya" role="Student" />
      <button onClick={() => setShowProfile(!showProfile)}>
        Toggle Profile
      </button>

      <Counter />
    </main>
  );
}

export default App;
