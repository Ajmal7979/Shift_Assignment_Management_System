import { useEffect, useState } from "react";
import api from "../api/axios";

export default function StaffDashboard() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    api.get("/assignments/my").then(res => setShifts(res.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="top-bar">
        <h2>My Shifts</h2>
        <button className="logout" onClick={logout}>Logout</button>
      </div>

      {shifts.length === 0 && <p>No shifts assigned yet.</p>}

      {shifts.map(s => (
        <div className="shift-item" key={s._id}>
          {new Date(s.shift.startTime).toLocaleString()} –{" "}
          {new Date(s.shift.endTime).toLocaleString()}
        </div>
      ))}
    </div>
  );
}
