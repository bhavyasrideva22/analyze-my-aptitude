import { cn } from "@/lib/utils";

interface AssessmentProgressProps {
  currentSection: number;
  totalSections: number;
  currentQuestion: number;
  totalQuestions: number;
  sectionName: string;
}

export function AssessmentProgress({ 
  currentSection, 
  totalSections, 
  currentQuestion, 
  totalQuestions,
  sectionName 
}: AssessmentProgressProps) {
  const overallProgress = ((currentSection - 1) * 100 + (currentQuestion / totalQuestions) * 100) / totalSections;
  const sectionProgress = (currentQuestion / totalQuestions) * 100;

  const sections = [
    "Introduction",
    "Psychometric",
    "Technical", 
    "WISCAR",
    "Results"
  ];

  return (
    <div className="bg-card border-b border-border py-4 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section indicators */}
        <div className="flex items-center justify-between mb-4">
          {sections.map((section, index) => {
            const sectionNumber = index + 1;
            const isActive = sectionNumber === currentSection;
            const isCompleted = sectionNumber < currentSection;
            
            return (
              <div key={section} className="flex items-center">
                <div className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-all duration-300",
                  isActive && "bg-primary text-primary-foreground animate-pulse-glow",
                  isCompleted && "bg-progress text-progress-foreground",
                  !isActive && !isCompleted && "bg-muted text-muted-foreground"
                )}>
                  {sectionNumber}
                </div>
                
                {index < sections.length - 1 && (
                  <div className={cn(
                    "w-12 h-1 mx-2 rounded-full transition-all duration-500",
                    isCompleted ? "bg-progress" : "bg-muted"
                  )} />
                )}
              </div>
            );
          })}
        </div>

        {/* Current section info */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="font-semibold text-foreground">{sectionName}</h3>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestion} of {totalQuestions}
            </p>
          </div>
          
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">
              {Math.round(overallProgress)}% Complete
            </div>
            <div className="text-xs text-muted-foreground">
              Section {currentSection} of {totalSections}
            </div>
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-2">
          {/* Overall progress */}
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-interactive h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          
          {/* Section progress */}
          <div className="w-full bg-muted/50 rounded-full h-1">
            <div 
              className="bg-trust h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${sectionProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}