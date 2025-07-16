# My Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features interactive 3D elements, smooth animations, and a professional design.

## 🚀 Features

- **Modern Design**: Clean and professional portfolio layout
- **Interactive 3D Elements**: Built with Three.js and React Three Fiber
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **Responsive**: Fully responsive design for all devices
- **Contact Form**: Integrated contact form with EmailJS
- **Project Showcase**: Beautiful project gallery with details
- **Skills Section**: Interactive skills and technologies display
- **Dark/Light Theme**: Modern theme support

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4.0
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: Framer Motion, GSAP
- **Contact**: EmailJS
- **Icons**: Custom SVG icons and logos

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/spicynick111/myportfolio.git
cd myportfolio/Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── assets/          # Images, icons, and static assets
│   └── models/          # 3D models
├── src/
│   ├── components/      # Reusable React components
│   ├── sections/        # Main page sections
│   ├── constants/       # Configuration and constants
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

### Colors and Styling
- Edit `tailwind.config.js` to customize colors and theme
- Modify `src/index.css` for global styles

### Content
- Update project information in `src/constants/index.js`
- Replace images in `public/assets/` with your own
- Modify components in `src/components/` and `src/sections/`

### Contact Form
- Configure EmailJS in the Contact component
- Update email templates and service IDs

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Set source to `/docs` or GitHub Actions

### Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **GitHub**: [@spicynick111](https://github.com/spicynick111)
- **Portfolio**: [Your Portfolio URL]

---

Made with ❤️ using React, Vite, and Tailwind CSS 