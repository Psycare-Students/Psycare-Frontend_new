import { MessageSquare, Heart, Share2, Users, TrendingUp, Shield, Clock, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const CommunitySection = () => {
  const posts = [
    {
      id: 1,
      author: 'Anonymous Student',
      avatar: '🌟',
      time: '2 hours ago',
      content: "Just wanted to share that I finally talked to my professor about my anxiety around presentations. They were so understanding and offered to let me present in a smaller group first. Sometimes asking for help really does work! 💙",
      likes: 24,
      replies: 8,
      category: 'Success Story',
      categoryColor: 'bg-accent'
    },
    {
      id: 2,
      author: 'Night Owl',
      avatar: '🦉',
      time: '4 hours ago',
      content: "Anyone else struggling with sleep anxiety? I keep thinking about all my assignments when I try to sleep. The breathing exercises from the resources section have been helping a bit.",
      likes: 18,
      replies: 12,
      category: 'Support',
      categoryColor: 'bg-secondary'
    },
    {
      id: 3,
      author: 'Study Buddy',
      avatar: '📚',
      time: '6 hours ago',
      content: "Reminder: It's okay to take breaks! I used to feel guilty about not studying 24/7, but I'm learning that rest is just as important as work. Your mental health matters more than any grade.",
      likes: 45,
      replies: 15,
      category: 'Motivation',
      categoryColor: 'bg-primary'
    }
  ];

  const communityStats = [
    { label: 'Active Members', value: '2,847', icon: Users, color: 'text-primary' },
    { label: 'Posts This Week', value: '156', icon: MessageSquare, color: 'text-secondary' },
    { label: 'Success Stories', value: '89', icon: TrendingUp, color: 'text-accent' },
    { label: 'Response Rate', value: '94%', icon: Heart, color: 'text-tertiary' }
  ];

  const trendingTopics = [
    { topic: 'Exam Anxiety', posts: 23, trend: '+12%' },
    { topic: 'Sleep Issues', posts: 18, trend: '+8%' },
    { topic: 'Social Anxiety', posts: 15, trend: '+5%' },
    { topic: 'Academic Pressure', posts: 12, trend: '+15%' }
  ];

  return (
    <section id="community" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            Community Support Forum
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow students in a safe, anonymous, and supportive environment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in">
            {/* Create Post */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-10 h-10 bg-gradient-primary">
                    <AvatarFallback className="text-primary-foreground">😊</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-muted/30 rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                      <p className="text-muted-foreground">Share your thoughts, experiences, or ask for support...</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-xs">
                          <MessageSquare className="w-3 h-3 mr-1" />
                          Post
                        </Button>
                        <Button size="sm" variant="ghost" className="text-xs">
                          <Shield className="w-3 h-3 mr-1" />
                          Anonymous
                        </Button>
                      </div>
                      <Button size="sm" className="bg-gradient-primary">
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            {posts.map((post, index) => (
              <Card 
                key={post.id} 
                className="shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-10 h-10 bg-gradient-secondary">
                      <AvatarFallback>{post.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h4 className="font-medium text-foreground">{post.author}</h4>
                        <span className={`px-2 py-1 ${post.categoryColor} text-xs font-medium rounded-full text-white`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.time}
                        </span>
                      </div>
                      
                      <p className="text-foreground leading-relaxed mb-4">{post.content}</p>
                      
                      <div className="flex items-center space-x-6">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-tertiary">
                          <Heart className="w-4 h-4 mr-2" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          {post.replies}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.3s' }}>
            {/* Community Stats */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-poppins">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {communityStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-sm font-medium">{stat.label}</span>
                    </div>
                    <span className="font-bold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-poppins">Trending Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 cursor-pointer transition-colors">
                    <div>
                      <p className="font-medium text-sm text-foreground">{topic.topic}</p>
                      <p className="text-xs text-muted-foreground">{topic.posts} posts</p>
                    </div>
                    <div className="flex items-center text-accent text-xs font-medium">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {topic.trend}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="font-poppins text-lg">🛡️ Safe Space Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <ThumbsUp className="w-4 h-4 text-accent mt-0.5" />
                  <p>Be kind and supportive to everyone</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-primary mt-0.5" />
                  <p>Respect privacy and anonymity</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Heart className="w-4 h-4 text-tertiary mt-0.5" />
                  <p>Share experiences, not personal details</p>
                </div>
                <Button size="sm" variant="outline" className="w-full mt-4">
                  Read Full Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;