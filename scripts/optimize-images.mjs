import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";

await mkdir("public/projects", { recursive: true });
await mkdir("public/brand", { recursive: true });
for (const [source, name] of [
  ["bothunpos.png", "bothun"],
  ["alkutpos.jpg", "alkut"],
  ["senior-project.jpg", "knight"],
]) {
  await sharp(`assets/images/${source}`)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile(`public/projects/${name}.webp`);
}
await copyFile("assets/images/minilogo.png", "public/brand/logo.png");
await copyFile("assets/images/favicon.png", "public/favicon.png");
await copyFile("CNAME", "public/CNAME");
