let projects = [{ projectName: "Default", todo: [] }];

const Project = (projectName, todos) => {
  return { projectName, todos };
};

export { Project, projects };
