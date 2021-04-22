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

let copyright = document.getElementById("copyright");

// List View
function listView() {
  for (let i = 0; i < elements.length; i++) {
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




// Making an HTTP request on GitHub's public API
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
          item.style.color = "white";
          
          let link = document.createElement("a");
          link.href = person.html_url;
          link.innerText = person.login;
          link.className = 'search-result-username';
          
          let profileIMG = document.createElement("img");
          profileIMG.className = 'search-result-profile-image';
          profileIMG.href = person.html_url;
          profileIMG.src = person.avatar_url;
          
          item.appendChild(link);
          item.appendChild(profileIMG);
          list.appendChild(item);
          list.appendChild(profileIMG);

          list.className = 'search-result-items';
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

      // This XMLHTTPRequest needs to be fixed. Should be working, but it isn't
      document.getElementById('secondButt').addEventListener('click', getMoreDataAboutUser);

      function getMoreDataAboutUser(username = 'nNabakhteveli') {
        let getExtraInfo = `${URL}/${username}`;
        let xhr = new XMLHttpRequest();
        
        xhr.open('GET', getExtraInfo, true);
        
        xhr.onload = function () {
          if(this.status == 200) {
            let response = JSON.parse(this.responseText);

            console.log(response);
          } else {
            console.log("Error");
          }
        }
      }
      

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
                <li></li>
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
