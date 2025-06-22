const methods = ["rexfa", "kdtalker", "joyvasa", "real3dportrait", "sadtalker"];
const emotions = ["happy", "sad", "angry", "disgust", "fear", "surprise"];

function updateVideos(pair) {
  methods.forEach(method => {
    const video = document.getElementById(method);
    video.src = `videos/${pair}/${method}.mp4`;
  });

  emotions.forEach(emotion => {
    const emoVideo = document.getElementById(`rexfa_${emotion}`);
    emoVideo.src = `videos/${pair}/rexfa_${emotion}.mp4`;
  });
}

document.getElementById("pairSelector").addEventListener("change", (e) => {
  updateVideos(e.target.value);
});

// Load default on startup
window.onload = () => {
  updateVideos("pair1");
};