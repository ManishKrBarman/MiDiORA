window.onload = function () {
    var audio = document.getElementById("myAudio");
    audio.play().catch(function (error) {
        console.log("Autoplay was prevented. Error: ", error);
    });
};