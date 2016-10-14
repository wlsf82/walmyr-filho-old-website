var AppearIn = window.AppearIn || require('appearin-sdk');
var appearin = new AppearIn();

appearin.getRandomRoomName().then(function (roomName) {
    var iframe = document.getElementById("iframe-appear");
    roomName = 'mentoring' + roomName;

    appearin.addRoomToIframe(iframe, roomName);
    console.log(roomName);
});
