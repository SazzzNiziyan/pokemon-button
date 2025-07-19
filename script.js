var btn = document.querySelector("#button1");
var body = document.querySelector("body");
var audio = document.querySelector("audio");
var volumeDownIcon = document.querySelector(".ri-volume-down-line");
var volumeMuteIcon = document.querySelector(".ri-volume-mute-line");
var flag = 0; // Initialize a flag to track if the button has been clicked


volumeMuteIcon.addEventListener("click", function() {
    audio.volume = 0.5; // Set volume to 50%
    if (flag == 0) { // Check if the button has been clicked
        audio.play();
        flag = 1; // Set flag to indicate the button has been clicked
    } // Ensure audio plays when volume is adjusted
    volumeMuteIcon.style.display = "none"; // Hide volume mute icon
    volumeDownIcon.style.display = "block"; // Show volume down icon
});

volumeDownIcon.addEventListener("click", function() {
    audio.volume = 0; // Mute audio
    volumeDownIcon.style.display = "none"; // Hide volume down icon
    volumeMuteIcon.style.display = "block"; // Show volume mute icon
    // audio.pause(); // Pause audio when muted
    // audio.currentTime = 0; // Reset audio to the beginning
    body.removeChild(document.querySelector('.img')); // Remove the last image 
});


function btnOnceWorked() {
    if (flag==0){    
    audio.play(); // Play audio on the first click
    audio.volume = 0.5; // Set volume to 50%
    volumeMuteIcon.style.display = "none"; // Hide volume mute icon
    volumeDownIcon.style.display = "block"; // Show volume down icon
    btn.removeEventListener("click", btnOnceWorked);
    flag = 1; // Set flag to indicate the button has been clicked
    }
}

btn.addEventListener("click", function() {
    btnOnceWorked(); // Remove the event listener after the first click
    let arr = ["./pngaaa.com-3516732.png" , "pngimg.com - pokemon_PNG50.png" ,"pngwing.com (1).png","pngwing.com.png", "pngimg.com - pokemon_PNG111.png","pngimg.com - pokemon_PNG149.png"]
    let image = Math.floor(Math.random()*arr.length )
    var x = Math.random()*90
    var y = Math.random()*90
    var rot = Math.random()*360
    var height = Math.random()*25
    var img = document.createElement('img')
    img.setAttribute('src', arr[image])
    img.setAttribute('class','img')
    img.style.left = x+'%'
    img.style.top = y+'%'
    img.style.rotate = rot+'deg'
    img.style.height = height+'%'
    body.appendChild(img)
})