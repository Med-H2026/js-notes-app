let notes = document.querySelectorAll('.input-box')
const createBtn = document.querySelector('.btn');
const noteContainer = document.querySelector('.notes-container');

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem('myNotes');
}
showNotes();

function updateStorage(){
    localStorage.setItem('myNotes',noteContainer.innerHTML);
}
createBtn.addEventListener('click',()=>{
    let textInput = document.createElement('p');
    let deleteImg = document.createElement('img');
    textInput.classList.add('input-box');
    textInput.setAttribute('contenteditable','true');
    deleteImg.src='images/delete.png';
    deleteImg.setAttribute('alt','delete icon');
    noteContainer.appendChild(textInput).appendChild(deleteImg);
});
noteContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === 'P'){
        let myNotes =document.querySelectorAll('.input-box');
        myNotes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});