import type { DialogueLine } from '../components/CharacterDialogue';

export const introductionDialogue: DialogueLine[] = [
  {
    character: 'mentor',
    text: "Welcome to the Workplace Harassment Training. I'll be your guide through this important learning journey."
  },
  {
    character: 'learner',
    text: "I'm looking forward to learning more about creating a safe and respectful workplace."
  },
  {
    character: 'mentor',
    text: "That's great! Before we start with the quiz, let's discuss some key concepts about workplace harassment."
  },
  {
    character: 'system',
    text: "Let's begin with understanding what constitutes workplace harassment.",
    requiresResponse: true,
    options: [
      "Unwelcome behavior that makes someone feel uncomfortable",
      "Any interaction between colleagues",
      "Only physical contact",
      "Only verbal comments"
    ],
    correctResponse: "Unwelcome behavior that makes someone feel uncomfortable"
  },
  {
    character: 'mentor',
    text: "Excellent! Now, let's talk about the different forms harassment can take."
  },
  {
    character: 'system',
    text: "Which of these is NOT a form of workplace harassment?",
    requiresResponse: true,
    options: [
      "A single respectful request for a date that's not repeated",
      "Unwanted physical advances",
      "Persistent unwanted invitations",
      "Unwelcome suggestive comments"
    ],
    correctResponse: "A single respectful request for a date that's not repeated"
  },
  {
    character: 'mentor',
    text: "Very good! Now, let's discuss what to do if you witness harassment."
  },
  {
    character: 'system',
    text: "What should you do if you witness harassment in the workplace?",
    requiresResponse: true,
    options: [
      "Report it to a supervisor or HR according to company policy",
      "Ignore it unless you're directly involved",
      "Confront the harasser yourself",
      "Wait to see if it happens again"
    ],
    correctResponse: "Report it to a supervisor or HR according to company policy"
  },
  {
    character: 'mentor',
    text: "Perfect! You've shown a good understanding of these key concepts."
  },
  {
    character: 'learner',
    text: "I feel more confident about recognizing and addressing workplace harassment now."
  },
  {
    character: 'mentor',
    text: "That's wonderful! Now you're ready to take the quiz to test your knowledge."
  }
]; 