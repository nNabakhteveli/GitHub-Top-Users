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
userImage.src = "https://avatars3.githubusercontent.com/u/194400?s=460&u=405fb897c18f414ea8c4f4f2613fbef605855f02&v=4";
nameOfUser.innerHTML = "Nelson";
username.innerHTML = "@nelsonic";
followersCount.innerHTML = " 3k followers ";
starsCount.innerHTML = " 3.4k";
userLocation.innerHTML = " London";
mail.innerHTML = " No Mail Provided";
webSite.innerHTML = " https://dwyl.com/";
webSite.href = "https://dwyl.com/";
twitter.innerHTML = " No Twitter Provided";
twitter.href = "#";

// REPOSITORIES
firstRepoName.innerHTML = "dwyl / start-here";
firstRepoLink.href = "https://github.com/dwyl/start-here";
firstRepoDescr.innerHTML = "💡 A Quick-start Guide for People who want to dwyl ❤️ ✅"

secondRepoName.innerHTML = "dwyl / learn-elixir";
secondRepoLink.href = "https://github.com/dwyl/learn-elixir";
secondRepoDescr.innerHTML = "💧 Learn the Elixir programming language to build functional and maintainable web applications!";

thirdRepoName.innerHTML = "nelsonic.github.io";
thirdRepoLink.href = "https://github.com/nelsonic/nelsonic.github.io";
thirdRepoDescr.innerHTML = "📝a place to store ideas, thoughts and interesting links";