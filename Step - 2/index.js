
function updateMargin(){
    var courseMenu = document.getElementsByClassName("course-menu")[0];
    var content = document.getElementsByClassName("content")[0];
    content.style.marginTop = courseMenu.getBoundingClientRect()["bottom"] + "px";
    
    var courseMenu = document.getElementsByClassName("content-menu")[0];
    var content = document.getElementsByClassName("content")[0];
    content.style.marginLeft = courseMenu.getBoundingClientRect()["right"] + "px";
}
function hideButtons(){
    console.log(123);
    var screenWidth = window.innerWidth;
    var buttons = document.getElementsByClassName("left-menu-section")[0];
    var children = buttons.childNodes;
    // console.log(children);

    for(var child of children){
        if(child.tagName === "SPAN"){
            console.log(child.getBoundingClientRect());
            if(child.getBoundingClientRect()["right"]>screenWidth){
                child.style.display = "none"
            }else{
                child.style.display = "block";
            }
        }
    }
    console.log(window.innerWidth);
    console.log("---------------------------------------------");
}
window.addEventListener('load',updateMargin);
window.addEventListener('resize',updateMargin);
window.addEventListener("resize",hideButtons);//->Not a good idea and not working