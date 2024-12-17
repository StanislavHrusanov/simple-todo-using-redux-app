import { useState } from "react";
import { useDispatch } from "react-redux";

import { tasksActions } from "../store/tasksSlice";
import styles from "./NewTask.module.css";

export default function NewTask() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  function onChangeHandler(e) {
    setInputs((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    if (inputs.title === "" || inputs.description === "") {
      window.alert("Invalid title or description!");
      return;
    }

    dispatch(tasksActions.addNewTask(inputs));

    setInputs({
      title: "",
      description: "",
    });
  }

  return (
    <section className={styles.section}>
      <h2>New Task</h2>
      <form onSubmit={onSubmitHandler}>
        <div className={styles["input-container"]}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={inputs.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={inputs.description}
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles["input-container"]}>
          <button>Add Task</button>
        </div>
      </form>
    </section>
  );
}
