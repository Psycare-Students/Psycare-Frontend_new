import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaHeart, FaComment, FaShareAlt } from "react-icons/fa";
import { FiShield } from "react-icons/fi";

export default function CommunityForum() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Anonymous Student",
      badge: "Success Story",
      time: "2 hours ago",
      topic: "Exam Anxiety",
      text: "Just wanted to share that I finally talked to my professor about my anxiety around presentations...",
      likes: 24,
      comments: ["That’s awesome!", "Proud of you! 💙"],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [commentInputs, setCommentInputs] = useState({});
  const [openComments, setOpenComments] = useState({});

  const handleShare = () => {
    if (!newPost.trim()) return;
    const newEntry = {
      id: Date.now(),
      user: "Anonymous",
      badge: "New",
      time: "just now",
      topic: newTopic || "General",
      text: newPost,
      likes: 0,
      comments: [],
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
    setNewTopic("");
  };

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  const handleAddComment = (id) => {
    if (!commentInputs[id]?.trim()) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, comments: [...p.comments, commentInputs[id]] } : p
      )
    );
    setCommentInputs((prev) => ({ ...prev, [id]: "" }));
  };

  const trendingMap = posts.reduce((acc, p) => {
    acc[p.topic] = (acc[p.topic] || 0) + 1;
    return acc;
  }, {});
  const trending = Object.entries(trendingMap)
    .map(([topic, count]) => ({ topic, posts: count }))
    .sort((a, b) => b.posts - a.posts)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 p-6" id="community">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 mt-14">
          <h1 className="text-4xl font-bold">Community Support Forum</h1>
          <p className="text-gray-500">
            Connect with fellow students in a safe, anonymous, and supportive environment
          </p>

          {/* 1-on-1 Chat button */}
          <button
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg bg-gradient-primary transition"
            onClick={() => navigate("/chat")}
          >
            1-1 Anonymous Conversation
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Posts Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Post Input */}
            <div className="bg-white rounded-2xl shadow p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">😊</span>
                <input
                  type="text"
                  placeholder="Topic (optional)"
                  className="flex-1 border-none focus:ring-0 outline-none text-sm"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                />
              </div>
              <textarea
                placeholder="Share your thoughts..."
                className="w-full border-none focus:ring-0 outline-none text-sm"
                rows={2}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <button
                className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full bg-gradient-primary transition"
                onClick={handleShare}
              >
                Share
              </button>
            </div>

            {/* Existing Posts */}
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaUserCircle className="text-2xl text-gray-400" />
                    <span className="font-semibold">{post.user}</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                      {post.badge}
                    </span>
                    <span className="text-gray-400 text-sm">{post.time}</span>
                  </div>
                </div>

                <p className="text-gray-700">
                  <span className="text-xs text-purple-500 mr-2">#{post.topic}</span>
                  {post.text}
                </p>

                <div className="flex items-center space-x-6 text-gray-500 pt-2">
                  <span
                    className="flex items-center space-x-1 cursor-pointer hover:text-purple-600 transition"
                    onClick={() => handleLike(post.id)}
                  >
                    <FaHeart /> <span>{post.likes}</span>
                  </span>
                  <span
                    className="flex items-center space-x-1 cursor-pointer hover:text-purple-600 transition"
                    onClick={() =>
                      setOpenComments((prev) => ({ ...prev, [post.id]: !prev[post.id] }))
                    }
                  >
                    <FaComment /> <span>{post.comments.length}</span>
                  </span>
                  <span className="flex items-center space-x-1 cursor-pointer hover:text-purple-600 transition">
                    <FaShareAlt /> <span>Share</span>
                  </span>
                </div>

                {/* Comments */}
                {openComments[post.id] && (
                  <div className="mt-3 space-y-2">
                    {post.comments.map((cmt, idx) => (
                      <div key={idx} className="text-sm text-gray-600 bg-gray-50 p-2 rounded-md">
                        {cmt}
                      </div>
                    ))}
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="flex-1 text-sm border px-2 py-1 rounded-md outline-none"
                        value={commentInputs[post.id] || ""}
                        onChange={(e) =>
                          setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))
                        }
                      />
                      <button
                        onClick={() => handleAddComment(post.id)}
                        className="bg-purple-500 text-white px-3 py-1 rounded-md text-sm hover:bg-purple-600 transition"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="font-semibold text-lg mb-4">Trending Topics</h2>
              <ul className="space-y-3">
                {trending.map((t, idx) => (
                  <li key={idx} className="flex justify-between">
                    <div>
                      <span className="text-gray-700">{t.topic}</span>
                      <p className="text-xs text-gray-400">{t.posts} posts</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidelines */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="font-semibold text-lg mb-4 flex items-center space-x-2">
                <FiShield className="text-red-500" />
                <span>Safe Space Guidelines</span>
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>👍 Be kind and supportive to everyone</li>
                <li>🔒 Respect privacy and anonymity</li>
                <li>💬 Share experiences, not personal details</li>
              </ul>
              <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition">
                Read Full Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
