import React, { useState, useEffect } from "react";

const avatars = [
  "😊", "😇", "🐻", "😉", "🌸", "⭐", "🥸", "🌙", "🌻", "🦋", "🍃",
  "🚀", "❤️", "⚡", "🎉", "🐱", "🍀", "🌟",
];

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(avatars[0]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
        setName(storedUser.funnyName || storedUser.name || "");
        setAvatar(storedUser.avatar || avatars[0]);
      }
    } catch {}
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:8080/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          funnyName: name,
          avatar,
        }),
      });
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};
      if (!res.ok) throw new Error(data.message || "Update failed");
      // Update localStorage
      const updatedUser = { ...user, funnyName: name, avatar };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setSuccess("Profile updated successfully!");
      // Redirect to home after short delay
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-20 p-8 bg-white rounded-3xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Please login to view your profile.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-20 p-8 bg-white rounded-3xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Profile</h2>
      <form onSubmit={handleUpdate}>
        {error && <div className="mb-4 text-red-500 font-semibold text-center">{error}</div>}
        {success && <div className="mb-4 text-green-600 font-semibold text-center">{success}</div>}
        <div className="mb-6 text-center">
          <span className="text-5xl">{avatar}</span>
        </div>
        <div className="mb-6">
          <h6 className="mb-3 font-semibold text-gray-700">Choose Your Avatar</h6>
          <div className="flex flex-wrap justify-center">
            {avatars.map((a, idx) => (
              <div
                key={idx}
                className={`w-12 h-12 flex items-center justify-center rounded-xl cursor-pointer text-2xl m-1 transition-all ${
                  avatar === a
                    ? "border-2 border-[#a682e3] bg-[#f7f6ff] shadow-[0_0_0_4px_#ede8ff]"
                    : "border-2 border-gray-200 bg-white"
                }`}
                onClick={() => setAvatar(a)}
              >
                {a}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block font-semibold text-gray-700 mb-2">Funny Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#f7f6ff] border border-[#eeebfa] text-gray-700 font-medium focus:ring-2 focus:ring-[#a682e3] outline-none"
            placeholder="Enter your funny name"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#aa85ff] to-[#67c7fc] shadow-md hover:shadow-lg transition"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
