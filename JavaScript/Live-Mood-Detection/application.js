const url = "/Library";

const api = faceapi.nets;
api.tinyFaceDetector.loadFromUri(url);
api.faceLandmark68Net.loadFromUri(url);
api.faceExpressionNet.loadFromUri(url);

var video = document.getElementById("video");

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { audio: false, video: { width: 850, height: 750 } },
    function (stream) {
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    },
    function (e) {
      console.log("Following error occurred: " + e.name);
    }
  );
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 50);
});
