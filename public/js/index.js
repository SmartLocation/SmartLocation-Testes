/*global io*/
var socket = io();

function getPosition(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else { 
        $('body').text("Geolocation is not supported by this browser.");
    } 
}

function showPosition(position){
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    socket.emit('newposition', latlon);
    var url_image = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&scale=2&size="+screen.availWidth+"x"+screen.availHeight+"&sensor=false&&markers=color:red%7Clabel:P%7C"+latlon;
    $('h1').after("<img src="+url_image+" alt="+latlon+"/>");
    console.log(position);
}

getPosition();
