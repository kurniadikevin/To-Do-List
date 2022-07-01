import { content,contentList } from "./dom";
import { addItemForm,delItemForm } from "./project-input-list-item";


export const projectList = function(){

  const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-cont');
        const projectHead = document.createElement('div');
        projectHead.classList.add('project-name-head');
        projectHead.textContent= this.textContent ;
        content.innerHTML='';
      projectContainer.appendChild(projectHead);
    content.appendChild(projectContainer);
        const btnList = document.createElement('button');
        btnList.classList.add('btn-list');
        btnList.textContent='Add List';
    projectContainer.appendChild(btnList);
        const delList = document.createElement('button');
        delList.classList.add('btn-del');
        delList.textContent='Remove';
    projectContainer.appendChild(delList);
    
      btnList.addEventListener('click',addItemForm);

      delList.addEventListener('click',delItemForm);

    console.log('test project list');
  
}