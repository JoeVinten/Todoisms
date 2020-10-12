let projects = [{ projectName: "Default", todos: [] }];

const Project = (projectName, todos) => {
  return { projectName, todos };
};

export { Project, projects };
