const projectsList = document.querySelector(".projects ul");
const projectsDpdwn = document.querySelector("#projects-drpdwn");

const renderProject = proj => {
  projectsList.innerHTML += `<li class="projects__item">${proj}</li>`;
  projectsDpdwn.innerHTML += `<option value="${proj}">${proj}</option>`;
};

export default renderProject;
