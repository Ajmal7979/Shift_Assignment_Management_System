import { useState } from "react";
import api from "../api/axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "STAFF"
  });

  const register = async () => {
    try {
      await api.post("/auth/register", form);
      alert("Registered successfully");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="card">
      <h2>Register</h2>
      <div className="form">
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <select onChange={e => setForm({ ...form, role: e.target.value })}>
          <option value="STAFF">Staff</option>
          <option value="MANAGER">Manager</option>
        </select>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}
