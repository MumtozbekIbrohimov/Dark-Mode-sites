const body = document.querySelector("body")
const darkBtn = document.querySelector(".dark-btn")
const lightBtn = document.querySelector(".light-btn")


darkBtn.addEventListener("click", ()=> {
    body.classList.add("dark-mode")
})
lightBtn.addEventListener("click", ()=> {
    body.classList.remove("dark-mode")
})
