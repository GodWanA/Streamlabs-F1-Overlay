// DONATION -------------------------------------------------------------
/**
 * A StreamLabs támogatás config adatai:
 */
const donation = {
  /**
   * Engedélyezi a Donation megjelenését.
   */
  isEnable: true,
  /**
   * Az Donation esemény címe.
   */
  title: "DONATION",
  /**
   * A Donation esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {AMOUNT} - összeg
   *    {CURRENCY} - valuta neve
   *    {FORMATTED_AMOUNT} - beformázott összeg (pl: $92.00)
   *    {FROM} - akitől az üzenet jön(?) - sajnos nem tudom miben tér el a 'name'-től.
   *    {MESSAGE} - a küldő üzenete.
   *    {NAME} - a küldő neve(?) - sajnos nem tudom miben tér el a 'from'-tól
   */
  messagePattern:
    "Köszönöm '{name}' nézőnek a '{FORMATTED_AMOUNT}' támogatást!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    audio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  audio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  audioVolume: 100.0,
};

// TWITCH-FOLLOW/YOUTUBE-SUBSCRIPTION -----------------------------------
/**
 * A twitch-követés/youtube-feliratkozás config adatai:
 */
const follow = {
  /**
   * Engedélyezi a twitch követés megjelenítését.
   */
  twitchIsEnable: false,
  /**
   * A twitch követés event címe.
   */
  twitchTitle: "FOLLOW",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    twitchAudio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  twitchAudio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  twitchAudioVolume: 100.0,
  /**
   * Engedélyezi a youtbe feliratkozások megjelenését.
   */
  youtubeIsEnable: false,
  /**
   * A youtube feliratkozás event címe.
   */
  youtubeTitle: "SUBSCRIPTION",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   * Példa:
   *    youtubeAudio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  youtubeAudio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  youtubeAudioVolume: 100.0,
  /**
   * A twitch follow/youtube feliratkozás esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {NAME} - a feliratkozó neve.
   */
  message: "Új követő a csatornán! '{NAME}', köszönöm a követést!",
};

// TWITCH-FELIRATKOZÁS/YOUTUBE-TAGSÁG -----------------------------------
/**
 * A twitch-feliratkozás/youtube-tagság config adatai:
 */
const subscription = {
  /**
   * Engedélyezi a twitch követés megjelenítését.
   */
  twitchIsEnable: true,
  /**
   * A twitch követés event címe.
   */
  twitchTitle: "SUB",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    twitchAudio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  twitchAudio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  twitchAudioVolume: 100.0,
  /**
   * Engedélyezi a youtbe feliratkozások megjelenését.
   */
  /**
   * Engedélyezi a youtbe feliratkozások megjelenését.
   */
  youtubeIsEnable: true,
  /**
   * A youtube feliratkozás event címe.
   */
  youtubeTitle: "MEMBERSHIP",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   * Példa:
   *    youtubeAudio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  youtubeAudio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  youtubeAudioVolume: 100.0,
  /**
   * A twitch follow/youtube feliratkozás esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {EMOTES} - ??? - nem ismert a funkciója.
   *    {MESSAGE} - a fizetős néző neve.
   *    {MONTHS} - a hónapok száma.
   *    {NAME} - az új fizetős néző neve.
   *    {SUB_PLAN} - ??? - nem ismert a funkciója.
   */
  message: "Kedves '{NAME}' , köszönöm a(z) '{MONTHS}' hónap feliratkozást!",
};

// TWITCH-RESUB ---------------------------------------------------------
/**
 * A twitch-újrafeliratkozás config adatai:
 */
const resub = {
  /**
   * Engedélyezi a twitch újrafeliratkozás megjelenítését.
   */
  isEnable: true,
  /**
   * A twitch követés esemény címe.
   */
  title: "RESUB",
  /**
   * A twitch resub esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {AMOUNT} - ??? - nem ismert a funkciója.
   *    {EMOTES} - ??? - nem ismert a funkciója.
   *    {MESSAGE} - az újra feliratkozó néző üzenete.
   *    {MONTHS} - ??? - talán az összes hónap.
   *    {NAME} - az újra feliratkozó néző neve.
   *    {STREAK_MONTHS} - sorozatban feliratkozott hónap.
   *    {SUB_PLAN} - ??? - nem ismert a funkciója.
   */
  message:
    "Köszönöm az ismételt feliratkozást kedves '{NAME}'! Sorozatban: '{STREAK_MONTHS}', összesen: '{MONTHS}' hónapja!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    audio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  audio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  audioVolume: 100.0,
};

// TWITCH-HOST ----------------------------------------------------------
/**
 * A twitch-host config adatai:
 */
const host = {
  /**
   * Engedélyezi a twitch host megjelenítését.
   */
  isEnable: true,
  /**
   * A twitch host esemény címe.
   */
  title: "HOST",
  /**
   * A twitch host esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {NAME} - hosztoló csatorna neve.
   *    {VIEWERS} - Nézőszám.
   */
  message: "Köszönöm a hosztot '{NAME}'!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    audio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  audio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  audioVolume: 100.0,
};

// TWITCH-BITS ----------------------------------------------------------
/**
 * A twitch-bits config adatai:
 */
const bits = {
  /**
   * Engedélyezi a twitch bits megjelenítését.
   */
  isEnable: true,
  /**
   * A twitch bits esemény címe.
   */
  title: "BITS",
  /**
   * A twitch bits esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {AMOUNT} - bitek összege.
   *    {CURRENCY} - valuta neve.
   *    {MESSAGE} - néző üzenete.
   *    {NAME} - néző neve.
   */
  message: "Köszönöm a '{AMOUNT}' cheer-t '{NAME}'!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    audio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  audio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  audioVolume: 100.0,
};

// TWITCH-RAID ----------------------------------------------------------
/**
 * A twitch-raid config adatai:
 */
const raid = {
  /**
   * Engedélyezi a twitch raid megjelenítését.
   */
  isEnable: true,
  /**
   * A twitch raid esemény címe.
   */
  title: "RAID",
  /**
   * A twitch raid esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {NAME} - raidelő streamer neve.
   *    {RAIDERS} - raidelők száma.
   *    {VIEWERS} - nézők száma.
   */
  message: "Köszönöm a raidet, kedves '{NAME}'!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    audio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  audio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  audioVolume: 100.0,
};

// STREAMLABS-MERCH -----------------------------------------------------
/**
 * A streamlabs-merch config adatai:
 */
const merch = {
  /**
   * Engedélyezi a streamlabs merch megjelenítését.
   */
  isEnable: true,
  /**
   * A streamlabs merch esemény címe.
   */
  title: "MERCH",
  /**
   * A streamlabs merch esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {FROM} - ??? - nem ismert a funkciója.
   *    {MESSAGE} - vásárló üzenete.
   *    {NAME} - ??? - nem ismert a funkciója.
   *    {PRODUCT} - vásárló neve.
   */
  message: "Köszönöm a(z) '{PRODUCT}' vásárlását kedves '{NAME}'/'{FROM}'!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    audio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  audio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  audioVolume: 100.0,
};

// STREAMLABS-CLOUDBOT REDEMPTION ---------------------------------------
/**
 * A streamlabs-cloudbot redemption config adatai:
 */
const loyalty_store_redemption = {
  /**
   * Engedélyezi a streamlabs cloudbot redemption megjelenítését.
   */
  isEnable: true,
  /**
   * A streamlabs cloudbot redemption esemény címe.
   */
  title: "CLOUDBOT REDEMPTION",
  /**
   * A streamlabs cloudbot redemption esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {FROM} - ??? - nem ismert a funkciója.
   *    {MESSAGE} - vásárló üzenete.
   *    {NAME} - ??? - nem ismert a funkciója.
   *    {PRODUCT} - vásárló neve.
   *    {TO_NAME} - akinek készült.
   */
  message:
    "Köszönöm a(z) '{PRODUCT}' vásárlását kedves '{NAME}'/'{FROM}' '{TO_NAME}' számára!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    audio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  audio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  audioVolume: 100.0,
};

// STREAMLABS-PRIME GIFT ------------------------------------------------
/**
 * A streamlabs-prime gift redemption config adatai:
 */
const prime_sub_gift = {
  /**
   * Engedélyezi a streamlabs cloudbot redemption megjelenítését.
   */
  isEnable: true,
  /**
   * A streamlabs cloudbot redemption esemény címe.
   */
  title: "PRIME GIFT",
  /**
   * A streamlabs cloudbot redemption esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {FROM} - ??? - nem ismert a funkciója.
   *    {GIFT_TYPE} - az ajándék típusa.
   *    {NAME} - ??? - nem ismert a funkciója.
   *    {TO} - annak a neve, aki kapja az ajándékot.
   */
  message: "Köszönöm '{FROM}' az ajándék feliratkozást '{TO}'!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    audio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  audio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  audioVolume: 100.0,
};

// YOUTUBE-SUPERCHAT ----------------------------------------------------
/**
 * A youtube-szuperchat config adatai:
 */
const superchat = {
  /**
   * Engedélyezi a streamlabs cloudbot redemption megjelenítését.
   */
  isEnable: true,
  /**
   * A streamlabs cloudbot redemption esemény címe.
   */
  title: "SUPERCHAT",
  /**
   * A streamlabs cloudbot redemption esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {AMOUNT} - pénzösszege.
   *    {CURRENCY} - pénznem.
   *    {DISPLAY_STRING} - pénznem beformázva valutákkal.
   *    {COMMENT} - Néző üzenete.
   *    {NAME} - Néző neve.
   */
  message:
    "Kedves '{NAME}', köszönöm a '{AMOUNT} {CURRENCY}' '{DISPLAY_STRING}' értékű szuperchatet!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    audio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  audio: "Audios/default.mp3",
  /**
   * Az értesítés hangereje.
   */
  audioVolume: 100.0,
};
