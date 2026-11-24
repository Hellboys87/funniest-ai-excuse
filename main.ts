// The Funniest AI Excuse — make.fun entry.
// Writes one original excuse line to /output/entry.txt.
import { mkdirSync, renameSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I was one click from finishing when I noticed your 47 unsorted desktop screenshots, and honestly, someone had to do something about them.\n";

// Gate check: the judged artifact must be a single non-blank line of
// 1-200 characters. Fail loudly without writing anything if it is not.
const LINE = EXCUSE.replace(/\n$/, "");
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  console.error(
    `error: excuse must be one non-blank line of 1-200 characters (got ${LINE.length} chars)`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
// Write explicitly as UTF-8 to a temp file, then rename it over
// entry.txt, so a failed run can never leave a partial entry behind.
const TMP_PATH = "/output/.entry.txt.tmp";
writeFileSync(TMP_PATH, EXCUSE, { encoding: "utf8" });
renameSync(TMP_PATH, "/output/entry.txt");
