import { useState } from "react";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ManagerDashboard from "./components/ManagerDashboard.jsx";
import StaffDashboard from "./components/StaffDashboard.jsx";

export default function App() {
  const [role, setRole] = useState(null);

  if (!localStorage.getItem("token")) {
    return (
      <div className="container">
        <Login setRole={setRole} />
        <Register />
      </div>
    );
  }

  return role === "MANAGER" ? <ManagerDashboard /> : <StaffDashboard />;
}
