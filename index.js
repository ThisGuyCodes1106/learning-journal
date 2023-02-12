import { articleData } from "./data.js"

const hamburger = document.getElementById("hamburger")
const dropdownMenu = document.getElementById("dropdownMenu")

hamburger.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden')
})








// let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
// tweetReplies.classList.toggle('hidden')