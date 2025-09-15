import { BookOpen, Video, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ResourcesSection = () => {
  const resources = [
    { icon: BookOpen, title: 'Guides', desc: 'Mindfulness and coping strategies' },
    { icon: Video, title: 'Videos', desc: 'Short exercises and talks' },
    { icon: FileText, title: 'Articles', desc: 'Evidence-based insights' },
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">Wellness Resources</h2>
          <p className="text-lg text-muted-foreground mt-2">Curated content to support your journey</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <Card key={i} className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-poppins">
                  <r.icon className="w-5 h-5 text-primary" />
                  {r.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{r.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;


