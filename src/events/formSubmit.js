import addProject from "./addProject";
import showForm from "../events/showForm";

const formSubmit = e => {
  e.preventDefault();
  let textValues = e.target.querySelectorAll("input");
  textValues.forEach(element => {
    if (e.target.classList.contains("add-project")) {
      addProject(element);
      element.value = "";
      showForm(e.target);
    }
  });
};

export default formSubmit;
