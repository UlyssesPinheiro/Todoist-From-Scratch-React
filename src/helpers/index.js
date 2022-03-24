export function collatedTasksExist(selectedProject) {
  collatedTasksExist.find((task) => task.key === selectedProject);
}
