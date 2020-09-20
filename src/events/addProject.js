import { Project, projects } from "../factories/Project";
import renderProject from "../render/renderProject";

const addProject = proj => {
  let name = proj.value.trim();
  const newProject = Project(name, new Array());
  projects.push(newProject);
  renderProject(name);
};

export default addProject;
