import './style.css';
import {inputProject,deleteProject} from './project-input';
import {addBtn,delBtn} from './dom';



console.log('testing!');

//const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener("click",inputProject);

//const delBtn = document.querySelector('.del-btn');
delBtn.addEventListener('click',deleteProject);

