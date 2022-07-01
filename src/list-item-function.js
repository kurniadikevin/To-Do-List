import { content } from "./dom";

//for data
const itemListInputData = function(title,note,dueDate,priority){
    this.title = title;
    this.note = note;
    this.dueDate = dueDate;
    this.priority = priority;
    this.data = function(){
        const titleArr=[title,note,dueDate,priority];
        return titleArr;
    }
}



// for UI
export const itemListInputUi = function(){
    const titleUi = document.createElement('div');
    titleUi.classList.add('title-ui');
    const titleDom = document.querySelector('#title');
    titleUi.textContent = titleDom.value;
    content.appendChild(titleUi);
    const noteUi = document.createElement('div');
    noteUi.classList.add('note-ui');
    const dueDateUi= document.createElement('div');
    dueDateUi.classList.add('dueDate-ui');
    const priorityUi = document.createElement('div');
    priorityUi.classList.add('priority-ui');
    console.log('subtimed add form!!');
    console.log( titleDom.value);
    formItem.style.dislay='none';
}
