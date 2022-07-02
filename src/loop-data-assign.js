 import { listItemData } from "./data";
 //assign data using loop
 export const loopDataAssign = function(){

    const contentChildCont = document.createElement('div');
    contentChildCont.classList.add('content-child-cont');
    content.appendChild(contentChildCont);

 for( let i=0 ; i< listItemData.length; i++){
    contentChildCont.innerHTML='';
    const contentChild= document.createElement('div');
    contentChild.classList.add('content-child');
    content.appendChild(contentChild);

    const titleUi = document.createElement('div');
    titleUi.classList.add('title-ui');
   
    titleUi.textContent = listItemData[i][0];
    contentChild.appendChild(titleUi);

    const noteUi = document.createElement('div');
    noteUi.classList.add('note-ui');
    noteUi.textContent= listItemData[i][1];
    contentChild.appendChild(noteUi);
    

    const dueDateUi= document.createElement('div');
    dueDateUi.classList.add('dueDate-ui');
    dueDateUi.textContent= listItemData[i][2];
    contentChild.appendChild(dueDateUi);


    const priorityUi = document.createElement('div');
    priorityUi.classList.add('priority-ui');
    priorityUi.textContent= listItemData[i][3]
    contentChild.appendChild(priorityUi);

 }
}
