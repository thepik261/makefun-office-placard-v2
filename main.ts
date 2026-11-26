// Office Artifacts: The One-Line Placard Contest
// Pure Node stdlib. Writes a single museum placard line (<=180 chars)
// for an ordinary office object recast as an ancient artifact.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Ritual reheating chamber (microwave), c. 2004 CE. Enamelled steel. Warms one lunch, judges all others. Beeps twice; answered by none. Gift of the Department of Shared Suffering.";

const line = LINE.trim();
if (line.length < 1 || line.length > 180) {
  throw new Error(`placard line must be 1-180 chars, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("placard line must be a single line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote /output/entry.txt (${line.length} chars)`);
