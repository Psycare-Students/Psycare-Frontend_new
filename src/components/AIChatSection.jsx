import { useState } from "react";
import { Bot, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoginPrompt from "./ui/loginPrompt";

const AIChatSection = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋, I'm PsyCare. How are you feeling today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { sender: "user", text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_input: input }),
      credentials: "include",
    });

    if (response.status === 401) {
      setShowLoginPrompt(true);
      setLoading(false);
      return;
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: data.reply || "Sorry, I didn’t understand." },
    ]);
  } catch (error) {
    console.error("Chat API error:", error);

    // ✅ Show login prompt instead of "Unable to connect"
    setShowLoginPrompt(true);
  }

  setLoading(false);
};


  return (
    <section id="ai-chat" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">
            AI Chat Support
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Talk to our AI for instant guidance and coping strategies
          </p>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              PsyCare Assistant
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="h-64 bg-muted/30 rounded-md mb-4 p-4 overflow-auto text-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-2 ${
                    msg.sender === "user"
                      ? "text-right text-foreground"
                      : "text-left text-muted-foreground"
                  }`}
                >
                  <span
                    className={`inline-block px-3 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              {loading && (
                <div className="text-left text-muted-foreground">Typing...</div>
              )}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button onClick={sendMessage} disabled={loading}>
                <Send className="w-4 h-4 mr-1" />
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ✅ Show Login Prompt if not logged in */}
      {showLoginPrompt && (
        <LoginPrompt
          onLogin={() => (window.location.href = "/login")}
          onSignup={() => (window.location.href = "/signup")}
          onClose={() => setShowLoginPrompt(false)}
        />
      )}
    </section>
  );
};

export default AIChatSection;
