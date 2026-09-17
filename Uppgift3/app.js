const goodBye = document.querySelector("#goodBye")
const header = document.querySelector("#header")

goodBye.addEventListener("click", function () {
  header.innerHTML = "Goodbye World!"
})