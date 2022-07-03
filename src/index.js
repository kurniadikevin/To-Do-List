import './style.css';
import {inputProject,deleteProject} from './project-input';
import {addBtn,delBtn} from './dom';
//import { listItemData, projectData } from './data';



console.log('testing! OIIIIIIII');

//clear
localStorage.clear();

//const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener("click",inputProject);

//const delBtn = document.querySelector('.del-btn');
delBtn.addEventListener('click',deleteProject);


