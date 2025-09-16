import { Bot, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AIChatSection = () => {
  return (
    <section id="ai-chat" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">AI Chat Support</h2>
          <p className="text-lg text-muted-foreground mt-2">Talk to our AI for instant guidance and coping strategies</p>
        </div>
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              PsyCare Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/30 rounded-md mb-4 p-4 overflow-auto text-sm text-muted-foreground">
              Try asking: "How do I handle exam stress?"
            </div>
            <div className="flex gap-2">
              <Input placeholder="Type your message..." />
              <Button>
                <Send className="w-4 h-4 mr-1" />
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIChatSection;


