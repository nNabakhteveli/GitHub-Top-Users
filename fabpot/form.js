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
userImage.src = "https://avatars3.githubusercontent.com/u/47313?s=460&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4";
nameOfUser.innerHTML = "Fabien Potencier";
username.innerHTML = "@fabpot";
followersCount.innerHTML = " 11.1k followers ";
starsCount.innerHTML = " 161";

userLocation.innerHTML = " Lille, France";
mail.innerHTML = " fabien@symfony.com";
webSite.innerHTML = " http://fabien.potencier.org/";
webSite.href = " http://fabien.potencier.org/";
twitter.innerHTML = " @fabpot";
twitter.href = "https://twitter.com/fabpot";

// REPOSITORIES
firstRepoName.innerHTML = " symfony/symfony";
firstRepoLink.href = "https://github.com/symfony/symfony";
firstRepoDescr.innerHTML = "The Symfony PHP framework"

secondRepoName.innerHTML = " twigphp/Twig";
secondRepoLink.href = "https://github.com/twigphp/Twig";
secondRepoDescr.innerHTML = "Twig, the flexible, fast, and secure template language for PHP";

thirdRepoName.innerHTML = " splitsh/lite";
thirdRepoLink.href = "https://github.com/splitsh/lite";
thirdRepoDescr.innerHTML = "Split a repository to read-only standalone repositories";