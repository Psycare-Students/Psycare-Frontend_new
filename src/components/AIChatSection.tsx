import { Send, Mic, Globe, Lightbulb, Heart, Shield, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const AIChatSection = () => {
  const chatMessages = [
    {
      type: 'ai',
      message: "Hi there! I'm your AI mental health companion. How are you feeling today? 😊",
      time: '2:30 PM'
    },
    {
      type: 'user',
      message: "I've been feeling pretty anxious about my upcoming exams.",
      time: '2:31 PM'
    },
    {
      type: 'ai',
      message: "I understand exam anxiety can be really overwhelming. Let's explore some strategies that might help. Have you tried any relaxation techniques before?",
      time: '2:31 PM'
    }
  ];

  const tips = [
    { icon: Heart, text: 'Take deep breaths', color: 'text-tertiary' },
    { icon: Lightbulb, text: 'Try the 5-4-3-2-1 grounding technique', color: 'text-accent' },
    { icon: Shield, text: 'Remember: You are safe and supported', color: 'text-primary' },
  ];

  return (
    <section id="ai-chat" className="py-20 bg-gradient-to-b from-primary-soft/10 to-secondary-soft/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            AI-Powered Mental Health Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant, personalized support from our compassionate AI counselor, available 24/7
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <Card className="lg:col-span-2 shadow-medium hover:shadow-glow transition-all duration-300 animate-slide-in">
            <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="flex items-center space-x-2 font-poppins">
                <MessageCircle className="w-5 h-5" />
                <span>AI Mental Health Assistant</span>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm">Online</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4 bg-muted/20">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-gradient-primary text-primary-foreground' 
                        : 'bg-card shadow-soft border'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      <p className={`text-xs mt-1 ${
                        msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-6 border-t bg-card/50">
                <div className="flex items-center space-x-3">
                  <div className="relative flex-1">
                    <Input 
                      placeholder="Type your message here... I'm here to listen 💙"
                      className="pr-12 rounded-full border-primary/20 focus:border-primary/40 transition-colors"
                    />
                    <Button 
                      size="sm" 
                      className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-accent hover:shadow-soft"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full hover:bg-accent/5 hover:border-accent/30"
                  >
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full hover:bg-secondary/5 hover:border-secondary/30"
                  >
                    <Globe className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  All conversations are private and secure 🔒
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Tips Sidebar */}
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-poppins text-lg">💡 Helpful Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <tip.icon className={`w-5 h-5 mt-0.5 ${tip.color}`} />
                    <p className="text-sm text-foreground">{tip.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-poppins text-lg">🌟 Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>24/7 Availability</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Multilingual Support</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Voice Messages</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                  <span>Personalized Responses</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-accent/5 to-secondary/5">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🚨</div>
                <h4 className="font-semibold text-foreground mb-2">Crisis Support</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  If you're in crisis, our AI will immediately connect you with human support.
                </p>
                <Button size="sm" variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive/5">
                  Emergency Help
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatSection;