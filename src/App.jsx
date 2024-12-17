import { useSelector } from "react-redux";

import styles from "./App.module.css";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

function App() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <main className={styles.main}>
      <NewTask />
      {tasks.length > 0 && <Tasks />}
    </main>
  );
}

export default App;
