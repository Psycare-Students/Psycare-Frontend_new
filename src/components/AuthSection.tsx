import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AuthSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('😊');

  const avatarOptions = ['😊', '🌟', '🦉', '📚', '🌸', '⭐', '🌈', '💫', '🌻', '🦋', '🎨', '🚀'];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            Join the PsyCare Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create your account and start your mental wellness journey today
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-glow hover:shadow-glow transition-all duration-300 animate-slide-in">
            <CardContent className="p-8">
              <Tabs defaultValue="signup" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="signup" className="font-medium">Sign Up</TabsTrigger>
                  <TabsTrigger value="login" className="font-medium">Login</TabsTrigger>
                </TabsList>

                {/* Sign Up Tab */}
                <TabsContent value="signup" className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold font-poppins text-foreground mb-2">
                      Choose Your Avatar
                    </h3>
                    <div className="grid grid-cols-6 gap-2 max-w-xs mx-auto">
                      {avatarOptions.map((avatar, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedAvatar(avatar)}
                          className={`w-10 h-10 text-lg rounded-lg transition-all duration-300 hover:scale-110 ${
                            selectedAvatar === avatar 
                              ? 'bg-gradient-primary shadow-soft ring-2 ring-primary/30' 
                              : 'bg-muted/30 hover:bg-muted/50'
                          }`}
                        >
                          {avatar}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Full Name" 
                        className="pl-10 h-12 rounded-xl border-primary/20 focus:border-primary/40"
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        className="pl-10 h-12 rounded-xl border-primary/20 focus:border-primary/40"
                      />
                    </div>
                    
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Password" 
                        className="pl-10 pr-10 h-12 rounded-xl border-primary/20 focus:border-primary/40"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>

                  <Button className="w-full h-12 bg-gradient-primary hover:shadow-glow text-lg font-semibold rounded-xl transition-all duration-300">
                    Create Account
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border/50"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-12 rounded-xl hover:bg-primary/5 hover:border-primary/30">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="h-12 rounded-xl hover:bg-secondary/5 hover:border-secondary/30">
                      <Chrome className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    By creating an account, you agree to our{' '}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a> and{' '}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </p>
                </TabsContent>

                {/* Login Tab */}
                <TabsContent value="login" className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold font-poppins text-foreground">
                      Welcome Back!
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Continue your wellness journey
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        className="pl-10 h-12 rounded-xl border-primary/20 focus:border-primary/40"
                      />
                    </div>
                    
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type={showPassword ? "text" : "password"}
                        placeholder="Password" 
                        className="pl-10 pr-10 h-12 rounded-xl border-primary/20 focus:border-primary/40"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-primary/20" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <a href="#" className="text-primary hover:underline">Forgot password?</a>
                  </div>

                  <Button className="w-full h-12 bg-gradient-primary hover:shadow-glow text-lg font-semibold rounded-xl transition-all duration-300">
                    Sign In
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border/50"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-12 rounded-xl hover:bg-primary/5 hover:border-primary/30">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="h-12 rounded-xl hover:bg-secondary/5 hover:border-secondary/30">
                      <Chrome className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Features Highlight */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-xl">🔒</span>
              </div>
              <p className="text-sm font-medium">100% Private</p>
              <p className="text-xs text-muted-foreground">Your data is secure</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-xl">🆓</span>
              </div>
              <p className="text-sm font-medium">Completely Free</p>
              <p className="text-xs text-muted-foreground">No hidden costs</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
                <span className="text-xl">⚡</span>
              </div>
              <p className="text-sm font-medium">Instant Access</p>
              <p className="text-xs text-muted-foreground">Start immediately</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;