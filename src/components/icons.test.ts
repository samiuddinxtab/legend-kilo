import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { CAPABILITIES, PROCESS_STEPS } from "@/data/site";

function extractIconNamesFromComponent(source: string): string[] {
  const matches = source.match(/name === '([^']+)'/g) ?? [];
  return matches.map((m) => m.replace("name === '", "").replace("'", ""));
}

describe("Icons.astro coverage", () => {
  it("contains all icon names referenced by site data", () => {
    const iconsPath = path.resolve(process.cwd(), "src/components/Icons.astro");
    const source = fs.readFileSync(iconsPath, "utf-8");
    const availableIcons = new Set(extractIconNamesFromComponent(source));

    const requiredIcons = new Set<string>([
      ...CAPABILITIES.map((item) => item.icon),
      ...PROCESS_STEPS.map((item) => item.icon),
      "check",
      "whatsapp",
      "mail",
      "phone",
      "mapPin",
      "menu",
      "close",
      "star",
      "arrowRight",
      "home",
      "alertCircle",
      "fileText",
      "user",
      "leaf",
      "gift",
      "droplet",
      "paintbrush",
      "backpack",
      "checkCircle",
      "chevronDown",
      "xCircle",
      "clock",
    ]);

    for (const icon of requiredIcons) {
      expect(availableIcons.has(icon)).toBe(true);
    }
  });
});
