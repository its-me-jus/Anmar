import { QuestionSet } from '../index';
import type { Question } from '../../../types';

export const spanishQuestions: QuestionSet = {
  language: 'Spanish',
  questions: [
    {
      id: 1,
      text: "¿Qué es el acoso sexual en el lugar de trabajo?",
      options: [
        "Cualquier conducta sexual no deseada que viole la dignidad o cree un entorno intimidatorio, hostil, degradante, humillante u ofensivo.",
        "Solo contacto físico de naturaleza sexual.",
        "Cumplidos amistosos entre colegas."
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "El acoso sexual incluye cualquier conducta sexual no deseada que cree un ambiente intimidatorio, hostil, degradante, humillante u ofensivo.",
      feedback: {
        correct: '¡Correcto! Entender qué constituye el acoso sexual es esencial para mantener un lugar de trabajo seguro.',
        incorrect: 'El acoso sexual incluye cualquier conducta sexual no deseada que cree un ambiente intimidatorio u hostil.'
      }
    },
    {
      id: 2,
      text: "¿Cuál de los siguientes es un ejemplo de acoso sexual de tipo 'quid pro quo'?",
      options: [
        "Un gerente ofrece un ascenso a cambio de favores sexuales.",
        "Un colega cuenta repetidamente chistes inapropiados que causan incomodidad.",
        "Mostrar un calendario con imágenes inapropiadas en la oficina."
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "El acoso quid pro quo ocurre cuando los beneficios laborales están condicionados a favores sexuales.",
      feedback: {
        correct: '¡Correcto! Este es un ejemplo clásico de acoso quid pro quo, donde los beneficios laborales están vinculados a favores sexuales.',
        incorrect: 'El acoso quid pro quo se refiere específicamente a condicionar beneficios laborales a favores sexuales.'
      }
    },
    {
      id: 3,
      text: "¿Qué constituye un 'ambiente de trabajo hostil' causado por acoso sexual?",
      options: [
        "Un solo comentario ofensivo menor.",
        "Conducta sexual severa o generalizada que interfiere irrazonablemente con el desempeño laboral o crea un ambiente intimidatorio.",
        "Desacuerdos con un supervisor sobre tareas laborales."
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "hard",
      explanation: "Un ambiente hostil implica conducta severa o generalizada que crea una atmósfera intimidatoria u ofensiva.",
      feedback: {
        correct: '¡Correcto! Un ambiente de trabajo hostil requiere conducta lo suficientemente severa o generalizada para crear un entorno intimidatorio.',
        incorrect: 'Un ambiente de trabajo hostil se caracteriza por conducta severa o generalizada que crea una atmósfera intimidatoria.'
      }
    },
    {
      id: 4,
      text: "¿Invitar repetidamente a un colega a salir, a pesar de que rechaza cada vez, se considera acoso sexual potencial?",
      options: [
        "No, esto solo muestra persistencia.",
        "Sí, los avances no deseados repetidos pueden constituir acoso.",
        "Solo si el que invita es un gerente."
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "Los avances románticos o sexuales no deseados persistentes pueden constituir acoso, independientemente de la intención.",
      feedback: {
        correct: '¡Correcto! Persistir en avances románticos después del rechazo es conducta no deseada y puede constituir acoso.',
        incorrect: 'Persistir en avances románticos después del rechazo es inapropiado y puede constituir acoso.'
      }
    },
    {
      id: 5,
      text: "¿Cuál de los siguientes comportamientos es una forma de acoso sexual físico?",
      options: [
        "Abrazos consensuados entre amigos en el trabajo.",
        "Toques no deseados, rozamientos o bloquear el camino de alguien.",
        "Un apretón de manos firme durante una presentación."
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "El acoso sexual físico incluye cualquier contacto físico no deseado de naturaleza sexual.",
      feedback: {
        correct: '¡Correcto! El contacto físico no deseado o la interferencia física deliberada constituyen acoso sexual físico.',
        incorrect: 'El acoso sexual físico implica toques no deseados o interferencia física deliberada con otra persona.'
      }
    },
    {
      id: 6,
      text: "¿Mostrar carteles sexualmente explícitos o enviar correos electrónicos con contenido sugestivo contribuye al acoso sexual?",
      options: [
        "Sí, puede considerarse acoso visual y contribuir a un ambiente de trabajo hostil.",
        "No, siempre que no esté dirigido a una persona específica.",
        "Solo si las imágenes son ilegales."
      ],
      correctAnswer: 0,
      category: "harassment",
      difficulty: "medium",
      explanation: "El material visual con contenido sexual puede crear un ambiente de trabajo hostil y constituir acoso.",
      feedback: {
        correct: '¡Correcto! El material visual con contenido sexual puede crear un ambiente hostil, incluso si no está dirigido a una persona específica.',
        incorrect: 'El contenido visual sexual puede crear un ambiente hostil, independientemente de si está dirigido a una persona específica.'
      }
    },
    {
      id: 7,
      text: "Si alguien dice que su comportamiento era 'solo una broma', ¿aún puede considerarse acoso sexual?",
      options: [
        "No, si la intención era humorística, no es acoso.",
        "Sí, el impacto en el receptor es clave, independientemente de la intención.",
        "Solo si la broma fue contada por un gerente."
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "La intención no determina el acoso - el impacto y cómo lo percibiría una persona razonable es lo importante.",
      feedback: {
        correct: '¡Correcto! El impacto del comportamiento, no la intención, determina si constituye acoso.',
        incorrect: 'Incluso si alguien afirma que algo era "solo una broma", el impacto en el receptor es lo que importa al determinar el acoso.'
      }
    },
    {
      id: 8,
      text: "Si los comentarios o bromas de naturaleza sexual de un colega te incomodan, ¿qué deberías hacer?",
      options: [
        "Reírte junto con ellos para evitar parecer difícil.",
        "Ignorarlo, esperando que se detenga por sí solo.",
        "Indicar claramente que el comportamiento no es bienvenido y, si continúa, considerar reportarlo según la política de la empresa."
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "easy",
      explanation: "El mejor enfoque es comunicar claramente los límites y seguir los procedimientos de reporte si el comportamiento continúa.",
      feedback: {
        correct: '¡Correcto! Expresar claramente que el comportamiento no es bienvenido y reportarlo si es necesario son los pasos apropiados.',
        incorrect: 'Cuando los comentarios o bromas te incomodan, es mejor indicar claramente que no son bienvenidos y reportarlos si continúan.'
      }
    },
    {
      id: 9,
      text: "Si presencias lo que crees que podría ser acoso sexual hacia un colega, ¿cuál es la acción responsable?",
      options: [
        "Confrontar agresivamente al acosador en público.",
        "Ignorarlo, ya que no es asunto tuyo.",
        "Ofrecer apoyo al colega afectado y/o reportar el incidente según los procedimientos de la empresa, si es apropiado."
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "medium",
      explanation: "Los testigos juegan un papel importante en la prevención del acoso al apoyar al objetivo y reportar incidentes.",
      feedback: {
        correct: '¡Correcto! Apoyar a los colegas y reportar a través de canales apropiados ayuda a crear un lugar de trabajo más seguro.',
        incorrect: 'Como testigo de posible acoso, apoyar al objetivo y reportar a través de canales apropiados es el enfoque responsable.'
      }
    },
    {
      id: 10,
      text: "¿Dónde pueden encontrar generalmente los empleados las políticas específicas de la empresa sobre acoso sexual y los procedimientos de reporte?",
      options: [
        "Esto suele ser sentido común no escrito.",
        "En el manual del empleado, la intranet de la empresa o el departamento de recursos humanos.",
        "Solo los supervisores pueden acceder a esta información."
      ],
      correctAnswer: 1,
      category: "policy",
      difficulty: "easy",
      explanation: "Las empresas suelen documentar las políticas de acoso en manuales de empleados y sitios de intranet.",
      feedback: {
        correct: '¡Correcto! Las políticas y procedimientos suelen estar documentados en recursos para empleados y disponibles a través de recursos humanos.',
        incorrect: 'Las políticas de acoso suelen estar documentadas en el manual del empleado, la intranet de la empresa o disponibles a través de recursos humanos.'
      }
    },
    {
      id: 11,
      text: "En el contexto de reportar acoso sexual, ¿qué es la represalia?",
      options: [
        "Agradecer a alguien por plantear un problema.",
        "Acción adversa (como degradación, despido, ostracismo) tomada contra alguien por reportar acoso o participar en una investigación.",
        "Conducir una investigación justa e imparcial."
      ],
      correctAnswer: 1,
      category: "policy",
      difficulty: "hard",
      explanation: "La represalia implica acciones negativas contra una persona por reportar acoso o participar en una investigación.",
      feedback: {
        correct: '¡Correcto! La represalia es cualquier acción adversa tomada contra alguien por reportar acoso o participar en una investigación.',
        incorrect: 'La represalia se refiere a acciones negativas tomadas contra alguien por reportar acoso o participar en una investigación.'
      }
    },
    {
      id: 12,
      text: "¿Puede ocurrir el acoso sexual a través de medios digitales como correo electrónico, plataformas de chat laboral o redes sociales?",
      options: [
        "No, el acoso solo ocurre en situaciones cara a cara.",
        "Sí, la conducta sexual no deseada a través de medios electrónicos también es acoso.",
        "Solo cuando se utiliza equipo de la empresa."
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "El acoso sexual puede ocurrir a través de cualquier medio, incluidas las comunicaciones digitales y electrónicas.",
      feedback: {
        correct: '¡Correcto! El acoso puede ocurrir a través de cualquier forma de comunicación, incluidas las plataformas digitales.',
        incorrect: 'El acoso sexual puede ocurrir a través de cualquier medio de comunicación, incluidas plataformas digitales como correo electrónico y chat.'
      }
    },
    {
      id: 13,
      text: "En el lugar de trabajo, ¿se requiere consentimiento para el contacto físico (como abrazos o tocar el hombro) entre colegas?",
      options: [
        "No, los gestos amistosos siempre son aceptables.",
        "Sí, el consentimiento nunca debe asumirse y los límites personales deben ser respetados.",
        "El consentimiento solo es necesario para contacto explícitamente romántico o sexual."
      ],
      correctAnswer: 1,
      category: "respect",
      difficulty: "medium",
      explanation: "El consentimiento para cualquier contacto físico nunca debe asumirse y los límites personales deben ser respetados.",
      feedback: {
        correct: '¡Correcto! El consentimiento para el contacto físico nunca debe asumirse y los límites personales de cada persona deben ser respetados.',
        incorrect: 'Incluso para contacto físico aparentemente amistoso, el consentimiento no debe asumirse y los límites personales deben ser respetados.'
      }
    },
    {
      id: 14,
      text: "¿Cómo afectan las dinámicas de poder (por ejemplo, gerente y subordinado) a situaciones que involucran posible acoso sexual?",
      options: [
        "Las dinámicas de poder no hacen ninguna diferencia al definir el acoso.",
        "Aquellos en posiciones subordinadas pueden sentirse menos capaces de rechazar avances o reportar conducta no deseada por temor a represalias.",
        "Solo los gerentes pueden ser acosadores."
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "hard",
      explanation: "Los desequilibrios de poder pueden hacer difícil para los subordinados rechazar avances o reportar acoso por temor a consecuencias.",
      feedback: {
        correct: '¡Correcto! Los desequilibrios de poder pueden crear situaciones donde los subordinados sienten que no pueden rechazar o reportar acoso.',
        incorrect: 'Las dinámicas de poder son importantes porque los subordinados pueden temer represalias si rechazan avances o reportan acoso.'
      }
    },
    {
      id: 15,
      text: "Si un empleado es acosado sexualmente por un tercero (como un cliente o visitante), ¿puede la empresa ser responsable?",
      options: [
        "No, las empresas solo son responsables de la conducta de sus empleados.",
        "Sí, si la empresa sabía o debería haber sabido sobre el acoso y falló en tomar medidas correctivas apropiadas.",
        "Solo si el acoso ocurre en propiedad de la empresa."
      ],
      correctAnswer: 1,
      category: "policy",
      difficulty: "hard",
      explanation: "Las empresas pueden ser responsables del acoso por terceros si sabían o deberían haber sabido y no tomaron medidas.",
      feedback: {
        correct: '¡Correcto! Las empresas tienen la responsabilidad de proteger a los empleados del acoso, incluso de terceros, una vez que están al tanto.',
        incorrect: 'Las empresas pueden ser responsables del acoso por terceros si sabían del acoso y no tomaron las medidas apropiadas.'
      }
    },
    {
      id: 16,
      text: "¿Quién tiene la principal responsabilidad de prevenir el acoso sexual y fomentar una cultura de respeto en el lugar de trabajo?",
      options: [
        "Solo el departamento de recursos humanos.",
        "Solo la alta dirección.",
        "Todos, incluida la dirección, recursos humanos y todos los empleados."
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "easy",
      explanation: "Crear un lugar de trabajo libre de acoso es responsabilidad de todos, aunque la dirección tiene obligaciones adicionales.",
      feedback: {
        correct: '¡Correcto! Cada persona en la organización tiene la responsabilidad de mantener un lugar de trabajo respetuoso.',
        incorrect: 'Prevenir el acoso y fomentar el respeto es una responsabilidad compartida que incluye a cada persona en la organización.'
      }
    },
    {
      id: 17,
      text: "Si alguien inicialmente consintió a una relación romántica con un colega pero luego retira ese consentimiento, ¿debe respetarse ese retiro?",
      options: [
        "No, una vez que se da el consentimiento, no puede retirarse.",
        "Sí, el consentimiento debe ser continuo y puede retirarse en cualquier momento. Continuar las aproximaciones después del retiro podría ser acoso.",
        "Solo si la relación fue anunciada formalmente al departamento de recursos humanos."
      ],
      correctAnswer: 1,
      category: "respect",
      difficulty: "medium",
      explanation: "El consentimiento debe ser continuo y puede retirarse en cualquier momento. Continuar las aproximaciones después del retiro podría constituir acoso.",
      feedback: {
        correct: '¡Correcto! El consentimiento puede retirarse en cualquier momento, y continuar las aproximaciones después del retiro podría ser acoso.',
        incorrect: 'El consentimiento no es permanente - puede retirarse en cualquier momento, y continuar las aproximaciones después del retiro podría constituir acoso.'
      }
    },
    {
      id: 18,
      text: "¿Cuál de los siguientes generalmente NO se considera acoso sexual?",
      options: [
        "Hacer comentarios ofensivos sobre la identidad de género o orientación sexual de alguien.",
        "Proporcionar retroalimentación constructiva sobre el desempeño laboral de manera profesional.",
        "Mirar fijamente a alguien de manera sexualmente sugestiva."
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "La retroalimentación profesional sobre el desempeño laboral, cuando se proporciona apropiadamente, no es acoso.",
      feedback: {
        correct: '¡Correcto! La retroalimentación profesional relacionada con el trabajo no es acoso cuando se proporciona apropiadamente.',
        incorrect: 'La retroalimentación profesional sobre el desempeño laboral es una parte normal del lugar de trabajo y no es acoso cuando se proporciona apropiadamente.'
      }
    },
    {
      id: 19,
      text: "¿Qué deberían esperar generalmente los empleados que su empresa haga cuando reportan acoso sexual?",
      options: [
        "Despedir inmediatamente a la persona acusada sin investigación.",
        "Que les digan que lo manejen ellos mismos en silencio.",
        "Una investigación rápida, confidencial (en la medida de lo posible) e imparcial, y protección contra represalias."
      ],
      correctAnswer: 2,
      category: "policy",
      difficulty: "medium",
      explanation: "Las empresas deberían responder a los reportes de acoso con una investigación rápida y confidencial, y proteger al denunciante de represalias.",
      feedback: {
        correct: '¡Correcto! Los empleados deberían esperar una investigación justa y protección contra represalias cuando reportan acoso.',
        incorrect: 'Las empresas deberían responder a los reportes de acoso con una investigación exhaustiva y proteger al denunciante de represalias.'
      }
    },
    {
      id: 20,
      text: "¿Es suficiente un solo incidente grave (como una agresión sexual) para constituir acoso sexual?",
      options: [
        "No, el acoso siempre requiere incidentes repetidos.",
        "Sí, un solo incidente grave definitivamente puede considerarse acoso sexual y podría ser ilegal.",
        "Solo si el incidente tiene testigos."
      ],
      correctAnswer: 1,
      category: "harassment",
      difficulty: "medium",
      explanation: "Un solo incidente puede constituir acoso sexual si es lo suficientemente grave - no siempre se requieren múltiples incidentes.",
      feedback: {
        correct: '¡Correcto! Un solo incidente grave definitivamente puede constituir acoso sexual.',
        incorrect: 'El acoso sexual no requiere múltiples incidentes - un solo incidente grave puede ser suficiente.'
      }
    }
  ],
  metadata: {
    totalQuestions: 20,
    categories: ["harassment", "respect", "policy"],
    difficulties: {
      easy: 3,
      medium: 13,
      hard: 4
    }
  }
}; 