// Search is case sensitive!
const users = [
  {name: "fabien potencier"},
  {name: "andrew nebitt"},
  {name: "taylor otwell"},
  {name: "egoist"},
  {name: "hugo giraudel"},
  {name: "thibault duplessis"},
  {name: "juho vepsalainen"},
  {name: "nelson"},
  {name: "alex crichton"},
  {name: "jongleberry"}
];


const searchInput = document.getElementById("searchBox");
const list = document.getElementById("list");
let headerText = document.getElementById("active-user-text");
let buttons = document.getElementById("buttons");

function setList(group){
  clearList();
  for(let person of group){
    let item = document.createElement("li");
    let link = document.createElement("a");
    link.href = '#';
    link.innerText = person.name;
    item.style.color = "white";
    const text = document.createTextNode(person.name);
    item.appendChild(link);
    list.appendChild(item);
  }
  
  
  switch(group.length){
    case 0:
      headerText.style.top = "140px";
      buttons.style.top = "150px";
      noResults();
      break;
    case 1:
      headerText.style.top = "140px";
      buttons.style.top = "150px";
      break;
    case 2:
      headerText.style.top = "160px";
      buttons.style.top = "170px";
      break;
    case 3:
      headerText.style.top = "185px";
      buttons.style.top = "195px";
      break;
    case 4:
      headerText.style.top = "210px";
      buttons.style.top = "220px";
      break;
    case 6:
      headerText.style.top = "250px";
      buttons.style.top = "260px";
      break;
    case 7:
      headerText.style.top = "275px";
      buttons.style.top = "285px";
      break;
    case 8:
      headerText.style.top = "297px";
      buttons.style.top = "307px";
      break;
    case 10:
      headerText.style.top = "345px";
      buttons.style.top = "355px";
      break;
    default:
      headerText.style.top = "100px";
      break;
  }
}

function clearList(){
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function noResults(){
  const item = document.createElement("li");
  const text = document.createTextNode("No results found");
  item.appendChild(text);
  list.appendChild(item);
  headerText.style.top = "100px";
}

searchInput.addEventListener("input", (event) => {
  let value = event.target.value;
  if(value && value.length > 0) {
    value = value.trim();
    setList(users.filter(person => {
      return person.name.includes(value);
    }));
  }else {
    clearList();
  }
});


let elements = document.getElementsByClassName("column");
let container = document.getElementsByClassName("container");
let i;
let copyright = document.getElementById("copyright");

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
  document.getElementById("copyright").style.top = "3590px";
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
  document.getElementById("copyright").style.top = "2005px";
}
copyright.innerHTML = "© All Rights Reserved - 2020 < Nika Nabakhteveli />"