import { useEffect, useState } from "react";

export function useAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (res.status === 401) {
        // 🚨 show message but not login card
        setError("unauthorized");
        setAppointments([]);
        setLoading(false);
        return;
      }

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setAppointments(data);
      setError(null);
    } catch (err) {
      console.error("Fetch appointments error:", err);
      setError("network");
    }
    setLoading(false);
  };

  const cancelAppointment = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (res.status === 401) {
        return "unauthorized"; // 🚨 handled in component → show card
      }

      if (!res.ok) throw new Error("Cancel failed");

      setAppointments((prev) => prev.filter((a) => a._id !== id));
      return "success";
    } catch (err) {
      console.error("Cancel appointment error:", err);
      return "error";
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return { appointments, loading, error, fetchAppointments, cancelAppointment };
}
