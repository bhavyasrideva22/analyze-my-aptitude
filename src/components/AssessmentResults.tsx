import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  TrendingUp, 
  Brain, 
  Target, 
  BookOpen, 
  Users, 
  CheckCircle,
  AlertCircle,
  Star,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface AssessmentScore {
  psychometric: number;
  technical: number;
  wiscar: {
    will: number;
    interest: number;
    skill: number;
    cognitiveReadiness: number;
    abilityToLearn: number;
    realWorldAlignment: number;
  };
  overall: number;
  recommendation: 'yes' | 'maybe' | 'no';
}

interface AssessmentResultsProps {
  scores: AssessmentScore;
  onRestart: () => void;
}

export function AssessmentResults({ scores, onRestart }: AssessmentResultsProps) {
  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'yes': return 'text-green-600';
      case 'maybe': return 'text-yellow-600';
      case 'no': return 'text-red-600';
      default: return 'text-muted-foreground';
    }
  };

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'yes': return <CheckCircle className="w-6 h-6 text-green-600" />;
      case 'maybe': return <AlertCircle className="w-6 h-6 text-yellow-600" />;
      case 'no': return <AlertCircle className="w-6 h-6 text-red-600" />;
      default: return <Target className="w-6 h-6" />;
    }
  };

  const getRecommendationText = (recommendation: string) => {
    switch (recommendation) {
      case 'yes': return 'Highly Recommended';
      case 'maybe': return 'Consider with Development';
      case 'no': return 'Explore Alternatives';
      default: return 'Assess Further';
    }
  };

  const wiscarLabels = {
    will: 'Will to Persist',
    interest: 'Natural Interest',
    skill: 'Current Skills',
    cognitiveReadiness: 'Learning Readiness',
    abilityToLearn: 'Adaptability',
    realWorldAlignment: 'Role Alignment'
  };

  const careerPaths = [
    { role: 'Business Analyst', match: 92, description: 'Bridges business and technology teams' },
    { role: 'Product Owner', match: 87, description: 'Manages product features and priorities' },
    { role: 'Systems Analyst', match: 84, description: 'Analyzes and improves IT systems' },
    { role: 'Process Analyst', match: 81, description: 'Optimizes business operations' },
    { role: 'Data Analyst', match: 78, description: 'Uses data to drive business decisions' }
  ];

  const learningPath = [
    { stage: 'Foundation', topics: ['BA Fundamentals', 'Stakeholder Communication', 'Agile Frameworks'] },
    { stage: 'Intermediate', topics: ['Requirements Engineering', 'Process Modeling', 'Business Tools'] },
    { stage: 'Advanced', topics: ['Strategic Analysis', 'Change Management', 'Industry Certification'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-interactive mb-6 animate-pulse-glow">
            <Trophy className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Your Assessment Results
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Based on your responses, here's your comprehensive career fit analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Recommendation */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="animate-scale-in">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  {getRecommendationIcon(scores.recommendation)}
                  <CardTitle className={cn("text-2xl", getRecommendationColor(scores.recommendation))}>
                    {getRecommendationText(scores.recommendation)}
                  </CardTitle>
                </div>
                <CardDescription>
                  Overall Business Analysis Fit Score: <span className="font-bold text-lg text-foreground">{scores.overall}/100</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={scores.overall} className="h-3 mb-4" />
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">Psychometric</div>
                    <div className="text-2xl font-bold text-primary">{scores.psychometric}</div>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-trust mx-auto mb-2" />
                    <div className="font-semibold">Technical</div>
                    <div className="text-2xl font-bold text-trust">{scores.technical}</div>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Target className="w-8 h-8 text-interactive mx-auto mb-2" />
                    <div className="font-semibold">WISCAR Avg</div>
                    <div className="text-2xl font-bold text-interactive">
                      {Math.round(Object.values(scores.wiscar).reduce((a, b) => a + b, 0) / 6)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WISCAR Breakdown */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  WISCAR Framework Analysis
                </CardTitle>
                <CardDescription>
                  Six-dimensional career readiness assessment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(scores.wiscar).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{wiscarLabels[key as keyof typeof wiscarLabels]}</span>
                        <Badge variant={value >= 80 ? "default" : value >= 60 ? "secondary" : "outline"}>
                          {value}/100
                        </Badge>
                      </div>
                      <Progress value={value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Paths */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Recommended Career Paths
                </CardTitle>
                <CardDescription>
                  Top BA-aligned roles based on your profile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {careerPaths.map((path, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <div className="font-semibold">{path.role}</div>
                        <div className="text-sm text-muted-foreground">{path.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-primary">{path.match}%</div>
                        <div className="text-xs text-muted-foreground">Match</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Path */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Recommended Learning Path
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningPath.map((stage, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{stage.stage}</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {stage.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <ArrowRight className="w-3 h-3" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  Download Full Report
                </Button>
                <Button className="w-full" variant="outline">
                  Explore Learning Resources
                </Button>
                <Button className="w-full" variant="outline">
                  Connect with Mentors
                </Button>
                <Button 
                  onClick={onRestart}
                  className="w-full bg-gradient-to-r from-primary to-interactive hover:from-primary/90 hover:to-interactive/90"
                >
                  Retake Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}