// Office Artifacts: The One-Line Placard Contest
// A museum placard for an ordinary office object, recast as an ancient
// artifact. Pure Node stdlib, deterministic, no dependencies.
//
// The placard line itself is the entry: a single line, 1-180 characters,
// written verbatim to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The placard text. Museum-style label for the office microwave:
// object, date, material, and a dry note on its communal role.
const LINE =
  "Ritual reheating chamber (microwave), c. 2004 CE. Enamelled steel. Warms one lunch, judges all others. Beeps twice; answered by none. Gift of the Department of Shared Suffering.";

// Contest limits: one line, between 1 and 180 characters inclusive.
const MAX_CHARS = 180;

const line = LINE.trim();

if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(
    `placard line must be 1-${MAX_CHARS} chars, got ${line.length}`,
  );
}
if (line.includes("\n")) {
  throw new Error("placard line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote /output/entry.txt (${line.length} chars)`);
