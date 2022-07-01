import { inputForm,projectMain,content } from "./dom";
import{projectList} from './project-input-list';
import { projectData } from "./data";

export const inputProject = function(){
    const projectAdd = inputForm.value;
    projectMain.innerHTML += `<div class='project'> ${projectAdd} <div>`;
    projectData.push(projectAdd);
    console.log(projectData);//
    inputForm.value=' ';
    console.log('add btn');

    const projectName = document.querySelectorAll('.project');
    for(let i=0; i<projectName.length; i++){
        projectName[i].addEventListener('click',projectList);
    }
}

export const deleteProject = function(){
    projectMain.removeChild(projectMain.lastElementChild);
    console.log('del-btn');
    projectData.pop();
    console.log(projectData);

}

