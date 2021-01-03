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
userImage.src = "https://avatars3.githubusercontent.com/u/1060?s=460&u=d4790e0ec60657f07aae1a398d7171f167b8d8d0&v=4";
nameOfUser.innerHTML = "Andrew Nesbitt";
username.innerHTML = "@andrew";
followersCount.innerHTML = " 2.5k followers   ";
starsCount.innerHTML = " 6.1k";

userLocation.innerHTML = " UK";
mail.innerHTML = " No Email Provided";
webSite.innerHTML = " https://nesbitt.io/";
webSite.href = "https://nesbitt.io/";
twitter.innerHTML = " teaBass";
twitter.href = "https://twitter.com/teabass?lang=en";

// REPOSITORIES
firstRepoName.innerHTML = " octobox/octobox";
firstRepoLink.href = "https://github.com/octobox/octobox";
firstRepoDescr.innerHTML = "Untangle your GitHub Notifications"

secondRepoName.innerHTML = " Homebrew/homebrew-bundle";
secondRepoLink.href = "https://github.com/Homebrew/homebrew-bundle";
secondRepoDescr.innerHTML = "Bundler for non-Ruby dependencies from Homebrew, Homebrew Cask and the Mac App Store.";

thirdRepoName.innerHTML = " 24pullrequests/24pullrequests";
thirdRepoLink.href = "https://github.com/24pullrequests/24pullrequests";
thirdRepoDescr.innerHTML = "Giving back to open source for the holidays";