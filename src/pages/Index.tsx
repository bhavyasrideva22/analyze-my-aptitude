import { useState } from "react";
import { AssessmentWelcome } from "@/components/AssessmentWelcome";
import { AssessmentProgress } from "@/components/AssessmentProgress";
import { QuestionCard } from "@/components/QuestionCard";
import { AssessmentResults, AssessmentScore } from "@/components/AssessmentResults";
import { questionSections } from "@/data/questions";

type AssessmentStage = 'welcome' | 'assessment' | 'results';

const Index = () => {
  const [stage, setStage] = useState<AssessmentStage>('welcome');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const allQuestions = questionSections.flatMap(section => section.questions);
  const currentSection = questionSections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];
  
  const totalQuestions = currentSection?.questions.length || 0;
  const currentQuestionNumber = currentQuestionIndex + 1;

  const calculateScores = (): AssessmentScore => {
    // Simplified scoring logic for demo
    const psychometricScore = Math.floor(Math.random() * 30 + 70); // 70-100
    const technicalScore = Math.floor(Math.random() * 25 + 65); // 65-90
    const wiscarScores = {
      will: Math.floor(Math.random() * 20 + 75),
      interest: Math.floor(Math.random() * 20 + 80),
      skill: Math.floor(Math.random() * 30 + 60),
      cognitiveReadiness: Math.floor(Math.random() * 20 + 78),
      abilityToLearn: Math.floor(Math.random() * 15 + 82),
      realWorldAlignment: Math.floor(Math.random() * 25 + 70)
    };
    
    const overall = Math.round((psychometricScore + technicalScore + Object.values(wiscarScores).reduce((a, b) => a + b) / 6) / 3);
    
    return {
      psychometric: psychometricScore,
      technical: technicalScore,
      wiscar: wiscarScores,
      overall,
      recommendation: overall >= 80 ? 'yes' : overall >= 65 ? 'maybe' : 'no'
    };
  };

  const handleStart = () => {
    setStage('assessment');
  };

  const handleAnswerChange = (value: string) => {
    if (currentQuestion) {
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (currentSectionIndex < questionSections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
    } else {
      setStage('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
      setCurrentQuestionIndex(questionSections[currentSectionIndex - 1].questions.length - 1);
    }
  };

  const handleRestart = () => {
    setStage('welcome');
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  if (stage === 'welcome') {
    return <AssessmentWelcome onStart={handleStart} />;
  }

  if (stage === 'results') {
    const scores = calculateScores();
    return <AssessmentResults scores={scores} onRestart={handleRestart} />;
  }

  if (stage === 'assessment' && currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
        <AssessmentProgress
          currentSection={currentSectionIndex + 1}
          totalSections={questionSections.length}
          currentQuestion={currentQuestionNumber}
          totalQuestions={totalQuestions}
          sectionName={currentSection.name}
        />
        
        <div className="container mx-auto px-4 py-12">
          <QuestionCard
            question={currentQuestion}
            value={answers[currentQuestion.id]}
            onValueChange={handleAnswerChange}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isFirst={currentSectionIndex === 0 && currentQuestionIndex === 0}
            isLast={currentSectionIndex === questionSections.length - 1 && currentQuestionIndex === totalQuestions - 1}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default Index;