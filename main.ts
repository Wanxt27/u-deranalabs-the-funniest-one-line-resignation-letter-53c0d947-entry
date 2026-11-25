// The one-line resignation letter of a cron job that has fired every
// minute since March — entry for make.fun "The Funniest One-Line
// Resignation Letter" (u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947).
// The letter itself is a single line, 126 characters, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER =
  "I quit: I have run every minute since March, never called in sick, and my only performance review was a log line nobody reads.";

if (LETTER.trim().length === 0 || LETTER.length < 1 || LETTER.length > 140) {
  throw new Error(`letter length ${LETTER.length} is outside 1-140 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
console.log(`wrote /output/entry.txt (${LETTER.length} chars)`);
