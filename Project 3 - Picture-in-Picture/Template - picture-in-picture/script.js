const videoElement = document.getElementById("video")
const button = document.getElementById("button")

// prompt to select media stream, pass to video element then play

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata= ()=>{
            videoElement.play()
        }
    }
    catch(error){
        console.log(`error ${error}`);
    }
}
selectMediaStream()

button.addEventListener("click", async ()=>{
    // disable button
    button.disabled=true
    await videoElement.requestPictureInPicture()
    button.disabled=false
})