const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const sites = [
  { id: 'ace-prep', url: 'https://mohith17.lovable.app' },
  { id: 'voice-to-vocation', url: 'https://voice-to-vocation-navigator.lovable.app' },
  { id: 'smart-route-buddy', url: 'https://smart-route-buddy-64.lovable.app' },
  { id: 'sih-2026', url: 'https://sih2026-black.vercel.app/' }
];

async function capture() {
  console.log('Launching Edge...');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1400,900']
  });

  const outDir = path.join(__dirname, 'public', 'projects');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const item of sites) {
    try {
      console.log(`Capturing ${item.id} from ${item.url}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1400, height: 900 });
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));
      const outFile = path.join(outDir, `${item.id}.jpg`);
      await page.screenshot({ path: outFile, quality: 85, type: 'jpeg' });
      console.log(`Saved ${outFile}`);
      await page.close();
    } catch (e) {
      console.error(`Failed ${item.id}:`, e.message);
    }
  }

  await browser.close();
  console.log('Done capturing screenshots!');
}

capture().catch(err => {
  console.error('Error running capture:', err);
  process.exit(1);
});
