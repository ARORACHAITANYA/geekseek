var toggler = document.querySelector(".toggler");

var nav = document.querySelector(".navigation");

toggler.addEventListener("click", function(){
    nav.classList.toggle("isvisible");
});

window.addEventListener("resize", function(){
    if(nav.classList.contains("isvisible") && window.innerWidth > 960){
        nav.classList.remove("isvisible");
    }
});