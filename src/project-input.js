import { inputForm,projectMain,content } from "./dom";
import{projectList} from './project-input-list';
import { projectData, dataObj } from "./data";

export const inputProject = function(){
    const projectAdd = inputForm.value;
    projectMain.innerHTML += `<div class='project'> ${projectAdd} <div>`;
    
    projectData.push(projectAdd);

   
       // set array for project name
    localStorage.setItem('projectName',projectData);

    /*
    // set key property for project name 
   for(let i=0; i< projectData.length;i++){
        localStorage.setItem(projectData[i],[]);
    }
 */

    console.log('projectData'+ projectData);
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
    localStorage.setItem('projectName',projectData);
    console.log(projectData);
    // project propery

}

