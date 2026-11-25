import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked my agent to be brief, so it wrote a 4,000-word apology for being brief.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
