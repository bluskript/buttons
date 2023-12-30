import { createCanvas, loadImage } from "canvas";
import { readdir, writeFile } from "fs/promises";
const files = await readdir('./frames/');

const canvas = createCanvas(16, 16);
const ctx = canvas.getContext('2d');

const frames: number[][] = [];

for (let file of files) {
    const img = await loadImage('./frames/' + file);
    ctx.drawImage(img, 0, 0);
    const h = Array.from(ctx.getImageData(0, 0, 16, 16).data).filter((_, i) => i % 4 === 0).map(v => v > 127 ? 1 : 0);
    frames.push(h);
}

await writeFile('./result.json', JSON.stringify(frames));