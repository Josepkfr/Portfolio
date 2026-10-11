// Regenerates the icons and the social preview image in public/.
// Run with: node scripts/prepare-assets.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const INK = '#303839';
const MINT = '#91e0c4';

// The original favicon is a black "J" on a transparent background, which
// disappears on dark browser tabs. Recolour the glyph and put it on a tile.
async function glyph(size, color) {
  const alpha = await sharp(`${root}scripts/originals/favicon.png`)
    .resize(size, size)
    .extractChannel('alpha')
    .toBuffer();
  return sharp({ create: { width: size, height: size, channels: 3, background: color } })
    .joinChannel(alpha)
    .png()
    .toBuffer();
}

async function icon(size, file) {
  const inner = Math.round(size * 0.78);
  await sharp({ create: { width: size, height: size, channels: 4, background: INK } })
    .composite([{ input: await glyph(inner, MINT), gravity: 'centre' }])
    .png()
    .toFile(`${root}public/${file}`);
}

async function socialImage() {
  const width = 1200;
  const height = 630;
  const overlay = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="${INK}" stop-opacity="0.94"/>
          <stop offset="1" stop-color="${INK}" stop-opacity="0.45"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <rect x="80" y="210" width="72" height="8" fill="${MINT}"/>
      <text x="80" y="330" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="92" font-weight="700" fill="#f2f2f2" letter-spacing="2">JOSÉ ALPALA</text>
      <text x="80" y="400" font-family="Georgia, serif" font-style="italic"
        font-size="40" fill="${MINT}">Developer · Backend · Frontend</text>
    </svg>`);
  await sharp(`${root}src/assets/home-bg.jpg`)
    .resize(width, height, { fit: 'cover' })
    .composite([{ input: overlay }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`${root}public/og.jpg`);
}

await icon(96, 'favicon.png');
await icon(180, 'apple-touch-icon.png');
await socialImage();
console.log('public/favicon.png, public/apple-touch-icon.png and public/og.jpg written');
