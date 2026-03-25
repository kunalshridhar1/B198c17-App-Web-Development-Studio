# 🧥 Herrensuits – Full Stack E-Commerce Web App

A complete full-stack e-commerce web application for premium men’s suits, built using TypeScript, Node.js, Express, MongoDB, and Stripe.

This project demonstrates real-world web development concepts including product management, cart system, checkout workflow, and order history.

## Features

### 🖥️ Frontend (HTML, CSS, JS)
-Responsive modern UI (e-commerce style)
-Product listing with images
-Search & filter functionality
-Add to cart / remove / update quantity
-Cart page with total calculation
-Checkout button (Stripe integration)
-Order history page
-Add product page (admin simulation)

### ⚙️ Backend (Node.js + Express + TypeScript)
-REST API architecture
-MongoDB database integration
-Product CRUD operations
-Order management system
-Stripe payment session creation
-Webhook for payment confirmation

## 💳 Payment Integration
-Stripe Checkout (Test Mode)
-Secure payment flow
-Order stored after successful payment

## Project Structure
```bash
herrensuits/
│
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   ├── products.ts
│   │   └── orders.ts
│   ├── models/
│   │   ├── Product.ts
│   │   └── Order.ts
│   ├── routes/
│   │   ├── productRoutes.ts
│   │   └── orderRoutes.ts
│   └── server.ts
│
├── public/
│   └── index.html
│
├── .env
├── package.json
└── tsconfig.json

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/yourusername/herrensuits.git
cd herrensuits
2️⃣ Install dependencies
npm install
3️⃣ Setup environment variables

Create a .env file:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/herrensuits
STRIPE_SECRET_KEY=sk_test_your_key_here
4️⃣ Run MongoDB

Make sure MongoDB is running locally.

5️⃣ Start the server
npm run dev
6️⃣ Open frontend

Open in browser:

http://localhost:3000/public
🔌 API Endpoints

Products
GET    /api/products
POST   /api/products
GET    /api/products/:id

Orders
POST   /api/orders/checkout
GET    /api/orders
POST   /api/orders/webhook

🛒 Workflow
User browses products
Adds items to cart
Clicks checkout
Redirects to Stripe
Payment completed
Webhook stores order
Order visible in history page

🧠 Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Language: TypeScript
Database: MongoDB (Mongoose)
Payment: Stripe API


🔐 Future Improvements
User authentication (JWT)
Product image upload (Cloudinary)
Inventory management
Reviews & ratings


👨‍💻 Author
Kunal Shridhar
📧 shridharkunal2005@gmail.com
🔗 GitHub: https://github.com/kunalshridhar1

# License

    This project is licensed under the MIT License.