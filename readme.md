
GrowthX Assignment Management System


A web application designed to manage assignments with separate functionalities for Admins and Users. Admins can review and accept/reject assignments, while users can upload assignments and tag them to admins.

Features

User Features:

Register and Login: Users can create an account and log in.
Upload Assignments: Users can upload assignments and assign them to specific admins.


Admin Features:
Register and Login: Admins can create an account and log in.
View Assignments: Admins can view assignments tagged to them.
Accept/Reject Assignments: Admins can approve or reject submitted assignments.


Tech Stack
Frontend: HTML, CSS, JavaScript (Vanilla JS)
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Password Security: bcrypt
Middleware: CORS, Authentication


Installation
Prerequisites
Node.js installed
MongoDB installed and running
A .env file with the following:
env
Copy code
PORT=5000
MONGO_URI = 
JWT_SECRET = 
Steps
Clone the repository:

bash
Copy code

git clone https://github.com/kamalnath2003/Growthx1
cd Growthx1
Install dependencies:



bash
Copy code
npm install
Seed the default admin (username: admin, password: admin):


bash
Copy code
node util/seedDefaultAdmin.js
Start the server:

bash
Copy code
npm start
Open the frontend (index.html) in a browser.

API Endpoints
User Endpoints
POST /api/users/register: Register a new user.
POST /api/users/login: Login for users.
POST /api/users/upload: Upload an assignment.
GET /api/users/admins: Fetch all admins.
Admin Endpoints
POST /api/admins/register: Register a new admin.
POST /api/admins/login: Login for admins.
GET /api/admins/getadmins: Fetch all admins.
GET /api/admins/assignments: View assignments tagged to the admin.
POST /api/admins/assignments/:id/accept: Accept an assignment.
POST /api/admins/assignments/:id/reject: Reject an assignment.


Folder Structure
bash
Copy code
GrowthX/
│
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── userController.js  # User logic
│   └── adminController.js # Admin logic
├── middlewares/
│   └── authMiddleware.js  # Authentication middleware
├── models/
│   ├── user.js            # User schema
│   ├── admin.js           # Admin schema
│   └── assignment.js      # Assignment schema
├── routes/
│   ├── userRoutes.js      # Routes for user-related actions
│   └── adminRoutes.js     # Routes for admin-related actions
├── util/
│   └── seedDefaultAdmin.js # Script to seed a default admin
├── .env                   # Environment variables
├── server.js              # Main server file
├── package.json           # Project metadata and dependencies
└── index.html             # Frontend


Usage

Open the frontend (index.html) in your browser.
Use the default admin credentials to log in:
Email: admin@gmail.com
Password: admin

Register new users and upload assignments.
Admins can view assignments and accept/reject them.

Future Enhancements
Enhanced UI/UX for frontend.
Add notifications for assignment status updates.
Role-based dashboards for admins and users.
Email notifications on assignment acceptance/rejection.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss your ideas.

