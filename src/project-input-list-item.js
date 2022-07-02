import { content,main,body,header,footer } from "./dom";
import { itemListInputData, itemListInputUi } from "./list-item-function";
import { listItemData } from "./data";


export const delItemForm = function(){
    content.removeChild(content.lastElementChild);
}


export const addItemForm = function(){
        
        const formItem = document.createElement('div');
        formItem.setAttribute('id','form-item');
        formItem.innerHTML=`
        <label for="title">Title</label>
        <span class="close">&times;</span>
        <br>
        <input type="text" id="title" name="title" value=""><br>
        <label for="note">Note</label><br>
        <input type="text" id="note" name="note" value="" style="width:400px; height: 200px;"><br><br>
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
submitDom.addEventListener('click',function(){

    //dom from form
    const titleDom = document.querySelector('#title');
    const noteDom = document.querySelector('#note');
    const dueDateDom = document.querySelector('#due-date');
    const priorityDom = document.querySelector('#priority');




    //new input data
    itemListInputData;
    let newInput = new itemListInputData(`${titleDom.value},${noteDom.value},${dueDateDom.value},${priorityDom.value}`);
    listItemData.push(newInput.data());
    console.log(listItemData);

    //assign data using loop
    const contentChildCont = document.createElement('div');
    contentChildCont.classList.add('content-child-cont');
    content.appendChild(contentChildCont);

    for( let i=0 ; i< listItemData.length; i++){
        contentChildCont.innerHTML='';

        const contentChild= document.createElement('div');
        contentChild.classList.add('content-child');
        contentChildCont.appendChild(contentChild);

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

