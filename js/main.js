const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
let btn=document.querySelector(".btn");


btn.addEventListener('click',function(){
  if(inputBox.value===""){
    alert("You must write something!!!");
  }else{
    let li=document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span)
  }
  inputBox.value="";
  saveData();
})

listContainer.addEventListener('click',function(e){
  if(e.target.localName==="span"){
      e.target.parentElement.remove();
  }else if(e.target.localName==="li"){
    e.target.classList.toggle("checked");
  }
})

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML)
}
function showData(){
  listContainer.innerHTML=localStorage.getItem("data");
}
showData()