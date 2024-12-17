import { useDispatch } from "react-redux";

import { tasksActions } from "../store/tasksSlice";
import styles from "./Task.module.css";

export default function Task({ task }) {
  const dispatch = useDispatch();

  function onChangeHandler() {
    dispatch(tasksActions.changeStatus(task.id));
  }

  function onDeleteHandler() {
    dispatch(tasksActions.deleteTask(task.id));
  }

  return (
    <div className={styles["task-container"]}>
      <div className={styles["status-container"]}>
        <p>Status</p>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onChangeHandler}
        />
      </div>
      <div className={styles.content}>
        <h3
          className={task.completed ? styles["title-completed"] : styles.title}
        >
          {task.title}
        </h3>
        <p>{task.description}</p>
      </div>
      <button onClick={onDeleteHandler}>Delete</button>
    </div>
  );
}
