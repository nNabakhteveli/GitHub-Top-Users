let userImage = document.getElementById("image");
let nameOfUser = document.getElementById("nameOfPerson");
let username = document.getElementById("username");
let followersCount = document.getElementById("numberOfFollowers");
let starsCount = document.getElementById("numberOfStars");
let userLocation = document.getElementById("location");
let mail = document.getElementById("email");
let webSite = document.getElementById("web-site");
let twitter = document.getElementById("twitter");

// First Repository Settings
let firstRepoName = document.getElementById("firstRepoName");
let firstRepoLink = document.getElementById("firstRepoLink");
let firstRepoDescr = document.getElementById("firstRepoDescr");

// Second Repository Settings
let secondRepoName = document.getElementById("secondRepoName");
let secondRepoLink = document.getElementById("secondRepoLink");
let secondRepoDescr = document.getElementById("secondRepoDescr");

// Third Repostory Settings
let thirdRepoName = document.getElementById("thirdRepoName");
let thirdRepoLink = document.getElementById("thirdRepoLink");
let thirdRepoDescr = document.getElementById("thirdRepoDescr");


// TO EDIT USER'S INFO
// MAIN INFO
userImage.src = "https://avatars0.githubusercontent.com/u/166921?s=460&u=01788cd9ae25b31e3c0f2dc5b8c79631e14a59ba&v=4";
nameOfUser.innerHTML = "Juho Vepsäläinen";
username.innerHTML = "@bebraw";
followersCount.innerHTML = " 1.9k followers ";
starsCount.innerHTML = " 2.6k";

userLocation.innerHTML = " Vienna, Austria";
mail.innerHTML = " bebraw@gmail.com";
webSite.innerHTML = " https://survivejs.com/";
webSite.href = "https://survivejs.com/";
twitter.innerHTML = " @bebraw";
twitter.href = "https://twitter.com/bebraw";

// REPOSITORIES
firstRepoName.innerHTML = "survivejs / react-book";
firstRepoLink.href = "";
firstRepoDescr.innerHTML = "From apprentice to master (CC BY-NC-ND)"

secondRepoName.innerHTML = "survivejs / maintenance-book";
secondRepoLink.href = "https://github.com/survivejs/maintenance-book";
secondRepoDescr.innerHTML = "SurviveJS — Maintenance book";

thirdRepoName.innerHTML = "survivejs / sidewind";
thirdRepoLink.href = "https://github.com/survivejs/sidewind";
thirdRepoDescr.innerHTML = "Tailwind but for state";