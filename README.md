# Portfolio Website

A modern, responsive portfolio website built with React and TailwindCSS, featuring dark mode support.

## 🚀 Tech Stack

- **React** (v19.2.0) - UI library
- **Vite** (v7.2.2) - Build tool
- **TailwindCSS** (v4.1.17) - Styling
- **JavaScript (ES6+)** - Programming language

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Header, Footer
│   └── sections/         # Hero, Education, Experience, Projects, Skills, Contact
├── contexts/
│   └── ThemeContext.jsx  # Theme state management
├── data/
│   └── resume-data.js    # Portfolio content
├── App.jsx
├── main.jsx
└── index.css
```

## 🎣 React Hooks Used

- **useState** - Theme state management
- **useEffect** - Theme persistence to localStorage
- **useContext** - Accessing theme context
- **createContext** - Creating theme context
- **useTheme** (custom) - Custom hook for theme access

## 🔧 State Management

### Theme State (Context API)
- Light/dark mode toggle
- Persisted in localStorage
- System preference detection
- Located in `src/contexts/ThemeContext.jsx`

### Data Management
- Static data in `src/data/resume-data.js`
- Exports: profile, education, experience, projects, skills

## 🎨 Key Features

- **Dark/Light Mode** - Context API with localStorage persistence
- **Responsive Design** - Mobile-first with TailwindCSS
- **Smooth Scrolling** - CSS scroll-behavior
- **Modern Typography** - Inter font from Google Fonts
- **Gradient Background** - Subtle radial gradient for depth

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🐳 Docker Support

You can also run the application in a Docker container.

### Prerequisites
- Docker installed on your machine

### Build and Run

```bash
# Build the Docker image
docker build -t portfolio-website .

# Run the container (accessible at http://localhost:8080)
docker run -d -p 8080:80 --name portfolio-container portfolio-website
```

### Stop the Container

```bash
docker stop portfolio-container
docker rm portfolio-container
```

## 📝 Content Management

Edit `src/data/resume-data.js` to update portfolio content without touching component code.

## 👤 Author

Mohammad Shehabul Islam
📧 shehabul97@gmail.com
💼 [LinkedIn](https://linkedin.com/in/mohammadshehabulislam)
📍 Mount Pearl, NL, Canada
