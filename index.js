const btn = document.getElementById("submit")
const btnClear = document.getElementById("clear")
btn.addEventListener("click",(e) => handleSubmit(e))
btnClear.addEventListener("click", clear)

function handleSubmit(e){
    e.preventDefault()
    const line = document.getElementById("input");
    if (!line.value){ return; }
    const list = document.getElementById("list");
    const newItem = document.createElement("li");
    newItem.innerText = line.value;
    newItem.id = "item-" + list.children.length;
    newItem.onclick = (e) => mark(e);
    list.appendChild(newItem);
    line.value = "";
    console.log()
}

function mark(item){
    if(!item.target.style.textDecoration){
        item.target.style.textDecoration = "line-through"
    }
    else{
        item.target.style.textDecoration =  ""
    }
}

function clear(){
    const list = document.getElementById("list");
    list.innerHTML = ""
}