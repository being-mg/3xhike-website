const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

async function removeBackground(inputPath, outputPath) {
    try {
        const image = await Jimp.read(inputPath);
        const threshold = 20;

        // We convert highly bright/white pixels to transparent
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            if (red > 255 - threshold && green > 255 - threshold && blue > 255 - threshold) {
                this.bitmap.data[idx + 3] = 0;
            }
        });

        await image.writeAsync(outputPath);
    } catch (e) {
        console.error(`Failed to process ${inputPath}: ${e.message}`);
    }
}

async function processAll() {
    const dir = 'public/logos';
    for (let i = 1; i <= 6; i++) {
        const inPath = path.join(dir, `logo${i}.jpeg`);
        const outPath = path.join(dir, `logo${i}.png`);
        if (fs.existsSync(inPath)) {
            console.log(`Processing ${inPath}...`);
            await removeBackground(inPath, outPath);
        }
    }
}

processAll().then(() => console.log('Done')).catch(console.error);
