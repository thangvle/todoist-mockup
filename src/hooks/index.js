import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import moment from "moment";
import { getCollatedTasks } from "../helpers/index";

const collatedTasksExist = () => {};

const useTasks = (selectProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTask, setArchivedTask] = useState([]);
  // begin use effect
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("UID", "==", "UID");
    unsubscribe =
      selectProject && !collatedTasksExist(selectProject)
        ? (unsubscribe = unsubscribe.where("projectID", "==", selectProject))
        : selectProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment(),
            format("DD/MM/YYYY")
          ))
        : selectProject === "INBOX" || selectProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapShot) => {
      const newTasks = snapShot.docs.map((tasks) => ({
        id: tasks.id,
        ...task.data(),
      }));
      setTasks(
        selectProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );

      setArchivedTask(newTasks.filter((task) => task.archived !== true));
    });
    return () => unsubscribe;
  }, [selectProject]); // when select Project change, rerun the whole useEffect
};

export default useTasks;
