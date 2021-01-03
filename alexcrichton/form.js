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
userImage.src = "https://avatars1.githubusercontent.com/u/64996?s=460&v=4";
nameOfUser.innerHTML = "Alex Crichton";
username.innerHTML = "@alexcrichton";
followersCount.innerHTML = " 3.3k followers ";
starsCount.innerHTML = " 34";

userLocation.innerHTML = " No Location Provided";
mail.innerHTML = " alex@alexcrichton.com";
webSite.innerHTML = " No Website Provided";
webSite.href = "#";
twitter.innerHTML = " No Twitter Provided";
twitter.href = "#";

// REPOSITORIES
firstRepoName.innerHTML = "rust-ffi-examples";
firstRepoLink.href = "https://github.com/alexcrichton/rust-ffi-examples";
firstRepoDescr.innerHTML = "FFI examples written in Rust"

secondRepoName.innerHTML = "toml-rs";
secondRepoLink.href = "https://github.com/alexcrichton/toml-rs";
secondRepoDescr.innerHTML = "A TOML encoding/decoding library for Rust";

thirdRepoName.innerHTML = "curl-rust";
thirdRepoLink.href = "https://github.com/alexcrichton/curl-rust";
thirdRepoDescr.innerHTML = "Rust bindings to libcurl";