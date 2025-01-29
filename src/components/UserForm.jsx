import React, { useState, useEffect } from "react";

function UserForm({ onSubmit, selectedUser }) {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ name: "", email: "" });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return alert("All fields are required!");
    onSubmit({ ...user, id: selectedUser ? selectedUser.id : Date.now() });
  };

  return (
    <div>
      <h3>{selectedUser ? "Edit User" : "Add User"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
        <button type="submit">{selectedUser ? "Update" : "Add"}</button>
      </form>
    </div>
  );
}

export default UserForm;
