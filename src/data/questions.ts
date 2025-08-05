import { Question } from "@/components/QuestionCard";

export const psychometricQuestions: Question[] = [
  {
    id: "psych_1",
    type: "likert",
    title: "Interest & Motivation",
    question: "I enjoy identifying patterns and inconsistencies in business processes",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" }
    ],
    required: true
  },
  {
    id: "psych_2", 
    type: "likert",
    title: "Communication Style",
    question: "I feel comfortable facilitating meetings between technical and non-technical stakeholders",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" }
    ],
    required: true
  },
  {
    id: "psych_3",
    type: "likert", 
    title: "Problem-Solving Approach",
    question: "I prefer structured, methodical approaches to solving complex problems",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" }
    ],
    required: true
  },
  {
    id: "psych_4",
    type: "likert",
    title: "Detail Orientation", 
    question: "I naturally notice when requirements are incomplete or ambiguous",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" }
    ],
    required: true
  },
  {
    id: "psych_5",
    type: "likert",
    title: "Learning Motivation",
    question: "I actively seek to understand different business domains and industries",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" }
    ],
    required: true
  }
];

export const technicalQuestions: Question[] = [
  {
    id: "tech_1",
    type: "multiple-choice",
    title: "Business Analysis Knowledge",
    question: "What is the primary purpose of a use case in business analysis?",
    options: [
      { 
        value: "document_system",
        label: "To document system architecture",
        description: "Focus on technical implementation details"
      },
      {
        value: "capture_requirements", 
        label: "To capture functional requirements from user perspective",
        description: "Describes how users interact with the system"
      },
      {
        value: "create_database",
        label: "To create database schemas", 
        description: "Focus on data structure design"
      },
      {
        value: "test_scenarios",
        label: "To generate test scenarios only",
        description: "Primary focus on testing activities"
      }
    ],
    required: true
  },
  {
    id: "tech_2",
    type: "multiple-choice", 
    title: "Stakeholder Management",
    question: "In a project with conflicting stakeholder requirements, what should a BA do first?",
    options: [
      {
        value: "escalate_immediately",
        label: "Escalate to project manager immediately",
        description: "Pass the conflict up the hierarchy"
      },
      {
        value: "analyze_impact",
        label: "Analyze the impact and trade-offs of each requirement",
        description: "Understand the business implications first" 
      },
      {
        value: "choose_senior",
        label: "Choose the requirement from the most senior stakeholder",
        description: "Default to organizational hierarchy"
      },
      {
        value: "ignore_conflict",
        label: "Document both and let development decide",
        description: "Avoid making a decision"
      }
    ],
    required: true
  },
  {
    id: "tech_3",
    type: "multiple-choice",
    title: "Agile Methodology",
    question: "In Scrum, what is the main responsibility of a Product Owner?",
    options: [
      {
        value: "manage_team",
        label: "Manage the development team's daily activities",
        description: "Focus on team management and operations"
      },
      {
        value: "prioritize_backlog",
        label: "Prioritize and maintain the product backlog",
        description: "Own the product vision and requirements"
      },
      {
        value: "write_code",
        label: "Write user stories and acceptance criteria only",
        description: "Limited to documentation tasks"
      },
      {
        value: "test_software",
        label: "Test the software before release",
        description: "Primary focus on quality assurance"
      }
    ],
    required: true
  },
  {
    id: "tech_4",
    type: "scenario",
    title: "Logical Reasoning",
    question: "A company's sales decreased by 20% after implementing a new CRM system. What should a BA investigate first?",
    description: "Consider the most logical analytical approach",
    options: [
      {
        value: "blame_system",
        label: "Assume the CRM system is faulty and recommend replacement",
        description: "Jump to conclusions about the technology"
      },
      {
        value: "analyze_correlation",
        label: "Investigate whether the timing is coincidental or causal",
        description: "Look for correlation vs. causation patterns"
      },
      {
        value: "train_users",
        label: "Immediately implement more user training",
        description: "Assume it's a training issue"
      },
      {
        value: "revert_changes",
        label: "Recommend reverting to the old system",
        description: "Avoid the new system entirely"
      }
    ],
    required: true
  },
  {
    id: "tech_5", 
    type: "multiple-choice",
    title: "Requirements Management",
    question: "What makes a good user story in agile development?",
    options: [
      {
        value: "technical_detail",
        label: "Includes detailed technical implementation",
        description: "Focus on how to build the feature"
      },
      {
        value: "independent_valuable",
        label: "Independent, negotiable, valuable, estimable, small, testable",
        description: "Follows the INVEST criteria"
      },
      {
        value: "long_comprehensive",
        label: "Long and comprehensive with all edge cases",
        description: "Covers every possible scenario upfront"
      },
      {
        value: "developer_written",
        label: "Written by developers for developers",
        description: "Technical team creates the stories"
      }
    ],
    required: true
  }
];

export const wiscarQuestions: Question[] = [
  {
    id: "wiscar_will_1",
    type: "likert",
    title: "Will to Persist",
    question: "When facing a complex business problem, I tend to keep working until I find a solution",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" }
    ],
    required: true
  },
  {
    id: "wiscar_interest_1",
    type: "likert",
    title: "Natural Interest",
    question: "I find business processes and workflows genuinely fascinating",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" }
    ],
    required: true
  },
  {
    id: "wiscar_skill_1",
    type: "scenario",
    title: "Current Skills",
    question: "How would you approach documenting requirements for a new feature?",
    description: "Choose the approach that best matches your current skill level",
    options: [
      {
        value: "basic_list",
        label: "Create a simple list of what the feature should do",
        description: "Basic documentation approach"
      },
      {
        value: "structured_format",
        label: "Use structured templates with acceptance criteria", 
        description: "Intermediate structured approach"
      },
      {
        value: "comprehensive_analysis",
        label: "Conduct stakeholder analysis, create use cases, and define success metrics",
        description: "Advanced comprehensive approach"
      },
      {
        value: "need_guidance",
        label: "I would need significant guidance on where to start",
        description: "Beginner level requiring support"
      }
    ],
    required: true
  },
  {
    id: "wiscar_cognitive_1",
    type: "likert",
    title: "Cognitive Readiness",
    question: "I can easily switch between high-level strategic thinking and detailed analysis",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" }
    ],
    required: true
  },
  {
    id: "wiscar_learn_1",
    type: "likert",
    title: "Ability to Learn",
    question: "I actively seek feedback and adjust my approach based on what I learn",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" }
    ],
    required: true
  },
  {
    id: "wiscar_alignment_1",
    type: "scenario",
    title: "Real-World Alignment",
    question: "Which work environment appeals to you most?",
    description: "Consider your ideal day-to-day work activities",
    options: [
      {
        value: "meetings_collaboration",
        label: "Meetings, stakeholder collaboration, and requirement gathering",
        description: "High interaction with people and processes"
      },
      {
        value: "analysis_documentation",
        label: "Deep analysis, documentation, and process modeling",
        description: "Focus on analytical and documentation tasks"
      },
      {
        value: "technical_implementation",
        label: "Technical implementation and hands-on development",
        description: "Prefer building solutions directly"
      },
      {
        value: "creative_design",
        label: "Creative design and user experience work",
        description: "Focus on creative and design aspects"
      }
    ],
    required: true
  }
];

export const questionSections = [
  {
    name: "Psychometric Assessment",
    description: "Evaluate personality traits, interests, and cognitive style",
    questions: psychometricQuestions
  },
  {
    name: "Technical Aptitude", 
    description: "Assess readiness for BA concepts and tools",
    questions: technicalQuestions
  },
  {
    name: "WISCAR Framework",
    description: "Comprehensive 6-dimensional career fit analysis", 
    questions: wiscarQuestions
  }
];