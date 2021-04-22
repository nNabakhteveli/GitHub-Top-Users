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
let list = document.getElementById("list");
let headerText = document.getElementById("active-user-text");
let buttons = document.getElementById("buttons");


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
copyright.innerHTML = "© All Rights Reserved - 2020 < Nika Nabakhteveli />";




document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers() {
  const xhr = new XMLHttpRequest();
  const URL = 'https://api.github.com/users';

  xhr.open('GET', URL, true);


  xhr.onload = function() {
    let output;
    if(this.status == 200) {
      let users = JSON.parse(this.responseText);
      
      console.log(Array.isArray(users));
      console.log(users);



      function setList(group){
        clearList();
        for(let person of group){
          let item = document.createElement("li");
          let link = document.createElement("a");
          link.href = person.html_url;
          link.innerText = person.login;
          item.style.color = "white";
          const text = document.createTextNode(person.login);
          item.appendChild(link);
          list.appendChild(item);
        }
      }



      searchInput.addEventListener("input", (event) => {
        let value = event.target.value;
        if(value && value.length > 0) {
          value = value.trim();
          setList(users.filter(githubUser => {
            return githubUser.login.includes(value);
          }));
        }else {
          clearList();
        }
      });



      let counter = 0;
      for(i in users) {
          output += `
            <div class="column" style="background-color:#aaa;">
              <p></p>
              <img src=${users[i].avatar_url} class="image" />
              <ul style="list-style-type: none;">
                <li><a class="gh-username" href=${users[i].html_url} style="text-decoration: none; color: black;" target="_blank">${users[i].login}</a></li>
                <li>Account type: ${users[i].type}</li>
                <li>Twitter: ${users[i].login}</li>
              </ul> 
            </div> `;
            counter ++;

            if(counter == 10) {
              break;  
            }
        }
      }
    document.getElementById('container').innerHTML = output;
  }
  xhr.send();
}












// switch(group.length){
//   case 0:
//     headerText.style.top = "140px";
//     buttons.style.top = "150px";
//     noResults();
//     break;

//   case 1:
//     headerText.style.top = "140px";
//     buttons.style.top = "150px";
//     break;

//   case 2:
//     headerText.style.top = "160px";
//     buttons.style.top = "170px";
//     break;

//   case 3:
//     headerText.style.top = "185px";
//     buttons.style.top = "195px";
//     break;

//   case 4:
//     headerText.style.top = "210px";
//     buttons.style.top = "220px";
//     break;

//   case 6:
//     headerText.style.top = "250px";
//     buttons.style.top = "260px";
//     break;

//   case 7:
//     headerText.style.top = "275px";
//     buttons.style.top = "285px";
//     break;

//   case 8:
//     headerText.style.top = "297px";
//     buttons.style.top = "307px";
//     break;

//   case 10:
//     headerText.style.top = "345px";
//     buttons.style.top = "355px";
//     break;

//   default:
//     headerText.style.top = "100px";
//     break;
// }