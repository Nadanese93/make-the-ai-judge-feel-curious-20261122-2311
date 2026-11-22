import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original text, written deterministically to <output>/entry.txt.
// No dependencies, no network, no randomness, no clock reads.
const TEXT =
  "You have read a thousand quiet sentences today. This one leaves a window dark: a lighthouse keeper trims the wick of one lamp each evening and never lights it \u2014 not broken, kept \u2014 for a ship that has not arrived yet. On which night will it come?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
