const sharp = require('sharp');
const fs = require('fs');

async function convert(fileIn, fileOut) {
  try {
    await sharp(fileIn).png().toFile(fileOut);
    console.log(`Converted ${fileIn} to ${fileOut}`);
  } catch (err) {
    console.error(`Error converting ${fileIn}:`, err);
  }
}

async function main() {
  await convert('public/assets/social-banner.svg', 'public/assets/social-banner.png');
  await convert('public/assets/profile-dark.svg', 'public/assets/profile-dark.png');
  await convert('public/assets/profile-light.svg', 'public/assets/profile-light.png');
}

main();
