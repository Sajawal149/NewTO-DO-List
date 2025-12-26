const inp = document.getElementsByClassName("input");
const addbtn = document.getElementsByClassName("add-btn");
const delall = document.getElementsByClassName("del-all");
const note = document.getElementsByClassName("newNote");

function addNote(){
    inputValue = inp[0].value;
    if(inputValue === "")return;

    const li = document.createElement('li');
    // li.innerText = inputValue;
    
    const text = document.createElement('span');
    text.innerText = inputValue;

    const delBtn = document.createElement('button');
    delBtn.innerText = "❌";
    delBtn.className = "del-btn";
    delBtn.addEventListener('click', function(){
        li.remove();
    });

    li.appendChild(text);
    li.appendChild(delBtn);
    note[0].appendChild(li);
    inp[0].value = "";
}
addbtn[0].addEventListener('click', addNote);

inp[0].addEventListener('keypress' , function(event){
    if(event.key === 'Enter'){
        addNote();
    }
});

delall[0].addEventListener('click' , function() {
    note[0].innerHTML = "";
});