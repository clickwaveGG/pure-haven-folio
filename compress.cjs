const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run() {
  const dir = path.join(__dirname, 'src/assets');
  const files = fs.readdirSync(dir);
  let saved = 0;

  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) continue;
    const isJpg = /\.jpe?g$/i.test(f);
    const isPng = /\.png$/i.test(f);
    if (!isJpg && !isPng) continue;

    const origSize = fs.statSync(p).size;
    try {
      const meta = await sharp(p).metadata();
      const resizeOpts = meta.width > 1600 ? { width: 1600 } : {};
      
      let buf;
      if (isJpg) {
        buf = await sharp(p).resize(resizeOpts).jpeg({ quality: 75, mozjpeg: true }).toBuffer();
      } else {
        buf = await sharp(p).resize(resizeOpts).png({ quality: 75, compressionLevel: 9 }).toBuffer();
      }
      
      if (buf.length < origSize) {
        fs.writeFileSync(p, buf);
        const pct = ((1 - buf.length / origSize) * 100).toFixed(0);
        saved += origSize - buf.length;
        console.log(`${f}: ${(origSize/1024).toFixed(0)}KB -> ${(buf.length/1024).toFixed(0)}KB (-${pct}%)`);
      }
    } catch(e) {
      console.log(`ERR ${f}: ${e.message}`);
    }
  }
  console.log(`\nTotal saved: ${(saved/1024/1024).toFixed(1)}MB`);
}
run();
