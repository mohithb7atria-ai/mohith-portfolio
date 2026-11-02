# MOHITH B — Personal Developer Portfolio

A personal developer portfolio website designed with inspiration from [Nischal's Portfolio](https://nischal-portfolio-eight.vercel.app/), customized with Mohith B's brand identity, custom color palette, real project screenshots, and resume download.

## 🎨 Color Palette
- **Mint Green**: `#B8DCCB` (Accents, highlights, buttons, and active indicators)
- **Charcoal**: `#252B29` (Deep background layers & card surfaces)
- **Warm Cream**: `#F7F4EA` (Primary body text & descriptions)
- **Muted Green**: `#779D89` (Subheadings, category tags & borders)
- **Soft White**: `#FFFFFF` (Headings & high-contrast elements)

## 🚀 Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter, Michroma, Prata (Google Fonts)

## 📂 Project Structure
```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── mohith-profile.jpg         # Mohith's real portrait photo
│   ├── mohith-b-resume.pdf        # Verified resume PDF
│   └── projects/                  # Live project screenshots & thumbnails
│       ├── ace-prep.jpg
│       ├── voice-to-vocation.jpg
│       ├── civicshield-ai.jpg
│       ├── smart-route-buddy.jpg
│       ├── sih-2026.jpg
│       ├── collapse-detection.png
│       ├── smart-volunteer.jpg
│       └── food-genie.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 🌐 Deploy to Vercel
This project is ready for one-click deployment to Vercel:
1. Push this folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your repository.
4. Keep the default settings (Framework preset: `Vite`, Root Directory: `./` or `portfolio`).
5. Click **Deploy**.
