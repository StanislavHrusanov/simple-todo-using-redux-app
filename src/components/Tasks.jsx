import { useSelector } from "react-redux";

import Task from "./Task";
import styles from "./Tasks.module.css";

export default function Tasks() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className={styles.container}>
      <h2>Tasks</h2>
      <div>
        {tasks.length !== 0 &&
          tasks.map((task) => <Task key={task.id} task={task} />)}
      </div>
    </div>
  );
}
