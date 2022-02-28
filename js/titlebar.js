/**
 * Div wrapper - Ennek vezérli, hogy az üzenet megjelenjen.
 */
const wrapper = document.querySelector(".wrapper");
/**
 * Div container
 */
const container = document.querySelector(".container");

/**
 * Div title - Ez az üzenet címének a szövegét tartalmazó elem.
 */
const title = document.querySelector(".title");
/**
 * Div title-container - Ez az '.title' divet tartalmazó elem
 */
const titleContainer = document.querySelector(".title-container");
/**
 * Div message - Ez az üzenet szövegét tartalmazó elem.
 */
const message = document.querySelector(".message");
/**
 * Div message-container - Ez az '.message' divet tartalmazó elem
 */
const messageContainer = document.querySelector(".message-container");

/**
 * Div banner-image - Ez hordozza a társított kisképet.
 */
const banner = document.querySelector(".banner-image");
/**
 * Div banner - Ez az '.banner-image' divet tartalmazó elem
 */
const bannerContainer = document.querySelector(".banner");
/**
 * Audiolejátszó
 */
const audioPlayer = new Audio();

/**
 * Ismétlődő üzenetek jelenlegi indexe
 */
var index = 0;
/**
 * Jelzi, hogy megjelent egy ismétlődő üzenet
 */
var fut = false;
/**
 * Jelzi, hogy épp van megjelenve egy üzenet
 */
var renderel = false;
/**
 * Streamlabs elemek listáját tároló tömb
 */
var alertList = [];
/**
 * Minimum intervallum értéke
 */
var interval = 0.5;

//Ikonok:
/**
 * Twitch értesítésekhez tartozó ikon.
 */
const iconTwitch = "./Images/twitch.png";
/**
 * Streamlabs értesítésekhez tartozó ikon.
 */
const iconStreamLabs = "./Images/streamlabs.png";
/**
 * YouTube értesítésekhez tartozó ikon
 */
const iconYouTube = "./Images/youtube.png";

/**
 * Kirenderel egy új üzenetet.
 * @param {string} alertBanner Az üzenethez tartozó kép urlje
 * @param {string} alertTitle Az üzenet címe, pirossal jelenik meg.
 * @param {string} alertMessage Az üzenet szövege fehérrel jelenik meg.
 * @param {number} alertLifeTime Az üzenet élettartama másodpercben megadva.
 * @param {string} alertTitleColor A cim szöveg színe
 * @param {string} alertTitleBGColor A cím háttérszíne
 * @param {string} alertContentColor A többi tartalom betűszíne
 * @param {string} alertContentBGColor A többi tartalom háttérszíne
 */
function showMessage(
  alertBanner,
  alertTitle,
  alertMessage,
  alertLifeTime,
  alertTitleColor,
  alertTitleBGColor,
  alertContentColor,
  alertContentBGColor,
  alertAudioFile,
  alertAudioVolume
) {
  if (renderel) {
    wrapper.classList.add("close");
    renderel = false;
  }
  renderel = true;

  interval += alertLifeTime;

  wrapper.classList.remove("close");

  bannerContainer.style = "background-color: " + alertContentBGColor + ";";
  banner.style =
    "background-image: url(" +
    alertBanner +
    "); color: " +
    alertContentColor +
    ";";

  titleContainer.style = "background-color: " + alertTitleBGColor + ";";
  title.style = "color: " + alertTitleColor + ";";
  title.textContent = alertTitle;

  if (alertMessage.length > tulHosszuSzoveg) {
    alertMessage = alertMessage.slice(0, tulHosszuSzoveg) + "...";
  }

  messageContainer.style = "background-color: " + alertContentBGColor + ";";
  message.style = "color: " + alertContentColor + ";";
  message.textContent = alertMessage;

  if (alertAudioFile && alertAudioFile !== "") {
    audioPlayer.src = alertAudioFile;

    if (alertAudioVolume) audioPlayer.volume = alertAudioVolume / 100.0;
    else audioPlayer.volume = 1.0;

    audioPlayer.play();
  }

  setTimeout(() => {
    wrapper.classList.add("close");
    setTimeout(() => {
      renderel = false;
    }, 500);
  }, alertLifeTime * 1000);
}

// Ismétlődő üzenetek renderelése keresése, kiírása, kezdő késleltetéssel.
setTimeout(() => {
  //console.log("elkezdve");
  setInterval(() => {
    console.log(
      "tick " +
        messages.length +
        " " +
        renderel +
        " " +
        fut +
        " " +
        index +
        " " +
        interval
    );

    if (!fut && !renderel && messages.length > 0) {
      fut = true;
      var b = "";

      if (defaultImage !== undefined || defaultImage != "") b = defaultImage;

      var c = "RACE CONTROL";

      if (defaultTitle !== undefined || defaultTitle != "") c = defaultTitle;

      var s = "";
      var e = 10;
      var tc = "red";
      var tb = "black";
      var cc = "white";
      var cb = "rgba(0,0,0,0.4)";

      var tmp = messages[index];

      if (tmp !== undefined) {
        if (tmp.cim !== undefined) c = tmp.cim;
        if (tmp.szoveg !== undefined) s = tmp.szoveg;
        if (tmp.elettartam !== undefined) e = tmp.elettartam;
        if (tmp.kep !== undefined) b = tmp.kep;
        if (tmp.uzenetBetuszin !== undefined) cc = tmp.uzenetBetuszin;
        if (tmp.uzenetHatterszin !== undefined) cb = tmp.uzenetHatterszin;
        if (tmp.cimBetuszin !== undefined) tc = tmp.cimBetuszin;
        if (tmp.cimHatterszin !== undefined) tb = tmp.cimHatterszin;

        if (!renderel) {
          index++;
          if (index >= messages.length) index = 0;

          container.classList.remove("d-hidden");
          showMessage(b, c, s, e, tc, tb, cc, cb);

          interval = Math.floor(
            Math.random() * (maxInterval - minInterval) + minInterval
          );

          if (minInterval == maxInterval) interval = minInterval;

          //console.log(interval);

          setTimeout(() => {
            //console.log("fut vált most");
            fut = false;
          }, interval * 1000);
        }
      }
    }
  }, 1000);
}, kezdesSzunet * 1000);

// Streamlabs-ból érkező értesítések vizsgálata.
setInterval(() => {
  if (alertList.length > 0 && !renderel && !renderel) {
    container.classList.remove("d-hidden");

    let tmp = alertList[0];
    alertList.shift();
    showMessage(
      tmp.banner,
      tmp.title,
      tmp.message,
      tmp.lifeTime,
      tmp.titleColor,
      tmp.titleBGColor,
      tmp.contentColor,
      tmp.contentBGColor,
      tmp.audioFile,
      tmp.audioVolume
    );
    //console.log(alertList);
  }
}, ioInterval);

//Perform Action on event
streamlabs.on("event", (eventData) => {
  //console.log(eventData.message[0]);

  if (!eventData.type.toLowerCase().includes("playing")) {
    //console.log(eventData);
    var alert = {};
    var megjelenhet = false;

    alert.banner = defaultImage;
    alert.title = defaultTitle;
    alert.message = "";
    alert.lifeTime = 5;
    alert.titleColor = "red";
    alert.titleBGColor = "black";
    alert.contentColor = "white";
    alert.contentBGColor = "rgba(0,0,0,0.4)";
    alert.audioFile = "";
    alert.audioVolume = 0.0;

    switch (eventData.for) {
      case "twitch_account":
        alert.banner = iconTwitch;
        alert.title = "twitch";
        alert.titleColor = "#9147ff";
        //alert.titleBGColor = "black";
        //alert.contentColor = "#9147ff";
        break;
      case "youtube_account":
        alert.banner = iconYouTube;
        alert.title = "YouTube";
        alert.titleColor = "rgb(230,0,0)";
        //alert.titleBGColor = "black";
        //alert.contentColor = "white";
        break;
      case "streamlabs":
        alert.banner = iconStreamLabs;
        alert.title = "StreamLabs";
        alert.titleColor = "#2fbd9d";
        //alert.titleBGColor = "#2fbd9d";
        //alert.contentColor = "#2fbd9d";
        //alert.contentBGColor = "orange";
        break;
    }

    let msg = eventData.message[0];
    console.log(eventData.type);
    console.log(eventData.for);
    console.log(msg);

    switch (eventData.type) {
      case "donation":
        if (donation.isEnable) {
          // amount: 92​
          // currency: "USD"​
          // formatted_amount: "$92.00"​
          // from: "John"​
          // from_user_id: 1​
          // isTest: true​
          // message: "This is a test donation for $92.00."​
          // name: "CsernayAttila"

          let amount = "{AMOUNT}";
          let currency = "{CURRENCY}";
          let formatted_amount = "{FORMATTED_AMOUNT}";
          let from = "{FROM}";
          let message = "{MESSAGE}";
          let name = "{NAME}";

          alert.titleColor = "#2fbd9d";
          alert.titleBGColor = "Black";
          alert.contentBGColor = "#2fbd9d";
          alert.contentColor = "white";

          alert.audioFile = donation.audio;
          alert.audioVolume = donation.audioVolume;
          alert.title += " - " + donation.title;
          alert.lifeTime = donation.lifeTime;

          alert.message = donation.messagePattern
            // esetleges hibafixálások
            .replace(amount.toLowerCase(), amount)
            .replace(currency.toLowerCase(), currency)
            .replace(formatted_amount.toLowerCase(), formatted_amount)
            .replace(from.toLowerCase(), from)
            .replace(message.toLowerCase(), message)
            .replace(name.toLowerCase(), name)
            // behelyettesítés
            .replace(amount, msg.amount)
            .replace(currency, msg.currency)
            .replace(formatted_amount, msg.formatted_amount)
            .replace(from, msg.from)
            .replace(message, msg.message)
            .replace(name, msg.name);

          megjelenhet = true;
        }
        break;

      case "follow":
        if (eventData.for == "twitch_account" && follow.twitchIsEnable) {
          alert.title += " - " + follow.twitchTitle;
          alert.audioFile = follow.twitchAudio;
          alert.audioVolume = follow.twitchAudioVolume;
          megjelenhet = true;
        } else if (
          eventData.for == "youtube_account" &&
          follow.youtubeIsEnable
        ) {
          alert.title += " - " + follow.youtubeTitle;
          alert.audioFile = follow.youtubeAudio;
          alert.audioVolume = follow.twitchAudioVolume;
          megjelenhet = true;
        }

        if (megjelenhet) {
          // _id: "878dc62ed74c3e57940807ee6208293b"
          // isTest: true
          // name: "CsernayAttila"
          // priority: 10

          let name = "{NAME}";

          alert.lifeTime = follow.lifeTime;
          alert.message = follow.message
            // esetleges hibafixálások
            .replace(name.toLowerCase(), name)
            // behelyettesítés
            .replace(name, msg.name);
        }
        break;

      case "subscription":
        if (eventData.for == "twitch_account" && subscription.twitchIsEnable) {
          megjelenhet = true;

          alert.titleColor = "#9147ff";
          alert.titleBGColor = "black";
          alert.contentColor = "white";
          alert.contentBGColor = "#9147ff";

          alert.title += " - " + subscription.twitchTitle;
          alert.audioFile = subscription.twitchAudio;
          alert.audioVolume = subscription.twitchAudioVolume;
          megjelenhet = true;
        } else if (
          eventData.for == "youtube_account" &&
          subscription.youtubeIsEnable
        ) {
          megjelenhet = true;

          alert.titleColor = "rgb(230,0,0)";
          alert.titleBGColor = "black";
          alert.contentBGColor = "rgb(230,0,0)";
          alert.contentColor = "white";

          alert.title += " - " + subscription.youtubeTitle;
          alert.audioFile = subscription.youtubeAudio;
          alert.audioVolume = subscription.twitchAudioVolume;
          megjelenhet = true;
        }

        if (megjelenhet) {
          // _id: "30caa0ce1fe482ac28f87ae41c4acc6b"​
          // emotes: null​
          // isTest: true​
          // message: "This is a test"​
          // months: 1​
          // name: "CsernayAttila"​
          // priority: 10​
          // sub_plan: "1000"

          var emotes = "{EMOTES}";
          var message = "{MESSAGE}";
          var months = "{MONTHS}";
          var name = "{NAME}";
          var sub_plan = "{SUB_PlAN}";

          alert.lifeTime = subscription.lifeTime;
          alert.message = subscription.message
            // esetleges hibafixálások
            .replace(emotes.toLowerCase(), emotes)
            .replace(message.toLowerCase(), message)
            .replace(months.toLowerCase(), months)
            .replace(name.toLowerCase(), name)
            .replace(sub_plan.toLowerCase(), sub_plan)
            // behelyettesítés
            .replace(message, msg.message)
            .replace(months, msg.months)
            .replace(name, msg.name)
            .replace(sub_plan, msg.sub_plan);

          if (msg.emotes === null) {
            alert.message = alert.message.replace(emotes, "");
          } else {
            alert.message = alert.message.remove(emotes, msg.emotes);
          }
        }
        break;

      case "resub":
        if (resub.isEnable) {
          alert.titleColor = "#9147ff";
          alert.titleBGColor = "black";
          alert.contentColor = "white";
          alert.contentBGColor = "#9147ff";

          alert.title += " - " + resub.title;
          alert.audioFile = resub.audio;
          alert.audioVolume = resub.audioVolume;
          alert.lifeTime = resub.lifeTime;

          // _id: "f991c1b650ba4fcbc22b60a29b7b3548";
          // amount: 69;
          // emotes: null;
          // isTest: true;
          // message: "This is a test";
          // months: 8;
          // name: "CsernayAttila";
          // priority: 10;
          // streak_months: 4;
          // sub_plan: "1000";

          let amount = "{AMOUNT}";
          let emotes = "{EMOTES}";
          let message = "{MESSAGE}";
          let months = "{MONTHS}";
          let name = "{NAME}";
          let streak_months = "{STREAK_MONTHS}";
          let sub_plan = "{SUB_PLAN}";

          alert.message = resub.message
            // esetleges hibafixálások
            .replace(amount.toLowerCase(), amount)
            .replace(emotes.toLowerCase(), emotes)
            .replace(message.toLowerCase(), message)
            .replace(months.toLowerCase(), months)
            .replace(name.toLowerCase(), name)
            .replace(streak_months.toLowerCase(), streak_months)
            .replace(sub_plan.toLowerCase(), sub_plan)
            // behelyettesítés
            .replace(amount, msg.amount)
            .replace(message, msg.message)
            .replace(months, msg.months)
            .replace(name, msg.name)
            .replace(streak_months, msg.streak_months)
            .replace(sub_plan, msg.sub_plan);

          if (msg.emotes === null) {
            alert.message = alert.message.replace(emotes, "");
          } else {
            alert.message = alert.message.remove(emotes, msg.emotes);
          }

          megjelenhet = true;
        }
        break;

      case "host":
        if (host.isEnable) {
          alert.title += " - " + host.title;
          alert.audioFile = host.audio;
          alert.audioVolume = host.audioVolume;
          alert.lifeTime = host.lifeTime;

          // _id: "4cf6e32f016ad13a0688a78ec6e66196"
          // isTest: true
          // name: "CsernayAttila"
          // priority: 10
          // viewers: 882

          let name = "{NAME}";
          let viewers = "{VIEWERS}";

          alert.message = host.message
            // esetleges hibafixálások
            .replace(name.toLowerCase(), name)
            .replace(viewers.toLowerCase(), viewers)
            // behelyettesítés
            .replace(name, msg.name)
            .replace(viewers, msg.viewers);

          megjelenhet = true;
        }
        break;

      case "bits":
        if (bits.isEnable) {
          if (eventData.for == "twitch_account") {
            alert.titleColor = "#9147ff";
            alert.titleBGColor = "black";
            alert.contentColor = "white";
            alert.contentBGColor = "#9147ff";
            alert.audioFile = bits.twitchAudio;
            alert.audioVolume = bits.twitchAudioVolume;
          } else if (eventData.for == "youtube_account") {
            alert.titleColor = "rgb(230,0,0)";
            alert.titleBGColor = "black";
            alert.contentBGColor = "rgb(230,0,0)";
            alert.contentColor = "white";
            alert.audioFile = bits.youtubeAudio;
            alert.audioVolume = bits.twitchAudioVolume;
          }

          alert.title += " - " + bits.title;
          alert.lifeTime = bits.lifeTime;

          // _id: "4722db5e4b2244fe0f005189fae3487d"
          // amount: "10"
          // currency: "USD"
          // isTest: true
          // message: "cheer10 this is a test bit alert"
          // name: "CsernayAttila"
          // priority: 10

          let amount = "{AMOUNT}";
          let currency = "{CURRENCY}";
          let message = "{MESSAGE}";
          let name = "{NAME}";

          alert.message = bits.message
            // esetleges hibafixálások
            .replace(amount.toLowerCase(), amount)
            .replace(currency.toLowerCase(), currency)
            .replace(message.toLowerCase(), message)
            .replace(name.toLowerCase(), name)
            // behelyettesítés
            .replace(amount, msg.amount)
            .replace(currency, msg.currency)
            .replace(message, msg.message)
            .replace(name, msg.name);

          megjelenhet = true;
        }
        break;

      case "raid":
        if (raid.isEnable) {
          alert.title += " - " + raid.title;
          alert.audioFile = raid.audio;
          alert.audioVolume = raid.audioVolume;
          alert.lifeTime = raid.lifeTime;

          // _id: "5ba53c4a816c42039871c2e4571b7035"
          // isTest: true
          // name: "CsernayAttila"
          // priority: 10
          // raiders: 1994
          // viewers: 544

          let name = "{NAME}";
          let raiders = "{RAIDERS}";
          let viewers = "{VIEWERS}";

          alert.message = raid.message
            // esetleges hibafixálások
            .replace(name.toLowerCase(), name)
            .replace(raiders.toLowerCase(), raiders)
            .replace(viewers.toLowerCase(), viewers)
            // behelyettesítés
            .replace(name, msg.name)
            .replace(raiders, msg.raiders)
            .replace(viewers, msg.viewers);

          megjelenhet = true;
        }
        break;

      case "merch":
        if (merch.isEnable) {
          alert.title += " - " + merch.title;
          alert.audioFile = merch.audio;
          alert.audioVolume = merch.audioVolume;
          alert.lifeTime = merch.lifeTime;

          // _id: "47280c8ba89821c8d8a737086eb65a27"
          // condition: "MERCH_PRODUCT"
          // from: "John"
          // imageHref: "https://uploads.twitchalerts.com/000/105/166/207/891265-mockup-152840970714082-0.png"
          // isTest: true
          // message: "This is a test merch"
          // name: "CsernayAttila"
          // priority: 10
          // product: "T-shirt"

          let from = "{FROM}";
          let message = "{MESSAGE}";
          let name = "{NAME}";
          let product = "{PRODUCT}";

          alert.message = merch.message
            // esetleges hibafixálások
            .replace(from.toLowerCase(), from)
            .replace(message.toLowerCase(), message)
            .replace(name.toLowerCase(), name)
            .replace(product.toLowerCase(), product)
            // behelyettesítés
            .replace(from, msg.from)
            .replace(message, msg.message)
            .replace(name, msg.name)
            .replace(product, msg.product);

          megjelenhet = true;
        }
        break;

      case "loyalty_store_redemption":
        if (loyalty_store_redemption.isEnable) {
          alert.title += " - " + loyalty_store_redemption.title;
          alert.audioFile = loyalty_store_redemption.audio;
          alert.audioVolume = loyalty_store_redemption.audioVolume;
          alert.lifeTime = loyalty_store_redemption.lifeTime;

          //  _id: "995c6b5a82fd5d6541aca6f63fca74ee"​
          // from: "John"​
          // imageHref: "/images/gallery/default.gif"​
          // isTest: true​
          // message: "This is a test cloudbot redemption"​
          // name: "CsernayAttila"​
          // priority: 10​
          // product: "Dummy"​
          // to: Object { name: "CsernayAttila" }​​

          let from = "{FROM}";
          let message = "{MESSAGE}";
          let name = "{NAME}";
          let product = "{PRODUCT}";
          let toName = "{TO_NAME}";

          alert.message = loyalty_store_redemption.message
            // esetleges hibafixálások
            .replace(from.toLowerCase(), from)
            .replace(message.toLowerCase(), message)
            .replace(name.toLowerCase(), name)
            .replace(product.toLowerCase(), product)
            .replace(toName.toLowerCase(), toName)
            // behelyettesítés
            .replace(from, msg.from)
            .replace(message, msg.message)
            .replace(name, msg.name)
            .replace(product, msg.product)
            .replace(toName, msg.toName);

          megjelenhet = true;
        }
        break;

      case "prime_sub_gift":
        if (prime_sub_gift.isEnable) {
          alert.titleColor = "#2fbd9d";
          alert.titleBGColor = "Black";
          alert.contentBGColor = "#2fbd9d";
          alert.contentColor = "white";

          // id: "d024b62757fc93f53d61ae077e482163"
          // from: "John"​
          // gift_type: "monthly"​
          // isTest: true​
          // name: "CsernayAttila"​
          // priority: 10​
          // to: "Jane"

          let from = "{FROM}";
          let gift_type = "{GIFT_TYPE}";
          let name = "{NAME}";
          let to = "{TO}";

          alert.title += " - " + prime_sub_gift.title;
          alert.audioFile = prime_sub_gift.audio;
          alert.audioVolume = prime_sub_gift.audioVolume;
          alert.lifeTime = prime_sub_gift.lifeTime;
          alert.message = prime_sub_gift.message
            // esetleges hibafixálások
            .replace(from.toLowerCase(), from)
            .replace(gift_type.toLowerCase(), gift_type)
            .replace(name.toLowerCase(), name)
            .replace(to.toLowerCase(), to)
            // behelyettesítés
            .replace(from, msg.from)
            .replace(gift_type, msg.gift_type)
            .replace(name, msg.name)
            .replace(to, msg.to);

          megjelenhet = true;
        }
        break;

      case "superchat":
        if (superchat.isEnable) {
          alert.titleColor = "rgb(230,0,0)";
          alert.titleBGColor = "black";
          alert.contentBGColor = "rgb(230,0,0)";
          alert.contentColor = "white";

          alert.title += " - " + superchat.title;
          alert.audioFile = superchat.audio;
          alert.audioVolume = superchat.audioVolume;
          alert.lifeTime = superchat.lifeTime;

          // _id: "7b13d1175764c3076d6e37a482ff088a"​
          // amount: 47000000​
          // amount: 4000000
          // channelId: "UC0G2qz-hoaCswQNgoWU_LTw"​
          // comment: "This is a test super chat alert for $47."​
          // currency: "USD"​
          // displayString: "$47.00"​
          // id: 22​
          // isTest: true​
          // name: "CsernayAttila"​
          // payload: { currency: "USD" }​
          // priority: 10​

          let amount = "{AMOUNT}";
          let comment = "{COMMENT}";
          let currency = "{CURRENCY}";
          let displayString = "{DISPLAY_STRING}";
          let name = "{NAME}";

          alert.message = superchat.message
            // esetleges hibafixálások
            .replace(amount.toLowerCase(), amount)
            .replace(comment.toLowerCase(), comment)
            .replace(currency.toLowerCase(), currency)
            .replace(displayString.toLowerCase(), displayString)
            .replace(name.toLowerCase(), name)
            // behelyettesítés
            .replace(amount, msg.amount / 1000000)
            .replace(comment, msg.comment)
            .replace(currency, msg.currency)
            .replace(displayString, msg.displayString)
            .replace(name, msg.name);

          megjelenhet = true;
        }
        break;
    }

    if (megjelenhet) {
      alertList.push(alert);
    }
    //console.log(alertList);
  }
});
