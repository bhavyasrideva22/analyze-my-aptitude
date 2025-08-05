import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Users, CheckCircle, Clock, Target } from "lucide-react";

interface AssessmentWelcomeProps {
  onStart: () => void;
}

export function AssessmentWelcome({ onStart }: AssessmentWelcomeProps) {
  const features = [
    {
      icon: Brain,
      title: "Psychometric Analysis",
      description: "Assess personality traits, interests, and cognitive style"
    },
    {
      icon: TrendingUp,
      title: "Technical Aptitude",
      description: "Evaluate readiness for BA concepts and tools"
    },
    {
      icon: Target,
      title: "WISCAR Framework",
      description: "Comprehensive 6-dimensional career fit analysis"
    }
  ];

  const careers = [
    "Business Analyst",
    "Systems Analyst", 
    "Product Owner",
    "Requirements Engineer",
    "Functional Consultant",
    "Business Intelligence Analyst"
  ];

  const traits = [
    "Analytical Thinking",
    "Attention to Detail", 
    "Strong Communication",
    "Problem-Solving Mindset",
    "Domain Knowledge",
    "Emotional Intelligence"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-interactive mb-6 animate-pulse-glow">
              <Brain className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-interactive to-trust bg-clip-text text-transparent">
            Is Business Analysis Right for You?
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            A Future-Fit Career Readiness Assessment combining psychometrics, technical aptitude, and career alignment to guide your decision.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15-20 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Comprehensive Results</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span>AI-Powered Insights</span>
            </div>
          </div>
        </div>

        {/* What is Business Analysis */}
        <Card className="mb-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              What is Business Analysis?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Business Analysis involves identifying business needs and determining solutions to business problems. 
              Solutions often include process improvements, digital transformation, data analysis, and system changes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Typical Career Paths:</h4>
                <ul className="space-y-2">
                  {careers.map((career, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Key Success Traits:</h4>
                <ul className="space-y-2">
                  {traits.map((trait, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-progress" />
                      <span className="text-sm text-muted-foreground">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in" 
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={onStart}
            size="lg"
            className="bg-gradient-to-r from-primary to-interactive hover:from-primary/90 hover:to-interactive/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Assessment
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            No registration required • Results available immediately • Free to use
          </p>
        </div>
      </div>
    </div>
  );
}