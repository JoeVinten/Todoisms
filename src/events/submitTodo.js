import addTodo from "./addTodo";
import showForm from "./showForm";

const submitTodo = e => {
  e.preventDefault();
  let name = document.querySelector("#todo-name").value.trim();
  let dueDate = document.querySelector("#due-date").value;
  let project = document.querySelector("#projects-drpdwn").value;
  let radioValue;
  document.querySelectorAll('input[name="priority"]').forEach(radio => {
    radio.checked == true ? (radioValue = radio.id) : null;
  });
  addTodo(name, dueDate, project, radioValue);
  document.querySelector(".add-todo").reset();
  showForm(e.target);
};

export default submitTodo;
