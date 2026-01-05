# 🚗 NM Cars – Auto Service Website (Frontend)
A fully responsive autoservice website built for **NM Cars Boxtel** using **React + Vite**.  
The website includes service listings, a location map, SEO optimization, Dutch/English language switching, and floating call button.

🌍 **Live Demo:** https://nmcars.net  
📍 **Location:** Industrieweg 4, 5281 RW Boxtel, Netherlands  

---

## ✨ Features

### 🔧 Frontend Features
- Fully responsive design  
- Service list dynamically rendered  
- Google Maps integration (forced Dutch language: `hl=nl`)   
- Click-to-call button for mobile  
- NL/EN Language switcher  
- Auto-translation ready (Google Translate API optional)  

### 🔍 SEO Features
- SEO-optimized titles and descriptions  
- JSON-LD “AutoRepair” schema for Google  
- Local Boxtel SEO text  
- Keywords for ranking (“autoservice Boxtel”)  

---

## 🚀 Tech Stack

### **Frontend**
- React 18  
- Vite  
- JavaScript ES6  
- CSS custom styling  

### **Tools**
- Git & GitHub  
- Render (deployment)  
- Google Maps Embed API  

---

## 📂 Project Structure

src/
├── components/
│ ├── ServiceList.jsx
│ ├── OurWorks.jsx
│ ├── Location.jsx
│ ├── WorkingHours.jsx
│ ├── Footer.jsx
│ ├── WhatsAppButton.jsx
│ ├── CallButton.jsx (optional)
│ └── LanguageSwitcher.jsx
├── assets/
│ ├── logo.png
│ ├── cars.jpg
├── App.jsx
└── main.jsx

---

## 🛠️ Install & Run Locally

### 1️⃣ Clone repository
```bash
git clone https://github.com/LAdamyan/NM-Cars-Frontend
cd NM-Cars-Frontend

2️⃣ Install packages
npm install

3️⃣ Run development server
npm run dev

4️⃣ Build for production
npm run build

🌍 Deployment on Render (Static Site)

Go to https://render.com
Click New → Static Site
Connect this repo
Build command:

npm run build

Publish folder:
dist

🧭 SEO Settings Included

The following is added in index.html:

<title> tags
<meta description>
<meta keywords>
<meta robots>
lang="nl" for default Dutch
Google Maps forced to Dutch (!1snl!2snl)
Structured Data (JSON-LD schema)

📞 Contact

Developer: Lilit Adamyan
📧 Email: lilitadamyan2017@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/lilit-adamyan-213a71102/
💻 GitHub: https://github.com/LAdamyan

⭐ Support

If you like this project, please give it a star ⭐ on GitHub!

