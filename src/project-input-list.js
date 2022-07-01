import { content } from "./dom";
import { addItemForm } from "./project-input-list-item";


export const projectList = function(){
  content.innerHTML='';
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project-cont');
      const projectHead = document.createElement('div');
      projectHead.classList.add('project-name-head');
      projectHead.textContent= this.textContent ;

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

    const listItemOutput= document.createElement('div');
    listItemOutput.classList.add('list-item-output');
    listItemOutput.textContent=
    content.appendChild(listItemOutput);


   
  console.log('test project list');
  
}