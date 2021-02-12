async function moodDetector() {
  const url = "/library";
  const api = faceapi.nets;
  await api.tinyFaceDetector.loadFromUri(url);
  await api.ssdMobilenetv1.loadFromUri(url);
  await api.faceLandmark68Net.loadFromUri(url);
  await api.faceExpressionNet.loadFromUri(url);

  const face = document.getElementById("image");
  const canvas = faceapi.createCanvasFromMedia(face);
  const detection = await faceapi
    .detectAllFaces(face)
    .withFaceLandmarks()
    .withFaceExpressions();

  const dimensions = {
    width: face.width,
    height: face.height,
  };

  const resize = faceapi.resizeResults(detection, dimensions);

  document.body.append(canvas);

  const draw = faceapi.draw;
  draw.drawDetections(canvas, resize);
  draw.drawFaceLandmarks(canvas, resize);
  draw.drawFaceExpressions(canvas, resize);
}
moodDetector();
