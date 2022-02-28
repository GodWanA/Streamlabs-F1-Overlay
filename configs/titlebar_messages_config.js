// Az itt szereplőváltózók szerkeszthetőek. A jávascript előnye, hogy nincs sok szabálya, hogy kell megadni változókat.
// Fontos viszont hogy a 'const' taggal rendelkező sorokat véletlenül se töröld, mert a működéshez szükségesek.
// Ahol eredetileg szám van megadva ott a program is számokat vár, ahol '"szöveg"' ott az idézőjel közötti rész tartalmazza a szöveg.
// Ha a időzítőhöz tartozó változókat percben szeretnéd megadni akkor ezt az alábbi kép lehet megoldani:
// const minInterval = 5 * 60;

/**
 * Két üzenet közti minimális szünet.
 * Mértékegysége másodperc.
 */
const minInterval = 8 * 60;
/**
 * Két üzenet közti maximális szünet.
 * Mértékegysége másodperc.
 */
const maxInterval = 8 * 60;
/**
 * Az első uznet előtt ennyi idő telik el.
 * Mértékegysége másdoperc.
 */
const kezdesSzunet = 8 * 60;
/**
 * A címkék alapértelemezett címe ha nincs megadva
 */
const defaultTitle = "RACE CONTROL";
/**
 * Alapértelemezetten ezt a képet fogja keresni minden üzenet.
 */
const defaultImage = "Images/default.png";
/**
 * Ha egy vizsgált üzenet több karaktert tartalmaz, mint ez a szám, akkor levágja a túllógást.
 * Ez jelenleg 1280px széles megjelnítésre van kalibrálva, ehhez mérten állítható minden szegmense.
 */
const tulHosszuSzoveg = 230;

/**
 * A felvillanó üzenetek adatai. A megadás sorrendjében követik egymást az üzenetek. (Ha lehet kerüljük az enter használatát a szövegekben).
 * Fontos, hogy nem minden adat kihagyható, ezeket feltűntetem az adott kulcs leírásában!
 * Az is fontos, hogy minden kulcs után vesszőt kell tenni.
 * Továbbá minden kapcsos után is vesszőt célszerű tenni.
 *
 * kep:
 *    Egy kép elérési útvonala. mindegy hogy fájl, vagy webes, a kód megoldja.
 *    Kihagyható, ekkor egy default ('Images/default.png') kerül oda.
 *    Minta:
 *        kep: "https://www.mylaps.com/app/uploads/2018/06/FIA-logo.png", | ekkor egy webes FIA logó kerül be mint kis kép
 *
 * cimBetuszin:
 *    A cím betűszíne.
 *    Kihagyható, alapértelmezetten piros.
 *    Minta:
 *        cimBetuszin: "rgba(255,255,255,0.5)" | Átlátszó fehér. Fontos hogy csak az 'rgba()' függvény tud átlátszó színeket létrehozni.
 *        cimBetuszin: "rgb(0,255,0)" | Kék
 *        cimBetuszin: "#FFFFFF" | Hexadecimális fehér
 *        cimBetuszin: "Black" | Fekete
 *
 * cimHatterszin:
 *    A cím háttérszíne.
 *    Kihagyható, alapértelmezetten tömör fekete.
 *    Minta:
 *        cimHatterszin: "rgba(255,255,255,0.5)" - átlátszó fehér. Fontos hogy csak az 'rgba()' függvény tud átlátszó színeket létrehozni.
 *        cimHatterszin: "rgb(0,255,0)" - kék
 *        cimHatterszin: "#FFFFFF" - hexadecimális fehér
 *        cimHatterszin: "Black" - fekete
 *
 * uzenetBetuszin:
 *    Minden más háttérszíne.
 *    Kihagyható, alapértelmezetten átlátszó fekete.
 *    Minta:
 *        uzenetBetuszin: "rgba(255,255,255,0.5)" - átlátszó fehér. Fontos hogy csak az 'rgba()' függvény tud átlátszó színeket létrehozni.
 *        uzenetBetuszin: "rgb(0,255,0)" - kék
 *        uzenetBetuszin: "#FFFFFF" - hexadecimális fehér
 *        uzenetBetuszin: "Black" - fekete
 *
 * uzenetHatterszin:
 *    Minden más háttérszíne.
 *    Kihagyható, alapértelmezetten átlátszü fekete.
 *    Minta:
 *        uzenetHatterszin: "rgba(255,255,255,0.5)" - átlátszó fehér. Fontos hogy csak az 'rgba()' függvény tud átlátszó színeket létrehozni.
 *        uzenetHatterszin: "rgb(0,255,0)" - kék
 *        uzenetHatterszin: "#FFFFFF" - hexadecimális fehér
 *        uzenetHatterszin: "Black" - fekete
 *
 * cim:
 *    Az üzenet címe. Célszerű rövidre hagyni, mert akkor az üzenetet fogja vágni a html.
 *    Alapértelmezetten, ha megvan adva a defaultTitle constans akkor annak értéke, egyébként 'RACE CONTROL' a szövege.
 *    Minta:
 *      cim: "Lorem ipsum"
 *
 * szoveg:
 *    Az üzenet tényleges szövege. Nagyjából 3 sornyi tartalomra van kalibrálva, akárcsak a tényleges f1-es üzenőfül.
 *    Nem célszerű kihagyni!
 *    Minta:
 *        szoveg: "Itt az idő, hogy támogasd a csatornát! Akár a Streamlabs-on, akár a Google biztosnágos rendszerén keresztül."
 *
 * elettartam:
 *    Az üzenet megjelenési ideje.
 *    Mértékegysége másodperc!
 *    Nem célszerű kihagyni!
 *    Minta:
 *        elettartam: 5
 */
const messages = [
  {
    kep: "./Images/streamlabs_black.png",
    cim: "Segíts a fejlődésben!",
    cimBetuszin: "darkorange",
    uzenetBetuszin: "black",
    uzenetHatterszin: "darkorange",
    szoveg:
      "Sokat segít a csatorna fejlődésében, ha anyagilag támogatsz a leírásban megtalálható linkeken keresztül!",
    elettartam: 8.0,
  },
  {
    kep: "./Images/youtube_black.png",
    cim: "Like a LiVE-ra!",
    cimBetuszin: "darkorange",
    uzenetBetuszin: "black",
    uzenetHatterszin: "darkorange",
    szoveg:
      "Amennyiben tetszik a tartalom csapj rá a like-ra, mert erőt es motivációt ad a megtöbb élő adásra!",
    elettartam: 8.0,
  },
];
