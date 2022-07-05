import { content,main,body,header,footer } from "./dom";
import { itemListInputData, itemListInputUi } from "./list-item-function";
import { listItemData, projectData, makeData } from "./data";
import {keyName} from "./project-input-list";

export const delItemForm = function(){
    content.removeChild(content.lastElementChild);

    //remove data on keynamedata array
   let keyName = document.querySelector('.project-name-head').textContent;
   let keyNameData = JSON.parse(localStorage.getItem(keyName));
   keyNameData.splice(-1,1);
    localStorage.setItem(keyName,JSON.stringify( keyNameData));
    console.log('key name data delete btn: '+ keyNameData);//
}


export const addItemForm = function(keyName){
        
        const formItem = document.createElement('div');
        formItem.setAttribute('id','form-item');
        formItem.innerHTML=`
        <label for="title">Title</label>
        <span class="close">&times;</span>
        <br>
        <input type="text" id="title" name="title" value=""><br>
        <label for="note">Note</label><br>
        <input type="text" id="note" name="note" value="" size="50"><br><br>
        <label for="due-date">Due</label><input type="date" id="due-date">
        <select id="priority" name="priority">
        <option value="Urgent">Urgent</option>
        <option value="Not Urgent">Not urgent</option>
        </select> 
        <button class='submit-add'>Add</button>
        `;
        formItem.style.display="inline";
        
        body.appendChild(formItem);
        formItem.style.backgroundColor='white';
        main.style.opacity='0.1';
        header.style.opacity='0.1';
        footer.style.opacity='0.1';
        formItem.style.opacity='1';
        
        console.log('test form');
       

const closeform = document.querySelector('.close');
closeform.addEventListener('click',function(){
        formItem.style.display="none";
        main.style.opacity='1';
        header.style.opacity='1';
        footer.style.opacity='1';
    })
    
    
const submitDom = document.querySelector('.submit-add');
submitDom.addEventListener('click',function(keyName){

    //dom from form
    const titleDom = document.querySelector('#title');
    const noteDom = document.querySelector('#note');
    const dueDateDom = document.querySelector('#due-date');
    const priorityDom = document.querySelector('#priority');


  keyName = document.querySelector('.project-name-head').textContent;
    // new input
    let newInput = new itemListInputData((titleDom.value),(noteDom.value),(dueDateDom.value),(priorityDom.value));
    let keyNameData = JSON.parse(localStorage.getItem(keyName));
    
   
    // if keyNameData null make array, 
    if(keyNameData == null){
        keyNameData = [];
    } 
   
  keyNameData.push(newInput.data());
    console.log(listItemData);

  localStorage.setItem(keyName,JSON.stringify( keyNameData));

  console.log('key name data: '+ keyNameData);//

    //assign data using loop
    const contentChildCont = document.createElement('div');
    contentChildCont.classList.add('content-child-cont');
    content.appendChild(contentChildCont);

    for( let i=0 ; i< keyNameData.length; i++){
        contentChildCont.innerHTML='';

        const contentChild= document.createElement('div');
        contentChild.classList.add('content-child');
        contentChildCont.appendChild(contentChild);

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
    
        console.log('subtimed add form!!');//
        console.log( titleDom.value);//
        formItem.style.display="none";
       
        formItem.innerHTML='';
        main.style.opacity='1';
        header.style.opacity='1';
        footer.style.opacity='1';
        
      
    }
    );
}

