import { execSync } from 'node:child_process';
import { existsSync, copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const possibleChromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
];

const browser = possibleChromePaths.find((p) => existsSync(p)) || 'chrome';
const htmlPath = resolve('cv/cv.html');
const outPath = resolve('public/juan-mata-cv.pdf');

console.log(`Generating PDF using: ${browser}`);
execSync(`"${browser}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${outPath}" "${htmlPath}"`, {
  stdio: 'inherit',
});

if (existsSync('dist')) {
  copyFileSync(outPath, resolve('dist/juan-mata-cv.pdf'));
}

console.log(`✓ PDF updated successfully: ${outPath}`);
