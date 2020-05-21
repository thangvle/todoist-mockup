export const getCollatedTasks = (selectProject) =>
  collatedTaskExist.find((task) => task.key === selectProject);
