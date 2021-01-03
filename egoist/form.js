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
userImage.src = "https://avatars0.githubusercontent.com/u/8784712?s=460&u=f51db94a64fd0780bbfe3fc9d5f8609be35661a0&v=4";
nameOfUser.innerHTML = "Kevin Hazy";
username.innerHTML = "@egoist";
followersCount.innerHTML = " 7.9k followers";
starsCount.innerHTML = " 3k";

userLocation.innerHTML = " China";
mail.innerHTML = " 0x142857@gmail.com";
webSite.innerHTML = " https://egoist.sh/";
webSite.href = "https://egoist.sh/";
twitter.innerHTML = " @_egoistlily";
twitter.href = "https://twitter.com/_egoistlily";

// REPOSITORIES
firstRepoName.innerHTML = " amibot";
firstRepoLink.href = "https://github.com/egoist/amibot";
firstRepoDescr.innerHTML = "Detect bots via user-agent. (Am I bot?)"

secondRepoName.innerHTML = " docup";
secondRepoLink.href = "https://github.com/egoist/docup";
secondRepoDescr.innerHTML = "The easiest way to write beautiful docs.";

thirdRepoName.innerHTML = " presite";
thirdRepoLink.href = "https://github.com/egoist/presite";
thirdRepoDescr.innerHTML = "A static site generator based on Puppeteer.";