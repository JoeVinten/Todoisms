import addProject from "./addProject";
import showForm from "./showForm";

const submitProject = e => {
  e.preventDefault();
  let textValues = e.target.querySelector("input");
  addProject(textValues);
  textValues.value = "";
  showForm(e.target);
};

export default submitProject;
