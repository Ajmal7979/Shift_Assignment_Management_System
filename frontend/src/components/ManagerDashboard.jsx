import { useEffect, useState } from "react";
import api from "../api/axios";

export default function ManagerDashboard() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [staffId, setStaffId] = useState("");
  const [shiftId, setShiftId] = useState("");

  const [shifts, setShifts] = useState([]);
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    // Fetch shifts
    api.get("/shifts").then(res => setShifts(res.data));

    // Fetch staff (MANAGER only)
    api.get("/auth/staff").then(res => setStaffList(res.data));
  }, []);

  const createShift = async () => {
    if (!startTime || !endTime) {
      alert("Please select start and end time");
      return;
    }

    await api.post("/shifts", { startTime, endTime });
    alert("Shift created");

    // refresh shifts
    const res = await api.get("/shifts");
    setShifts(res.data);
  };

  const assignShift = async () => {
    if (!staffId || !shiftId) {
      alert("Please select staff and shift");
      return;
    }

    try {
      await api.post("/assignments", { staffId, shiftId });
      alert("Shift assigned successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Assignment failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="top-bar">
        <h2>Manager Dashboard</h2>
        <button className="logout" onClick={logout}>Logout</button>
      </div>

      {/* CREATE SHIFT */}
      <div className="card">
        <h3>Create Shift</h3>
        <div className="form">
          <input
            type="datetime-local"
            onChange={e => setStartTime(e.target.value)}
          />
          <input
            type="datetime-local"
            onChange={e => setEndTime(e.target.value)}
          />
          <button onClick={createShift}>Create Shift</button>
        </div>
      </div>

      {/* ASSIGN SHIFT */}
      <div className="card">
        <h3>Assign Shift</h3>
        <div className="form">

          {/* STAFF DROPDOWN */}
          <select onChange={e => setStaffId(e.target.value)}>
            <option value="">Select Staff</option>
            {staffList.map(staff => (
              <option key={staff._id} value={staff._id}>
                {staff.staffId} - {staff.name}
              </option>
            ))}
          </select>

          {/* SHIFT DROPDOWN */}
          <select onChange={e => setShiftId(e.target.value)}>
            <option value="">Select Shift</option>
            {shifts.map(s => (
              <option key={s._id} value={s._id}>
                {new Date(s.startTime).toLocaleString()} -{" "}
                {new Date(s.endTime).toLocaleString()}
              </option>
            ))}
          </select>

          <button onClick={assignShift}>Assign</button>
        </div>
      </div>
    </div>
  );
}
