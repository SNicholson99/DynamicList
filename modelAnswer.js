let list = [];

function AddItem(){
  const input = document.getElementById("input").value;
  list.push(input);
}

document.getElementById("ul");
ul.innerHTML="";
list.forEach(item =>{
  const li = document.getElementById("li");
  list.innerHTML = item;
  ul.appendChild(li);
})

//
const button = document.createElement("button");
button.setAttribute('onclick', removeItem(li){
  ul.removeChild(item);
})
//

//ID is better to use than highlighted section (see index.html)
