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
userImage.src = "https://avatars2.githubusercontent.com/u/140370?s=460&v=4";
nameOfUser.innerHTML = "Thibault Duplessis";
username.innerHTML = "@ornicar";
followersCount.innerHTML = " 2.8k" + " followers ";
starsCount.innerHTML = " 660";

userLocation.innerHTML = " France";
mail.innerHTML = " No Email Provided";
webSite.innerHTML = " https://lichess.org/";
webSite.href = "https://lichess.org/";
twitter.innerHTML = " @ornicar";
twitter.href = "https://twitter.com/ornicar";

// REPOSITORIES
firstRepoName.innerHTML = "lila";
firstRepoLink.href = "https://github.com/ornicar/lila";
firstRepoDescr.innerHTML = "♞ lichess.org: the forever free, adless and open source chess server ♞"

secondRepoName.innerHTML = "scalachess";
secondRepoLink.href = "https://github.com/ornicar/scalachess";
secondRepoDescr.innerHTML = "Chess API written in scala. Immutable and free of side effects.";

thirdRepoName.innerHTML = "chessground";
thirdRepoLink.href = "https://github.com/ornicar/chessground";
thirdRepoDescr.innerHTML = "Mobile/Web chess UI for lichess.org";