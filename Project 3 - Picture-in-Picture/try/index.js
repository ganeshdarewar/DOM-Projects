const shareScreenElement = document.getElementById("share-screen");
const shareScreenBtn = document.getElementById("share-screen-btn");
const accessCameraBtn = document.getElementById("access-camera-btn");
const accessCameraElement = document.getElementById("access-camera");

async function getScreen() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        shareScreenElement.srcObject = mediaStream;
        shareScreenElement.onloadeddata = () => {
            shareScreenElement.play(); // Start playing the video once metadata is loaded
        };
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}


shareScreenBtn.addEventListener("click", getScreen);

let stream;


async function accessCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        // Attach the stream to the video element
        accessCameraElement.srcObject = stream;
        // Play the video
        accessCameraElement.play();
    } catch (error) {
        console.error("Error accessing camera:", error);
    }
}

accessCameraBtn.addEventListener("click", accessCamera);




accessCameraBtn.addEventListener("click",()=>{
        // Check if cameraStream is defined
        if (stream) {
            // Stop all tracks in the stream
            stream.getTracks().forEach(track => track.stop());
            // Remove the stream from the video element
            accessCameraElement.srcObject = null;
        }
} );

