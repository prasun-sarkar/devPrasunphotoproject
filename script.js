const videoInput = document.getElementById("videoInput");
const video = document.getElementById("video");
const captureBtn = document.getElementById("captureBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Load selected video
videoInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const videoURL = URL.createObjectURL(file);
        video.src = videoURL;
    }
});

// Capture Screenshot
captureBtn.addEventListener("click", function () {

    if (video.readyState >= 2) {

        // Fixed size screenshot (400x300)
        ctx.drawImage(video, 0, 0, 300, 600);

        const imageURL = canvas.toDataURL("image/png");

        const downloadLink = document.createElement("a");
        downloadLink.href = imageURL;
        downloadLink.download = "screenshot.jpg";
        downloadLink.click();

    } else {
        alert("Please load and play the video first!");
    }

});