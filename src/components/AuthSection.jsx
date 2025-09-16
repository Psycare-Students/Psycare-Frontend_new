import React, { useState } from "react";
import { LogIn, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const avatars = [
  "😊", "🌟", "🦉", "📚", "🌸", "⭐", "🌈", "🌙", "🌻", "🦋", "🍃", "🍓"
];

const AuthSection = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section  className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 via-purple-100 to-blue-100 p-4">
      <div className="w-full max-w-md">
        <Card className="rounded-2xl shadow-xl">
          <CardHeader>
            <div className="flex mb-6 rounded-xl overflow-hidden bg-gray-100">
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-center text-sm font-semibold ${
                  !isLogin ? "bg-white shadow" : ""
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <UserPlus className="w-4 h-4" /> Sign Up
                </span>
              </button>
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 text-center text-sm font-semibold ${
                  isLogin ? "bg-white shadow" : ""
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <LogIn className="w-4 h-4" /> Login
                </span>
              </button>
            </div>
          </CardHeader>

          <CardContent>
            {/* Sign Up */}
            {!isLogin ? (
              <form className="space-y-4">
                <h2 className="text-center text-lg font-semibold">Choose Your Avatar</h2>
                <div className="grid grid-cols-6 gap-2 justify-items-center">
                  {avatars.map((a, idx) => (
                    <button
                      type="button"
                      key={idx}
                      className="p-2 hover:scale-110 transition-transform"
                    >
                      <span className="text-2xl">{a}</span>
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-xl py-2 font-semibold hover:opacity-90"
                >
                  Create Account
                </Button>
                <div className="text-center text-sm text-gray-500">OR CONTINUE WITH</div>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border rounded-xl py-2 hover:bg-gray-50"
                  >
                    GitHub
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border rounded-xl py-2 hover:bg-gray-50"
                  >
                    Google
                  </Button>
                </div>
                <p className="text-xs text-center text-gray-400">
                  By creating an account, you agree to our{" "}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            ) : (
              // Login
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-xl py-2 font-semibold hover:opacity-90"
                >
                  Log In
                </Button>
                <p className="text-xs text-center text-gray-400">
                  By logging in, you agree to our{" "}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AuthSection;
