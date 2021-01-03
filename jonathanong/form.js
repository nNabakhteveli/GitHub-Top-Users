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
userImage.src = "https://avatars3.githubusercontent.com/u/643505?s=460&u=dae9100bbd42543c6f8e0ca857a0d34e820c6432&v=4";
nameOfUser.innerHTML = "jongleberry";
username.innerHTML = "@jonathanong";
followersCount.innerHTML = " 2k followers ";
starsCount.innerHTML = " 146";

userLocation.innerHTML = " Los Angeles, CA";
mail.innerHTML = " me@jongleberry.com";
webSite.innerHTML = " No Website Provided";
webSite.href = "#";
twitter.innerHTML = " @jongleberry";
twitter.href = "https://twitter.com/jongleberry";

// REPOSITORIES
firstRepoName.innerHTML = "osx-webdev-setup";
firstRepoLink.href = "https://github.com/jonathanong/osx-webdev-setup";
firstRepoDescr.innerHTML = "The perfect web development OS X setup"

secondRepoName.innerHTML = "gh-automerge";
secondRepoLink.href = "https://github.com/jonathanong/gh-automerge";
secondRepoDescr.innerHTML = "Automatically merge your PRs";

thirdRepoName.innerHTML = "koajs / koa";
thirdRepoLink.href = "https://github.com/koajs/koa";
thirdRepoDescr.innerHTML = "Expressive middleware for node.js using ES2017 async functions";