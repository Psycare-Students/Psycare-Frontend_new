import React, { useState } from "react";
import {
  Smile,
  TrendingUp,
  Calendar,
  Zap,
  Clock,
  Target,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const DashboardSection = () => {
  const moodOptions = [
    { emoji: "😊", label: "Great", color: "bg-gradient-accent" },
    { emoji: "🙂", label: "Good", color: "bg-gradient-secondary" },
    { emoji: "😐", label: "Okay", color: "bg-gradient-warm" },
    { emoji: "😔", label: "Down", color: "bg-gradient-primary" },
    { emoji: "😢", label: "Sad", color: "bg-destructive" },
  ];

  const recentActivities = [
    { time: "2 hours ago", activity: "Completed breathing exercise", icon: Zap, color: "text-accent" },
    { time: "1 day ago", activity: "Chat session with AI counselor", icon: Target, color: "text-primary" },
    { time: "3 days ago", activity: "Joined community discussion", icon: Clock, color: "text-secondary" },
  ];

  // ---------- State ----------
  const [moodPattern, setMoodPattern] = useState(["😊", "🙂", "😊", "😐", "🙂", "😊", "😊"]);
  const [wellnessScore, setWellnessScore] = useState(78);
  const [dayStreak, setDayStreak] = useState(7);

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleMoodSelect = (moodEmoji, label) => {
    // add new mood at the end and drop oldest
    const updatedPattern = [...moodPattern.slice(1), moodEmoji];
    setMoodPattern(updatedPattern);

    // recalculate wellness score (just demo)
    if (["😊", "🙂"].includes(moodEmoji)) {
      setWellnessScore((prev) => prev + 2);
      setDayStreak((prev) => prev + 1);
    } else {
      setWellnessScore((prev) => Math.max(0, prev - 1));
      setDayStreak(0);
    }

    // open appropriate modal
    if (["😢", "😔"].includes(moodEmoji)) {
      setModalContent({
        title: "We’re here for you ❤️",
        description: "It seems you’re feeling down. Would you like to talk to a counselor or explore wellness resources?",
        buttons: [
          { label: "Book a Counselor", href: "/book" },
          { label: "View Wellness Resources", href: "/resources" },
        ],
      });
      setModalOpen(true);
    } else if (["😊", "🙂"].includes(moodEmoji)) {
      setModalContent({
        title: "That’s wonderful! 🎉",
        description: "We’re glad you’re feeling great. Would you like to share what made your day happy in the community?",
        buttons: [
          { label: "Share in Community", href: "/community" },
        ],
      });
      setModalOpen(true);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MODAL */}
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="sm:max-w-md">
            {modalContent && (
              <>
                <DialogHeader>
                  <DialogTitle>{modalContent.title}</DialogTitle>
                  <DialogDescription>{modalContent.description}</DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-wrap gap-2">
                  {modalContent.buttons.map((btn, idx) => (
                    <Button
                      key={idx}
                      asChild
                      className="mt-2 w-full sm:w-auto"
                    >
                      <a href={btn.href}>{btn.label}</a>
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => setModalOpen(false)}
                    className="mt-2 w-full sm:w-auto"
                  >
                    Close
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            Your Mental Health Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your wellness journey with daily mood monitoring and personalized insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 font-poppins">
                <Smile className="w-5 h-5 text-primary" />
                <span>How are you feeling today?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-5 gap-4">
                {moodOptions.map((mood, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => handleMoodSelect(mood.emoji, mood.label)}
                    className="h-20 flex-col space-y-2 hover:scale-105 transition-all duration-300 hover:shadow-soft"
                  >
                    <span className="text-2xl">{mood.emoji}</span>
                    <span className="text-xs font-medium">{mood.label}</span>
                  </Button>
                ))}
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">This Week's Mood Pattern</h4>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {moodPattern.map((emoji, i) => (
                      <span key={i} className="text-lg">{emoji}</span>
                    ))}
                  </div>
                  <div className="flex items-center text-accent text-sm font-medium ml-4">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {wellnessScore >= 78 ? "Improving trend" : "Needs attention"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary font-poppins mb-1">{wellnessScore}</div>
                <div className="text-sm text-muted-foreground">Wellness Score</div>
                <div className="text-xs text-accent mt-1">
                  {wellnessScore >= 78 ? "+Good progress" : "Work on it"}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div className="text-3xl font-bold text-secondary font-poppins mb-1">12</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
                <div className="text-xs text-accent mt-1">This month</div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold text-accent font-poppins mb-1">{dayStreak}</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
                <div className="text-xs text-accent mt-1">{dayStreak > 0 ? "Keep it up!" : "Start again"}</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle className="font-poppins">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-gradient-primary hover:shadow-soft"
               onClick={() => navigate("/ai-chat")} >
                <MessageCircle className="w-4 h-4 mr-2" 
                
                />
                Start AI Chat Session
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-secondary/5">
                <Target className="w-4 h-4 mr-2" />
                Practice Breathing Exercise
              </Button>
              <Button variant="outline" className="w-full justify-start hover:bg-accent/5">
                <Calendar className="w-4 h-4 mr-2"
                 onClick={() => navigate("/book")}  />
                Schedule Counselor Meeting
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <CardHeader>
              <CardTitle className="font-poppins">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <activity.icon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.activity}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
