// TWITCH-FOLLOW/YOUTUBE-SUBSCRIPTION -----------------------------------
/**
 * A twitch-követés/youtube-feliratkozás config adatai:
 */
const follow = {
  /**
   * Engedélyezi a twitch követés megjelenítését.
   */
  twitchIsEnable: true,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {DATE} - a feliratkozás ideje.
   */
  twitchMessage: "{DATE} óta követő. Köszönöm, hogy követsz!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   *    twitchAudio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  twitchAudio: "",
  /**
   * Az értesítés hangereje.
   */
  twitchAudioVolume: 0.0,
  /**
   * Engedélyezi a youtbe feliratkozások megjelenését.
   */
  youtubeIsEnable: true,
  /**
   * A megjelenő üzenet sablonja.
   * Az alábbi tokenek elérhetőek behelyettesítésre:
   *    {DATE} - a feliratkozás ideje.
   */
  youtubeMessage: "{DATE} óta feliratkozó. Köszönöm, hogy feliratkoztál!",
  /**
   * Az használni kívánt audió fájl elérési útvonala.
   * Példa:
   *    youtubeAudio: "Audios/default.mp3", - helyi 'Audios' mappa 'default.mp3' állománya
   */
  youtubeAudio: "",
  /**
   * Az értesítés hangereje.
   */
  youtubeAudioVolume: 0.0,
  /**
   * A twitch follow/youtube feliratkozás esemény megjelenési időtartama másodpercben megadva.
   */
  lifeTime: 3.0,
};
