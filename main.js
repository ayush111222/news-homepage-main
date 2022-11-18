const toggleButton = document.querySelector("button");
const ulManu = document.getElementById("manu__toggle");

toggleButton.addEventListener("click", function(){
    this.classList.toggle("active1");
    this.nextElementSibling.classList.toggle("active2");       
})