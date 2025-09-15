import { Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">Community Support</h2>
          <p className="text-lg text-muted-foreground mt-2">Join discussions and learn from peers</p>
        </div>
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Recent Topics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <div>Managing exam anxiety</div>
            <div>Building a daily routine</div>
            <div>Finding balance with social media</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;


