import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");

  // Fetch users from API
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => setError("Failed to fetch users."));
  }, []);

  // Add a new user (Simulated)
  const addUser = (user) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((newUser) => setUsers([...users, newUser]))
      .catch(() => setError("Error adding user."));
  };

  // Edit an existing user (Simulated)
  const editUser = (updatedUser) => {
    fetch(`${API_URL}/${updatedUser.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
        setSelectedUser(null);
      })
      .catch(() => setError("Error updating user."));
  };

  // Delete a user (Simulated)
  const deleteUser = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch(() => setError("Error deleting user."));
  };

  return (
    <div>
      <h2>User Management Dashboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <UserList users={users} onEdit={setSelectedUser} onDelete={deleteUser} />
      <UserForm onSubmit={selectedUser ? editUser : addUser} selectedUser={selectedUser} />
    </div>
  );
}

export default App;
