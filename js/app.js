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
//On scrolling down 20px the button appears
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("moveToTop").style.display = "block";
    } else{
        document.getElementById("moveToTop").style.display = "none";
    }
}
//On clicking go to top of the page
function moveToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
