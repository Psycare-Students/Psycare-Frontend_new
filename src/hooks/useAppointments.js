// src/hooks/useAppointments.js
import { useState, useEffect } from "react";

export function useAppointments() {
  const [appointments, setAppointments] = useState(() => {
    // load from localStorage first
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  function addAppointment(app) {
    setAppointments(prev => [...prev, app]);
  }

  return { appointments, addAppointment };
}
