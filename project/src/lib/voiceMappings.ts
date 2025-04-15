import type { Language } from '../types';

/**
 * Maps question text to pre-recorded audio file paths
 * This allows us to use high-quality ElevenLabs recordings instead of browser TTS
 * 
 * Format: { [language]: { [questionText]: audioFilePath } }
 */
export const questionVoiceMap: Record<Language, Record<string, string>> = {
  English: {
    // Question 1
    "What is sexual harassment in the workplace?": 
      "audio/questions/en/q1_definition.mp3",
    
    // Question 2
    "Which of the following is an example of 'Quid Pro Quo' sexual harassment?": 
      "audio/questions/en/q2_examples.mp3",
    
    // Question 3
    "What constitutes a 'Hostile Work Environment' due to sexual harassment?": 
      "audio/questions/en/q3_jokes.mp3",
    
    // Question 4
    "Is repeatedly asking a colleague for a date, despite them declining each time, considered potential sexual harassment?": 
      "audio/questions/en/q4_not_harassment.mp3",
    
    // Question 5
    "Which of these actions is a form of physical sexual harassment?": 
      "audio/questions/en/q5_responsibility.mp3",
    
    // Question 6
    "Can displaying sexually explicit posters or sending emails with suggestive content contribute to sexual harassment?": 
      "audio/questions/en/q6_witness.mp3",
    
    // Question 7
    "If someone says their behaviour was 'just a joke,' can it still be considered sexual harassment?": 
      "audio/questions/en/q7_touching.mp3",
    
    // Question 8
    "What should you do if a colleague's comments or jokes of a sexual nature make you uncomfortable?": 
      "audio/questions/en/q8_manager_duty.mp3",
    
    // Question 9
    "If you witness behaviour you believe could be sexual harassment directed at a colleague, what is a responsible action to take?": 
      "audio/questions/en/q9_body_comments.mp3",
    
    // Question 10
    "Where can employees typically find the company's specific policy and reporting procedures for sexual harassment?": 
      "audio/questions/en/q10_law.mp3",
    
    // Question 11
    "What is retaliation in the context of reporting sexual harassment?": 
      "audio/questions/en/q11_external_report.mp3",
    
    // Question 12
    "Can sexual harassment occur through digital means like email, work chat platforms, or social media?": 
      "audio/questions/en/q12_safe_environment.mp3",
    
    // Question 13
    "Is consent required for physical contact (like hugs or touching shoulders) between colleagues in the workplace?": 
      "audio/questions/en/q13_prevention.mp3",
    
    // Question 14
    "How might power dynamics (e.g., a manager and a subordinate) influence situations involving potential sexual harassment?": 
      "audio/questions/en/q14_messages.mp3",
    
    // Question 15
    "Is a company potentially liable if an employee is sexually harassed by a third party, such as a client or customer?": 
      "audio/questions/en/q15_inappropriate_jokes.mp3",
    
    // Question 16
    "Who holds the primary responsibility for preventing sexual harassment and fostering a respectful workplace culture?": 
      "audio/questions/en/q16_retaliation.mp3",
    
    // Question 17
    "If someone initially consented to a romantic relationship with a colleague but later withdraws consent, must that withdrawal be respected?": 
      "audio/questions/en/q17_compliments.mp3",
    
    // Question 18
    "Which of the following is NOT typically considered sexual harassment?": 
      "audio/questions/en/q18_pass_rate.mp3",
    
    // Question 19
    "When an employee reports sexual harassment, what should they generally expect from the company?": 
      "audio/questions/en/q19_acknowledgment.mp3",
    
    // Question 20
    "Can a single, severe incident (like a sexual assault) be enough to constitute sexual harassment?": 
      "audio/questions/en/q20_digital.mp3",
  },
  
  // Add other languages as needed
  Arabic: {},
  Mandarin: {
    // Question 1
    "工作场所性骚扰是什么？": "audio/questions/mandarin/question1.mp3",
    
    // Question 2
    "在工作场所中，什么是交换性骚扰（Quid Pro Quo）？": "audio/questions/mandarin/question2.mp3",
    
    // Question 3
    "什么样的行为会创造一个敌对的工作环境？": "audio/questions/mandarin/question3.mp3",
    
    // Question 4
    "持续不受欢迎的浪漫追求可能构成性骚扰吗？": "audio/questions/mandarin/question4.mp3",
    
    // Question 5
    "工作场所的身体接触何时可能构成性骚扰？": "audio/questions/mandarin/question5.mp3",
    
    // Question 6
    "在法律上，性骚扰的定义是什么？": "audio/questions/mandarin/question6.mp3",
    
    // Question 7
    "雇主对工作场所性骚扰的责任是什么？": "audio/questions/mandarin/question7.mp3",
    
    // Question 8
    "作为性骚扰目标的人，我应该采取什么步骤？": "audio/questions/mandarin/question8.mp3",
    
    // Question 9
    "作为目睹性骚扰的同事，我应该做什么？": "audio/questions/mandarin/question9.mp3",
    
    // Question 10
    "如果我报告了性骚扰，我受到保护免于报复吗？": "audio/questions/mandarin/question10.mp3",
    
    // Question 11
    "在报告性骚扰的背景下，什么是报复？": "audio/questions/mandarin/question11.mp3",
    
    // Question 12
    "性骚扰是否可以通过电子邮件、工作聊天平台或社交媒体等数字手段发生？": "audio/questions/mandarin/question12.mp3",
    
    // Question 13
    "工作场所性骚扰的例子有哪些？": "audio/questions/mandarin/question13.mp3",
    
    // Question 14
    "什么是权力动态，它们如何在性骚扰情况中发挥作用？": "audio/questions/mandarin/question14.mp3",
    
    // Question 15
    "如果客户或供应商骚扰员工，公司是否有责任？": "audio/questions/mandarin/question15.mp3",
    
    // Question 16
    "一个评论是否必须有性意图才能算作性骚扰？": "audio/questions/mandarin/question16.mp3",
    
    // Question 17
    "在一次性约会邀请被拒绝后，什么行为可能成为性骚扰？": "audio/questions/mandarin/question17.mp3",
    
    // Question 18
    "如何区分合法的工作相关反馈和骚扰？": "audio/questions/mandarin/question18.mp3",
    
    // Question 19
    "我应该如何处理对我的性骚扰投诉？": "audio/questions/mandarin/question19.mp3",
    
    // Question 20
    "组织政策在防止工作场所性骚扰中扮演什么角色？": "audio/questions/mandarin/question20.mp3",
  },
  Spanish: {
    // Question 1
    "¿Qué es el acoso sexual en el lugar de trabajo?": "audio/questions/spanish/question1.mp3",
    "¿Qué es el acoso quid pro quo en el lugar de trabajo?": "audio/questions/spanish/question2.mp3",
    "¿Qué comportamientos crean un ambiente de trabajo hostil?": "audio/questions/spanish/question3.mp3",
    "¿Pueden los avances románticos no deseados y persistentes constituir acoso sexual?": "audio/questions/spanish/question4.mp3",
    "¿Cuándo puede el contacto físico en el lugar de trabajo constituir acoso sexual?": "audio/questions/spanish/question5.mp3",
    "¿Cuál es la definición legal del acoso sexual?": "audio/questions/spanish/question6.mp3",
    "¿Cuáles son las responsabilidades del empleador con respecto al acoso sexual en el lugar de trabajo?": "audio/questions/spanish/question7.mp3",
    "¿Qué pasos debo tomar si soy objeto de acoso sexual?": "audio/questions/spanish/question8.mp3",
    "¿Qué debo hacer como colega que presencia acoso sexual?": "audio/questions/spanish/question9.mp3",
    "¿Estoy protegido contra represalias si denuncio acoso sexual?": "audio/questions/spanish/question10.mp3",
    "¿Qué es la represalia en el contexto de denunciar acoso sexual?": "audio/questions/spanish/question11.mp3",
    "¿Puede el acoso sexual ocurrir a través de medios digitales como correo electrónico, plataformas de chat de trabajo o redes sociales?": "audio/questions/spanish/question12.mp3",
    "¿Cuáles son ejemplos de acoso sexual en el lugar de trabajo?": "audio/questions/spanish/question13.mp3",
    "¿Qué son las dinámicas de poder y cómo funcionan en situaciones de acoso sexual?": "audio/questions/spanish/question14.mp3",
    "¿Tiene la empresa responsabilidad si un cliente o proveedor acosa a un empleado?": "audio/questions/spanish/question15.mp3",
    "¿Debe un comentario tener intención sexual para considerarse acoso sexual?": "audio/questions/spanish/question16.mp3",
    "¿Qué comportamientos pueden constituir acoso sexual después de que se rechaza una invitación a una cita?": "audio/questions/spanish/question17.mp3",
    "¿Cómo se diferencia la retroalimentación legítima relacionada con el trabajo del acoso?": "audio/questions/spanish/question18.mp3",
    "¿Cómo debo manejar una queja de acoso sexual contra mí?": "audio/questions/spanish/question19.mp3",
    "¿Qué papel juegan las políticas organizacionales en la prevención del acoso sexual en el lugar de trabajo?": "audio/questions/spanish/question20.mp3",
  },
  Vietnamese: {},
  Cantonese: {},
  Punjabi: {},
  Greek: {},
  Italian: {},
  Filipino: {},
  Hindi: {}
};

/**
 * Maps option text to pre-recorded audio file paths
 * This allows us to use high-quality ElevenLabs recordings for options too
 * 
 * Format: { [language]: { [optionText]: audioFilePath } }
 */
export const optionVoiceMap: Record<Language, Record<string, string>> = {
  English: {
    // Question 1 options
    "Any unwanted conduct of a sexual nature that violates dignity or creates an intimidating, hostile, degrading, humiliating, or offensive environment.": "audio/options/en/q1_option1.mp3",
    "Only physical touching of a sexual nature.": "audio/options/en/q1_option2.mp3",
    "Friendly compliments between colleagues.": "audio/options/en/q1_option3.mp3",
    
    // Question 2 options
    "A manager offering a promotion in exchange for sexual favours.": "audio/options/en/q2_option1.mp3",
    "Co-workers frequently telling dirty jokes that make someone uncomfortable.": "audio/options/en/q2_option2.mp3",
    "Displaying a calendar with inappropriate images in the office.": "audio/options/en/q2_option3.mp3",
    
    // Question 3 options
    "A single, minor offensive comment.": "audio/options/en/q3_option1.mp3",
    "Severe or pervasive sexually charged conduct that unreasonably interferes with an individual's work performance or creates an intimidating environment.": "audio/options/en/q3_option2.mp3",
    "Having a disagreement with a supervisor about work tasks.": "audio/options/en/q3_option3.mp3",
    
    // Question 4 options
    "No, it's just showing persistence.": "audio/options/en/q4_option1.mp3",
    "Yes, repeated unwelcome advances can constitute harassment.": "audio/options/en/q4_option2.mp3",
    "Only if the person asking is a manager.": "audio/options/en/q4_option3.mp3",
    
    // Question 5 options
    "A consensual hug between friends at work.": "audio/options/en/q5_option1.mp3",
    "Unwanted touching, brushing against someone, or blocking their path.": "audio/options/en/q5_option2.mp3",
    "A firm handshake during an introduction.": "audio/options/en/q5_option3.mp3",
    
    // Continue with options for questions 6-20...
    // Question 6 options
    "Yes, this can be considered visual harassment and contribute to a hostile work environment.": "audio/options/en/q6_option1.mp3",
    "No, as long as it's not directed at one specific person.": "audio/options/en/q6_option2.mp3",
    "Only if the images are illegal.": "audio/options/en/q6_option3.mp3",

    // Question 7 options
    "No, if the intent was humour, it's not harassment.": "audio/options/en/q7_option1.mp3",
    "Yes, the impact of the behaviour on the recipient is key, regardless of intent.": "audio/options/en/q7_option2.mp3",
    "Only if the joke was told by a manager.": "audio/options/en/q7_option3.mp3",

    // Question 8 options
    "Laugh along so you don't seem difficult.": "audio/options/en/q8_option1.mp3",
    "Ignore it and hope it stops on its own.": "audio/options/en/q8_option2.mp3",
    "Clearly state the behaviour is unwelcome, and if it continues, consider reporting it according to company policy.": "audio/options/en/q8_option3.mp3",

    // Question 9 options
    "Confront the harasser aggressively in public.": "audio/options/en/q9_option1.mp3",
    "Ignore it, as it's not your business.": "audio/options/en/q9_option2.mp3",
    "Offer support to the targeted colleague and/or report the incident according to company procedures, if appropriate.": "audio/options/en/q9_option3.mp3",

    // Question 10 options
    "It's usually unwritten common knowledge.": "audio/options/en/q10_option1.mp3",
    "In the employee handbook, company intranet, or from the HR department.": "audio/options/en/q10_option2.mp3",
    "Only supervisors have access to this information.": "audio/options/en/q10_option3.mp3",

    // Question 11 options
    "Thanking someone for bringing an issue forward.": "audio/options/en/q11_option1.mp3",
    "Taking adverse action (like demotion, firing, exclusion) against someone for reporting harassment or participating in an investigation.": "audio/options/en/q11_option2.mp3",
    "Conducting a fair and impartial investigation.": "audio/options/en/q11_option3.mp3",

    // Question 12 options
    "No, harassment only happens face-to-face.": "audio/options/en/q12_option1.mp3",
    "Yes, unwelcome sexual conduct through electronic means is also harassment.": "audio/options/en/q12_option2.mp3",
    "Only if company devices are used.": "audio/options/en/q12_option3.mp3",

    // Question 13 options
    "No, friendly gestures are always acceptable.": "audio/options/en/q13_option1.mp3",
    "Yes, consent should not be assumed, and personal boundaries must be respected.": "audio/options/en/q13_option2.mp3",
    "Consent is only needed for explicitly romantic or sexual contact.": "audio/options/en/q13_option3.mp3",

    // Question 14 options
    "Power dynamics make no difference in defining harassment.": "audio/options/en/q14_option1.mp3",
    "A person in a subordinate position may feel less able to refuse advances or report unwelcome behaviour due to fear of reprisal.": "audio/options/en/q14_option2.mp3",
    "Only managers can be harassers.": "audio/options/en/q14_option3.mp3",

    // Question 15 options
    "No, the company is only responsible for the conduct of its employees.": "audio/options/en/q15_option1.mp3",
    "Yes, if the company knew or should have known about the harassment and failed to take appropriate corrective action.": "audio/options/en/q15_option2.mp3",
    "Only if the harassment happens on company property.": "audio/options/en/q15_option3.mp3",

    // Question 16 options
    "Only the Human Resources department.": "audio/options/en/q16_option1.mp3",
    "Only senior management.": "audio/options/en/q16_option2.mp3",
    "Everyone, including management, HR, and all employees.": "audio/options/en/q16_option3.mp3",

    // Question 17 options
    "No, consent cannot be withdrawn once given.": "audio/options/en/q17_option1.mp3",
    "Yes, consent must be ongoing and can be withdrawn at any time. Continuing advances after withdrawal can be harassment.": "audio/options/en/q17_option2.mp3",
    "Only if the relationship was officially declared to HR.": "audio/options/en/q17_option3.mp3",

    // Question 18 options
    "Making offensive comments about someone's gender identity or sexual orientation.": "audio/options/en/q18_option1.mp3",
    "Providing constructive feedback on work performance in a professional manner.": "audio/options/en/q18_option2.mp3",
    "Staring or leering at someone in a sexually suggestive way.": "audio/options/en/q18_option3.mp3",

    // Question 19 options
    "Immediate dismissal of the accused person without investigation.": "audio/options/en/q19_option1.mp3",
    "To be told to handle it themselves quietly.": "audio/options/en/q19_option2.mp3",
    "A prompt, confidential (as possible), and impartial investigation, and protection from retaliation.": "audio/options/en/q19_option3.mp3",

    // Question 20 options
    "No, harassment always requires repeated incidents.": "audio/options/en/q20_option1.mp3",
    "Yes, a single severe incident can absolutely be considered sexual harassment and potentially illegal.": "audio/options/en/q20_option2.mp3",
    "Only if there were witnesses to the incident.": "audio/options/en/q20_option3.mp3",
  },
  Mandarin: {
    // Question 1 options
    "任何不受欢迎的性行为，侵犯尊严或创造恐吓、敌对、有辱人格、羞辱或冒犯性环境的行为。": "audio/options/zh/q1_option1.mp3",
    "只有当目标明确表示该行为不受欢迎时才构成的行为。": "audio/options/zh/q1_option2.mp3",
    "仅适用于身体接触的性行为，不包括言语评论。": "audio/options/zh/q1_option3.mp3",
    "只有重复发生多次才可能构成性骚扰的行为。": "audio/options/zh/q1_option4.mp3",
    
    // Question 2 options
    "当工作福利（如晋升或更好的工作分配）取决于性要求时发生的情况。": "audio/options/zh/q2_option1.mp3",
    "同事之间轻微不适当触摸。": "audio/options/zh/q2_option2.mp3",
    "两位同级同事之间相互同意的关系。": "audio/options/zh/q2_option3.mp3",
    "以工作相关方式恭维某人的工作表现。": "audio/options/zh/q2_option4.mp3"
  },
  Spanish: {
    // Question 1 options
    "Cualquier conducta no deseada de naturaleza sexual que viole la dignidad o cree un entorno intimidatorio, hostil, degradante, humillante u ofensivo.": "audio/options/es/q1_option1.mp3",
    "Comportamiento que solo constituye acoso si el objetivo indica explícitamente que no es bienvenido.": "audio/options/es/q1_option2.mp3",
    "Solo conducta física de naturaleza sexual, no comentarios verbales.": "audio/options/es/q1_option3.mp3",
    "Comportamiento que solo puede constituir acoso si ocurre repetidamente.": "audio/options/es/q1_option4.mp3",
    
    // Question 2 options
    "Cuando los beneficios laborales (como promociones o mejores asignaciones) están condicionados a favores sexuales.": "audio/options/es/q2_option1.mp3",
    "Toques ligeramente inapropiados entre colegas.": "audio/options/es/q2_option2.mp3",
    "Una relación mutuamente consentida entre dos colegas del mismo nivel.": "audio/options/es/q2_option3.mp3",
    "Elogiar el desempeño laboral de alguien de manera relacionada con el trabajo.": "audio/options/es/q2_option4.mp3"
  },
  Vietnamese: {},
  Arabic: {},
  Cantonese: {},
  Filipino: {},
  Greek: {},
  Hindi: {},
  Italian: {},
  Punjabi: {}
};

/**
 * Maps feedback text to pre-recorded audio file paths
 * This allows us to use high-quality ElevenLabs recordings for feedback
 * 
 * Format: { [language]: { [feedbackText]: audioFilePath } }
 */
export const feedbackVoiceMap: Record<Language, Record<string, string>> = {
  English: {
    // Generic positive feedback
    "That's correct!": "audio/feedback/en/correct_general.mp3",
    "Well done!": "audio/feedback/en/correct_wellDone.mp3",
    "Excellent work!": "audio/feedback/en/correct_general.mp3",
    "You got it right!": "audio/feedback/en/correct_general.mp3",
    "Fantastic job!": "audio/feedback/en/correct_wellDone.mp3",
    "Perfect answer!": "audio/feedback/en/correct_wellDone.mp3",
    "Great thinking!": "audio/feedback/en/correct_general.mp3",
    "That's exactly right!": "audio/feedback/en/correct_general.mp3",
    "You're making excellent progress!": "audio/feedback/en/correct_wellDone.mp3",
    "Spot on! Keep up the good work!": "audio/feedback/en/correct_wellDone.mp3",
    
    // Generic negative feedback with encouragement
    "That's not quite right.": "audio/feedback/en/incorrect_general.mp3",
    "Please try again.": "audio/feedback/en/incorrect_tryAgain.mp3",
    "Not exactly, but that's okay!": "audio/feedback/en/incorrect_general.mp3",
    "Good attempt, but not correct.": "audio/feedback/en/incorrect_general.mp3",
    "Let's learn from this mistake.": "audio/feedback/en/incorrect_general.mp3",
    "Don't worry, learning is a process!": "audio/feedback/en/incorrect_tryAgain.mp3",
    "Almost there! Let's see the correct answer.": "audio/feedback/en/incorrect_general.mp3",
    "Not quite, but you're making progress!": "audio/feedback/en/incorrect_general.mp3",
    "Remember, mistakes help us learn!": "audio/feedback/en/incorrect_tryAgain.mp3",
    "That's a common misconception. Let's clarify.": "audio/feedback/en/incorrect_general.mp3",
    
    // Question-specific feedback (examples)
    "Right! Unwelcome sexual conduct is the legal definition.": "audio/feedback/en/q1_correct.mp3",
    "Under Australian law, sexual harassment is defined as unwelcome sexual conduct that humiliates someone.": "audio/feedback/en/q1_incorrect.mp3",
    
    // Educational encouragement
    "You're building knowledge with every question!": "audio/feedback/en/correct_wellDone.mp3",
    "Keep going! You're becoming an expert!": "audio/feedback/en/correct_wellDone.mp3",
    "That's the kind of thinking that leads to mastery!": "audio/feedback/en/correct_general.mp3",
    "Your understanding is growing with each question!": "audio/feedback/en/correct_wellDone.mp3",
    "Let's learn the correct answer and move forward.": "audio/feedback/en/incorrect_general.mp3",
    "This is a great learning opportunity!": "audio/feedback/en/incorrect_general.mp3"
  },
  Arabic: {},
  Mandarin: {
    // Generic positive feedback
    "正确！": "audio/feedback/zh/correct_general.mp3",
    "做得好！": "audio/feedback/zh/correct_wellDone.mp3",
    "回答正确！": "audio/feedback/zh/correct_general.mp3",
    "完美的回答！": "audio/feedback/zh/correct_wellDone.mp3",
    
    // Generic negative feedback with encouragement
    "不太对。": "audio/feedback/zh/incorrect_general.mp3",
    "请再试一次。": "audio/feedback/zh/incorrect_tryAgain.mp3",
    "不完全正确，但没关系！": "audio/feedback/zh/incorrect_general.mp3",
    "记住，错误帮助我们学习！": "audio/feedback/zh/incorrect_tryAgain.mp3",
  },
  Spanish: {
    // Generic positive feedback
    "¡Correcto!": "audio/feedback/es/correct_general.mp3",
    "¡Bien hecho!": "audio/feedback/es/correct_wellDone.mp3",
    "¡Excelente trabajo!": "audio/feedback/es/correct_general.mp3",
    "¡Acertaste!": "audio/feedback/es/correct_general.mp3",
    "¡Respuesta perfecta!": "audio/feedback/es/correct_wellDone.mp3",
    
    // Generic negative feedback with encouragement
    "Eso no es del todo correcto.": "audio/feedback/es/incorrect_general.mp3",
    "Por favor, inténtalo de nuevo.": "audio/feedback/es/incorrect_tryAgain.mp3",
    "No exactamente, ¡pero está bien!": "audio/feedback/es/incorrect_general.mp3",
    "Buen intento, pero no es correcto.": "audio/feedback/es/incorrect_general.mp3",
    "¡Recuerda, los errores nos ayudan a aprender!": "audio/feedback/es/incorrect_tryAgain.mp3",
  },
  Vietnamese: {},
  Cantonese: {},
  Punjabi: {},
  Greek: {},
  Italian: {},
  Filipino: {},
  Hindi: {}
}; 