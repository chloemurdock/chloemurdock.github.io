var navElements = document.querySelectorAll('nav a')

navElements.forEach(function(element) {

    if (window.location.pathname.length !== 1){
        element.classList.remove("selected");
    }
    console.log(window.location.pathname.length)
// console.log(element.innerText.toLowerCase())
if (window.location.pathname.includes("/"+element.innerText.toLowerCase())) {
    if (window.location.pathname.length == element.innerText.length){
        console.log(element.innerText.length)
    }
    
    console.log(element.innerText.toLowerCase())
    element.classList.add("selected");
}

});
console.log(window.location.pathname)