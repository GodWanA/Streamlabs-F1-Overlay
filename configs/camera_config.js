/**
 * a sponszor logók elérési útvonala
 */
const logok = [
  "./images/logo1.jpg",
  "./images/logo2.jpg",
  "./images/logo3.jpg",
];

/**
 * Keresztnév, plus eetleges középsőnév
 */
const firstName = "Attila";

/**
 * Vezetéknáv
 */
const lastName = "Csernay";

/**
 * csapatszint jelző oszlop háttérszíne
 *    Minta:
 *        teamColor = "rgba(255,255,255,0.5)" | Átlátszó fehér. Fontos hogy csak az 'rgba()' függvény tud átlátszó színeket létrehozni.
 *        teamColor = "rgb(0,255,0)" | Kék
 *        teamColor = "#FFFFFF" | Hexadecimális fehér
 *        teamColor = "Black" | Fekete
 */
const teamColor = "purple";
/**
 * A pozíció jelzőre vonatkozó beállítások
 */
const number = {
  /**
   * megjelenített pozició
   */
  value: 92,
  /**
   * Engedélyezi hogy megjelenjen
   */
  isEnabled: false,
};

/**
 * A jobb alsó sarokban lévő lekerekítést kapcsolja ki és be.
 * Hasznos lehet ha nincs kedve az embernek a kamera feedhjez alpha maszkkal szenvedni.
 */
const isBorderRadius = true;

/**
 * Egy egy sponzol ennyi másodpercig van megjelenítve.
 */
const lifeTime = 10;
