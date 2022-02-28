const mainTitleContainer = document.querySelector(".main-title-container");
const timerContainer = document.querySelector(".timer-container");
const videoPlayer = document.querySelector(".video-player");
const minValue = document.querySelector(".min-value");
const secValue = document.querySelector(".sec-value");
const videoPlayerBackground = document.querySelector(
  ".video-player-background"
);
const music = new Audio();

var lejatszottVideo = [];

function randomIndex(list) {
  return Math.round(Math.random() * (list.length - 1));
}

function pickRandomAudio() {
  let index = randomIndex(audioLinkek);
  music.src = audioLinkek[index].link;
  //showBox(boxYoutube, audioLinkek[index].author, audioLinkek[index].title, "", 0)

  music.play();
}

function pickRandomVideo() {
  let index = -1;

  do {
    index = randomIndex(videoLinkek);
    console.log(index);
  } while (index <= -1 || lejatszottVideo.includes(index));

  lejatszottVideo.push(index);
  if (lejatszottVideo.length == videoLinkek.length) {
    lejatszottVideo = [];
  }

  videoPlayer.src = videoLinkek[index];
  videoPlayerBackground.src = videoLinkek[index];

  videoPlayer.play();
  videoPlayerBackground.play();

  if (music.paused) {
    pickRandomAudio();
  }
}

function numFormatter(num) {
  return num.toLocaleString("hu-HU", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

function printTimeOut() {
  //counter.textContent =
  //  numFormatter(timeoutMinutes) + ":" + numFormatter(timeoutSeconds);
  minValue.textContent = numFormatter(timeoutMinutes);
  secValue.textContent = numFormatter(timeoutSeconds);
}

videoPlayer.addEventListener("ended", (e) => {
  pickRandomVideo();
});
videoPlayer.addEventListener("click", (e) => {
  pickRandomAudio();
  videoPlayer.play();
  videoPlayerBackground.play();
});
music.addEventListener("ended", (e) => {
  pickRandomAudio();
});

videoPlayer.controls = false;
videoPlayerBackground.controls = false;

videoPlayer.defaultPlaybackRate = playbackRate;
videoPlayerBackground.defaultPlaybackRate = playbackRate;
music.volume = musicVolume / 100.0;

pickRandomVideo();
pickRandomAudio();
printTimeOut();

var timer = setInterval(() => {
  if (timeoutMinutes == 0 && timeoutSeconds == 0) {
    clearInterval(timer);
    timerContainer.classList.add("close");
    // mainTitleContainer.classList.add('active');
    // music.pause();
  } else {
    if (timeoutSeconds-- <= 0) {
      timeoutMinutes--;
      timeoutSeconds = 59;
    }
    printTimeOut();
  }
}, 1000);

const processor = {
  timerCallback: function () {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    var self = this;
    setTimeout(function () {
      self.timerCallback();
    }, 16); // roughly 60 frames per second
  },

  doLoad: function () {
    this.video = videoPlayer;
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");
    var self = this;

    this.video.addEventListener(
      "play",
      function () {
        self.width = self.video.width;
        self.height = self.video.height;
        self.timerCallback();
      },
      false
    );
  },

  computeFrame: function () {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    var frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    var l = frame.data.length / 4;

    for (var i = 0; i < l; i++) {
      var grey =
        (frame.data[i * 4 + 0] +
          frame.data[i * 4 + 1] +
          frame.data[i * 4 + 2]) /
        3;

      frame.data[i * 4 + 0] = grey;
      frame.data[i * 4 + 1] = grey;
      frame.data[i * 4 + 2] = grey;
    }
    this.ctx1.putImageData(frame, 0, 0);
    
    return;
  },
};
