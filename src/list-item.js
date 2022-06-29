import { content,main,body,header,footer } from "./dom";

export const addItemForm = function(){
 const formItem = document.createElement('form');
 formItem.setAttribute('id','form-item');
 formItem.innerHTML=`<form >
 <label for="title">Title</label><br>
 <input type="text" id="title" name="title" value=""><br>
 <label for="note">Note</label><br>
 <input type="text" id="note" name="note" value="" style="width:400px; height: 200px;"><br><br>
 <label for="due-date">Due</label><input type="date" id="due-date"> 
 <input type="submit" value="Add">
</form> `;
 body.appendChild(formItem);
 formItem.style.backgroundColor='white';
 main.style.opacity='0.1';
 header.style.opacity='0.1';
 footer.style.opacity='0.1';
 formItem.style.opacity='1';
 console.log('test form');

}