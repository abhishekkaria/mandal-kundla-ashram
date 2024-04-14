function getBaseUrl() {
    return new URL(window.location.origin);
}		

$(function(){
    $("#header").load(getBaseUrl() + "header.html"); 
    $("#footer").load(getBaseUrl() + "footer.html"); 
});