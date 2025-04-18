import type { LessonContent } from '../types';

export const englishLessons: Record<number, LessonContent> = {
  1: {
    title: "Understanding Sexual Harassment",
    description: "Learn to identify what constitutes sexual harassment in the workplace.",
    videoId: 'AaC1DvMOqYY',
    story: {
      scenario: "You notice a colleague seems uncomfortable when certain team members make comments about their appearance.",
      challenge: "Recognizing when behavior crosses the line from friendly to inappropriate.",
      insight: "Sexual harassment can be subjective, but understanding its impact is key to prevention."
    },
    keyPoints: [
      "Sexual harassment includes unwanted conduct that creates a hostile environment",
      "It can be verbal, non-verbal, physical, or digital",
      "Intent is not required - impact on the recipient matters most"
    ],
    examples: [
      {
        good: "Maintaining professional conversations and respecting personal boundaries",
        bad: "Making unwelcome comments about someone's appearance or sharing inappropriate content"
      },
      {
        good: "Stopping behavior when someone indicates discomfort",
        bad: "Continuing behavior after being told it's unwelcome, claiming 'it's just a joke'"
      }
    ],
    tips: [
      "When in doubt, keep interactions professional",
      "Consider how comments might be received by others",
      "Remember that perceptions vary - what's harmless to you may be offensive to others"
    ]
  },
  2: {
    title: "Quid Pro Quo Harassment",
    description: "Understanding the exchange-based form of sexual harassment.",
    videoId: 'wTRsDmLLfvw',
    story: {
      scenario: "A manager hints at giving special treatment to an employee who agrees to meet outside of work for 'personal time'.",
      challenge: "Identifying when professional benefits are improperly tied to sexual or romantic favors.",
      insight: "Power dynamics significantly influence this form of harassment."
    },
    keyPoints: [
      "Quid pro quo means 'something for something'",
      "This occurs when job benefits are contingent on sexual favors",
      "Often involves power imbalance between the parties"
    ],
    examples: [
      {
        good: "Basing promotions solely on performance and qualifications",
        bad: "Suggesting better assignments or advancement in exchange for dates or sexual attention"
      },
      {
        good: "Maintaining clear professional boundaries between supervisors and subordinates",
        bad: "Using position of authority to pressure someone into unwanted personal interactions"
      }
    ],
    tips: [
      "Document any situations where professional benefits are tied to personal relationships",
      "Report incidents to HR or appropriate management",
      "Know your organization's policies on conflicts of interest and professional relationships"
    ]
  },
  3: {
    title: "Hostile Work Environment",
    description: "Understanding how repeated behaviors can create an intimidating atmosphere.",
    videoId: 'ZV4gkk6wkO0',
    story: {
      scenario: "A department has normalized sexual jokes and inappropriate comments, causing some team members to feel uncomfortable coming to work.",
      challenge: "Recognizing when workplace culture crosses the line into creating a hostile environment.",
      insight: "Even if not directed at a specific person, pervasive inappropriate behavior affects the entire workplace."
    },
    keyPoints: [
      "Hostile environments involve severe or pervasive conduct",
      "The behavior must unreasonably interfere with work performance",
      "It can affect people even if they're not the direct target"
    ],
    examples: [
      {
        good: "Promoting respectful communication in all workplace interactions",
        bad: "Allowing explicit content, inappropriate jokes, or offensive materials in shared spaces"
      },
      {
        good: "Addressing problematic behavior consistently and promptly",
        bad: "Dismissing or ignoring concerns about workplace culture"
      }
    ],
    tips: [
      "Pay attention to overall workplace atmosphere",
      "Take complaints about general behavior seriously",
      "Consider how behavior might affect others, not just those directly involved"
    ]
  },
  4: {
    title: "Unwelcome Advances",
    description: "Understanding the importance of respecting boundaries in workplace relationships.",
    story: {
      scenario: "An employee repeatedly asks a colleague out despite being declined multiple times.",
      challenge: "Recognizing when persistence becomes harassment and learning to accept rejection respectfully.",
      insight: "Respecting another's right to say 'no' is fundamental to maintaining a harassment-free workplace."
    },
    keyPoints: [
      "A single respectful invitation is generally not harassment",
      "Persistent unwanted advances can constitute harassment",
      "The recipient's response should be respected"
    ],
    examples: [
      {
        good: "Accepting a colleague's decline of a date invitation and moving on professionally",
        bad: "Continuing to pursue someone romantically after they've said no"
      },
      {
        good: "Keeping relationships professional when romantic interest isn't reciprocated",
        bad: "Using work situations to force interaction with someone who has declined personal involvement"
      }
    ],
    tips: [
      "Accept rejection gracefully",
      "If uncertain about someone's interest, err on the side of professionalism",
      "Consider the potential impact of power dynamics on one's ability to freely say no"
    ]
  },
  5: {
    title: "Physical Boundaries",
    description: "Understanding appropriate physical contact in the workplace.",
    story: {
      scenario: "A team member regularly stands too close to colleagues and touches their shoulders or arms during conversations.",
      challenge: "Navigating cultural differences and personal preferences regarding physical space and contact.",
      insight: "Even well-intentioned physical contact can be unwelcome and inappropriate."
    },
    keyPoints: [
      "Unwanted physical contact can constitute sexual harassment",
      "Personal space preferences vary widely among individuals",
      "Consent for physical contact should never be assumed"
    ],
    examples: [
      {
        good: "Asking before initiating physical contact, like 'Would you like a handshake?'",
        bad: "Touching someone's body without their permission or blocking their movement"
      },
      {
        good: "Respecting visible discomfort by increasing physical distance",
        bad: "Ignoring signs that someone is uncomfortable with physical proximity"
      }
    ],
    tips: [
      "When in doubt, maintain professional distance",
      "Be aware that comfort with physical contact varies widely",
      "Pay attention to body language indicating discomfort"
    ]
  },
  6: {
    title: "Visual and Environmental Harassment",
    description: "Understanding how visual content can create a hostile work environment.",
    story: {
      scenario: "An employee notices inappropriate images displayed in a colleague's workspace that are visible to others walking by.",
      challenge: "Addressing visual content that may be offensive without overreaching into personal expression.",
      insight: "Shared spaces require higher standards of appropriateness than private areas."
    },
    keyPoints: [
      "Visual materials can create a hostile environment even without being directed at anyone",
      "Digital content (emails, messages) can also constitute visual harassment",
      "Professional environments require appropriate content in all shared spaces"
    ],
    examples: [
      {
        good: "Keeping workplace decorations and digital communications professional",
        bad: "Displaying suggestive images or sending inappropriate content via work channels"
      },
      {
        good: "Considering how visual content might be perceived by a diverse workforce",
        bad: "Arguing that offensive material is 'just art' or 'free expression'"
      }
    ],
    tips: [
      "Consider whether content would be appropriate in a professional publication",
      "Be aware that shared digital spaces (chat, email) have the same standards as physical spaces",
      "When in doubt, keep shared spaces neutral and professional"
    ]
  },
  7: {
    title: "Intent vs. Impact",
    description: "Understanding why effects matter more than intentions when it comes to harassment.",
    story: {
      scenario: "An employee makes jokes of a sexual nature, claiming they're 'just having fun' despite others' visible discomfort.",
      challenge: "Recognizing that good intentions don't negate harmful impacts.",
      insight: "What matters legally and ethically is how behavior affects others, not what was intended."
    },
    keyPoints: [
      "Harassment is determined by impact, not intent",
      "Claiming something was 'just a joke' doesn't excuse harmful behavior",
      "The 'reasonable person' standard is often used to evaluate impacts"
    ],
    examples: [
      {
        good: "Apologizing and changing behavior when informed something is offensive",
        bad: "Defending inappropriate comments by saying 'I didn't mean it that way'"
      },
      {
        good: "Considering potential impacts before making jokes or comments",
        bad: "Expecting others to 'lighten up' about behavior that makes them uncomfortable"
      }
    ],
    tips: [
      "Focus on how your behavior might be received, not just your intentions",
      "Listen when others express discomfort, even if you don't understand why",
      "Remember that humor is subjective and cultural"
    ]
  },
  8: {
    title: "Responding to Uncomfortable Situations",
    description: "Learning effective responses when faced with potentially harassing behavior.",
    videoId: 'aSEpHn-9Q9o',
    story: {
      scenario: "A colleague regularly makes comments with sexual undertones that make you uncomfortable.",
      challenge: "Finding the confidence to address the situation directly while maintaining professional relationships.",
      insight: "Clear communication about boundaries often prevents escalation to formal complaints."
    },
    keyPoints: [
      "It's appropriate to clearly state when behavior is unwelcome",
      "Documentation of incidents can be important",
      "Formal reporting is appropriate if direct communication doesn't resolve the issue"
    ],
    examples: [
      {
        good: "Saying 'That comment makes me uncomfortable. Please don't speak to me that way.'",
        bad: "Laughing along with inappropriate jokes to avoid conflict"
      },
      {
        good: "Following up a verbal request with written communication if needed",
        bad: "Hoping the behavior will stop on its own without addressing it"
      }
    ],
    tips: [
      "Practice direct, professional responses to uncomfortable situations",
      "Document incidents, including dates, times, and what was said or done",
      "Know your organization's reporting procedures before you need them"
    ]
  },
  9: {
    title: "Bystander Intervention",
    description: "Understanding how witnesses can help prevent and address sexual harassment.",
    videoId: 'jAMWiwOeW6k',
    story: {
      scenario: "You observe a colleague making unwelcome advances toward another team member who appears uncomfortable.",
      challenge: "Deciding when and how to intervene in situations that don't directly involve you.",
      insight: "Bystanders play a crucial role in establishing workplace norms and supporting those experiencing harassment."
    },
    keyPoints: [
      "Witnesses have power to influence workplace culture",
      "Supporting targets of harassment helps mitigate harm",
      "Intervention can range from subtle to direct"
    ],
    examples: [
      {
        good: "Asking 'Are you okay?' to someone who appears uncomfortable in a situation",
        bad: "Ignoring problematic behavior because it's 'not your business'"
      },
      {
        good: "Reporting witnessed harassment through appropriate channels",
        bad: "Participating in or encouraging inappropriate behavior"
      }
    ],
    tips: [
      "Learn different intervention strategies (direct, distraction, delegation, delay)",
      "Focus on supporting the target rather than confronting the harasser",
      "Follow up with the person targeted to offer continued support"
    ]
  },
  10: {
    title: "Policies and Resources",
    description: "Understanding where to find information and support regarding sexual harassment.",
    story: {
      scenario: "A new employee wants to understand the company's approach to preventing and addressing harassment.",
      challenge: "Navigating various policies and resources to find relevant information.",
      insight: "Knowing available resources before they're needed helps ensure prompt and appropriate responses."
    },
    keyPoints: [
      "Most organizations have specific harassment policies",
      "Policies typically outline reporting procedures and investigation processes",
      "Resources may include HR, EAP, ombudspersons, or external agencies"
    ],
    examples: [
      {
        good: "Reviewing harassment policies during onboarding and periodically thereafter",
        bad: "Waiting until there's a problem to learn about reporting procedures"
      },
      {
        good: "Knowing multiple reporting options within your organization",
        bad: "Assuming there's nothing you can do if you're uncomfortable with your direct manager"
      }
    ],
    tips: [
      "Familiarize yourself with your organization's specific policies",
      "Know who to contact in different situations",
      "Understand both internal and external reporting options"
    ]
  },
  11: {
    title: "Protection Against Retaliation",
    description: "Understanding protections for those who report harassment.",
    story: {
      scenario: "An employee is hesitant to report harassment for fear of negative consequences to their career.",
      challenge: "Overcoming fears of retaliation when reporting legitimate concerns.",
      insight: "Anti-retaliation protections are a crucial component of effective harassment prevention."
    },
    keyPoints: [
      "Retaliation for reporting harassment is illegal",
      "Retaliation can take many forms beyond termination",
      "Both reporters and witnesses are protected from retaliation"
    ],
    examples: [
      {
        good: "Maintaining professional treatment of employees who report concerns",
        bad: "Excluding, demoting, or treating differently someone who has filed a complaint"
      },
      {
        good: "Having clear anti-retaliation policies and monitoring for compliance",
        bad: "Subtle retaliation like changing assignments, schedules, or social dynamics"
      }
    ],
    tips: [
      "Document any changes in treatment following a report",
      "Know that protection extends to witnesses and those who participate in investigations",
      "Understand both obvious and subtle forms of retaliation"
    ]
  },
  12: {
    title: "Digital Harassment",
    description: "Understanding how harassment occurs through electronic communications.",
    story: {
      scenario: "An employee receives suggestive messages from a colleague through the company chat platform.",
      challenge: "Navigating appropriate boundaries in increasingly digital workplaces.",
      insight: "Digital communications are subject to the same standards as in-person interactions."
    },
    keyPoints: [
      "Harassment can occur through any medium, including digital channels",
      "Written communications create permanent records",
      "Professional standards apply to all work-related communications"
    ],
    examples: [
      {
        good: "Maintaining professional language and content in all work communications",
        bad: "Sending suggestive images, links, or messages through work platforms"
      },
      {
        good: "Using professional tone in digital communications even during casual conversations",
        bad: "Assuming private chats or after-hours messages are exempt from workplace standards"
      }
    ],
    tips: [
      "Remember that digital communications create records that can be reviewed later",
      "Maintain professional boundaries across all platforms connected to work",
      "Consider whether you'd be comfortable with your message being shared with HR"
    ]
  },
  13: {
    title: "Consent in the Workplace",
    description: "Understanding the importance of clear consent for any physical contact.",
    story: {
      scenario: "A team member who comes from a culture where hugging is common greets new colleagues with embraces, not realizing some are uncomfortable.",
      challenge: "Respecting different comfort levels with physical contact in a diverse workplace.",
      insight: "Explicit consent ensures respectful physical boundaries regardless of cultural differences."
    },
    keyPoints: [
      "Consent should be freely given, not assumed",
      "Personal boundaries vary widely among individuals",
      "Professional settings generally require more formal boundaries"
    ],
    examples: [
      {
        good: "Asking before initiating physical contact: 'Would you like a hug?'",
        bad: "Assuming everyone is comfortable with the same level of physical contact"
      },
      {
        good: "Respecting non-verbal cues indicating discomfort",
        bad: "Continuing physical greetings with someone who stiffens or backs away"
      }
    ],
    tips: [
      "Default to more formal physical boundaries in professional settings",
      "Pay attention to cultural and individual differences in comfort with physical contact",
      "When in doubt, ask before touching"
    ]
  },
  14: {
    title: "Power Dynamics",
    description: "Understanding how organizational hierarchy affects harassment situations.",
    story: {
      scenario: "A manager frequently compliments a direct report's appearance in ways that make them uncomfortable.",
      challenge: "Addressing inappropriate behavior when power differences complicate the situation.",
      insight: "Power imbalances significantly influence both the impact of behavior and the ability to respond."
    },
    keyPoints: [
      "Power differences amplify the impact of potentially harassing behavior",
      "Those with less power may fear career consequences from rejection or reporting",
      "Those with authority have greater responsibility for maintaining appropriate boundaries"
    ],
    examples: [
      {
        good: "Managers maintaining strictly professional relationships with direct reports",
        bad: "Supervisors asking subordinates for dates or making comments about their appearance"
      },
      {
        good: "Organizations providing alternative reporting channels when managers are involved",
        bad: "Expecting subordinates to directly confront supervisors about uncomfortable behavior"
      }
    ],
    tips: [
      "Those in positions of authority should be especially mindful of maintaining professional boundaries",
      "Organizations should provide multiple reporting channels to address power imbalances",
      "Consider how power differences might affect someone's ability to freely say 'no'"
    ]
  },
  15: {
    title: "Third-Party Harassment",
    description: "Understanding organizational responsibility for harassment by non-employees.",
    story: {
      scenario: "A client repeatedly makes inappropriate comments to a customer service representative.",
      challenge: "Balancing client relationships with employee protection.",
      insight: "Organizations have a duty to protect employees from harassment regardless of its source."
    },
    keyPoints: [
      "Organizations must protect employees from third-party harassment",
      "This includes harassment by clients, customers, vendors, or visitors",
      "Employers may be liable if they fail to take appropriate action"
    ],
    examples: [
      {
        good: "A manager intervening when a customer is inappropriate with an employee",
        bad: "Telling employees to tolerate harassment because 'the customer is always right'"
      },
      {
        good: "Having clear policies about third-party harassment and supporting affected employees",
        bad: "Prioritizing business relationships over employee wellbeing"
      }
    ],
    tips: [
      "Know your organization's policy on third-party harassment",
      "Report incidents involving non-employees through the same channels",
      "Understand that your employer has a duty to provide a harassment-free workplace regardless of who is causing the problem"
    ]
  },
  16: {
    title: "Shared Responsibility",
    description: "Understanding everyone's role in creating a harassment-free workplace.",
    story: {
      scenario: "A team is working to improve their department culture after several incidents of inappropriate behavior.",
      challenge: "Determining who is responsible for creating and maintaining a respectful workplace.",
      insight: "A truly harassment-free environment requires commitment at all levels."
    },
    keyPoints: [
      "Everyone contributes to workplace culture",
      "Management has special responsibility but isn't solely responsible",
      "Bystander intervention is crucial for cultural change"
    ],
    examples: [
      {
        good: "All team members speaking up when they observe problematic behavior",
        bad: "Assuming harassment prevention is solely HR's responsibility"
      },
      {
        good: "Leaders modeling appropriate behavior and addressing issues promptly",
        bad: "Creating policies without enforcement or follow-through"
      }
    ],
    tips: [
      "Consider how your own behavior contributes to workplace culture",
      "Support colleagues who speak up about inappropriate behavior",
      "Hold leaders accountable for creating safe work environments"
    ]
  },
  17: {
    title: "Ongoing Consent",
    description: "Understanding that consent can be withdrawn at any time.",
    story: {
      scenario: "Two colleagues who had been dating decide to end their relationship, but one continues pursuing romantic interaction.",
      challenge: "Respecting when someone withdraws consent for a relationship or interaction.",
      insight: "Past consent does not guarantee future consent - people have the right to change their minds."
    },
    keyPoints: [
      "Consent must be ongoing and can be withdrawn at any time",
      "Previous relationship history doesn't override current boundaries",
      "Continued pursuit after withdrawal of consent can constitute harassment"
    ],
    examples: [
      {
        good: "Respecting when someone says they want to end a relationship or interaction",
        bad: "Continuing to pursue someone romantically because they were interested in the past"
      },
      {
        good: "Maintaining professional boundaries with former romantic partners at work",
        bad: "Using shared work environment to force interaction with someone who has withdrawn consent"
      }
    ],
    tips: [
      "Accept changed boundaries gracefully",
      "Establish clear professional boundaries when personal relationships change",
      "Seek mediation if needed to establish workable professional relationships"
    ]
  },
  18: {
    title: "Professional Feedback vs. Harassment",
    description: "Understanding the difference between job-related feedback and harassment.",
    story: {
      scenario: "An employee is unsure whether their manager's critical feedback constitutes harassment.",
      challenge: "Distinguishing between legitimate workplace feedback and inappropriate behavior.",
      insight: "Professional critique differs from harassment in both content and delivery."
    },
    keyPoints: [
      "Professional feedback focuses on work performance, not personal attributes",
      "Constructive criticism is specific, job-related, and delivered respectfully",
      "Feedback should aim to improve performance, not demean the person"
    ],
    examples: [
      {
        good: "Providing specific, constructive feedback about work quality or behavior",
        bad: "Making personal comments disguised as professional feedback"
      },
      {
        good: "Focusing criticism on actions that can be changed, not personal characteristics",
        bad: "Using feedback sessions to intimidate or make someone uncomfortable"
      }
    ],
    tips: [
      "Legitimate feedback should feel constructive even when critical",
      "Feedback should be about what you do, not who you are",
      "If feedback feels personal or inappropriate, seeking a second opinion may help clarify"
    ]
  },
  19: {
    title: "Reporting and Investigations",
    description: "Understanding what to expect when harassment is reported.",
    story: {
      scenario: "An employee is considering reporting harassment but is uncertain about the process.",
      challenge: "Navigating formal reporting processes while managing anxiety about potential outcomes.",
      insight: "Knowing what to expect helps employees make informed decisions about reporting."
    },
    keyPoints: [
      "Organizations typically have established investigation procedures",
      "Confidentiality is maintained to the extent possible",
      "Both the reporter and the accused have rights during investigations"
    ],
    examples: [
      {
        good: "Conducting prompt, thorough, and impartial investigations",
        bad: "Dismissing complaints without proper investigation or telling employees to 'work it out'"
      },
      {
        good: "Providing support to all parties during the investigation process",
        bad: "Failing to communicate with the reporter about investigation status"
      }
    ],
    tips: [
      "Familiarize yourself with your organization's specific investigation procedures",
      "Document relevant details before reporting",
      "Understand that investigations take time to be thorough and fair"
    ]
  },
  20: {
    title: "Severity and Frequency",
    description: "Understanding how both single severe incidents and repeated behaviors constitute harassment.",
    story: {
      scenario: "An organization is reviewing its harassment training materials to ensure comprehensive coverage.",
      challenge: "Helping employees understand different manifestations of harassment.",
      insight: "Both isolated serious incidents and patterns of lesser behaviors can create hostile environments."
    },
    keyPoints: [
      "A single severe incident can constitute harassment",
      "Repeated 'minor' behaviors can collectively create a hostile environment",
      "Both types of harassment are prohibited and should be addressed"
    ],
    examples: [
      {
        good: "Taking all reports seriously regardless of perceived severity",
        bad: "Dismissing 'minor' incidents without considering their cumulative effect"
      },
      {
        good: "Addressing patterns of behavior before they escalate",
        bad: "Requiring multiple incidents before taking action on serious misconduct"
      }
    ],
    tips: [
      "Don't dismiss behaviors just because they happen only once",
      "Pay attention to patterns of behavior that may individually seem minor",
      "Report both severe incidents and ongoing problematic behaviors"
    ]
  }
}; 