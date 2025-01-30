User Management Dashboard

A simple React-based web application that allows users to view, add, edit, and delete user details using a mock backend API (https://jsonplaceholder.typicode.com/users).

📌 Features
✅ View all users fetched from the API
✅ Add a new user (simulated using a POST request)
✅ Edit existing user details
✅ Delete a user (simulated using a DELETE request)
✅ Error handling for API failures
✅ Responsive and clean UI.


🛠️ Tech Stack
Frontend: React (with Vite), React Hooks (useState, useEffect)
HTTP Requests: Axios / Fetch API
Styling: CSS
Mock Backend API: JSONPlaceholder (https://jsonplaceholder.typicode.com/users)

🚀 Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/yourusername/UserManagementDashboard.git

2️⃣ Navigate to the Project Folder
cd user-management-dashboard

3️⃣ Install Dependencies
npm install

4️⃣ Start the Development Server
npm run dev

This will start the React app at http://localhost:5173/.

UserList.jsx → Displays the list of users
UserForm.jsx → Handles user addition and editing
App.jsx → Main application logic
styles.css → Basic UI styling

📌 API Endpoints Used
Action	Method	Endpoint
Fetch all users	GET	/users
Add a new user	POST	/users
Edit a user	PUT	/users/:id
Delete a user	DELETE	/users/:id

💡 Challenges Faced
1️⃣ Handling API Limitations
JSONPlaceholder does not store added, edited, or deleted users persistently.
Workaround: We update the UI locally after a successful API response.

2️⃣ Managing State Efficiently
Used useState and useEffect to manage user data dynamically.
Initially, state updates caused extra re-renders, but optimizing state updates fixed performance issues.

3️⃣ Error Handling
API requests sometimes fail due to network issues.
Solution: Implemented try...catch blocks and displayed user-friendly error messages.

🔧 Future Improvements
✅ Pagination - Instead of displaying all users at once, implement pagination
✅ Loading Indicators - Show a spinner when fetching data to improve user experience.
✅ Validation Enhancements - Improve form validation (check for duplicate emails, valid name formats, etc.).
✅ Better UI Design - Use Material UI or Bootstrap for a cleaner look.
