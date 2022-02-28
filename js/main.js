/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * 
 * @param {String} text The text to be rendered.
 * @param {String} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * 
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}

function measureText(pText, pFontSize, pStyle) {
  var lDiv = document.createElement('div');

  document.body.appendChild(lDiv);

  if (pStyle != null) {
    lDiv.style = pStyle;
  }
  lDiv.style.fontSize = "" + pFontSize + "px";
  lDiv.style.position = "absolute";
  lDiv.style.left = -1000;
  lDiv.style.top = -1000;

  lDiv.innerHTML = pText;

  var lResult = lDiv.clientWidth * (lDiv.clientHeight / pFontSize);

  document.body.removeChild(lDiv);
  lDiv = null;

  return lResult;
}

if (!streamLabsSocketToken || streamLabsSocketToken == "") {
  alert("Nincs beállítva a StreamLabs socket token-je!");
  throw "Nincs beállítva StreamLabs sokecket token";
}

/**
 * Streamlabs websocket kapcsolat
 * Connect to socket
 */
const streamlabs = io(
  `https://sockets.streamlabs.com?token=${streamLabsSocketToken}`,
  { transports: ["websocket"] }
);

/**
 * Az értesítések vizsgálatának időköze milliszekundumban.
 */
const ioInterval = 100;
const defaultAudio = "Audios/default.mp3";
