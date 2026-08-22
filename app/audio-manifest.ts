export type Book = { number: number; title: string; movement: string; summary: string; lines: number };

// Change this one value when the final files have a public home. Keep the
// names as book-01.mp3 through book-24.mp3; no interface changes are needed.
export const AUDIO_BASE_URL = "/audio";

const entries: Array<[number, string, string, string, number]> = [
  [1, "A Council of the Gods", "The Telemachy", "Athena begins the work of bringing Odysseus home.", 444],
  [2, "Telemachus Calls the Assembly", "The Telemachy", "The son steps into his father’s place.", 434],
  [3, "At Pylos", "The Telemachy", "Telemachus seeks news from Nestor.", 497],
  [4, "At Sparta", "The Telemachy", "A house of memory, recognition, and ambush.", 847],
  [5, "Odysseus Leaves Calypso", "The Homecoming", "A raft, a storm, and the shore of Scheria.", 493],
  [6, "Nausicaa", "The Homecoming", "A princess finds the shipwrecked stranger.", 331],
  [7, "The Palace of Alcinous", "The Homecoming", "Odysseus enters the Phaeacian court.", 347],
  [8, "The Singer’s Song", "The Homecoming", "Games, tears, and the beginning of Odysseus’ tale.", 586],
  [9, "The Cyclops", "The Great Wanderings", "Odysseus gives his name and tells of Polyphemus.", 566],
  [10, "Aeolus, Circe, and the Dead", "The Great Wanderings", "Wind, enchantment, and the road below the earth.", 573],
  [11, "The Land of the Dead", "The Great Wanderings", "Odysseus hears the dead speak.", 640],
  [12, "The Sirens and the Cattle", "The Great Wanderings", "The last perils before the return.", 453],
  [13, "Odysseus Returns to Ithaca", "Ithaca", "The longed-for island is near, but hidden.", 440],
  [14, "At the Swineherd’s Hut", "Ithaca", "A faithful household survives in exile.", 533],
  [15, "Telemachus Comes Home", "Ithaca", "Father and son move toward recognition.", 557],
  [16, "Father and Son", "Ithaca", "Telemachus and Odysseus know one another.", 480],
  [17, "Odysseus Begs in His Own House", "Ithaca", "The king enters his hall as a stranger.", 606],
  [18, "The Beggar’s Contest", "Ithaca", "The suitors test the man they do not know.", 428],
  [19, "The Scar", "Ithaca", "Penelope speaks with the stranger; Eurycleia remembers.", 604],
  [20, "Signs and Portents", "Ithaca", "The day of reckoning approaches.", 394],
  [21, "The Bow", "Ithaca", "Penelope sets the test.", 434],
  [22, "The Reckoning", "Ithaca", "Odysseus takes his house again.", 501],
  [23, "Penelope and Odysseus", "Ithaca", "The marriage-bed is the final proof.", 371],
  [24, "The Peace", "Ithaca", "The dead, the fathers, and an end to vengeance.", 548],
];
export const books: Book[] = entries.map(([number, title, movement, summary, lines]) => ({ number, title, movement, summary, lines }));
export function audioUrl(book: Book) { return AUDIO_BASE_URL ? `${AUDIO_BASE_URL.replace(/\/$/, "")}/book-${String(book.number).padStart(2, "0")}.mp3` : null; }

// These four long volumes live outside GitHub Pages: they duplicate the book
// files and would take the published site over its 1 GB limit.
export const volumeLinks = [
  { title: "The Telemachy", books: "Books 1–4", url: "" },
  { title: "The Homecoming", books: "Books 5–8", url: "" },
  { title: "The Great Wanderings", books: "Books 9–12", url: "" },
  { title: "Odysseus on Ithaca", books: "Books 13–24", url: "" },
];
