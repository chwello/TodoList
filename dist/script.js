const inputText = document.getElementById("input-text");
const addText = document.getElementById("add-text");

function AddTask(){
  if(inputText.value ===''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    addText.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputText.value = '';
  saveData();
}

addText.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();

  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", addText.innerHTML)
}

function showTask(){
  addText.innerHTML = localStorage.getItem("data")
}
showTask();