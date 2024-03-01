
function updateMargin(){
    var courseMenu = document.getElementsByClassName("course-menu")[0];
    var content = document.getElementsByClassName("content")[0];
    content.style.marginTop = courseMenu.getBoundingClientRect()["bottom"] + "px";
    
    var courseMenu = document.getElementsByClassName("content-menu")[0];
    var content = document.getElementsByClassName("content")[0];
    content.style.marginLeft = courseMenu.getBoundingClientRect()["right"] + "px";
}
window.addEventListener('load',updateMargin);
window.addEventListener('resize',updateMargin);