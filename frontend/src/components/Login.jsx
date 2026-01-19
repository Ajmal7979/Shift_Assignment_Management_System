import { useState } from "react";
import api from "../api/axios";

export default function Login({ setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setRole(res.data.role);
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      <div className="form">
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
