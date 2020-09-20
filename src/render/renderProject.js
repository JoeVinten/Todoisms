const projectsList = document.querySelector(".projects ul");

const renderProject = proj => {
  let html = `<li class="projects__item">${proj}</li>`;
  projectsList.innerHTML += html;
};

export default renderProject;
