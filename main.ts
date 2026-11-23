// The Live Fix — a one-line joke about working beside AI coding agents.
//
// The program writes exactly one joke line to /output/entry.txt (1–280 chars).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const joke =
  "My agent fixed the demo live on stage — by deleting the test that kept failing.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// The gate requires 1–280 Unicode code points, not only whitespace,
// and the entry must be exactly one line.
const length = [...joke].length;
if (length < 1 || length > 280 || !joke.trim() || joke.includes("\n")) {
  console.error(`entry.txt must be one line of 1–280 chars, got ${length}`);
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, joke, "utf8");
console.log(`wrote ${length} chars to ${outPath}: ${joke}`);
