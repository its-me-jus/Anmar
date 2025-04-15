import type { DialogueStory } from '../../types/dialogue';

export const testStory: DialogueStory = {
  id: 'test-story',
  title: 'Workplace Ethics Training',
  description: 'A comprehensive training program on workplace ethics and harassment prevention',
  language: 'English',
  characters: [
    {
      id: 'mentor',
      name: 'Rum Charles',
      role: 'mentor' as const,
      avatar: '/images/rum_charles.jpg',
      personality: {
        traits: ['engaging', 'empathetic', 'professional'],
        background: 'Training Specialist with 12 years of experience at Anwar Group',
        motivation: 'To create safer, more inclusive workplaces through interactive training'
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
      id: 'colleague',
      name: 'Alex Thompson',
      role: 'mentor',
      avatar: '/avatars/colleague.png',
      personality: {
        traits: ['supportive', 'experienced', 'friendly'],
        background: 'Team lead with 8 years of workplace experience',
        motivation: 'To share personal experiences to help others navigate difficult situations'
      },
      achievements: []
    },
    {
      id: 'legal_expert',
      name: 'Sarah Patel',
      role: 'mentor',
      avatar: '/avatars/legal_expert.png',
      personality: {
        traits: ['precise', 'knowledgeable', 'methodical'],
        background: 'Employment lawyer specializing in harassment cases',
        motivation: 'To ensure proper understanding of legal frameworks and protections'
      },
      achievements: []
    },
    {
      id: 'advocate',
      name: 'Marcus Wilson',
      role: 'mentor',
      avatar: '/avatars/advocate.png',
      personality: {
        traits: ['passionate', 'direct', 'supportive'],
        background: 'Former harassment victim who now advocates for workplace safety',
        motivation: 'To empower others through shared experiences and practical advice'
      },
      achievements: []
    },
    {
      id: 'manager',
      name: 'Olivia Rodriguez',
      role: 'mentor',
      avatar: '/avatars/manager.png',
      personality: {
        traits: ['pragmatic', 'fair', 'solution-oriented'],
        background: 'Department manager with experience handling complex team dynamics',
        motivation: 'To develop leadership skills that create safe, productive teams'
      },
      achievements: []
    }
  ],
  nodes: [
    {
      id: 'welcome',
      characterId: 'mentor',
      text: "Welcome to the Anwar Group Sexual Harassment Prevention Training! I'm Rum Charles, and I'll be your guide through this interactive training module. This training is designed to help you identify, prevent, and respond to sexual harassment in the workplace.",
      backgroundVideo: "/videos/welcome_dialogue.mp4",
      videoTiming: {
        optionsAppearTime: 28 // Options appear after 28 seconds
      },
      options: [
        {
          id: 'ready',
          text: "I'm ready to learn about preventing sexual harassment",
          nextNodeId: 'definition',
          points: 10
        },
        {
          id: 'experience',
          text: "I've experienced workplace harassment before",
          nextNodeId: 'experience',
          points: 15
        },
        {
          id: 'policies',
          text: "Tell me about Anwar Group's sexual harassment policies",
          nextNodeId: 'policies',
          points: 12
        }
      ]
    },
    {
      id: 'definition',
      characterId: 'mentor',
      text: "Great! Let's start with the basics. Sexual harassment includes unwanted sexual advances, requests for sexual favors, and other verbal or physical conduct of a sexual nature. It creates a hostile work environment and can severely impact a person's well-being and job performance.",
      backgroundVideo: "/videos/definition.mp4",
      videoTiming: {
        optionsAppearTime: 28 // Options appear after 28 seconds
      },
      options: [
        {
          id: 'definition_continue',
          text: "Please continue",
          nextNodeId: 'examples',
          points: 5
        },
        {
          id: 'definition_examples',
          text: "Can you give me some examples?",
          nextNodeId: 'examples',
          points: 8
        },
        {
          id: 'definition_importance',
          text: "Why is addressing this so important?",
          nextNodeId: 'importance',
          points: 10
        }
      ]
    },
    {
      id: 'policies',
      characterId: 'mentor',
      text: "At Anwar Group, we have a zero-tolerance policy for harassment. Our policies are designed to create a safe, inclusive environment for all employees whether they work in our offices or on the factory floor. Every report is taken seriously, investigated thoroughly, and handled with complete confidentiality.",
      options: [
        {
          id: 'policies_reporting',
          text: "How do I report an incident at Anwar Group?",
          nextNodeId: 'reporting_process',
          points: 15
        },
        {
          id: 'policies_prevention',
          text: "What prevention measures does Anwar Group have?",
          nextNodeId: 'prevention_strategies',
          points: 12
        },
        {
          id: 'policies_examples',
          text: "Let's see some examples relevant to our workplace",
          nextNodeId: 'examples',
          points: 10
        }
      ]
    },
    {
      id: 'importance',
      characterId: 'mentor',
      text: "Workplace respect is critical for Anwar Group because it directly impacts productivity, employee retention, and our company reputation. When employees feel respected, they're more engaged, collaborative, and loyal. It also helps us comply with legal requirements and creates a positive work culture that attracts top talent.",
      options: [
        {
          id: 'importance_continue',
          text: "I understand its importance now",
          nextNodeId: 'examples',
          points: 8
        },
        {
          id: 'importance_examples',
          text: "Can you show me some specific examples now?",
          nextNodeId: 'examples',
          points: 10
        }
      ]
    },
    {
      id: 'anwar_policies',
      characterId: 'mentor',
      text: "At Anwar Group, we have a zero-tolerance policy for harassment. Our policies are designed to create a safe, inclusive environment for all employees whether they work in our offices or on the factory floor. Every report is taken seriously, investigated thoroughly, and handled with complete confidentiality.",
      options: [
        {
          id: 'anwar_policies_reporting',
          text: "How do I report an incident at Anwar Group?",
          nextNodeId: 'reporting_process',
          points: 15
        },
        {
          id: 'anwar_policies_prevention',
          text: "What prevention measures does Anwar Group have?",
          nextNodeId: 'prevention_strategies',
          points: 12
        },
        {
          id: 'anwar_policies_examples',
          text: "Let's see some examples relevant to our workplace",
          nextNodeId: 'examples',
          points: 10
        }
      ]
    },
    {
      id: 'bystander',
      characterId: 'mentor',
      text: "Being an active bystander is crucial in creating a respectful workplace. If you witness harassment, there are several steps you can take: directly intervene if safe, distract to defuse the situation, delegate by getting help from others, or document what you observed and report it through proper channels.",
      options: [
        {
          id: 'bystander_intervention',
          text: "How do I safely intervene?",
          nextNodeId: 'intervention_strategies',
          points: 15
        },
        {
          id: 'bystander_support',
          text: "How can I support the affected person?",
          nextNodeId: 'support_strategies',
          points: 12
        },
        {
          id: 'bystander_report',
          text: "What's the best way to report what I witnessed?",
          nextNodeId: 'reporting_process',
          points: 10
        }
      ]
    },
    {
      id: 'intervention_strategies',
      characterId: 'mentor',
      text: "When intervening, always prioritize safety. Try the 'distract' approach by changing the subject or interrupting the situation. You can also use the 'direct' approach by calmly naming the behavior as inappropriate. Remember, the goal is to de-escalate, not create more conflict.",
      options: [
        {
          id: 'intervention_practice',
          text: "Can we practice some scenarios?",
          nextNodeId: 'practice_scenarios',
          points: 15
        },
        {
          id: 'intervention_risks',
          text: "What if intervention makes things worse?",
          nextNodeId: 'intervention_risks',
          points: 12
        },
        {
          id: 'intervention_report',
          text: "I'd rather learn about reporting procedures",
          nextNodeId: 'reporting_process',
          points: 10
        }
      ]
    },
    {
      id: 'support_strategies',
      characterId: 'mentor',
      text: "Supporting someone who's experienced harassment is important. Listen without judgment, avoid questioning their experience, offer resources, and respect their decisions about how to proceed. Sometimes just acknowledging what happened can be powerful support.",
      options: [
        {
          id: 'support_resources',
          text: "What resources are available at Anwar Group?",
          nextNodeId: 'anwar_resources',
          points: 15
        },
        {
          id: 'support_conversation',
          text: "How do I start that conversation?",
          nextNodeId: 'support_conversation',
          points: 12
        },
        {
          id: 'support_examples',
          text: "Can you show me examples of supportive responses?",
          nextNodeId: 'support_examples',
          points: 10
        }
      ]
    },
    {
      id: 'legal',
      characterId: 'mentor',
      text: "In Australia, the primary law governing sexual harassment in workplaces is the Sex Discrimination Act 1984. This legislation makes sexual harassment unlawful and holds employers responsible for creating safe workplaces. The Fair Work Act also provides protections against workplace bullying and harassment.",
      options: [
        {
          id: 'legal_employer',
          text: "What are employer responsibilities?",
          nextNodeId: 'employer_responsibilities',
          points: 20
        },
        {
          id: 'legal_reporting',
          text: "How do legal protections apply when reporting?",
          nextNodeId: 'reporting_process',
          points: 15
        }
      ]
    },
    {
      id: 'employer_responsibilities',
      characterId: 'mentor',
      text: "Employers have a duty of care to provide a safe workplace free from harassment. They must take reasonable steps to prevent harassment, respond promptly to complaints, and ensure no retaliation occurs against those who report incidents. This includes implementing policies, providing training, and having clear reporting procedures.",
      options: [
        {
          id: 'employer_policies',
          text: "What policies should employers have?",
          nextNodeId: 'workplace_policies',
          points: 15
        },
        {
          id: 'employer_prevention',
          text: "How can employers prevent harassment?",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'experience',
      characterId: 'colleague',
      text: "I understand how difficult that can be. I've been there too. The most important thing to know is that it's not your fault, and there are people and processes to support you. Would you like to discuss how to handle these situations or learn about reporting options?",
      backgroundVideo: "/videos/experience1.mp4",
      options: [
        {
          id: 'experience_handling',
          text: "How do I handle these situations?",
          nextNodeId: 'handling_harassment',
          points: 15
        },
        {
          id: 'experience_reporting',
          text: "What are my reporting options?",
          nextNodeId: 'reporting_process',
          points: 20
        }
      ]
    },
    {
      id: 'examples',
      characterId: 'mentor',
      text: "Let's look at some common examples of workplace harassment. This includes unwanted suggestive comments, inappropriate jokes, or persistent unwanted invitations. Even if someone says it was 'just a joke', if it makes others uncomfortable, it can constitute harassment.",
      options: [
        {
          id: 'examples_verbal',
          text: "Tell me more about verbal harassment",
          nextNodeId: 'verbal_harassment',
          points: 10
        },
        {
          id: 'examples_digital',
          text: "What about digital harassment?",
          nextNodeId: 'digital_harassment',
          points: 15
        }
      ]
    },
    {
      id: 'verbal_harassment',
      characterId: 'mentor',
      text: "Verbal harassment can include unwanted comments about someone's appearance, inappropriate jokes, or persistent unwanted invitations. Even if the person making the comments doesn't intend to offend, if the behavior is unwelcome and creates a hostile environment, it's harassment.",
      options: [
        {
          id: 'verbal_handling',
          text: "How should I handle verbal harassment?",
          nextNodeId: 'handling_harassment',
          points: 15
        },
        {
          id: 'verbal_reporting',
          text: "What's the reporting process?",
          nextNodeId: 'reporting_process',
          points: 20
        }
      ]
    },
    {
      id: 'digital_harassment',
      characterId: 'mentor',
      text: "Digital harassment includes sending unwanted explicit images or messages through work communication channels, social media, or email. Even if it happens outside work hours, if it affects the workplace environment, it's still considered workplace harassment.",
      options: [
        {
          id: 'digital_prevention',
          text: "How can we prevent digital harassment?",
          nextNodeId: 'prevention_strategies',
          points: 15
        },
        {
          id: 'digital_reporting',
          text: "What should I do if I receive harassing messages?",
          nextNodeId: 'reporting_process',
          points: 20
        }
      ]
    },
    {
      id: 'handling_harassment',
      characterId: 'mentor',
      text: "If you experience harassment, you have several options. First, if you feel safe, you can directly tell the person their behavior is unwelcome. If that's not possible or doesn't work, you should report it to your supervisor or HR department.",
      backgroundVideo: "/videos/experience2.mp4",
      options: [
        {
          id: 'handling_direct',
          text: "How do I address it directly?",
          nextNodeId: 'direct_communication',
          points: 15
        },
        {
          id: 'handling_report',
          text: "Tell me about the reporting process",
          nextNodeId: 'reporting_process',
          points: 20
        }
      ]
    },
    {
      id: 'direct_communication',
      characterId: 'mentor',
      text: "When addressing harassment directly, be clear and professional. Say something like 'I don't appreciate those comments' or 'That behavior makes me uncomfortable.' Document the incident and their response. If the behavior continues, it's time to report it.",
      backgroundVideo: "/videos/experience2.mp4", // Using experience2 instead of experience3 which is empty
      options: [
        {
          id: 'direct_documentation',
          text: "How should I document incidents?",
          nextNodeId: 'documentation',
          points: 15
        },
        {
          id: 'direct_report',
          text: "What if they don't stop?",
          nextNodeId: 'reporting_process',
          points: 20
        }
      ]
    },
    {
      id: 'documentation',
      characterId: 'mentor',
      text: "Documentation is crucial. Keep a detailed record of each incident, including date, time, location, what was said or done, who was present, and how you responded. Save any physical or digital evidence like emails or messages. This documentation strengthens your case if formal reporting becomes necessary.",
      backgroundVideo: "/videos/experience4.mp4",
      options: [
        {
          id: 'documentation_example',
          text: "Can you show me an example?",
          nextNodeId: 'documentation_example',
          points: 15
        },
        {
          id: 'documentation_next',
          text: "What's the next step after documenting?",
          nextNodeId: 'reporting_process',
          points: 20
        }
      ]
    },
    {
      id: 'documentation_example',
      characterId: 'mentor',
      text: "Here's an example: 'March 15, 2025, 2:30 PM, break room. John Smith commented on my appearance, saying \"That outfit really shows off your figure.\" Sarah Johnson was present. I responded by saying \"Those comments make me uncomfortable, please stop.\" John laughed and walked away.' Include your emotional response and any impact on your work.",
      backgroundVideo: "/videos/experience5.mp4",
      options: [
        {
          id: 'example_continue',
          text: "What should I do with this documentation?",
          nextNodeId: 'reporting_process',
          points: 15
        },
        {
          id: 'example_rights',
          text: "What are my rights in this situation?",
          nextNodeId: 'legal_rights',
          points: 20
        }
      ]
    },
    {
      id: 'reporting_process',
      characterId: 'mentor',
      text: "The reporting process is designed to protect you. You can report to your supervisor, HR department, or use your company's anonymous reporting system. The law protects you from retaliation for making a complaint. If you feel your complaint isn't being taken seriously, you can contact the Australian Human Rights Commission.",
      backgroundVideo: "/videos/experience6.mp4",
      options: [
        {
          id: 'report_retaliation',
          text: "Tell me about retaliation protection",
          nextNodeId: 'retaliation_protection',
          points: 20
        },
        {
          id: 'report_external',
          text: "What about external reporting?",
          nextNodeId: 'external_reporting',
          points: 25
        }
      ]
    },
    {
      id: 'external_reporting',
      characterId: 'mentor',
      text: "If your workplace doesn't address your complaint adequately, you can file a complaint with the Australian Human Rights Commission. They handle complaints about sexual harassment under the Sex Discrimination Act. There are also state-based anti-discrimination agencies, Fair Work Commission, and workplace safety regulators who can help.",
      options: [
        {
          id: 'external_process',
          text: "What's the process for external reporting?",
          nextNodeId: 'external_process',
          points: 20
        },
        {
          id: 'external_when',
          text: "When should I consider external reporting?",
          nextNodeId: 'when_external',
          points: 25
        }
      ]
    },
    {
      id: 'external_process',
      characterId: 'mentor',
      text: "To report to the Australian Human Rights Commission, you can submit a complaint online, by mail, or by phone. Your complaint should include details of the incident(s), attempts to resolve internally, and the outcome you're seeking. The Commission will then assess your complaint and may facilitate conciliation between parties.",
      options: [
        {
          id: 'process_timeline',
          text: "What's the timeline for this process?",
          nextNodeId: 'reporting_timeline',
          points: 15
        },
        {
          id: 'process_support',
          text: "What support is available during this process?",
          nextNodeId: 'support_resources',
          points: 20
        }
      ]
    },
    {
      id: 'when_external',
      characterId: 'mentor',
      text: "Consider external reporting if: your workplace has not followed its own procedures, the response was inadequate, you experienced retaliation, or the harassment continues. It's also appropriate if the harassment is severe or if leadership is involved in the harassment.",
      options: [
        {
          id: 'external_timeframe',
          text: "Is there a timeframe for filing external complaints?",
          nextNodeId: 'complaint_timeframe',
          points: 15
        },
        {
          id: 'external_preparation',
          text: "How should I prepare for external reporting?",
          nextNodeId: 'external_preparation',
          points: 20
        }
      ]
    },
    {
      id: 'complaint_timeframe',
      characterId: 'mentor',
      text: "Yes, there are time limits. For the Australian Human Rights Commission, you generally need to file within 12 months of the incident. State-based agencies and the Fair Work Commission may have different timeframes, typically 6-12 months. It's best to act promptly while ensuring you have adequate documentation.",
      options: [
        {
          id: 'timeframe_missed',
          text: "What if I missed the timeframe?",
          nextNodeId: 'missed_timeframe',
          points: 15
        },
        {
          id: 'timeframe_next',
          text: "What's the next step in my learning journey?",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'missed_timeframe',
      characterId: 'mentor',
      text: "If you've missed a filing deadline, you may still have options. The Commission sometimes accepts late complaints if there's a good reason for the delay. You should explain why you couldn't file earlier. Additionally, you might have other legal avenues available, so consulting with a legal professional is advisable.",
      options: [
        {
          id: 'missed_legal',
          text: "What other legal options might be available?",
          nextNodeId: 'legal_options',
          points: 20
        },
        {
          id: 'missed_prevention',
          text: "Let's focus on prevention strategies instead",
          nextNodeId: 'prevention_strategies',
          points: 15
        }
      ]
    },
    {
      id: 'legal_rights',
      characterId: 'mentor',
      text: "You have the right to a workplace free from harassment, to report harassment without retaliation, to have your complaint taken seriously and investigated, and to seek external remedies if internal processes fail. The Sex Discrimination Act and Fair Work Act protect these rights regardless of your position or employment status.",
      options: [
        {
          id: 'rights_misconceptions',
          text: "Are there misconceptions about these rights?",
          nextNodeId: 'rights_misconceptions',
          points: 15
        },
        {
          id: 'rights_protection',
          text: "How do I protect my rights?",
          nextNodeId: 'protecting_rights',
          points: 20
        }
      ]
    },
    {
      id: 'rights_misconceptions',
      characterId: 'mentor',
      text: "Many people believe they can't report harassment if it was 'just once' or 'just a joke.' Others think they need conclusive proof before reporting. Some mistakenly believe contractors or casual workers aren't protected. These are all misconceptions - everyone deserves protection, and the reasonable person standard applies regardless of intent.",
      options: [
        {
          id: 'misconceptions_more',
          text: "Are there other misconceptions?",
          nextNodeId: 'more_misconceptions',
          points: 15
        },
        {
          id: 'misconceptions_prevention',
          text: "How do we prevent these misconceptions?",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'retaliation_protection',
      characterId: 'mentor',
      text: "The law specifically protects you from retaliation after reporting harassment. This means your employer cannot punish you, demote you, or create a hostile environment because you made a complaint. If you experience retaliation, document everything and report it immediately.",
      backgroundVideo: "/videos/experience7.mp4",
      options: [
        {
          id: 'retaliation_documentation',
          text: "How do I document retaliation?",
          nextNodeId: 'documentation',
          points: 20
        },
        {
          id: 'retaliation_legal',
          text: "What are my legal rights?",
          nextNodeId: 'legal_rights',
          points: 25
        }
      ]
    },
    {
      id: 'prevention_strategies',
      characterId: 'mentor',
      text: "Preventing harassment starts with creating a respectful workplace culture. This includes regular training, clear policies, and encouraging open communication. Everyone has a role in maintaining a safe workplace environment.",
      options: [
        {
          id: 'prevention_culture',
          text: "How do we build a respectful culture?",
          nextNodeId: 'workplace_culture',
          points: 20
        },
        {
          id: 'prevention_policies',
          text: "What policies should be in place?",
          nextNodeId: 'workplace_policies',
          points: 25
        }
      ]
    },
    {
      id: 'workplace_culture',
      characterId: 'mentor',
      text: "A respectful workplace culture starts with leadership setting the tone. This includes modeling appropriate behavior, taking complaints seriously, and ensuring everyone feels valued and respected. Regular training and open communication are essential.",
      options: [
        {
          id: 'culture_leadership',
          text: "What's the role of leadership?",
          nextNodeId: 'leadership_role',
          points: 20
        },
        {
          id: 'culture_communication',
          text: "How do we encourage open communication?",
          nextNodeId: 'open_communication',
          points: 25
        }
      ]
    },
    {
      id: 'leadership_role',
      characterId: 'mentor',
      text: "Leaders play a critical role in preventing harassment. They must model respectful behavior, promptly address inappropriate conduct, ensure policies are followed, and create an environment where employees feel safe reporting concerns. Their attitude and actions significantly impact workplace culture.",
      options: [
        {
          id: 'leadership_training',
          text: "What training should leaders receive?",
          nextNodeId: 'training_requirements',
          points: 20
        },
        {
          id: 'leadership_accountability',
          text: "How do we hold leaders accountable?",
          nextNodeId: 'accountability',
          points: 25
        }
      ]
    },
    {
      id: 'open_communication',
      characterId: 'mentor',
      text: "Open communication means creating channels where employees can express concerns without fear. This includes anonymous reporting options, regular check-ins, and a transparent process for handling complaints. It's also important to communicate that all concerns will be taken seriously.",
      options: [
        {
          id: 'communication_barriers',
          text: "What barriers prevent open communication?",
          nextNodeId: 'communication_barriers',
          points: 20
        },
        {
          id: 'communication_strategies',
          text: "What strategies encourage reporting?",
          nextNodeId: 'reporting_strategies',
          points: 25
        }
      ]
    },
    {
      id: 'workplace_policies',
      characterId: 'mentor',
      text: "Effective workplace policies should clearly define harassment, provide multiple reporting options, and outline the investigation process. They should also include anti-retaliation provisions and regular training requirements.",
      options: [
        {
          id: 'policies_implementation',
          text: "How are these policies implemented?",
          nextNodeId: 'policy_implementation',
          points: 20
        },
        {
          id: 'policies_training',
          text: "Tell me about training requirements",
          nextNodeId: 'training_requirements',
          points: 25
        }
      ]
    },
    {
      id: 'policy_implementation',
      characterId: 'mentor',
      text: "Policy implementation requires consistent communication, accessible documentation, and integration into onboarding. All employees should receive copies of policies, sign acknowledgments, and participate in regular refresher training. Policies should be reviewed and updated annually to reflect current laws and best practices.",
      options: [
        {
          id: 'implementation_challenges',
          text: "What challenges arise in implementation?",
          nextNodeId: 'implementation_challenges',
          points: 20
        },
        {
          id: 'implementation_success',
          text: "What does successful implementation look like?",
          nextNodeId: 'implementation_success',
          points: 25
        }
      ]
    },
    {
      id: 'training_requirements',
      characterId: 'mentor',
      text: "Effective harassment training should occur regularly, not just at onboarding. It should cover legal definitions, company policies, reporting procedures, and bystander intervention. This training requires a 100% pass rate to ensure everyone fully understands these critical issues.",
      options: [
        {
          id: 'training_components',
          text: "What should training include?",
          nextNodeId: 'training_components',
          points: 20
        },
        {
          id: 'training_frequency',
          text: "How often should training occur?",
          nextNodeId: 'training_frequency',
          points: 25
        }
      ]
    },
    {
      id: 'training_components',
      characterId: 'mentor',
      text: "Comprehensive training should include definitions of harassment, legal frameworks, company policies, reporting procedures, scenario-based learning, bystander intervention techniques, and resources for support. It should be interactive and acknowledge cultural differences in recognizing inappropriate behavior.",
      options: [
        {
          id: 'components_scenario',
          text: "Can you show me a training scenario?",
          nextNodeId: 'training_scenario',
          points: 20
        },
        {
          id: 'components_conclusion',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'training_scenario',
      characterId: 'mentor',
      text: "Scenario: A supervisor frequently compliments a team member on their appearance, saying things like 'That outfit really shows off your figure.' The team member feels uncomfortable but hasn't said anything. What should happen in this situation?",
      options: [
        {
          id: 'scenario_employee',
          text: "What should the uncomfortable employee do?",
          nextNodeId: 'scenario_employee_response',
          points: 20
        },
        {
          id: 'scenario_witness',
          text: "What should witnesses do?",
          nextNodeId: 'scenario_witness_response',
          points: 25
        }
      ]
    },
    {
      id: 'scenario_employee_response',
      characterId: 'mentor',
      text: "The employee should clearly communicate their discomfort if they feel safe doing so: 'I'd prefer you not comment on my appearance.' They should document the incidents and the supervisor's response. If direct communication doesn't work or feels unsafe, they should report to HR or another supervisor.",
      options: [
        {
          id: 'employee_scenario_more',
          text: "Show me another scenario",
          nextNodeId: 'training_scenario_2',
          points: 20
        },
        {
          id: 'employee_scenario_conclusion',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'scenario_witness_response',
      characterId: 'mentor',
      text: "Witnesses should not ignore the situation. They can support their colleague by checking in privately to see if they're uncomfortable, offering to accompany them when reporting, or reporting what they observed themselves. Bystanders play a crucial role in maintaining a respectful workplace.",
      options: [
        {
          id: 'witness_scenario_more',
          text: "Show me another scenario",
          nextNodeId: 'training_scenario_2',
          points: 20
        },
        {
          id: 'witness_scenario_conclusion',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'training_scenario_2',
      characterId: 'mentor',
      text: "Scenario: An employee receives unwanted personal messages from a colleague outside of work hours. The messages include comments like 'I can't stop thinking about you' and requests to meet up alone. The employee has asked them to stop but the messages continue. What should happen?",
      options: [
        {
          id: 'scenario_2_response',
          text: "What should the employee do?",
          nextNodeId: 'scenario_2_employee_response',
          points: 20
        },
        {
          id: 'scenario_2_employer',
          text: "What should the employer do?",
          nextNodeId: 'scenario_2_employer_response',
          points: 25
        }
      ]
    },
    {
      id: 'scenario_2_employee_response',
      characterId: 'mentor',
      text: "Since the employee has already asked the sender to stop and they've continued, they should report this to their supervisor or HR immediately. They should provide documentation of the messages and their request to stop. This is persistent unwanted behavior that constitutes harassment.",
      options: [
        {
          id: 'response_2_more',
          text: "Any other actions they should take?",
          nextNodeId: 'scenario_2_additional',
          points: 20
        },
        {
          id: 'response_2_conclusion',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'scenario_2_employer_response',
      characterId: 'mentor',
      text: "The employer must take this complaint seriously, investigate promptly, and take appropriate action. Even though the messages were sent outside work hours, they impact the workplace relationship. The employer should follow their harassment policy, protect the complainant from retaliation, and ensure the behavior stops.",
      options: [
        {
          id: 'employer_response_follow',
          text: "What follow-up should occur?",
          nextNodeId: 'employer_follow_up',
          points: 20
        },
        {
          id: 'employer_response_conclusion',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'conclusion',
      characterId: 'mentor',
      text: "Thank you for completing this training. Remember, creating a safe and respectful workplace is everyone's responsibility. You now have the knowledge and tools to recognize, prevent, and address workplace harassment.",
      options: [
        {
          id: 'conclusion_acknowledge',
          text: "I understand and will follow these guidelines",
          nextNodeId: 'final_acknowledgment',
          points: 30
        },
        {
          id: 'conclusion_questions',
          text: "I have some questions",
          nextNodeId: 'final_questions',
          points: 25
        }
      ]
    },
    {
      id: 'final_questions',
      characterId: 'mentor',
      text: "What questions do you have about workplace harassment or the content we've covered today? I'm here to clarify any points or address specific concerns you might have.",
      options: [
        {
          id: 'questions_prevention',
          text: "How can I personally help prevent harassment?",
          nextNodeId: 'personal_prevention',
          points: 25
        },
        {
          id: 'questions_acknowledge',
          text: "No more questions - I'm ready to acknowledge the training",
          nextNodeId: 'final_acknowledgment',
          points: 30
        }
      ]
    },
    {
      id: 'personal_prevention',
      characterId: 'mentor',
      text: "You can help prevent harassment by modeling respectful behavior, speaking up when you witness inappropriate conduct, supporting colleagues who experience harassment, participating actively in training, and familiarizing yourself with company policies. Small actions create a culture of respect.",
      options: [
        {
          id: 'prevention_acknowledge',
          text: "I understand and will help create a respectful workplace",
          nextNodeId: 'final_acknowledgment',
          points: 35
        }
      ]
    },
    {
      id: 'final_acknowledgment',
      characterId: 'mentor',
      text: "Excellent! By acknowledging these guidelines, you're committing to creating a safer workplace for everyone. Remember, you can always reach out to HR or your supervisor if you have questions or concerns.",
      options: [
        {
          id: 'final_complete',
          text: "Complete the training",
          nextNodeId: 'training_complete',
          points: 30
        }
      ]
    },
    {
      id: 'training_complete',
      characterId: 'mentor',
      text: "Congratulations on completing the workplace harassment training! You've demonstrated your commitment to maintaining a respectful and safe workplace environment. Your certificate of completion will be sent to your email address.",
      options: []
    },
    {
      id: 'reporting_timeline',
      characterId: 'mentor',
      text: "For sexual harassment complaints with the Australian Human Rights Commission, they typically acknowledge receipt within 3 days. Initial assessment takes 2-4 weeks. If accepted, conciliation usually occurs within 3 months. The entire process typically takes 3-6 months, though sexual harassment cases may be expedited due to their serious nature.",
      options: [
        {
          id: 'timeline_conciliation',
          text: "What happens during conciliation?",
          nextNodeId: 'conciliation_process',
          points: 20
        },
        {
          id: 'timeline_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 15
        }
      ]
    },
    {
      id: 'support_resources',
      characterId: 'mentor',
      text: "During a sexual harassment complaint, various support services are available. These include counseling through employee assistance programs, legal advice from community legal centers, support from sexual assault services, and advocacy from unions. You can bring a support person to meetings and conciliation sessions, and many workplaces offer paid leave during the process.",
      options: [
        {
          id: 'resources_counseling',
          text: "Tell me more about counseling options",
          nextNodeId: 'counseling_options',
          points: 15
        },
        {
          id: 'resources_prevention',
          text: "Let's focus on prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 15
        }
      ]
    },
    {
      id: 'counseling_options',
      characterId: 'mentor',
      text: "Counseling can help you process the emotional impact of sexual harassment. Employee Assistance Programs (EAPs) provide confidential, short-term counseling at no cost. Sexual assault services offer specialized support, including trauma-informed care. Some health insurance plans cover private therapy. Support groups can also connect you with others who've had similar experiences.",
      options: [
        {
          id: 'counseling_eap',
          text: "How do I access the EAP?",
          nextNodeId: 'accessing_eap',
          points: 15
        },
        {
          id: 'counseling_strategies',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'accessing_eap',
      characterId: 'mentor',
      text: "To access your EAP, contact your HR department for the provider's contact information or check your employee handbook. You can call the EAP directly – you don't need permission from your employer. When you call, explain you're experiencing workplace issues. The service is completely confidential; your employer will not know the specific reason for your call.",
      options: [
        {
          id: 'eap_confidentiality',
          text: "How is confidentiality maintained?",
          nextNodeId: 'eap_confidentiality',
          points: 15
        },
        {
          id: 'eap_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'eap_confidentiality',
      characterId: 'mentor',
      text: "EAP services are bound by privacy laws and professional ethics. They only report aggregate usage data to employers, never individual details. Your conversations remain confidential unless there's imminent risk of harm. Using EAP services won't affect your employment record or advancement opportunities. The counselors are typically external providers, not employees of your organization.",
      options: [
        {
          id: 'confidentiality_next',
          text: "What other support resources exist?",
          nextNodeId: 'other_resources',
          points: 15
        },
        {
          id: 'confidentiality_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'other_resources',
      characterId: 'mentor',
      text: "Beyond EAPs, resources include sexual harassment hotlines like 1800RESPECT, community legal centers offering free advice on employment law, workplace health and safety agencies that address psychological risks, and workplace rights advocates. Many organizations also have trained contact officers who can provide guidance and support.",
      options: [
        {
          id: 'resources_conclude',
          text: "I'm ready to continue the training",
          nextNodeId: 'prevention_strategies',
          points: 15
        }
      ]
    },
    {
      id: 'external_preparation',
      characterId: 'mentor',
      text: "When preparing to report sexual harassment externally, gather all evidence including text messages, emails, and written notes of verbal incidents. Document prior internal reporting attempts and outcomes. Consider seeking legal advice before filing. Be specific about the sexual nature of the harassment and clearly outline what resolution you're seeking, whether it's policy changes, compensation, or other remedies.",
      options: [
        {
          id: 'preparation_evidence',
          text: "What evidence is most compelling?",
          nextNodeId: 'compelling_evidence',
          points: 20
        },
        {
          id: 'preparation_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 15
        }
      ]
    },
    {
      id: 'compelling_evidence',
      characterId: 'mentor',
      text: "The most compelling evidence in sexual harassment cases includes direct communications (texts, emails, social media messages), contemporaneous notes of verbal incidents, witness statements, and evidence showing how the behavior affected your work or wellbeing. Medical records or therapy notes can demonstrate impact. Evidence of reporting attempts and the organization's response is also crucial.",
      options: [
        {
          id: 'evidence_digital',
          text: "How do I preserve digital evidence?",
          nextNodeId: 'digital_evidence',
          points: 15
        },
        {
          id: 'evidence_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'digital_evidence',
      characterId: 'mentor',
      text: "To preserve digital evidence of sexual harassment, take screenshots of messages, emails, or social media posts with visible dates and names. Forward emails to a personal account. Save images in multiple locations (cloud storage, USB drive). For text messages, photograph the conversation showing the sender's details. Don't alter or edit the evidence, as this could affect its credibility.",
      options: [
        {
          id: 'digital_conclusion',
          text: "I understand how to prepare for reporting",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'conciliation_process',
      characterId: 'mentor',
      text: "In sexual harassment cases, conciliation is a confidential process where a neutral conciliator helps parties discuss the issues and reach a resolution. It's typically conducted in separate rooms to avoid direct confrontation. Outcomes might include financial compensation, an apology, policy changes, or additional training. If conciliation fails, you may have the option to proceed to court.",
      options: [
        {
          id: 'conciliation_preparation',
          text: "How should I prepare for conciliation?",
          nextNodeId: 'conciliation_preparation',
          points: 15
        },
        {
          id: 'conciliation_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'conciliation_preparation',
      characterId: 'mentor',
      text: "To prepare for conciliation in a sexual harassment case, clearly outline the incidents, their impact, and your desired outcome. Bring copies of all evidence. Consider what resolution would satisfy you - an apology, compensation, policy changes? You can bring a support person. Practice discussing sensitive details calmly. Remember, the conciliator is neutral and is there to facilitate resolution, not to decide who is right.",
      options: [
        {
          id: 'preparation_conclude',
          text: "I'm ready to continue the training",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'legal_options',
      characterId: 'mentor',
      text: "For sexual harassment cases where time limits have passed, alternative legal avenues include: claims under anti-discrimination laws, workers' compensation for psychological injury, Fair Work claims for adverse action or constructive dismissal, breach of contract claims, or civil claims for psychological harm. Each option has different requirements, remedies, and timeframes.",
      options: [
        {
          id: 'options_remedies',
          text: "What remedies are available?",
          nextNodeId: 'available_remedies',
          points: 15
        },
        {
          id: 'options_prevention',
          text: "Let's focus on prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'available_remedies',
      characterId: 'mentor',
      text: "Sexual harassment remedies may include financial compensation for economic loss (lost wages, medical expenses) and non-economic loss (emotional distress, humiliation). Other remedies include reinstatement to your position, a formal apology, changes to workplace policies, training requirements, or disciplinary action against the harasser. The available remedies vary depending on which legal avenue you pursue.",
      options: [
        {
          id: 'remedies_compensation',
          text: "How is compensation determined?",
          nextNodeId: 'compensation_factors',
          points: 15
        },
        {
          id: 'remedies_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'compensation_factors',
      characterId: 'mentor',
      text: "Compensation for sexual harassment is determined based on several factors: severity and duration of the harassment, impact on your mental health and career, economic losses (treatment costs, lost wages), whether you had to leave your job, and your employer's response to your complaint. Recent sexual harassment cases in Australia have seen awards ranging from $10,000 to over $250,000.",
      options: [
        {
          id: 'compensation_conclude',
          text: "I understand the legal options",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'protecting_rights',
      characterId: 'mentor',
      text: "To protect your rights in sexual harassment situations: familiarize yourself with your workplace's sexual harassment policy, document all incidents contemporaneously, maintain professional communications even when distressed, report according to established procedures, and keep copies of all reports and responses. Consider consulting a lawyer early if the harassment is serious or ongoing.",
      options: [
        {
          id: 'rights_evidence',
          text: "What evidence should I preserve?",
          nextNodeId: 'evidence_preservation',
          points: 15
        },
        {
          id: 'rights_retaliation',
          text: "How do I protect against retaliation?",
          nextNodeId: 'retaliation_prevention',
          points: 20
        }
      ]
    },
    {
      id: 'evidence_preservation',
      characterId: 'mentor',
      text: "Preserve all evidence of sexual harassment: keep a detailed journal of incidents with dates, times, locations, and witnesses; save all communications including emails, texts, and social media messages; document physical reactions or distress; retain performance reviews showing your work quality; and keep records of how you reported the harassment and any responses received.",
      options: [
        {
          id: 'evidence_journal',
          text: "What should my journal include?",
          nextNodeId: 'journal_guidance',
          points: 15
        },
        {
          id: 'evidence_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'journal_guidance',
      characterId: 'mentor',
      text: "Your harassment journal should include: exact date, time, and location of each incident; precise details of what was said or done; names of anyone present; your immediate response; how the incident made you feel; any work impact; any health effects; who you told about it afterward; and any related evidence like emails or messages. Write entries as soon as possible after incidents occur.",
      options: [
        {
          id: 'journal_conclude',
          text: "I understand how to document incidents",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'retaliation_prevention',
      characterId: 'mentor',
      text: "To protect against retaliation after reporting sexual harassment: document your work performance clearly; maintain professional relationships; keep copies of all communications; document any negative changes in treatment, assignments, or evaluations; report retaliation immediately through formal channels; and consider whether external reporting or legal advice is needed if internal reporting doesn't resolve the issue.",
      options: [
        {
          id: 'retaliation_signs',
          text: "What are signs of retaliation?",
          nextNodeId: 'retaliation_signs',
          points: 15
        },
        {
          id: 'retaliation_prevention_return',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'retaliation_signs',
      characterId: 'mentor',
      text: "Signs of retaliation after reporting sexual harassment include: sudden negative performance reviews after a history of positive ones; being excluded from meetings or communications; reduction in responsibilities or desirable assignments; increased scrutiny of your work compared to colleagues; hostile behavior from supervisors or coworkers; schedule changes that create hardship; or denials of training or advancement opportunities.",
      options: [
        {
          id: 'signs_conclude',
          text: "I understand retaliation warning signs",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'more_misconceptions',
      characterId: 'mentor',
      text: "Other common misconceptions about sexual harassment: that it requires sexual desire (it's about power, not attraction); that women can't sexually harass men (anyone can be a victim or perpetrator regardless of gender); that it requires repeated behavior (a single serious incident can constitute harassment); or that provocative clothing 'invites' harassment (no clothing choice justifies unwelcome sexual behavior).",
      options: [
        {
          id: 'misconceptions_power',
          text: "Tell me more about the power dynamics",
          nextNodeId: 'power_dynamics',
          points: 15
        },
        {
          id: 'misconceptions_prevention',
          text: "Let's move to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'power_dynamics',
      characterId: 'mentor',
      text: "Sexual harassment often involves power dynamics beyond formal authority. Power can come from seniority, influence over assignments or opportunities, social status within the workplace, technical expertise others depend on, or cultural capital. Even peers without formal power can create hostile environments through group behavior or by leveraging social influence to isolate targets.",
      options: [
        {
          id: 'power_addressing',
          text: "How do we address these power imbalances?",
          nextNodeId: 'addressing_power',
          points: 20
        },
        {
          id: 'power_prevention',
          text: "Let's move to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 15
        }
      ]
    },
    {
      id: 'addressing_power',
      characterId: 'mentor',
      text: "To address power imbalances that enable sexual harassment: implement anonymous reporting systems; create multiple reporting channels so employees aren't forced to report to their harasser; establish clear investigation procedures that apply regardless of position; conduct bystander intervention training; and ensure leadership demonstrates that no one is above the policy, especially by addressing complaints against senior staff appropriately.",
      options: [
        {
          id: 'power_conclude',
          text: "I understand power dynamics in harassment",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'accountability',
      characterId: 'mentor',
      text: "Leaders must be accountable for preventing sexual harassment. This includes ensuring their own behavior is exemplary, responding promptly to all reports regardless of who's involved, enforcing consequences consistently even for high performers or executives, and being evaluated on maintaining a harassment-free environment. The organization's board should hold senior leadership accountable for sexual harassment outcomes.",
      options: [
        {
          id: 'accountability_metrics',
          text: "What metrics can measure accountability?",
          nextNodeId: 'accountability_metrics',
          points: 20
        },
        {
          id: 'accountability_culture',
          text: "How does this shape workplace culture?",
          nextNodeId: 'workplace_culture',
          points: 15
        }
      ]
    },
    {
      id: 'accountability_metrics',
      characterId: 'mentor',
      text: "Metrics for sexual harassment accountability include: response time to complaints, percentage of investigations completed within policy timeframes, consistent application of consequences regardless of position, anonymous climate survey results about comfort reporting harassment, exit interview data regarding harassment, and the percentage of substantiated complaints that resulted in appropriate corrective action.",
      options: [
        {
          id: 'metrics_tracking',
          text: "How should organizations track these metrics?",
          nextNodeId: 'metrics_tracking',
          points: 15
        },
        {
          id: 'metrics_culture',
          text: "Let's return to workplace culture",
          nextNodeId: 'workplace_culture',
          points: 20
        }
      ]
    },
    {
      id: 'metrics_tracking',
      characterId: 'mentor',
      text: "Organizations should track sexual harassment metrics through: secure case management systems that maintain confidentiality while tracking outcomes; anonymous climate surveys with specific questions about harassment experiences and reporting comfort; exit interviews with standardized questions about harassment; and regular audits of complaint handling to ensure policy compliance. This data should be reviewed by leadership regularly.",
      options: [
        {
          id: 'tracking_conclude',
          text: "I understand accountability measures",
          nextNodeId: 'workplace_culture',
          points: 20
        }
      ]
    },
    {
      id: 'communication_barriers',
      characterId: 'mentor',
      text: "Barriers to reporting sexual harassment include: fear of not being believed, especially when the harasser is respected or powerful; concerns about being labeled 'difficult' or 'oversensitive'; fear of career damage; embarrassment about discussing sexual topics; cultural or religious taboos; language limitations for non-native speakers; and past negative experiences with reporting systems or seeing others' reports mishandled.",
      options: [
        {
          id: 'barriers_addressing',
          text: "How do we address these barriers?",
          nextNodeId: 'addressing_barriers',
          points: 20
        },
        {
          id: 'barriers_reporting',
          text: "Let's discuss reporting strategies",
          nextNodeId: 'reporting_strategies',
          points: 15
        }
      ]
    },
    {
      id: 'addressing_barriers',
      characterId: 'mentor',
      text: "To address sexual harassment reporting barriers: create multiple reporting channels including anonymous options; train managers to respond supportively to complaints; demonstrate organizational commitment by taking visible action when appropriate; provide translation services; ensure diverse representation among those who handle complaints; and publicize outcomes (while maintaining confidentiality) to show reports are taken seriously.",
      options: [
        {
          id: 'addressing_conclude',
          text: "I understand how to address barriers",
          nextNodeId: 'reporting_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'reporting_strategies',
      characterId: 'mentor',
      text: "Effective sexual harassment reporting strategies include: creating multiple reporting channels (HR, dedicated hotline, online portal, designated contact officers); allowing anonymous reporting; clearly explaining the investigation process and timeline; training all managers to appropriately receive complaints; ensuring prompt, thorough investigations; and communicating outcomes to the extent confidentiality allows.",
      options: [
        {
          id: 'strategies_anonymous',
          text: "Tell me more about anonymous reporting",
          nextNodeId: 'anonymous_reporting',
          points: 15
        },
        {
          id: 'strategies_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'anonymous_reporting',
      characterId: 'mentor',
      text: "Anonymous reporting of sexual harassment can involve hotlines, web portals, or physical drop boxes where reports can be submitted without identifying yourself. While this helps overcome reporting barriers, it can limit investigation options since follow-up questions may not be possible. The best systems allow two-way anonymous communication while maintaining the reporter's confidentiality throughout the process.",
      options: [
        {
          id: 'anonymous_limitations',
          text: "What are the limitations of anonymous reporting?",
          nextNodeId: 'reporting_limitations',
          points: 15
        },
        {
          id: 'anonymous_prevention',
          text: "Let's return to prevention strategies",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'reporting_limitations',
      characterId: 'mentor',
      text: "Anonymous sexual harassment reporting has limitations: investigations may be restricted without ability to ask follow-up questions; some allegations may be too specific to investigate while maintaining anonymity; formal disciplinary action may require identified witnesses; and it's harder to protect the reporter from retaliation if their identity is unknown. Despite these limitations, it remains a valuable option for initial reporting.",
      options: [
        {
          id: 'limitations_conclude',
          text: "I understand reporting approaches",
          nextNodeId: 'prevention_strategies',
          points: 20
        }
      ]
    },
    {
      id: 'implementation_challenges',
      characterId: 'mentor',
      text: "Implementing sexual harassment policies faces challenges: resistance from long-term employees who don't see problematic behavior as harassment; difficulty getting consistent enforcement for high-value employees; balancing transparency with confidentiality; addressing boundary issues in workplace friendships or relationships; and ensuring policies apply to interactions with clients, customers, and vendors, not just between employees.",
      options: [
        {
          id: 'challenges_overcoming',
          text: "How do we overcome these challenges?",
          nextNodeId: 'overcoming_challenges',
          points: 20
        },
        {
          id: 'challenges_success',
          text: "What does successful implementation look like?",
          nextNodeId: 'implementation_success',
          points: 15
        }
      ]
    },
    {
      id: 'overcoming_challenges',
      characterId: 'mentor',
      text: "To overcome sexual harassment policy implementation challenges: use scenario-based training with realistic examples; secure visible leadership commitment including participation in training; involve influential employees as champions; ensure consistent consequences regardless of position or performance; emphasize the business and ethical case; and regularly review and update policies based on emerging issues and lessons learned.",
      options: [
        {
          id: 'overcoming_conclude',
          text: "I understand implementation approaches",
          nextNodeId: 'implementation_success',
          points: 20
        }
      ]
    },
    {
      id: 'implementation_success',
      characterId: 'mentor',
      text: "Successful sexual harassment policy implementation is evident when: all employees understand what constitutes sexual harassment; managers respond appropriately to complaints; reporting increases initially (showing trust in the system) then decreases over time; investigations are prompt and fair; appropriate consequences are consistently applied regardless of position; and climate surveys show employees feel safe and respected.",
      options: [
        {
          id: 'success_measures',
          text: "How do we measure this success?",
          nextNodeId: 'success_metrics',
          points: 20
        },
        {
          id: 'success_training',
          text: "Let's talk about training requirements",
          nextNodeId: 'training_requirements',
          points: 15
        }
      ]
    },
    {
      id: 'success_metrics',
      characterId: 'mentor',
      text: "Sexual harassment prevention success can be measured through: anonymous climate surveys assessing perception of safety; percentage of employees completing training; knowledge retention tests following training; reporting rates tracked over time; investigation timeframes meeting policy standards; consistent application of consequences; exit interview data on harassment; and decreased legal claims or settlements related to sexual harassment.",
      options: [
        {
          id: 'metrics_conclude',
          text: "I understand success measures",
          nextNodeId: 'training_requirements',
          points: 20
        }
      ]
    },
    {
      id: 'training_frequency',
      characterId: 'mentor',
      text: "For sexual harassment training, comprehensive training should occur at onboarding and be refreshed at least annually for all staff. Managers and supervisors should receive additional specialized training every six months, focusing on their responsibility to address and report harassment. After policy changes, incidents, or organizational restructuring, supplemental training should be provided to relevant teams.",
      options: [
        {
          id: 'frequency_content',
          text: "How should training content evolve over time?",
          nextNodeId: 'training_evolution',
          points: 15
        },
        {
          id: 'frequency_conclusion',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'training_evolution',
      characterId: 'mentor',
      text: "Sexual harassment training should evolve to include: emerging issues like digital harassment; recent legal cases and standards; updated organizational policies; scenarios based on actual workplace incidents (anonymized); new research on effective prevention; and feedback from previous participants. The training format should also vary to maintain engagement, using a mix of in-person, online, discussion-based, and scenario-based approaches.",
      options: [
        {
          id: 'evolution_conclude',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'scenario_2_additional',
      characterId: 'mentor',
      text: "For the employee receiving unwanted romantic messages, additional steps include: explicitly telling the sender that the attention is unwelcome and strictly professional communication is required; capturing screenshots of all messages; blocking the sender on personal devices; considering a temporary change in work arrangements if they feel unsafe; and potentially consulting with a sexual harassment support service for emotional support.",
      options: [
        {
          id: 'additional_safety',
          text: "What if they're concerned about physical safety?",
          nextNodeId: 'safety_concerns',
          points: 20
        },
        {
          id: 'additional_conclusion',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'safety_concerns',
      characterId: 'mentor',
      text: "If there are safety concerns in a sexual harassment situation, immediate steps include: informing security personnel; requesting escort services to parking areas; adjusting work schedules or locations; documenting any threatening communications; considering a restraining order if necessary; developing a safety plan with HR; and in cases of immediate danger, contacting police. Never dismiss safety concerns as an overreaction.",
      options: [
        {
          id: 'safety_conclude',
          text: "I understand safety protocols",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'employer_follow_up',
      characterId: 'mentor',
      text: "After addressing a sexual harassment complaint, employers should: check in regularly with the complainant to ensure no retaliation has occurred; monitor that behavior changes are sustained; consider whether policy revisions are needed; assess whether additional training would be beneficial; evaluate if similar issues exist elsewhere; and review how the complaint was handled to improve future responses.",
      options: [
        {
          id: 'follow_up_restoration',
          text: "How can working relationships be restored?",
          nextNodeId: 'relationship_restoration',
          points: 20
        },
        {
          id: 'follow_up_conclusion',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        }
      ]
    },
    {
      id: 'relationship_restoration',
      characterId: 'mentor',
      text: "Restoring workplace relationships after sexual harassment is complex. It may involve: facilitated conversations if both parties are willing; clear behavioral boundaries; mediation by trained professionals; team-building activities that don't force uncomfortable interactions; temporary reassignment if needed; and professional coaching for the harasser to understand their behavior's impact. The victim's comfort must remain the priority throughout.",
      options: [
        {
          id: 'restoration_conclude',
          text: "I'm ready to conclude the training",
          nextNodeId: 'conclusion',
          points: 25
        },
        {
          id: 'restoration_advanced',
          text: "I'd like to explore complex real-world scenarios",
          nextNodeId: 'advanced_scenarios_intro',
          points: 40
        }
      ]
    },
    {
      id: 'advanced_scenarios_intro',
      characterId: 'advocate',
      text: "I'm Marcus Wilson, and I'll guide you through some more complex scenarios based on real workplace situations. These will challenge your understanding and help you apply what you've learned in difficult situations where the right answer isn't always obvious.",
      options: [
        {
          id: 'scenario_power',
          text: "Explore a power dynamic scenario",
          nextNodeId: 'power_scenario',
          points: 45
        },
        {
          id: 'scenario_grey',
          text: "Explore a grey area scenario",
          nextNodeId: 'grey_area_scenario',
          points: 45
        }
      ]
    },
    {
      id: 'power_scenario',
      characterId: 'advocate',
      text: "Scenario: A talented junior developer consistently receives late-night messages from their manager requesting 'urgent' work updates. The messages sometimes include personal comments about their appearance from work that day. The developer feels their career advancement depends on maintaining a good relationship with this manager.",
      options: [
        {
          id: 'power_developer',
          text: "What should the developer do?",
          nextNodeId: 'power_developer_action',
          points: 50
        },
        {
          id: 'power_colleague',
          text: "What should colleagues who notice this do?",
          nextNodeId: 'power_colleague_action',
          points: 50
        }
      ]
    },
    {
      id: 'power_developer_action',
      characterId: 'advocate',
      text: "The developer should: 1) Document all interactions, saving messages and noting patterns. 2) Set professional boundaries by responding only during work hours. 3) Redirect conversations to work topics if personal comments arise. 4) Consult with HR or another trusted senior colleague about the situation. 5) Consider whether to directly address their discomfort with the manager or seek intervention.",
      options: [
        {
          id: 'developer_direct',
          text: "How can they address this directly?",
          nextNodeId: 'developer_direct_approach',
          points: 55
        },
        {
          id: 'developer_indirect',
          text: "What indirect approaches might work?",
          nextNodeId: 'developer_indirect_approach',
          points: 55
        }
      ]
    },
    {
      id: 'power_colleague_action',
      characterId: 'advocate',
      text: "Colleagues should: 1) Check in privately with the developer to express concern and offer support. 2) Validate their experience without dismissing or catastrophizing it. 3) Offer to document observations if they witness problematic interactions. 4) Share information about reporting options. 5) Respect the developer's decisions about how to proceed, while encouraging them to protect their boundaries.",
      options: [
        {
          id: 'colleague_witness',
          text: "What if the colleague directly witnesses harassment?",
          nextNodeId: 'colleague_witness_action',
          points: 55
        },
        {
          id: 'colleague_reporting',
          text: "Should colleagues report what they've observed?",
          nextNodeId: 'colleague_reporting_decision',
          points: 55
        }
      ]
    },
    {
      id: 'developer_direct_approach',
      characterId: 'manager',
      text: "To address this directly, the developer could request a formal meeting during work hours. They might say: 'I've noticed you often send work requests after hours that include personal comments. I'd prefer to maintain professional communication focused on work tasks during business hours. Can we establish a communication protocol that works for both of us?'",
      options: [
        {
          id: 'direct_backfire',
          text: "What if this approach backfires?",
          nextNodeId: 'direct_backfire_response',
          points: 60
        },
        {
          id: 'direct_success',
          text: "What if the manager responds positively?",
          nextNodeId: 'direct_success_outcome',
          points: 60
        }
      ]
    },
    {
      id: 'developer_indirect_approach',
      characterId: 'manager',
      text: "Indirect approaches include: 1) Delaying responses to after-hours messages until the next workday. 2) Creating a group chat for project updates that includes other team members. 3) Referencing company policies in a general way, such as 'I'm trying to maintain better work-life balance as mentioned in our wellness program.' 4) Speaking with a mentor about strategies to establish professional boundaries.",
      options: [
        {
          id: 'indirect_escalation',
          text: "What if the situation escalates despite this?",
          nextNodeId: 'indirect_escalation_response',
          points: 60
        },
        {
          id: 'indirect_next',
          text: "What's the next step if this doesn't work?",
          nextNodeId: 'indirect_next_steps',
          points: 60
        }
      ]
    },
    {
      id: 'colleague_witness_action',
      characterId: 'legal_expert',
      text: "If a colleague directly witnesses harassment, they should: 1) Document what they observed with date, time, and details. 2) If comfortable and safe, intervene in the moment with a redirection like 'Let's focus on the project requirements.' 3) Check in with the recipient afterward. 4) Consider reporting what they witnessed through appropriate channels, as many policies require all employees to report observed harassment.",
      options: [
        {
          id: 'witness_intervention',
          text: "How should they intervene effectively?",
          nextNodeId: 'witness_intervention_techniques',
          points: 60
        },
        {
          id: 'witness_support',
          text: "How can they support afterward?",
          nextNodeId: 'witness_support_methods',
          points: 60
        }
      ]
    },
    {
      id: 'colleague_reporting_decision',
      characterId: 'legal_expert',
      text: "Legally and ethically, colleagues should generally report observed harassment. Many workplace policies require all employees to report. However, they should: 1) Consider the wishes of the affected person. 2) Inform them of their intention to report. 3) Focus on observed behaviors rather than assumptions. 4) Follow company reporting procedures. 5) Maintain confidentiality beyond necessary reporting.",
      options: [
        {
          id: 'reporting_anonymity',
          text: "Can they report anonymously?",
          nextNodeId: 'reporting_anonymity_options',
          points: 60
        },
        {
          id: 'reporting_consequences',
          text: "What are the consequences of not reporting?",
          nextNodeId: 'reporting_consequences_explained',
          points: 60
        }
      ]
    },
    {
      id: 'grey_area_scenario',
      characterId: 'advocate',
      text: "Scenario: A workplace has a culture of friendly banter, including jokes that occasionally reference gender stereotypes. Most team members participate and seem comfortable, but a new employee appears quiet during these exchanges. The team considers this 'just their culture' and 'not real harassment' since everyone else is fine with it.",
      options: [
        {
          id: 'grey_new_employee',
          text: "What should the new employee do?",
          nextNodeId: 'grey_new_employee_action',
          points: 50
        },
        {
          id: 'grey_team_leader',
          text: "What should the team leader do?",
          nextNodeId: 'grey_team_leader_action',
          points: 50
        }
      ]
    },
    {
      id: 'grey_new_employee_action',
      characterId: 'advocate',
      text: "The new employee could: 1) Assess their own comfort level with the banter. 2) Speak privately with their supervisor or a trusted colleague about the culture and their discomfort. 3) When comfortable, express preferences with statements like 'I prefer not to joke about gender stereotypes.' 4) Redirect conversations to work topics or more inclusive humor. 5) Document patterns if they feel the behavior crosses into harassment.",
      options: [
        {
          id: 'new_employee_conversation',
          text: "How should they start this conversation?",
          nextNodeId: 'new_employee_conversation_approach',
          points: 55
        },
        {
          id: 'new_employee_boundaries',
          text: "How can they set boundaries without alienation?",
          nextNodeId: 'new_employee_boundaries_approach',
          points: 55
        }
      ]
    },
    {
      id: 'grey_team_leader_action',
      characterId: 'manager',
      text: "The team leader should: 1) Recognize that 'everyone else is fine with it' is not a valid justification, as harassment is determined by impact, not intent. 2) Speak privately with the new employee about their comfort level. 3) Address the team about inclusive communication without singling anyone out. 4) Update team norms to ensure they're welcoming to all. 5) Model appropriate behavior consistently.",
      options: [
        {
          id: 'leader_culture_change',
          text: "How can they shift team culture?",
          nextNodeId: 'leader_culture_change_strategy',
          points: 55
        },
        {
          id: 'leader_resistance',
          text: "What if the team resists changes?",
          nextNodeId: 'leader_resistance_handling',
          points: 55
        }
      ]
    },
    {
      id: 'direct_backfire_response',
      characterId: 'legal_expert',
      text: "If direct communication backfires and the manager becomes defensive or retaliatory, the developer should: 1) Document the negative response in detail. 2) Refrain from escalating the confrontation. 3) Consult with HR immediately about the situation and response. 4) Consider a formal complaint if appropriate. 5) Know that retaliation for raising harassment concerns is illegal, providing additional protections.",
      options: [
        {
          id: 'backfire_evidence',
          text: "What evidence should they gather?",
          nextNodeId: 'backfire_evidence_collection',
          points: 65
        },
        {
          id: 'backfire_resources',
          text: "Explore another advanced scenario",
          nextNodeId: 'workplace_romance_scenario',
          points: 65
        }
      ]
    },
    {
      id: 'direct_success_outcome',
      characterId: 'manager',
      text: "If the manager responds positively, the developer should: 1) Express appreciation for understanding. 2) Collaborate on clear communication boundaries going forward. 3) Document the conversation and agreed-upon protocols. 4) Maintain these boundaries consistently. 5) Follow up with a brief email summarizing the discussion to create a record while building a positive professional relationship.",
      options: [
        {
          id: 'success_followup',
          text: "How should they maintain boundaries long-term?",
          nextNodeId: 'success_followup_strategy',
          points: 65
        },
        {
          id: 'success_next',
          text: "Explore another advanced scenario",
          nextNodeId: 'workplace_romance_scenario',
          points: 65
        }
      ]
    },
    {
      id: 'workplace_romance_scenario',
      characterId: 'legal_expert',
      text: "Scenario: Two employees begin dating. One is later promoted to a position where they have influence over the other's projects and evaluations. Some team members express concerns about favoritism, while others make uncomfortable jokes about the relationship. The company has no formal policy on workplace relationships.",
      options: [
        {
          id: 'romance_couple',
          text: "What should the couple do?",
          nextNodeId: 'romance_couple_action',
          points: 70
        },
        {
          id: 'romance_hr',
          text: "What should HR's approach be?",
          nextNodeId: 'romance_hr_action',
          points: 70
        }
      ]
    },
    {
      id: 'romance_couple_action',
      characterId: 'legal_expert',
      text: "The couple should: 1) Disclose their relationship to HR and relevant leadership immediately after the promotion. 2) Request a change in reporting structure if possible. 3) Establish clear boundaries between personal and professional interactions at work. 4) Recuse the senior partner from direct decisions affecting the other's career. 5) Address inappropriate comments by redirecting to professional topics.",
      options: [
        {
          id: 'couple_disclosure',
          text: "How should they handle the disclosure?",
          nextNodeId: 'couple_disclosure_approach',
          points: 75
        },
        {
          id: 'couple_boundaries',
          text: "What specific boundaries should they set?",
          nextNodeId: 'couple_boundaries_detail',
          points: 75
        }
      ]
    },
    {
      id: 'romance_hr_action',
      characterId: 'mentor',
      text: "HR should: 1) Develop a workplace relationship policy if none exists. 2) Address the reporting relationship by changing supervision arrangements. 3) Speak with both employees about expectations for professional behavior. 4) Address team concerns about favoritism with transparent processes. 5) Provide guidance to the team about respectful communication without invasive comments or jokes about the relationship.",
      options: [
        {
          id: 'hr_policy',
          text: "What should the relationship policy include?",
          nextNodeId: 'hr_policy_elements',
          points: 75
        },
        {
          id: 'hr_team',
          text: "How should HR address the team's behavior?",
          nextNodeId: 'hr_team_guidance',
          points: 75
        }
      ]
    },
    {
      id: 'backfire_evidence_collection',
      characterId: 'legal_expert',
      text: "Key evidence to gather includes: 1) All communication before and after raising concerns, including tone changes. 2) Documentation of any schedule changes, assignment changes, or exclusion from meetings after speaking up. 3) Performance reviews before and after. 4) Witness accounts if possible. 5) Records of all reporting attempts and responses. 6) Timeline of events showing correlation between speaking up and negative treatment.",
      options: [
        {
          id: 'evidence_master',
          text: "You've mastered evidence collection (80 points)",
          nextNodeId: 'advanced_conclusion',
          points: 80
        },
        {
          id: 'evidence_continue',
          text: "Explore another advanced scenario",
          nextNodeId: 'bystander_scenario',
          points: 75
        }
      ]
    },
    {
      id: 'bystander_scenario',
      characterId: 'advocate',
      text: "Scenario: During a client dinner, an important client makes increasingly inappropriate comments about a team member's appearance. The team leader seems uncomfortable but continues the business conversation, hoping the situation resolves itself. The targeted employee becomes visibly distressed but remains silent.",
      options: [
        {
          id: 'bystander_team_leader',
          text: "What should the team leader do?",
          nextNodeId: 'bystander_team_leader_action',
          points: 80
        },
        {
          id: 'bystander_colleagues',
          text: "What should other team members do?",
          nextNodeId: 'bystander_colleagues_action',
          points: 80
        }
      ]
    },
    {
      id: 'bystander_team_leader_action',
      characterId: 'manager',
      text: "The team leader should: 1) Intervene immediately, redirecting conversation professionally. 2) Create an opportunity for the targeted employee to step away if needed. 3) Speak privately with the client about professional expectations. 4) Check in with the affected employee afterward and document the incident. 5) Report the situation to appropriate channels and consider whether future client interactions need restructuring.",
      options: [
        {
          id: 'leader_intervention',
          text: "What are effective intervention techniques?",
          nextNodeId: 'leader_intervention_techniques',
          points: 85
        },
        {
          id: 'leader_client',
          text: "How do they balance client relationships and employee safety?",
          nextNodeId: 'leader_client_balance',
          points: 85
        }
      ]
    },
    {
      id: 'bystander_colleagues_action',
      characterId: 'colleague',
      text: "Other team members should: 1) Use distraction techniques to interrupt the situation. 2) Create reasons to separate the targeted person from the client. 3) Directly change the subject or redirect attention. 4) Show support through body language and solidarity. 5) Check in with their colleague afterward and encourage reporting the incident. 6) Offer to document what they witnessed to support any complaint.",
      options: [
        {
          id: 'colleague_distraction',
          text: "What distraction techniques work best?",
          nextNodeId: 'colleague_distraction_methods',
          points: 85
        },
        {
          id: 'colleague_support',
          text: "How can they support their coworker afterward?",
          nextNodeId: 'colleague_support_methods',
          points: 85
        }
      ]
    },
    {
      id: 'leader_intervention_techniques',
      characterId: 'manager',
      text: "Effective interventions include: 1) The 'redirect' - 'Let's get back to discussing the project timeline.' 2) The 'direct but diplomatic' approach - 'We maintain a professional environment in all work contexts.' 3) The 'break' technique - 'Let's take 5 minutes to refresh drinks.' 4) The 'check-in' - privately asking the affected person what they need. 5) The 'subject change' - introducing a completely new business topic.",
      options: [
        {
          id: 'techniques_master',
          text: "You've mastered intervention techniques (90 points)",
          nextNodeId: 'advanced_conclusion',
          points: 90
        }
      ]
    },
    {
      id: 'colleague_support_methods',
      characterId: 'colleague',
      text: "To support a coworker after an incident: 1) Validate their experience - 'That was inappropriate and not your fault.' 2) Ask what they need - 'How can I support you right now?' 3) Offer resources - 'There are reporting options if you want to discuss them.' 4) Provide witness documentation - 'I'd be willing to write down what I observed.' 5) Respect their choices about how to proceed while encouraging self-care.",
      options: [
        {
          id: 'support_master',
          text: "You've mastered colleague support (90 points)",
          nextNodeId: 'advanced_conclusion',
          points: 90
        }
      ]
    },
    {
      id: 'advanced_conclusion',
      characterId: 'advocate',
      text: "Congratulations on working through these complex scenarios. You've now explored the nuances of workplace harassment situations that don't always have simple answers. Remember that addressing harassment effectively requires judgment, empathy, courage, and knowledge of resources. Your participation in these advanced scenarios demonstrates your commitment to creating truly safe workplaces.",
      options: [
        {
          id: 'advanced_complete',
          text: "Complete the advanced training (100 points)",
          nextNodeId: 'advanced_certificate',
          points: 100
        }
      ]
    },
    {
      id: 'advanced_certificate',
      characterId: 'mentor',
      text: "Congratulations on completing both the core and advanced workplace harassment training! You've demonstrated exceptional understanding of complex harassment dynamics, intervention strategies, and support techniques. Your comprehensive certificate showing completion of both training levels will be sent to your email. You've earned 100 points, the maximum available!",
      options: []
    },
    {
      id: 'practice_scenarios',
      characterId: 'mentor',
      text: "Let's practice with a scenario: You overhear a colleague repeatedly making jokes about another employee's accent. What would you do? Remember to consider safety, directness, and the goal of creating a respectful environment.",
      options: [
        {
          id: 'practice_direct',
          text: "Directly address the person making jokes",
          nextNodeId: 'practice_direct_response',
          points: 15
        },
        {
          id: 'practice_distract',
          text: "Create a distraction to change the subject",
          nextNodeId: 'practice_distract_response',
          points: 12
        },
        {
          id: 'practice_private',
          text: "Speak privately with them later",
          nextNodeId: 'practice_private_response',
          points: 10
        }
      ]
    },
    {
      id: 'practice_direct_response',
      characterId: 'mentor',
      text: "Good approach. You might say: 'Those jokes about accents aren't appropriate and could make people feel uncomfortable. Let's keep our workplace respectful.' This direct approach names the behavior clearly while maintaining professionalism.",
      options: [
        {
          id: 'practice_direct_next',
          text: "What if they become defensive?",
          nextNodeId: 'practice_defensive',
          points: 10
        },
        {
          id: 'practice_direct_success',
          text: "What if this approach works well?",
          nextNodeId: 'practice_success',
          points: 10
        }
      ]
    },
    {
      id: 'intervention_risks',
      characterId: 'mentor',
      text: "It's a valid concern that intervention might escalate a situation. If you sense that direct intervention could make things worse, try the 'delegate' approach by getting help from a supervisor or HR. You can also use the 'distract' method which is often safer than direct confrontation.",
      options: [
        {
          id: 'risks_examples',
          text: "What are signs that direct intervention might be risky?",
          nextNodeId: 'risks_signs',
          points: 15
        },
        {
          id: 'risks_alternatives',
          text: "What alternatives do I have?",
          nextNodeId: 'risks_alternative_approaches',
          points: 12
        }
      ]
    },
    {
      id: 'risks_signs',
      characterId: 'mentor',
      text: "Be cautious about direct intervention if: the person is showing signs of aggression, there's a significant power imbalance, you're isolated without witnesses or support, or the person has a history of retaliatory behavior. Your safety is important too.",
      options: [
        {
          id: 'signs_next',
          text: "Let's discuss safer alternatives",
          nextNodeId: 'risks_alternative_approaches',
          points: 10
        }
      ]
    },
    {
      id: 'risks_alternative_approaches',
      characterId: 'mentor',
      text: "Safer alternatives include: the 'distract' approach (changing the subject), the 'delegate' approach (getting help from someone with authority), or the 'delay' approach (checking in with the affected person later and documenting what happened).",
      options: [
        {
          id: 'alternatives_examples',
          text: "Can you give examples of distraction techniques?",
          nextNodeId: 'distraction_examples',
          points: 10
        },
        {
          id: 'alternatives_report',
          text: "How do I properly document and report incidents?",
          nextNodeId: 'reporting_process',
          points: 10
        }
      ]
    },
    {
      id: 'distraction_examples',
      characterId: 'mentor',
      text: "Effective distraction techniques include: spilling something (carefully!), asking an unrelated question loudly, mentioning an urgent work matter, asking the harassed person to help you with something, or announcing a general update relevant to the group.",
      options: [
        {
          id: 'distraction_next',
          text: "Let's learn about proper reporting",
          nextNodeId: 'reporting_process',
          points: 10
        }
      ]
    },
    {
      id: 'anwar_resources',
      characterId: 'mentor',
      text: "Anwar Group provides multiple resources: our confidential HR hotline, an Employee Assistance Program with counseling services, our online reporting tool, designated harassment officers in each department, and regular training sessions. All these resources are accessible and confidential.",
      options: [
        {
          id: 'resources_access',
          text: "How do I access these resources?",
          nextNodeId: 'resources_access_info',
          points: 10
        },
        {
          id: 'resources_confidential',
          text: "How is confidentiality maintained?",
          nextNodeId: 'resources_confidentiality',
          points: 12
        }
      ]
    },
    {
      id: 'resources_access_info',
      characterId: 'mentor',
      text: "You can access these resources through our company intranet portal under 'Employee Resources', by calling our HR hotline at extension 5500, or by speaking with your department's designated harassment officer. All information is also available in your employee handbook.",
      options: [
        {
          id: 'access_next',
          text: "Let's continue with the training",
          nextNodeId: 'definition',
          points: 10
        }
      ]
    },
    {
      id: 'support_conversation',
      characterId: 'mentor',
      text: "To start a supportive conversation, choose a private space and begin with something like: 'I noticed what happened earlier and wanted to check if you're okay.' Follow their lead, listen more than you speak, and avoid making assumptions about what they experienced or how they should respond.",
      options: [
        {
          id: 'conversation_phrases',
          text: "What are helpful phrases to use?",
          nextNodeId: 'supportive_phrases',
          points: 10
        },
        {
          id: 'conversation_avoid',
          text: "What should I avoid saying?",
          nextNodeId: 'phrases_to_avoid',
          points: 12
        }
      ]
    },
    {
      id: 'supportive_phrases',
      characterId: 'mentor',
      text: "Helpful phrases include: 'I believe you,' 'This isn't your fault,' 'Thank you for sharing this with me,' 'What would be helpful for you right now?' and 'I'm here to support you however you need.' These validate their experience without taking control away from them.",
      options: [
        {
          id: 'phrases_next',
          text: "What should I avoid saying?",
          nextNodeId: 'phrases_to_avoid',
          points: 10
        }
      ]
    },
    {
      id: 'phrases_to_avoid',
      characterId: 'mentor',
      text: "Avoid saying things like: 'Are you sure that's what happened?' 'You should report this immediately,' 'I've never seen them act that way,' 'It was probably just a joke,' or 'What were you doing/wearing?' These phrases can come across as victim-blaming or dismissive.",
      options: [
        {
          id: 'avoid_next',
          text: "Let's continue with the training",
          nextNodeId: 'definition',
          points: 10
        }
      ]
    },
    {
      id: 'support_examples',
      characterId: 'mentor',
      text: "Here are examples of supportive responses: 'That sounds really difficult, I'm sorry that happened to you.' 'Thank you for trusting me enough to share this.' 'Would it help to talk about what options you have?' 'I'm happy to go with you to HR if you decide to report it.' 'What do you need right now?'",
      options: [
        {
          id: 'examples_next',
          text: "Let's continue with the training",
          nextNodeId: 'definition',
          points: 10
        }
      ]
    }
  ],
  startingNodeId: 'welcome'
}; 