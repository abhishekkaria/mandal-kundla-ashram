function getBaseUrl() {
    return new URL(location.href);
}		

$(function(){
    $("#header").load(getBaseUrl() + "header.html"); 
    $("#footer").load(getBaseUrl() + "footer.html"); 
});