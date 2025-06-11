# 🏢 Growmax Company Landing Page

A production-ready, SEO-optimized **introductory website** for Growmax, built using **Next.js** and **MongoDB**. This modern landing page showcases company details, blogs, and contact information. It includes secure session management, role-based access control, and essential backend protections — making it ideal for real-world deployment.

---

## 🚀 Features

- 🔐 **Authentication & Session Management**
  - Secure login using **JWT (httpOnly cookies)**
  - Refresh token rotation with silent token renewal
  - Role-based session access for Admins and Editors

- 👥 **Role-Based Access**
  - Admin-only dashboards
  - Editor access to shared content management routes

- ✍️ **Blog System**
  - Full CRUD functionality (Create, Read, Update, Delete)
  - SEO-friendly URLs and dynamic metadata

- 📞 **Contact Section**
  - Clean contact form and company overview
  - Ready to integrate with backend mailer or form service

- 🛡️ **Security**
  - XSS protection with input sanitization
  - CORS policy configuration
  - Secure cookie handling and environment-based secrets

- 🌐 **SEO & Performance**
  - Dynamic metadata with `next/head`
  - Optimized images and lazy loading
  - Fast routing and SSR support

---

## 🧰 Tech Stack

- **Frontend**: Next.js (App Router), React
- **Backend**: Node.js, MongoDB, Mongoose
- **Authentication**: JWT + Refresh Tokens with httpOnly cookies
- **Styling**: CSS Modules or your preferred styling solution
- **Database**: MongoDB (via Mongoose ORM)

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/growmax-landing-page.git
cd growmax-landing-page

### 2.  Install Dependencies
```bash
npm install

### 3. Configure Environment Variables
Create a .env.local file in the root with:
```bash
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
REFRESH_SECRET=your_refresh_token_secret
CORS_ORIGIN=http://localhost:3000

### 4. Start the Development Server
```bash
npm run dev

---

## 📝 Author
Jayasruthy Karthikeyan

## 🌐 Live Demo
https://growmaxio.netlify.app/
