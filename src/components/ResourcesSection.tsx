import { Brain, Headphones, Wind, Heart, AlertTriangle, Gamepad2, Play, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResourcesSection = () => {
  const resources = [
    {
      title: 'Stress Management',
      description: 'Learn effective techniques to manage academic and personal stress',
      icon: Brain,
      color: 'bg-gradient-primary',
      items: '12 exercises',
      rating: 4.8,
      category: 'Popular'
    },
    {
      title: 'Sleep Audio Library',
      description: 'Guided meditations and calming sounds for better sleep',
      icon: Headphones,
      color: 'bg-gradient-secondary',
      items: '25 audios',
      rating: 4.9,
      category: 'Trending'
    },
    {
      title: 'Breathing Exercises',
      description: 'Simple breathing techniques for anxiety and relaxation',
      icon: Wind,
      color: 'bg-gradient-accent',
      items: '8 techniques',
      rating: 4.7,
      category: 'Essential'
    },
    {
      title: 'Mindfulness Practice',
      description: 'Daily mindfulness exercises to improve mental clarity',
      icon: Heart,
      color: 'bg-gradient-warm',
      items: '15 practices',
      rating: 4.8,
      category: 'Featured'
    },
    {
      title: 'Crisis Support',
      description: 'Immediate help resources and emergency contact information',
      icon: AlertTriangle,
      color: 'bg-destructive',
      items: '24/7 support',
      rating: 5.0,
      category: 'Emergency'
    },
    {
      title: 'Interactive Games',
      description: 'Fun games designed to boost mood and reduce anxiety',
      icon: Gamepad2,
      color: 'bg-gradient-secondary',
      items: '6 games',
      rating: 4.6,
      category: 'Fun'
    }
  ];

  const categories = ['All', 'Popular', 'Trending', 'Essential', 'Featured', 'Emergency', 'Fun'];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-secondary-soft/10 to-accent-soft/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            Wellness Resources Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of mental health tools and resources
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-in">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={`rounded-full transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-primary hover:shadow-glow' 
                  : 'hover:bg-primary/5 hover:border-primary/30'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className="group shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 ${resource.color} rounded-xl flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-3 py-1 bg-muted/50 text-xs font-medium rounded-full text-muted-foreground">
                      {resource.category}
                    </span>
                    <div className="flex items-center space-x-1 mt-2">
                      <Star className="w-3 h-3 text-tertiary fill-current" />
                      <span className="text-xs font-medium">{resource.rating}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="font-poppins text-lg group-hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{resource.items}</span>
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>Available offline</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-soft transition-all duration-300"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="hover:bg-secondary/5 hover:border-secondary/30"
                  >
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-semibold font-poppins text-lg mb-2">Offline Access</h3>
              <p className="text-sm text-muted-foreground">
                Download resources for use without internet connection
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-secondary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold font-poppins text-lg mb-2">Personalized</h3>
              <p className="text-sm text-muted-foreground">
                AI-recommended resources based on your needs and progress
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-tertiary-foreground" />
              </div>
              <h3 className="font-semibold font-poppins text-lg mb-2">Expert Approved</h3>
              <p className="text-sm text-muted-foreground">
                All resources reviewed by licensed mental health professionals
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;