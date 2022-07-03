 //import { listItemData as keyNameData, projectData } from "./data";
 //assign data using loop
 export const loopDataAssign = function(){

    const contentChildCont = document.createElement('div');
    contentChildCont.classList.add('content-child-cont');
    content.appendChild(contentChildCont);

    //keyNameData=[];// clear list when switch project
   

    let keyName = document.querySelector('.project-name-head').textContent;
    let keyNameData = JSON.parse(localStorage.getItem(keyName));
    console.log('keynamedata'+ keyNameData);

 for( let i=0 ; i< keyNameData.length; i++){
    contentChildCont.innerHTML='';
    const contentChild= document.createElement('div');
    contentChild.classList.add('content-child');
    content.appendChild(contentChild);

    const titleUi = document.createElement('div');
    titleUi.classList.add('title-ui');
   
    titleUi.textContent = keyNameData[i][0];
    contentChild.appendChild(titleUi);

    const noteUi = document.createElement('div');
    noteUi.classList.add('note-ui');
    noteUi.textContent= keyNameData[i][1];
    contentChild.appendChild(noteUi);
    

    const dueDateUi= document.createElement('div');
    dueDateUi.classList.add('dueDate-ui');
    dueDateUi.textContent= keyNameData[i][2];
    contentChild.appendChild(dueDateUi);


    const priorityUi = document.createElement('div');
    priorityUi.classList.add('priority-ui');
    priorityUi.textContent= keyNameData[i][3]
    contentChild.appendChild(priorityUi);

 }
}
