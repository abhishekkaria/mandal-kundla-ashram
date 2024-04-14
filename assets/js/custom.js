function getBaseUrl() {
<<<<<<< HEAD
    return new URL(location.href);
=======
    return new URL(window.location.origin);
>>>>>>> da7400ef33d1733cb3467a436703d75dd1abc71d
}		

$(function(){
    $("#header").load(getBaseUrl() + "header.html"); 
    $("#footer").load(getBaseUrl() + "footer.html"); 
});