import './style.css';
import {inputProject,deleteProject} from './project-input';
import {addBtn,delBtn} from './dom';
import {projectList} from './project-list';


console.log('testing!');

//const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener("click",inputProject);

//const delBtn = document.querySelector('.del-btn');
delBtn.addEventListener('click',deleteProject);

const projectName = document.querySelector('.project');
projectName.addEventListener('click',projectList);