import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line roasting my own agent: the eager agreement ("Great question!")
// followed by ten tool calls that go nowhere — it Googles the very
// question it just praised. "Burns" beats "spends": the tool calls are
// waste, not work.
const LINE =
  "My agent calls every question 'great', then burns ten tool calls Googling the question it just praised.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
