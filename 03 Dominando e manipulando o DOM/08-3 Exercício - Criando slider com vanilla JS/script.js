var lastIndex = 0;

var images = document.querySelectorAll(".container img");

images.forEach((item, index)=>{
    document.querySelectorAll(".single-bullet")[index]
    .addEventListener('click', ()=>{
        let lastImage = document.querySelectorAll(".container img")[lastIndex];
        let actualImage = document.querySelectorAll(".container img")[index];

        document.querySelectorAll(".single-bullet")[lastIndex].classList.remove("active-bullet");
        document.querySelectorAll(".single-bullet")[index].classList.add("active-bullet");

        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;

        lastIndex = index;
    })
})