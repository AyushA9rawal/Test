import React, { useState, useEffect } from 'react';
import { editUser, fetchUsers } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const UserEdit = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', email: '', department: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers().then(response => {
      const userData = response.data.find(u => u.id === parseInt(id));
      setUser(userData);
    });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(id, user).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} required />
      <input type="email" name="email" value={user.email} onChange={handleChange} required />
      <input type="text" name="department" value={user.department} onChange={handleChange} required />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UserEdit;