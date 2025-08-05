import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface Question {
  id: string;
  type: 'likert' | 'multiple-choice' | 'scenario';
  title: string;
  description?: string;
  question: string;
  options: {
    value: string;
    label: string;
    description?: string;
  }[];
  required?: boolean;
}

interface QuestionCardProps {
  question: Question;
  value?: string;
  onValueChange: (value: string) => void;
  onNext: () => void;
  onPrevious?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  className?: string;
}

export function QuestionCard({
  question,
  value,
  onValueChange,
  onNext,
  onPrevious,
  isFirst = false,
  isLast = false,
  className
}: QuestionCardProps) {
  const getLikertLabel = (optionValue: string) => {
    const likertLabels: Record<string, string> = {
      '1': 'Strongly Disagree',
      '2': 'Disagree', 
      '3': 'Neutral',
      '4': 'Agree',
      '5': 'Strongly Agree'
    };
    return likertLabels[optionValue] || optionValue;
  };

  const getLikertColor = (optionValue: string) => {
    const colors: Record<string, string> = {
      '1': 'text-red-600',
      '2': 'text-orange-600',
      '3': 'text-yellow-600', 
      '4': 'text-blue-600',
      '5': 'text-green-600'
    };
    return colors[optionValue] || 'text-muted-foreground';
  };

  return (
    <div className={cn("max-w-2xl mx-auto animate-fade-in", className)}>
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          {question.title && (
            <CardTitle className="text-xl font-display mb-2">
              {question.title}
            </CardTitle>
          )}
          <CardDescription className="text-lg text-foreground font-medium">
            {question.question}
          </CardDescription>
          {question.description && (
            <p className="text-sm text-muted-foreground mt-2">
              {question.description}
            </p>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          <RadioGroup 
            value={value} 
            onValueChange={onValueChange}
            className="space-y-3"
          >
            {question.options.map((option, index) => (
              <div 
                key={option.value}
                className={cn(
                  "flex items-center space-x-3 p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-md",
                  value === option.value 
                    ? "border-primary bg-primary/5 shadow-sm" 
                    : "border-border hover:border-primary/50 bg-card"
                )}
                onClick={() => onValueChange(option.value)}
              >
                <RadioGroupItem 
                  value={option.value} 
                  id={option.value}
                  className="mt-0.5" 
                />
                
                <div className="flex-1">
                  <Label 
                    htmlFor={option.value}
                    className={cn(
                      "text-base font-medium cursor-pointer",
                      question.type === 'likert' && getLikertColor(option.value)
                    )}
                  >
                    {question.type === 'likert' ? getLikertLabel(option.value) : option.label}
                  </Label>
                  
                  {option.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {option.description}
                    </p>
                  )}
                </div>

                {question.type === 'likert' && (
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                    value === option.value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    {option.value}
                  </div>
                )}
              </div>
            ))}
          </RadioGroup>

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={onPrevious}
              disabled={isFirst}
              className={cn(!isFirst && "hover:bg-muted")}
            >
              Previous
            </Button>

            <Button
              onClick={onNext}
              disabled={!value && question.required}
              className={cn(
                "bg-gradient-to-r from-primary to-interactive hover:from-primary/90 hover:to-interactive/90",
                (!value && question.required) && "opacity-50 cursor-not-allowed"
              )}
            >
              {isLast ? "Complete Assessment" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}