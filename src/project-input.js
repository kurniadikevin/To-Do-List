import { inputForm,projectMain,content } from "./dom";
import{projectList} from './project-list';

export const inputProject = function(){
    //const inputForm = document.querySelector('#p-input');
    const projectAdd = inputForm.value;
    //const projectMain = document.querySelector('#project-main');
    projectMain.innerHTML += `<div class='project'> ${projectAdd} <div>`;
    inputForm.value=' ';
    console.log('add btn');
    const projectName = document.querySelectorAll('.project');
    for(let i=0; i<projectName.length; i++){
        projectName[i].addEventListener('click',projectList);
    }
}

export const deleteProject = function(){
    //const projectMain = document.querySelector('#project-main');
    projectMain.removeChild(projectMain.lastElementChild);
    console.log('del-btn');
}

