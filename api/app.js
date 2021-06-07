const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img")

previews.forEach(previews => {
    previews.addEventListener('click' , () => {
        modal.classList.add("open");
        
    });
});

modal.addEventListener("click" , (e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
})