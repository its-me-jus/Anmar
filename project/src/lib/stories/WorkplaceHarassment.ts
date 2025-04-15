import type { DialogueStory } from '../../types/dialogue';

export const workplaceHarassmentStory: DialogueStory = {
  id: 'workplace-harassment-101',
  title: 'Navigating Workplace Harassment',
  description: 'Join Sarah and Alex as they learn about workplace harassment through real-world scenarios and interactive discussions.',
  language: 'English',
  characters: [
    {
      id: 'mentor',
      name: 'Dr. Emily Chen',
      role: 'mentor',
      avatar: '/avatars/mentor.png',
      personality: {
        traits: ['knowledgeable', 'empathetic', 'professional'],
        background: 'HR Director with 15 years of experience in workplace ethics',
        motivation: 'To create safer, more inclusive workplaces through education'
      },
      achievements: [
        {
          id: 'mentor_trust',
          title: 'Trusted Mentor',
          description: 'Build a strong relationship with the learner',
          icon: '🤝',
          unlocked: false,
          progress: 0,
          maxProgress: 100
        }
      ]
    },
    {
      id: 'learner',
      name: 'Sarah',
      role: 'learner',
      avatar: '/avatars/learner.png',
      personality: {
        traits: ['curious', 'determined', 'caring'],
        background: 'New employee learning about workplace rights',
        motivation: 'To understand and prevent workplace harassment'
      },
      achievements: [
        {
          id: 'learner_progress',
          title: 'Knowledge Seeker',
          description: 'Complete all learning objectives',
          icon: '📚',
          unlocked: false,
          progress: 0,
          maxProgress: 100
        }
      ]
    },
    {
      id: 'system',
      name: 'Workplace Ethics AI',
      role: 'system',
      avatar: '/avatars/system.png',
      personality: {
        traits: ['analytical', 'helpful', 'precise'],
        background: 'AI system trained on workplace ethics',
        motivation: 'To provide accurate information and guidance'
      },
      achievements: [
        {
          id: 'system_accuracy',
          title: 'Precise Guidance',
          description: 'Provide accurate information consistently',
          icon: '🎯',
          unlocked: false,
          progress: 0,
          maxProgress: 100
        }
      ]
    }
  ],
  nodes: [
    {
      id: 'start',
      characterId: 'mentor',
      text: "Welcome to our workplace ethics training. I'm Dr. Emily Chen, and I'll be your mentor today. Let's begin by understanding what workplace harassment means.",
      options: [
        {
          id: 'start_definition',
          text: "I'm ready to learn about the definition",
          nextNodeId: 'definition',
          points: 10
        },
        {
          id: 'start_experience',
          text: "I've experienced workplace harassment before",
          nextNodeId: 'experience',
          points: 15
        }
      ]
    },
    {
      id: 'definition',
      characterId: 'system',
      text: "Workplace harassment includes any unwelcome behavior that creates a hostile, intimidating, or offensive work environment. This can be based on protected characteristics like gender, race, age, or disability.",
      options: [
        {
          id: 'definition_examples',
          text: "Can you give me some examples?",
          nextNodeId: 'examples',
          points: 10
        },
        {
          id: 'definition_legal',
          text: "What are the legal implications?",
          nextNodeId: 'legal',
          points: 15
        }
      ]
    },
    {
      id: 'experience',
      characterId: 'learner',
      text: "I had a colleague who made inappropriate comments about my appearance. It made me feel uncomfortable, but I wasn't sure if it was harassment.",
      options: [
        {
          id: 'experience_support',
          text: "I understand how you feel. Let's discuss what you can do",
          nextNodeId: 'support',
          points: 20
        },
        {
          id: 'experience_definition',
          text: "Let's first understand what constitutes harassment",
          nextNodeId: 'definition',
          points: 10
        }
      ]
    },
    {
      id: 'examples',
      characterId: 'mentor',
      text: "Let me share some real-world scenarios. For example, persistent unwanted advances, offensive jokes, or discriminatory comments can all constitute harassment.",
      options: [
        {
          id: 'examples_quiz',
          text: "Let's test our understanding",
          nextNodeId: 'quiz_1',
          points: 15
        },
        {
          id: 'examples_more',
          text: "Can you share more examples?",
          nextNodeId: 'more_examples',
          points: 10
        }
      ]
    },
    {
      id: 'legal',
      characterId: 'system',
      text: "Under Australian law, workplace harassment is a serious offense. Employers have a legal obligation to prevent and address harassment, and employees have the right to a safe work environment.",
      options: [
        {
          id: 'legal_rights',
          text: "What are my rights as an employee?",
          nextNodeId: 'rights',
          points: 15
        },
        {
          id: 'legal_report',
          text: "How do I report harassment?",
          nextNodeId: 'report',
          points: 20
        }
      ]
    },
    {
      id: 'support',
      characterId: 'mentor',
      text: "I'm sorry you had to experience that. It's important to know that you have options. Would you like to learn about the reporting process or discuss strategies for handling such situations?",
      options: [
        {
          id: 'support_report',
          text: "Tell me about the reporting process",
          nextNodeId: 'report',
          points: 20
        },
        {
          id: 'support_strategies',
          text: "What strategies can I use?",
          nextNodeId: 'strategies',
          points: 15
        }
      ]
    },
    {
      id: 'quiz_1',
      characterId: 'system',
      text: "Let's test your understanding. Which of these scenarios constitutes workplace harassment?",
      options: [
        {
          id: 'quiz_1_correct',
          text: "A colleague repeatedly making unwanted advances despite being told to stop",
          nextNodeId: 'quiz_1_feedback',
          points: 20
        },
        {
          id: 'quiz_1_incorrect',
          text: "A one-time joke that wasn't meant to offend",
          nextNodeId: 'quiz_1_explanation',
          points: 5
        }
      ]
    },
    {
      id: 'more_examples',
      characterId: 'mentor',
      text: "Here are more examples: inappropriate touching, spreading rumors, excluding someone from work activities, or making derogatory comments about someone's protected characteristics.",
      options: [
        {
          id: 'more_examples_quiz',
          text: "Let's test our understanding",
          nextNodeId: 'quiz_1',
          points: 15
        },
        {
          id: 'more_examples_legal',
          text: "What are the legal consequences?",
          nextNodeId: 'legal',
          points: 15
        }
      ]
    },
    {
      id: 'rights',
      characterId: 'system',
      text: "As an employee, you have the right to: work in an environment free from harassment, report harassment without retaliation, receive support from your employer, and have your complaint taken seriously.",
      options: [
        {
          id: 'rights_report',
          text: "How do I exercise these rights?",
          nextNodeId: 'report',
          points: 15
        },
        {
          id: 'rights_quiz',
          text: "Let's test our understanding",
          nextNodeId: 'quiz_1',
          points: 15
        }
      ]
    },
    {
      id: 'report',
      characterId: 'mentor',
      text: "To report harassment: 1) Document the incidents, 2) Report to HR or your supervisor, 3) If internal reporting doesn't help, contact Fair Work Australia or your union.",
      options: [
        {
          id: 'report_documentation',
          text: "How should I document incidents?",
          nextNodeId: 'documentation',
          points: 15
        },
        {
          id: 'report_external',
          text: "Tell me about external reporting options",
          nextNodeId: 'external_reporting',
          points: 20
        }
      ]
    }
  ],
  startingNodeId: 'start'
}; 