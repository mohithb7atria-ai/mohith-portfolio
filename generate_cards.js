const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const htmlCivicShield = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {
    margin: 0;
    width: 1400px;
    height: 900px;
    background: #181d1b;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: #F7F4EA;
  }
  .card {
    width: 1200px;
    height: 700px;
    background: #252B29;
    border-radius: 28px;
    border: 2px solid rgba(184, 220, 203, 0.25);
    box-shadow: 0 30px 80px rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }
  .header {
    height: 70px;
    background: #1e2422;
    border-bottom: 1px solid rgba(184, 220, 203, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px;
  }
  .dots { display: flex; gap: 8px; }
  .dot { width: 14px; height: 14px; border-radius: 50%; }
  .d1 { background: #ef4444; } .d2 { background: #eab308; } .d3 { background: #22c55e; }
  .badge {
    padding: 6px 16px;
    background: rgba(184, 220, 203, 0.15);
    border: 1px solid #B8DCCB;
    border-radius: 20px;
    color: #B8DCCB;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .content {
    flex: 1;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 30px;
    padding: 40px;
    position: relative;
  }
  .map-box {
    background: #1b211f;
    border-radius: 20px;
    border: 1px solid rgba(184, 220, 203, 0.15);
    padding: 25px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
  .grid-bg {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(184, 220, 203, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(184, 220, 203, 0.05) 1px, transparent 1px);
    background-size: 35px 35px;
  }
  .title-lg {
    font-size: 42px;
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 15px;
    line-height: 1.2;
  }
  .title-lg span { color: #B8DCCB; }
  .sub-lg {
    font-size: 18px;
    color: #779D89;
    line-height: 1.6;
    margin-bottom: 30px;
  }
  .stat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .stat-card {
    background: rgba(184, 220, 203, 0.05);
    border: 1px solid rgba(184, 220, 203, 0.15);
    border-radius: 16px;
    padding: 20px;
  }
  .stat-num { font-size: 32px; font-weight: 700; color: #B8DCCB; }
  .stat-lbl { font-size: 14px; color: #F7F4EA; opacity: 0.8; margin-top: 5px; }
  .hazard-item {
    background: rgba(239, 68, 68, 0.1);
    border-left: 4px solid #ef4444;
    padding: 15px 20px;
    border-radius: 0 12px 12px 0;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hazard-title { font-weight: 600; font-size: 16px; color: #FFFFFF; }
  .hazard-sub { font-size: 13px; color: #779D89; }
</style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="dots">
        <div class="dot d1"></div><div class="dot d2"></div><div class="dot d3"></div>
      </div>
      <div style="font-weight: 600; font-size: 16px; color: #FFFFFF; letter-spacing: 1px;">CIVICSHIELD AI &bull; ROAD HAZARD INTELLIGENCE</div>
      <div class="badge">ACTIVE SYSTEM</div>
    </div>
    <div class="content">
      <div>
        <div class="title-lg">CivicShield <span>AI</span></div>
        <div class="sub-lg">Automated road hazard detection, pothole tracking & obstruction reporting using deep learning computer vision for municipal road safety.</div>
        <div class="stat-grid">
          <div class="stat-card">
            <div class="stat-num">98.4%</div>
            <div class="stat-lbl">Detection Accuracy</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">&lt; 150ms</div>
            <div class="stat-lbl">Inference Latency</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">GPS Sync</div>
            <div class="stat-lbl">Geo-Tagged Obstructions</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">Zero Lag</div>
            <div class="stat-lbl">Real-time Edge Alerting</div>
          </div>
        </div>
      </div>
      <div class="map-box">
        <div class="grid-bg"></div>
        <div style="position: relative; z-index: 1;">
          <div style="font-size: 18px; font-weight: 700; color: #FFFFFF; margin-bottom: 20px;">Live Detection Telemetry</div>
          <div class="hazard-item">
            <div>
              <div class="hazard-title">Critical Pothole Cluster</div>
              <div class="hazard-sub">Outer Ring Road &bull; 12.9352&deg; N, 77.6245&deg; E</div>
            </div>
            <span style="color:#ef4444; font-weight:700; font-size:14px;">High Risk</span>
          </div>
          <div class="hazard-item" style="border-left-color: #f59e0b; background: rgba(245, 158, 11, 0.1);">
            <div>
              <div class="hazard-title">Severe Road Subsidence</div>
              <div class="hazard-sub">Hebbal Flyover Approach &bull; 13.0358&deg; N</div>
            </div>
            <span style="color:#f59e0b; font-weight:700; font-size:14px;">Medium Risk</span>
          </div>
          <div class="hazard-item" style="border-left-color: #3b82f6; background: rgba(59, 130, 246, 0.1);">
            <div>
              <div class="hazard-title">Unmarked Road Debris</div>
              <div class="hazard-sub">Bellary Road Corridor &bull; Sector 4</div>
            </div>
            <span style="color:#60a5fa; font-weight:700; font-size:14px;">Flagged</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

const htmlVolunteer = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body {
    margin: 0;
    width: 1400px;
    height: 900px;
    background: #181d1b;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: #F7F4EA;
  }
  .card {
    width: 1200px;
    height: 700px;
    background: #252B29;
    border-radius: 28px;
    border: 2px solid rgba(184, 220, 203, 0.25);
    box-shadow: 0 30px 80px rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  }
  .header {
    height: 70px;
    background: #1e2422;
    border-bottom: 1px solid rgba(184, 220, 203, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px;
  }
  .dots { display: flex; gap: 8px; }
  .dot { width: 14px; height: 14px; border-radius: 50%; }
  .d1 { background: #ef4444; } .d2 { background: #eab308; } .d3 { background: #22c55e; }
  .badge {
    padding: 6px 16px;
    background: rgba(184, 220, 203, 0.15);
    border: 1px solid #B8DCCB;
    border-radius: 20px;
    color: #B8DCCB;
    font-size: 14px;
    font-weight: 600;
  }
  .content {
    flex: 1;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 30px;
    padding: 40px;
    position: relative;
  }
  .panel-box {
    background: #1b211f;
    border-radius: 20px;
    border: 1px solid rgba(184, 220, 203, 0.15);
    padding: 25px;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .title-lg {
    font-size: 42px;
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 15px;
    line-height: 1.2;
  }
  .title-lg span { color: #B8DCCB; }
  .sub-lg {
    font-size: 18px;
    color: #779D89;
    line-height: 1.6;
    margin-bottom: 30px;
  }
  .metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-bottom: 25px;
  }
  .metric-box {
    background: rgba(184, 220, 203, 0.05);
    border: 1px solid rgba(184, 220, 203, 0.15);
    border-radius: 16px;
    padding: 18px;
  }
  .m-num { font-size: 28px; font-weight: 800; color: #B8DCCB; }
  .m-lbl { font-size: 13px; color: #F7F4EA; opacity: 0.75; margin-top: 4px; }
  .event-card {
    background: rgba(184, 220, 203, 0.08);
    border: 1px solid rgba(184, 220, 203, 0.2);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tag {
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    background: rgba(184, 220, 203, 0.2);
    color: #B8DCCB;
  }
</style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="dots">
        <div class="dot d1"></div><div class="dot d2"></div><div class="dot d3"></div>
      </div>
      <div style="font-weight: 600; font-size: 16px; color: #FFFFFF; letter-spacing: 1px;">COMMUNITY ENGAGEMENT &bull; VOLUNTEER COORDINATION</div>
      <div class="badge">PLATFORM HUB</div>
    </div>
    <div class="content">
      <div>
        <div class="title-lg">Smart Volunteer <span>System</span></div>
        <div class="sub-lg">A web-based digital ecosystem for community participation, event management, real-time duty scheduling, and volunteer impact tracking.</div>
        <div class="metrics">
          <div class="metric-box">
            <div class="m-num">1,250+</div>
            <div class="m-lbl">Registered Volunteers</div>
          </div>
          <div class="metric-box">
            <div class="m-num">48</div>
            <div class="m-lbl">Active Initiatives</div>
          </div>
          <div class="metric-box">
            <div class="m-num">99.1%</div>
            <div class="m-lbl">Roster Completion</div>
          </div>
        </div>
        <div style="background: rgba(184, 220, 203, 0.06); padding: 18px; border-radius: 16px; border: 1px solid rgba(184, 220, 203, 0.15); color: #F7F4EA;">
          <strong>Core Features:</strong> Role-based access, automated skill matching, real-time attendance check-ins, and community engagement dashboards.
        </div>
      </div>
      <div class="panel-box">
        <div style="font-size: 18px; font-weight: 700; color: #FFFFFF; margin-bottom: 16px;">Scheduled Volunteer Drives</div>
        <div class="event-card">
          <div>
            <div style="font-weight: 600; color: #FFFFFF;">Tech Community Code Camp</div>
            <div style="font-size: 13px; color: #779D89;">Bengaluru Hub &bull; 24 volunteers</div>
          </div>
          <span class="tag">In Progress</span>
        </div>
        <div class="event-card">
          <div>
            <div style="font-weight: 600; color: #FFFFFF;">Green Bengaluru Tree Drive</div>
            <div style="font-size: 13px; color: #779D89;">Cubbon Park &bull; 40 volunteers</div>
          </div>
          <span class="tag">Confirmed</span>
        </div>
        <div class="event-card">
          <div>
            <div style="font-weight: 600; color: #FFFFFF;">Digital Literacy Workshop</div>
            <div style="font-size: 13px; color: #779D89;">Community Center &bull; 15 mentors</div>
          </div>
          <span class="tag">Upcoming</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

async function renderMockups() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1400,900']
  });

  const outDir = path.join(__dirname, 'public', 'projects');

  const page1 = await browser.newPage();
  await page1.setViewport({ width: 1400, height: 900 });
  await page1.setContent(htmlCivicShield);
  await page1.screenshot({ path: path.join(outDir, 'civicshield-ai.jpg'), quality: 90, type: 'jpeg' });
  await page1.close();
  console.log('Saved civicshield-ai.jpg');

  const page2 = await browser.newPage();
  await page2.setViewport({ width: 1400, height: 900 });
  await page2.setContent(htmlVolunteer);
  await page2.screenshot({ path: path.join(outDir, 'smart-volunteer.jpg'), quality: 90, type: 'jpeg' });
  await page2.close();
  console.log('Saved smart-volunteer.jpg');

  await browser.close();
  console.log('Render mockups complete!');
}

renderMockups();
