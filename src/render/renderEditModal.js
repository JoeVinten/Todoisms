import { projects } from "../factories/Project";

const mainBody = document.querySelector(".main");

const renderEditModal = (e, target) => {
  let clickedProject = e.target.parentElement.parentElement.dataset.project;
  projects.forEach(project => {
    if (project.projectName == clickedProject) {
      project.todos.forEach(todo => {
        if (todo.uniqId == target) {
          name = todo.name;
          project = todo.project;
          status = todo.status;
        }
      });
    }
  });

  // Get the projects arra
  const modalPopup = `
  <div class="dark-overlay">
    <div class="modal" data-id=${target} data-project=${clickedProject}>
      <form class="modal-form">
        <h2 contenteditable="true">${name}</h2>
        <label for="due-date">Due date:</label>
        <input
          type="date"
          id="due-date"
          class="short-input short-input--outline short-input--date sm-mg
        />  
        <label for="edit-priority">Priority:</label>
        <div id="edit-priority" class="change-priority sm-mg">
          <div class="pri-circle green" data-priority="low"></div>
          <div class="pri-circle yellow" data-priority="med"></div>
          <div class="pri-circle red" data-priority="high"></div>
        </div>
      </form>
    </div>
  </div>`;

  mainBody.innerHTML += modalPopup;
};

export default renderEditModal;
