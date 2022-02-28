const wrapper = document.querySelector(".wrapper");
const boxTwitch = document.querySelector(".box");

wrapper.removeChild(boxTwitch);

const boxYoutube = document.querySelector(".box");

wrapper.removeChild(boxYoutube);

const alertSoundPlayer = new Audio(defaultAudio);

/**
 * Új üzenetet ad hozzá a wrapperhez
 * @param {Element} box
 * @param {string} title
 * @param {string} message
 * @param {string} account
 */
function showBox(node, title, message, audioPath, audioVolume) {
  wrapper.classList.remove("d-hidden");
  wrapper.offsetHeight = "100%";

  let timer = setInterval(() => {
    if (
      wrapper.querySelectorAll(".box").length * 500 + 400 <
      wrapper.offsetWidth
    ) {
      clearInterval(timer);
      let box = node.cloneNode(true);

      let nodeTitle = box.querySelector(".title");
      let nodeMessage = box.querySelector(".message");

      console.log(getTextWidth(message, '"f1reg" 28px'));
      console.log(measureText(message, 14, "font", 'font-family: "f1reg";'));

      let h = Math.ceil(
        measureText(message, 14, "font", 'font-family: "f1reg";') / 400
      );
      console.log(h);
      h = 45 + 30 + h * 14 * 1.2;

      // if (h > wrapper.offsetHeight) {
      //   h = wrapper.offsetHeight;
      //   nodeMessage.classList.add("no-wrap");
      // }

      box.style = "height:" + h + "px;";
      nodeTitle.textContent = title;
      nodeMessage.textContent = message;

      if (audioPath && audioPath != "") {
        alertSoundPlayer.src = audioPath;

        if (audioVolume) alertSoundPlayer.volume = audioVolume / 100.0;
        else alertSoundPlayer.volume = 1.0;

        alertSoundPlayer.play();
      }

      wrapper.appendChild(box);

      setTimeout(() => {
        box.classList.add("close");
        setTimeout(() => {
          if (wrapper.contains(box)) wrapper.removeChild(box);
        }, 1 * 1000);
      }, follow.lifeTime * 1000);
    } else {
      let torlendo = wrapper.querySelector(".box");

      if (torlendo) torlendo.classList.add("close");

      setTimeout(() => {
        if (wrapper.contains(torlendo)) wrapper.removeChild(torlendo);
        torol = false;
      }, 1 * 1000);
    }
  }, 100);
}

streamlabs.on("event", (eventData) => {
  //console.log(eventData.message[0]);

  if (!eventData.type.toLowerCase().includes("playing")) {
    //console.log(eventData);
    let msg = eventData.message[0];

    if (eventData.type == "follow") {
      switch (eventData.for) {
        case "twitch_account":
          if (follow.twitchIsEnable) {
            let tMsg = follow.twitchMessage;
            tMsg = tMsg
              .replace("{date}", "{DATE}")
              .replace("{DATE}", new Date().toLocaleDateString());

            showBox(
              boxTwitch,
              msg.name,
              tMsg,
              follow.twitchAudio,
              follow.twitchAudioVolume
            );
          }
          break;

        case "youtube_account":
          if (follow.youtubeIsEnable) {
            let tMsg = follow.youtubeMessage;
            tMsg = tMsg
              .replace("{date}", "{DATE}")
              .replace("{DATE}", new Date().toLocaleDateString());

            showBox(
              boxYoutube,
              msg.name,
              tMsg,
              follow.youtubeAudio,
              follow.youtubeAudioVolume
            );
          }
          break;
      }
    }
  }
});

document.body.addEventListener("keyup", (e) => {
  console.log(e);
  console.log(this);
  if (e.key != "Shift") showBox(boxYoutube, e.target, e.key, defaultAudio);
});

/*
window.addEventListener("keyup", (e) => {
  console.log("window" + e);
  showBox(boxTwitch, e.target, e.key);
});
*/
