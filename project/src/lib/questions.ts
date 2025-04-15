import type { Language, QuestionBank } from '../types';

export const questionBank: QuestionBank = {
  version: '2.0.0',
  lastUpdated: '2024-03-29',
  languages: {
    English: {
      questions: [
        {
          id: 1,
          text: "What is the definition of sexual harassment under Australian law?",
          options: [
            "Unwelcome conduct of a sexual nature that makes a person feel offended, humiliated or intimidated",
            "Any interaction between colleagues of different genders",
            "Complimenting someone on their appearance"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Sexual harassment is legally defined as unwelcome sexual conduct that a reasonable person would anticipate would offend, humiliate or intimidate the person harassed.',
          feedback: {
            correct: 'Correct! Understanding the legal definition is fundamental to recognizing harassment.',
            incorrect: 'The legal definition focuses on unwelcome conduct that makes someone feel offended, humiliated or intimidated.'
          }
        },
        {
          id: 2,
          text: "Which of the following is considered sexual harassment in the workplace?",
          options: [
            "Unwanted suggestive comments",
            "A friendly hug between consenting colleagues",
            "Asking a colleague about their weekend plans"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Unwanted suggestive comments are a form of verbal sexual harassment.',
          feedback: {
            correct: 'Correct! Unwanted suggestive comments constitute verbal sexual harassment.',
            incorrect: 'Consider that harassment involves unwanted behavior of a sexual nature.'
          }
        },
        {
          id: 3,
          text: "Can someone be harassed at work even if it was 'just a joke'?",
          options: [
            "Yes, if the joke makes someone feel bad or unsafe",
            "No, jokes don't hurt anyone",
            "Only if the joke was about the boss"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Intent does not determine harassment - the impact and whether a reasonable person would find it offensive are what matter.',
          feedback: {
            correct: 'Correct! The "reasonable person" standard applies regardless of intent or claims it was "just a joke".',
            incorrect: 'Remember that intent is not required for behavior to constitute harassment, even when framed as humor.'
          }
        },
        {
          id: 4,
          text: "Which of the following is NOT a form of sexual harassment?",
          options: [
            "Asking someone on a date once and respecting their response",
            "Unwelcome physical advances",
            "Persistent unwanted invitations"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'easy',
          explanation: 'A single respectful request for a date that is not repeated after rejection is generally not considered harassment.',
          feedback: {
            correct: 'Correct! A single respectful invitation that is not repeated after rejection is not harassment.',
            incorrect: 'Consider which option represents respectful behavior that accepts boundaries.'
          }
        },
        {
          id: 5,
          text: "Who is responsible for preventing and addressing sexual harassment in the workplace?",
          options: [
            "Everyone in the organization",
            "Only the HR department",
            "The victim alone"
          ],
          correctAnswer: 0,
          category: 'policy',
          difficulty: 'easy',
          explanation: 'Creating a safe workplace is a shared responsibility across the entire organization.',
          feedback: {
            correct: 'Correct! Everyone has a role in maintaining a respectful workplace.',
            incorrect: 'Preventing harassment is a collective responsibility, not limited to specific individuals.'
          }
        },
        {
          id: 6,
          text: "What should an employee do if they witness sexual harassment at work?",
          options: [
            "Report it to a supervisor or HR according to company policy",
            "Ignore it unless they are directly involved",
            "Confront the harasser themselves",
            "Wait to see if it happens again before taking action"
          ],
          correctAnswer: 0,
          category: 'policy',
          difficulty: 'medium',
          explanation: 'Bystanders have a responsibility to report harassment according to company procedures.',
          feedback: {
            correct: 'Correct! Reporting witnessed harassment helps maintain a safe workplace.',
            incorrect: 'Bystanders play an important role in addressing workplace harassment.'
          }
        },
        {
          id: 7,
          text: "What should you do if a co-worker touches you in a way that makes you uncomfortable?",
          options: [
            "Move away and say you don't like it",
            "Let them do it, so you don't cause trouble",
            "Tell them later in a text message"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'If safe, directly addressing the behavior is an appropriate first response, followed by formal reporting if needed.',
          feedback: {
            correct: 'Correct! Setting clear boundaries in the moment is an effective immediate response to unwanted touching.',
            incorrect: 'You should not tolerate unwanted physical contact - you have the right to express your boundaries immediately.'
          }
        },
        {
          id: 8,
          text: "If a manager receives a sexual harassment complaint, what is their obligation?",
          options: [
            "Investigate and take action according to policy",
            "Keep it confidential and do nothing",
            "Ignore it unless multiple complaints are received"
          ],
          correctAnswer: 0,
          category: 'policy',
          difficulty: 'hard',
          explanation: 'Managers have a legal obligation to act on complaints according to workplace policies.',
          feedback: {
            correct: 'Correct! Managers must take appropriate action on all complaints.',
            incorrect: 'Managers have legal responsibilities to address harassment complaints.'
          }
        },
        {
          id: 9,
          text: "Which of these is sexual harassment?",
          options: [
            "Repeatedly making comments about a person's body",
            "Giving a co-worker a friendly handshake",
            "Asking if someone had a nice weekend"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Repeatedly commenting on someone\'s physical appearance can constitute sexual harassment and create a hostile work environment.',
          feedback: {
            correct: 'Correct! Ongoing unwanted comments about someone\'s body are a form of sexual harassment.',
            incorrect: 'Sexual harassment includes making repeated comments about someone\'s physical appearance or body.'
          }
        },
        {
          id: 10,
          text: "What is the primary law that governs sexual harassment in Australian workplaces?",
          options: [
            "The Sex Discrimination Act",
            "The Fair Work Act",
            "The Workplace Relations Act"
          ],
          correctAnswer: 0,
          category: 'policy',
          difficulty: 'hard',
          explanation: 'The Sex Discrimination Act 1984 is the primary legislation addressing sexual harassment in Australia.',
          feedback: {
            correct: 'Correct! The Sex Discrimination Act is the key legislation in this area.',
            incorrect: 'While multiple laws may apply, the Sex Discrimination Act is the primary legislation.'
          }
        },
        {
          id: 11,
          text: "If an employee feels their complaint is not being taken seriously, what external body can they report to?",
          options: [
            "The Australian Human Rights Commission",
            "The local police station",
            "A private law firm"
          ],
          correctAnswer: 0,
          category: 'policy',
          difficulty: 'medium',
          explanation: 'The Australian Human Rights Commission handles complaints about workplace sexual harassment.',
          feedback: {
            correct: 'Correct! The AHRC is the appropriate external body for these complaints.',
            incorrect: 'There is a specific government body designated to handle these complaints.'
          }
        },
        {
          id: 12,
          text: "Which of the following is a good way to create a safe and respectful work environment?",
          options: [
            "Regular training on workplace behavior",
            "Encouraging employees to 'toughen up'",
            "Ignoring minor incidents"
          ],
          correctAnswer: 0,
          category: 'respect',
          difficulty: 'easy',
          explanation: 'Regular training helps establish clear expectations and builds awareness.',
          feedback: {
            correct: 'Correct! Education and training are essential for prevention.',
            incorrect: 'Creating a respectful workplace requires proactive measures, not dismissing concerns.'
          }
        },
        {
          id: 13,
          text: "Which behavior helps prevent sexual harassment in the workplace?",
          options: [
            "Clearly communicating personal boundaries",
            "Avoiding reporting incidents",
            "Keeping interactions strictly professional at all times"
          ],
          correctAnswer: 0,
          category: 'respect',
          difficulty: 'medium',
          explanation: 'Clear communication about boundaries helps prevent misunderstandings and establishes respect.',
          feedback: {
            correct: 'Correct! Clear boundaries are fundamental to respectful interactions.',
            incorrect: 'Prevention requires active communication, not avoidance.'
          }
        },
        {
          id: 14,
          text: "If a co-worker keeps sending unwanted personal messages despite being asked to stop, what should be done?",
          options: [
            "Report the behavior to HR or a supervisor",
            "Block them on personal devices but take no further action",
            "Respond with similar messages to show them how it feels"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Persistent unwanted communication after being asked to stop should be reported.',
          feedback: {
            correct: 'Correct! When direct requests to stop are ignored, reporting is appropriate.',
            incorrect: 'When someone continues unwanted behavior after being asked to stop, formal reporting is necessary.'
          }
        },
        {
          id: 15,
          text: "Which of these is workplace harassment?",
          options: [
            "Telling inappropriate jokes that make others uncomfortable",
            "Asking someone out on a date after work",
            "Offering to help a new worker learn the job"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Inappropriate jokes that make people uncomfortable can create a hostile work environment and constitute harassment.',
          feedback: {
            correct: 'Correct! Inappropriate jokes that make others uncomfortable can create a hostile work environment.',
            incorrect: 'Harassment includes behaviors that create an uncomfortable or hostile environment for others.'
          }
        },
        {
          id: 16,
          text: "If an employee is afraid of retaliation after reporting sexual harassment, what protection does the law provide?",
          options: [
            "Protection from victimization for making a complaint",
            "No specific protection against retaliation",
            "Protection only if the harassment claim is proven"
          ],
          correctAnswer: 0,
          category: 'policy',
          difficulty: 'hard',
          explanation: 'Australian law prohibits victimization of people who make complaints or help with investigations.',
          feedback: {
            correct: 'Correct! Anti-victimization provisions protect those who report harassment.',
            incorrect: 'The law specifically protects complainants from retaliation.'
          }
        },
        {
          id: 17,
          text: "A supervisor compliments an employee on their appearance daily in a way that makes them uncomfortable. Is this harassment?",
          options: [
            "Yes, if it's unwelcome and repetitive",
            "No, it's just being friendly",
            "Only if the supervisor intends to make them uncomfortable"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Repeated unwelcome comments about appearance can constitute harassment regardless of intent.',
          feedback: {
            correct: 'Correct! Unwelcome, repetitive comments can be harassment regardless of intent.',
            incorrect: 'Remember that impact matters more than intent in determining harassment.'
          }
        },
        {
          id: 18,
          text: "What is the required pass rate for this assessment?",
          options: [
            "100%",
            "80%",
            "70%"
          ],
          correctAnswer: 0,
          category: 'policy',
          difficulty: 'easy',
          explanation: 'A perfect score is required to ensure complete understanding of this critical topic.',
          feedback: {
            correct: 'Correct! A complete understanding of harassment policies is essential.',
            incorrect: 'This assessment requires a perfect score to ensure thorough understanding.'
          }
        },
        {
          id: 19,
          text: "After completing this training, employees must acknowledge:",
          options: [
            "That they understand workplace policies on harassment and will follow them",
            "That they will take no action if they see harassment",
            "That they can act however they choose in the workplace"
          ],
          correctAnswer: 0,
          category: 'policy',
          difficulty: 'easy',
          explanation: 'Employees must commit to understanding and following workplace harassment policies.',
          feedback: {
            correct: 'Correct! Acknowledging and following policies is essential for all employees.',
            incorrect: 'All employees must commit to understanding and following harassment policies.'
          }
        },
        {
          id: 20,
          text: "Which of the following is an example of digital sexual harassment in the workplace?",
          options: [
            "Sending unwanted explicit images or messages through work communication channels",
            "Tagging colleagues in work-related posts on social media",
            "Sending a professional email outside of work hours"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Digital sexual harassment includes unwanted sexual content sent through electronic means, including workplace messaging systems, email, or social media.',
          feedback: {
            correct: 'Correct! Digital harassment includes unwanted sexual content sent through electronic channels.',
            incorrect: 'Digital harassment involves unwanted sexual content sent through electronic means, which can create a hostile work environment.'
          }
        }
      ],
      metadata: {
        totalQuestions: 20,
        categories: ['harassment', 'respect', 'policy'],
        difficulties: {
          easy: 5,
          medium: 11,
          hard: 4
        }
      }
    },
    Mandarin: {
      questions: [],
      metadata: {
        totalQuestions: 0,
        categories: [],
        difficulties: {}
      }
    },
    Arabic: {
      questions: [
        {
          id: 1,
          text: "ما هو 'التحرش الجنسي'؟",
          options: [
            "عندما يقوم شخص ما بتعليقات أو لمسات غير مرغوب فيها تجعل شخصًا آخر يشعر بعدم الارتياح.",
            "عندما يتصافح الناس في العمل.",
            "عندما يثني شخص ما على عملك."
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'يشمل التحرش الجنسي أي سلوك لفظي أو جسدي غير مرغوب فيه ذو طبيعة جنسية.',
          feedback: {
            correct: 'صحيح! فهم التحرش أمر ضروري للحفاظ على مكان عمل آمن.',
            incorrect: 'ضع في اعتبارك أن التحرش يشمل أي سلوك غير مرغوب فيه يجعل الآخرين يشعرون بعدم الارتياح.'
          }
        },
        {
          id: 2,
          text: "ماذا يجب أن تفعل إذا شهدت تحرشًا في مكان العمل؟",
          options: [
            "أبلغ مشرفك أو قسم الموارد البشرية على الفور",
            "تجاهله واهتم بشؤونك الخاصة",
            "انتظر لترى إذا كان سيحدث مرة أخرى",
            "واجه المتحرش بنفسك"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'الإبلاغ عن التحرش يساعد في الحفاظ على مكان عمل آمن للجميع.',
          feedback: {
            correct: 'ممتاز! الإبلاغ الفوري ضروري لمعالجة التحرش في مكان العمل.',
            incorrect: 'تذكر، جميعنا مسؤولون عن الإبلاغ عن التحرش عندما نشهده.'
          }
        }
      ],
      metadata: {
        totalQuestions: 2,
        categories: ['harassment'],
        difficulties: {
          medium: 2
        }
      }
    },
    Vietnamese: {
      questions: [
        {
          id: 1,
          text: "'Quấy rối tình dục' là gì?",
          options: [
            "Khi ai đó có những bình luận hoặc động chạm không mong muốn khiến người khác cảm thấy không thoải mái.",
            "Khi mọi người đập tay nhau tại nơi làm việc.",
            "Khi ai đó khen ngợi công việc của bạn."
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Quấy rối tình dục bao gồm bất kỳ hành vi bằng lời nói hoặc thể chất không mong muốn nào có tính chất tình dục.',
          feedback: {
            correct: 'Đúng! Hiểu về quấy rối là điều quan trọng để duy trì nơi làm việc an toàn.',
            incorrect: 'Hãy nhớ rằng quấy rối bao gồm bất kỳ hành vi không mong muốn nào khiến người khác cảm thấy không thoải mái.'
          }
        },
        {
          id: 2,
          text: "Bạn nên làm gì nếu chứng kiến quấy rối tại nơi làm việc?",
          options: [
            "Báo cáo ngay cho người giám sát hoặc phòng nhân sự",
            "Phớt lờ và lo việc của mình",
            "Chờ xem có xảy ra lại không",
            "Tự đối đầu với người quấy rối"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Báo cáo quấy rối giúp duy trì môi trường làm việc an toàn cho mọi người.',
          feedback: {
            correct: 'Xuất sắc! Báo cáo kịp thời là điều cần thiết để xử lý quấy rối tại nơi làm việc.',
            incorrect: 'Hãy nhớ, tất cả chúng ta đều có trách nhiệm báo cáo quấy rối khi chứng kiến.'
          }
        }
      ],
      metadata: {
        totalQuestions: 2,
        categories: ['harassment'],
        difficulties: {
          medium: 2
        }
      }
    },
    Cantonese: {
      questions: [
        {
          id: 1,
          text: "咩係'性騷擾'？",
          options: [
            "當有人作出令人不舒服嘅不受歡迎評論或觸碰。",
            "當人哋喺工作度擊掌。",
            "當有人讚你嘅工作。"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: '性騷擾包括任何不受歡迎嘅與性相關嘅言語或身體行為。',
          feedback: {
            correct: '啱！明白騷擾對維護安全嘅工作環境好重要。',
            incorrect: '請考慮騷擾包括任何令人不舒服嘅不受歡迎行為。'
          }
        }
      ],
      metadata: {
        totalQuestions: 1,
        categories: ['harassment'],
        difficulties: {
          medium: 1
        }
      }
    },
    Punjabi: {
      questions: [
        {
          id: 1,
          text: "'ਜਿਨਸੀ ਪਰੇਸ਼ਾਨੀ' ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
          options: [
            "ਜਦੋਂ ਕੋਈ ਅਜਿਹੀਆਂ ਅਣਚਾਹੀਆਂ, ਮਾੜੀਆਂ ਟਿੱਪਣੀਆਂ ਕਰਦਾ ਹੈ ਜਾਂ ਛੂਹਦਾ ਹੈ ਜੋ ਦੂਜੇ ਵਿਅਕਤੀ ਨੂੰ ਬੇਆਰਾਮ ਮਹਿਸੂਸ ਕਰਾਉਂਦੀਆਂ ਹਨ।",
            "ਜਦੋਂ ਲੋਕ ਕੰਮ 'ਤੇ ਇੱਕ ਦੂਜੇ ਨੂੰ ਹਾਈ ਫਾਈਵ ਦਿੰਦੇ ਹਨ।",
            "ਜਦੋਂ ਕੋਈ ਤੁਹਾਡੇ ਕੰਮ 'ਤੇ ਤਾਰੀਫ਼ ਕਰਦਾ ਹੈ।"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'ਜਿਨਸੀ ਪਰੇਸ਼ਾਨੀ ਵਿੱਚ ਕੋਈ ਵੀ ਅਣਚਾਹੀ ਜ਼ੁਬਾਨੀ ਜਾਂ ਸਰੀਰਕ ਹਰਕਤ ਸ਼ਾਮਲ ਹੈ ਜੋ ਜਿਨਸੀ ਪ੍ਰਕਿਰਤੀ ਦੀ ਹੋਵੇ।',
          feedback: {
            correct: 'ਸਹੀ! ਪਰੇਸ਼ਾਨੀ ਨੂੰ ਸਮਝਣਾ ਸੁਰੱਖਿਅਤ ਕੰਮ ਦੀ ਥਾਂ ਬਣਾਈ ਰੱਖਣ ਲਈ ਜ਼ਰੂਰੀ ਹੈ।',
            incorrect: 'ਵਿਚਾਰ ਕਰੋ ਕਿ ਪਰੇਸ਼ਾਨੀ ਵਿੱਚ ਕੋਈ ਵੀ ਅਣਚਾਹੀ ਹਰਕਤ ਸ਼ਾਮਲ ਹੈ ਜੋ ਦੂਜਿਆਂ ਨੂੰ ਬੇਆਰਾਮ ਮਹਿਸੂਸ ਕਰਾਉਂਦੀ ਹੈ।'
          }
        }
      ],
      metadata: {
        totalQuestions: 1,
        categories: ['harassment'],
        difficulties: {
          medium: 1
        }
      }
    },
    Greek: {
      questions: [
        {
          id: 1,
          text: "Τι σημαίνει 'σεξουαλική παρενόχληση';",
          options: [
            "Όταν κάποιος κάνει ανεπιθύμητα, κακόβουλα σχόλια ή αγγίγματα που κάνουν κάποιον άλλο να νιώθει άβολα.",
            "Όταν οι άνθρωποι δίνουν high five στη δουλειά.",
            "Όταν κάποιος σε επαινεί για τη δουλειά σου."
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Η σεξουαλική παρενόχληση περιλαμβάνει οποιαδήποτε ανεπιθύμητη λεκτική ή σωματική συμπεριφορά σεξουαλικής φύσης.',
          feedback: {
            correct: 'Σωστά! Η κατανόηση της παρενόχλησης είναι κρίσιμη για τη διατήρηση ενός ασφαλούς χώρου εργασίας.',
            incorrect: 'Σκεφτείτε ότι η παρενόχληση περιλαμβάνει οποιαδήποτε ανεπιθύμητη συμπεριφορά που κάνει τους άλλους να νιώθουν άβολα.'
          }
        }
      ],
      metadata: {
        totalQuestions: 1,
        categories: ['harassment'],
        difficulties: {
          medium: 1
        }
      }
    },
    Italian: {
      questions: [
        {
          id: 1,
          text: "Cosa significa 'molestie sessuali'?",
          options: [
            "Quando qualcuno fa commenti o tocchi indesiderati che fanno sentire un'altra persona a disagio.",
            "Quando le persone si danno il cinque al lavoro.",
            "Quando qualcuno fa un complimento sul tuo lavoro."
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Le molestie sessuali includono qualsiasi condotta verbale o fisica indesiderata di natura sessuale.',
          feedback: {
            correct: 'Corretto! Comprendere le molestie è fondamentale per mantenere un ambiente di lavoro sicuro.',
            incorrect: 'Considera che le molestie includono qualsiasi comportamento indesiderato che mette gli altri a disagio.'
          }
        }
      ],
      metadata: {
        totalQuestions: 1,
        categories: ['harassment'],
        difficulties: {
          medium: 1
        }
      }
    },
    Filipino: {
      questions: [
        {
          id: 1,
          text: "Ano ang ibig sabihin ng 'sekswal na panliligalig'?",
          options: [
            "Kapag may gumagawa ng hindi kanais-nais na komento o paghipo na nagpapahirap sa ibang tao.",
            "Kapag nagbibigayan ng high five ang mga tao sa trabaho.",
            "Kapag may pumupuri sa iyong trabaho."
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'Ang sekswal na panliligalig ay kinabibilangan ng anumang hindi kanais-nais na berbal o pisikal na gawain na may sekswal na katangian.',
          feedback: {
            correct: 'Tama! Ang pag-unawa sa panliligalig ay mahalaga para sa pagpapanatili ng ligtas na lugar ng trabaho.',
            incorrect: 'Isaalang-alang na ang panliligalig ay kinabibilangan ng anumang hindi kanais-nais na gawain na nagpapahirap sa iba.'
          }
        }
      ],
      metadata: {
        totalQuestions: 1,
        categories: ['harassment'],
        difficulties: {
          medium: 1
        }
      }
    },
    Hindi: {
      questions: [
        {
          id: 1,
          text: "'यौन उत्पीड़न' का क्या मतलब है?",
          options: [
            "जब कोई अवांछित, बुरी टिप्पणियां करता है या छूता है जो दूसरे व्यक्ति को असहज महसूस कराता है।",
            "जब लोग काम पर एक-दूसरे को हाई फाइव देते हैं।",
            "जब कोई आपके काम की तारीफ करता है।"
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'यौन उत्पीड़न में कोई भी अवांछित मौखिक या शारीरिक आचरण शामिल है जो यौन प्रकृति का हो।',
          feedback: {
            correct: 'सही! उत्पीड़न को समझना सुरक्षित कार्यस्थल बनाए रखने के लिए महत्वपूर्ण है।',
            incorrect: 'विचार करें कि उत्पीड़न में कोई भी अवांछित व्यवहार शामिल है जो दूसरों को असहज महसूस कराता है।'
          }
        }
      ],
      metadata: {
        totalQuestions: 1,
        categories: ['harassment'],
        difficulties: {
          medium: 1
        }
      }
    },
    Spanish: {
      questions: [
        {
          id: 1,
          text: "¿Qué significa 'acoso sexual'?",
          options: [
            "Cuando alguien hace comentarios o tocamientos no deseados que hacen que otra persona se sienta incómoda.",
            "Cuando las personas se dan cinco en el trabajo.",
            "Cuando alguien te hace un cumplido sobre tu trabajo."
          ],
          correctAnswer: 0,
          category: 'harassment',
          difficulty: 'medium',
          explanation: 'El acoso sexual incluye cualquier conducta verbal o física no deseada de naturaleza sexual.',
          feedback: {
            correct: '¡Correcto! Entender el acoso es crucial para mantener un lugar de trabajo seguro.',
            incorrect: 'Considera que el acoso incluye cualquier comportamiento no deseado que hace que otros se sientan incómodos.'
          }
        }
      ],
      metadata: {
        totalQuestions: 1,
        categories: ['harassment'],
        difficulties: {
          medium: 1
        }
      }
    }
  }
};

export const getQuestions = (language: Language) => {
  return questionBank.languages[language]?.questions || [];
};

export const getQuestionMetadata = (language: Language) => {
  return questionBank.languages[language]?.metadata;
};

export const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    harassment: 'from-red-500 to-pink-500',
    respect: 'from-blue-500 to-indigo-500',
    safety: 'from-green-500 to-emerald-500',
    policy: 'from-purple-500 to-violet-500'
  };
  return colors[category] || 'from-gray-500 to-slate-500';
};

export const getDifficultyColor = (difficulty: string) => {
  const colors: Record<string, string> = {
    easy: 'from-green-400 to-emerald-500',
    medium: 'from-yellow-400 to-orange-500',
    hard: 'from-red-400 to-rose-500'
  };
  return colors[difficulty] || 'from-gray-400 to-slate-500';
};