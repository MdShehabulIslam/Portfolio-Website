# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS. This project showcases your professional experience, education, skills, and projects in a visually appealing and performant web application.

---

## 🚀 Tech Stack

- **React** (v19.2.0) – Component-based UI library
- **Vite** (v7.2.2) – Lightning-fast build tool
- **TailwindCSS** (v4.1.17) – Utility-first CSS framework
- **Framer Motion** (v12.23.26) – Declarative animations
- **React Hook Form** (v7.68.0) – Form management
- **JavaScript (ES6+)**

---

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

---

## 🎨 Key Features

- **Dark/Light Mode** – Context API with localStorage persistence
- **Responsive Design** – Mobile-first, works on all devices
- **Smooth Animations** – Powered by Framer Motion
- **Performance Optimized** – Lazy loading, code splitting
- **Modern Typography** – Google Fonts (Inter)
- **Gradient Background** – Subtle, modern look
- **Easy Content Management** – Update your info in a single file

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

---

## 🐳 Docker Support

You can run the application in a Docker container for easy deployment.

```bash
# Build the Docker image
docker build -t portfolio-website .

# Run the container (accessible at http://localhost:8080)
docker run -d -p 8080:80 --name portfolio-container portfolio-website

# Stop and remove the container
docker stop portfolio-container
docker rm portfolio-container
```

---

## 📝 Content Management

All portfolio content (profile, education, experience, projects, skills) is managed in `src/data/resume-data.js`. Edit this file to update your information without modifying component code.

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Mohammad Shehabul Islam**
📧 shehabul97@gmail.com
[LinkedIn](https://linkedin.com/in/mohammadshehabulislam)
📍 Mount Pearl, NL, Canada
