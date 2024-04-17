function getBaseUrl() {
    return new URL(location.href.substring(0,location.href.lastIndexOf('/') + 1));
}		

$(function(){
    $("#header").load(getBaseUrl() + "header.html"); 
    $("#footer").load(getBaseUrl() + "footer.html"); 
});