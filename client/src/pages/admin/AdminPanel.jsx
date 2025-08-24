import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Dashboard from "./Dashboard";
import Todayrdv from "./Todayrdv";
import Waitingrdv from "./Waitingrdv";

const AdminPanel = () => {
  const { serviceName } = useParams();

  return (
    <div className="flex">
      {/* Sidebar always visible */}
      <Sidebar />

      {/* Content area */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="dashboard" element={<Dashboard serviceName={serviceName} />} />
          <Route path="today" element={<Todayrdv serviceName={serviceName} />} />
          <Route path="waiting" element={<Waitingrdv serviceName={serviceName} />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPanel;
