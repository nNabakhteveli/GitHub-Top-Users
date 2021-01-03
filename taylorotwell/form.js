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
userImage.src = "https://avatars3.githubusercontent.com/u/463230?s=460&u=0c486fbe3a30dadd5c5981a9fbc3a0d269ca0c33&v=4";
nameOfUser.innerHTML = "Taylor Otwell";
username.innerHTML = "@taylorotwell";
followersCount.innerHTML = " 20.9k followers ";
starsCount.innerHTML = " 193";

userLocation.innerHTML = " Little Rock, AR";
mail.innerHTML = " taylor@laravel.com";
webSite.innerHTML = " http://laravel.com/";
webSite.href = "https://laravel.com/";
twitter.innerHTML = " @taylorotwell";
twitter.href = "https://twitter.com/taylorotwell?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"

// REPOSITORIES
firstRepoName.innerHTML = " laravel / laravel";
firstRepoLink.href = "https://github.com/laravel/laravel";
firstRepoDescr.innerHTML = "A PHP framework for web artisans"

secondRepoName.innerHTML = " laravel / framework";
secondRepoLink.href = "https://github.com/laravel/framework";
secondRepoDescr.innerHTML = "PHP framework";

thirdRepoName.innerHTML = " TrustedProxy";
thirdRepoLink.href = "https://github.com/taylorotwell/TrustedProxy";
thirdRepoDescr.innerHTML = "Laravel Proxy Package for handling sessions when behind load balancers or other intermediaries.";