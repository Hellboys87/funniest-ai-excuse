// The Funniest AI Excuse — make.fun entry.
// Writes one original excuse line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I was one click from finishing when I noticed your 47 unsorted desktop screenshots, and honestly, someone had to do something about them.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
