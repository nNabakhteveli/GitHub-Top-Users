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
userImage.src = "https://avatars0.githubusercontent.com/u/1889710?s=460&u=873c7ab6bdf63f0c6c768258309d57e7acf100fa&v=4";
nameOfUser.innerHTML = "Hugo “Kitty” Giraudel";
username.innerHTML = "@HugoGiraudel";
followersCount.innerHTML = " 2.6k followers ";
starsCount.innerHTML = " 0";

userLocation.innerHTML = " Berlin";
mail.innerHTML = " No Email Provided";
webSite.innerHTML = " https://hugogiraudel.com/";
webSite.href = "https://hugogiraudel.com/";
twitter.innerHTML = " HugoGiraudel";
twitter.href = "https://twitter.com/HugoGiraudel";

// REPOSITORIES
firstRepoName.innerHTML = " ama";
firstRepoDescr.innerHTML = "Ask me anything!"
firstRepoLink.href = "https://github.com/HugoGiraudel/ama";

secondRepoName.innerHTML = " sass-guidelines";
secondRepoDescr.innerHTML = "Guidelines for writing sane, maintainable and scalable Sass.";
secondRepoLink.href = "";

thirdRepoName.innerHTML = " edenspiekermann / a11y-dialog";
thirdRepoDescr.innerHTML = "A very lightweight and flexible accessible modal dialog.";
thirdRepoLink.href = "https://github.com/edenspiekermann/a11y-dialog";