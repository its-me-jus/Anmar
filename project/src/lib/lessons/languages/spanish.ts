import type { LessonContent } from '../types';

export const spanishLessons: Record<number, LessonContent> = {
  1: {
    title: "Entendiendo el Acoso Sexual",
    description: "Aprenda a identificar qué constituye acoso sexual en el lugar de trabajo.",
    story: {
      scenario: "Nota que un colega parece incómodo cuando ciertos miembros del equipo hacen comentarios sobre su apariencia.",
      challenge: "Reconocer cuándo el comportamiento cruza la línea de amistoso a inapropiado.",
      insight: "El acoso sexual puede ser subjetivo, pero entender su impacto es clave para la prevención."
    },
    keyPoints: [
      "El acoso sexual incluye conducta no deseada que crea un ambiente hostil",
      "Puede ser verbal, no verbal, físico o digital",
      "No se requiere intención - lo que importa es el impacto en el receptor"
    ],
    examples: [
      {
        good: "Mantener conversaciones profesionales y respetar los límites personales",
        bad: "Hacer comentarios no deseados sobre la apariencia de alguien o compartir contenido inapropiado"
      },
      {
        good: "Detener el comportamiento cuando alguien indica incomodidad",
        bad: "Continuar el comportamiento después de que se le ha dicho que no es bienvenido, alegando 'es solo una broma'"
      }
    ],
    tips: [
      "En caso de duda, mantenga las interacciones profesionales",
      "Considere cómo otros podrían recibir sus comentarios",
      "Recuerde que las percepciones varían - lo que es inofensivo para usted puede ser ofensivo para otros"
    ]
  },
  2: {
    title: "Acoso Quid Pro Quo",
    description: "Entendiendo la forma de acoso sexual basada en el intercambio.",
    story: {
      scenario: "Un gerente insinúa dar trato especial a un empleado que accede a reunirse fuera del trabajo para 'tiempo personal'.",
      challenge: "Identificar cuándo los beneficios profesionales están indebidamente vinculados a favores sexuales o románticos.",
      insight: "La dinámica de poder influye significativamente en esta forma de acoso."
    },
    keyPoints: [
      "Quid pro quo significa 'algo por algo'",
      "Esto ocurre cuando los beneficios laborales están condicionados a favores sexuales",
      "A menudo implica un desequilibrio de poder entre las partes"
    ],
    examples: [
      {
        good: "Basar las promociones únicamente en el desempeño y las calificaciones",
        bad: "Sugerir mejores asignaciones o ascensos a cambio de citas o atención sexual"
      },
      {
        good: "Mantener límites profesionales claros entre supervisores y subordinados",
        bad: "Usar la posición de autoridad para presionar a alguien a interacciones personales no deseadas"
      }
    ],
    tips: [
      "Documente cualquier situación donde los beneficios profesionales estén vinculados a relaciones personales",
      "Reporte incidentes a RRHH o a la gerencia apropiada",
      "Conozca las políticas de su organización sobre conflictos de interés y relaciones profesionales"
    ]
  },
  3: {
    title: "Ambiente Laboral Hostil",
    description: "Entendiendo cómo los comportamientos repetidos pueden crear una atmósfera intimidante.",
    story: {
      scenario: "Un departamento ha normalizado chistes sexuales y comentarios inapropiados, haciendo que algunos miembros del equipo se sientan incómodos viniendo a trabajar.",
      challenge: "Reconocer cuándo la cultura del lugar de trabajo cruza la línea creando un ambiente hostil.",
      insight: "Incluso si no está dirigido a una persona específica, el comportamiento inapropiado generalizado afecta a todo el lugar de trabajo."
    },
    keyPoints: [
      "Los ambientes hostiles implican conducta severa o generalizada",
      "El comportamiento debe interferir irrazonablemente con el desempeño laboral",
      "Puede afectar a personas incluso si no son el objetivo directo"
    ],
    examples: [
      {
        good: "Promover la comunicación respetuosa en todas las interacciones del lugar de trabajo",
        bad: "Permitir contenido explícito, bromas inapropiadas o materiales ofensivos en espacios compartidos"
      },
      {
        good: "Abordar el comportamiento problemático de manera consistente y rápida",
        bad: "Desestimar o ignorar preocupaciones sobre la cultura del lugar de trabajo"
      }
    ],
    tips: [
      "Preste atención a la atmósfera general del lugar de trabajo",
      "Tome en serio las quejas sobre comportamiento general",
      "Considere cómo el comportamiento podría afectar a otros, no solo a los directamente involucrados"
    ]
  },
  4: {
    title: "Avances No Deseados",
    description: "Entendiendo la importancia de respetar los límites en las relaciones laborales.",
    story: {
      scenario: "Un empleado invita repetidamente a salir a un colega a pesar de ser rechazado múltiples veces.",
      challenge: "Reconocer cuándo la persistencia se convierte en acoso y aprender a aceptar el rechazo respetuosamente.",
      insight: "Respetar el derecho de otro a decir 'no' es fundamental para mantener un lugar de trabajo libre de acoso."
    },
    keyPoints: [
      "Una sola invitación respetuosa generalmente no es acoso",
      "Los avances no deseados persistentes pueden constituir acoso",
      "Se debe respetar la respuesta del receptor"
    ],
    examples: [
      {
        good: "Aceptar que un colega decline una invitación a una cita y seguir adelante profesionalmente",
        bad: "Continuar persiguiendo románticamente a alguien después de que ha dicho que no"
      },
      {
        good: "Mantener las relaciones profesionales cuando el interés romántico no es correspondido",
        bad: "Usar situaciones laborales para forzar la interacción con alguien que ha rechazado la participación personal"
      }
    ],
    tips: [
      "Acepte el rechazo con gracia",
      "Si no está seguro del interés de alguien, opte por el profesionalismo",
      "Considere el impacto potencial de las dinámicas de poder en la capacidad de alguien para decir libremente que no"
    ]
  },
  5: {
    title: "Límites Físicos",
    description: "Entendiendo el contacto físico apropiado en el lugar de trabajo.",
    story: {
      scenario: "Un miembro del equipo regularmente se para demasiado cerca de los colegas y toca sus hombros o brazos durante las conversaciones.",
      challenge: "Navegar las diferencias culturales y preferencias personales respecto al espacio físico y contacto.",
      insight: "Incluso el contacto físico bien intencionado puede ser no deseado e inapropiado."
    },
    keyPoints: [
      "El contacto físico no deseado puede constituir acoso sexual",
      "Las preferencias de espacio personal varían ampliamente entre individuos",
      "Nunca se debe asumir el consentimiento para el contacto físico"
    ],
    examples: [
      {
        good: "Preguntar antes de iniciar contacto físico, como '¿Le gustaría un apretón de manos?'",
        bad: "Tocar el cuerpo de alguien sin su permiso o bloquear su movimiento"
      },
      {
        good: "Respetar la incomodidad visible aumentando la distancia física",
        bad: "Ignorar señales de que alguien está incómodo con la proximidad física"
      }
    ],
    tips: [
      "En caso de duda, mantenga la distancia profesional",
      "Sea consciente de que la comodidad con el contacto físico varía ampliamente",
      "Preste atención al lenguaje corporal que indica incomodidad"
    ]
  },
  6: {
    title: "Acoso Visual y Ambiental",
    description: "Entendiendo cómo el contenido visual puede crear un ambiente laboral hostil.",
    story: {
      scenario: "Un empleado nota imágenes inapropiadas mostradas en el espacio de trabajo de un colega que son visibles para otros que pasan.",
      challenge: "Abordar el contenido visual que puede ser ofensivo sin extralimitarse en la expresión personal.",
      insight: "Los espacios compartidos requieren estándares más altos de apropiación que las áreas privadas."
    },
    keyPoints: [
      "Los materiales visuales pueden crear un ambiente hostil incluso sin estar dirigidos a nadie",
      "El contenido digital (correos electrónicos, mensajes) también puede constituir acoso visual",
      "Los entornos profesionales requieren contenido apropiado en todos los espacios compartidos"
    ],
    examples: [
      {
        good: "Mantener las decoraciones del lugar de trabajo y las comunicaciones digitales profesionales",
        bad: "Mostrar imágenes sugestivas o enviar contenido inapropiado a través de canales de trabajo"
      },
      {
        good: "Considerar cómo el contenido visual podría ser percibido por una fuerza laboral diversa",
        bad: "Argumentar que el material ofensivo es 'solo arte' o 'libre expresión'"
      }
    ],
    tips: [
      "Considere si el contenido sería apropiado en una publicación profesional",
      "Sea consciente de que los espacios digitales compartidos (chat, correo electrónico) tienen los mismos estándares que los espacios físicos",
      "En caso de duda, mantenga los espacios compartidos neutrales y profesionales"
    ]
  },
  7: {
    title: "Intención vs. Impacto",
    description: "Entendiendo por qué los efectos importan más que las intenciones cuando se trata de acoso.",
    story: {
      scenario: "Un empleado hace bromas de naturaleza sexual, afirmando que 'solo se está divirtiendo' a pesar de la incomodidad visible de otros.",
      challenge: "Reconocer que las buenas intenciones no niegan los impactos dañinos.",
      insight: "Lo que importa legal y éticamente es cómo el comportamiento afecta a otros, no lo que se pretendía."
    },
    keyPoints: [
      "El acoso se determina por el impacto, no por la intención",
      "Afirmar que algo era 'solo una broma' no excusa el comportamiento dañino",
      "El estándar de 'persona razonable' se usa a menudo para evaluar los impactos"
    ],
    examples: [
      {
        good: "Disculparse y cambiar el comportamiento cuando se informa que algo es ofensivo",
        bad: "Defender comentarios inapropiados diciendo 'No lo quise decir de esa manera'"
      },
      {
        good: "Considerar los impactos potenciales antes de hacer bromas o comentarios",
        bad: "Esperar que otros 'se lo tomen a la ligera' sobre comportamientos que los incomodan"
      }
    ],
    tips: [
      "Concéntrese en cómo su comportamiento podría ser recibido, no solo en sus intenciones",
      "Escuche cuando otros expresan incomodidad, incluso si no entiende por qué",
      "Recuerde que el humor es subjetivo y cultural"
    ]
  },
  8: {
    title: "Respondiendo a Situaciones Incómodas",
    description: "Aprendiendo respuestas efectivas cuando se enfrentan a comportamientos potencialmente acosadores.",
    story: {
      scenario: "Un colega regularmente hace comentarios con connotaciones sexuales que te incomodan.",
      challenge: "Encontrar la confianza para abordar la situación directamente mientras se mantienen relaciones profesionales.",
      insight: "La comunicación clara sobre los límites a menudo previene la escalada a quejas formales."
    },
    keyPoints: [
      "Es apropiado declarar claramente cuando el comportamiento no es bienvenido",
      "La documentación de incidentes puede ser importante",
      "El reporte formal es apropiado si la comunicación directa no resuelve el problema"
    ],
    examples: [
      {
        good: "Decir 'Ese comentario me incomoda. Por favor, no me hables de esa manera.'",
        bad: "Reírse junto con bromas inapropiadas para evitar conflictos"
      },
      {
        good: "Dar seguimiento a una solicitud verbal con comunicación escrita si es necesario",
        bad: "Esperar que el comportamiento se detenga por sí solo sin abordarlo"
      }
    ],
    tips: [
      "Practique respuestas directas y profesionales a situaciones incómodas",
      "Documente incidentes, incluyendo fechas, horas y lo que se dijo o hizo",
      "Conozca los procedimientos de reporte de su organización antes de necesitarlos"
    ]
  },
  9: {
    title: "Intervención de Testigos",
    description: "Entendiendo cómo los testigos pueden ayudar a prevenir y abordar el acoso sexual.",
    story: {
      scenario: "Observa a un colega haciendo avances no deseados hacia otro miembro del equipo que parece incómodo.",
      challenge: "Decidir cuándo y cómo intervenir en situaciones que no te involucran directamente.",
      insight: "Los testigos juegan un papel crucial en establecer normas laborales y apoyar a aquellos que experimentan acoso."
    },
    keyPoints: [
      "Los testigos tienen poder para influir en la cultura del lugar de trabajo",
      "Apoyar a los objetivos del acoso ayuda a mitigar el daño",
      "La intervención puede variar de sutil a directa"
    ],
    examples: [
      {
        good: "Preguntar '¿Estás bien?' a alguien que parece incómodo en una situación",
        bad: "Ignorar comportamiento problemático porque 'no es asunto tuyo'"
      },
      {
        good: "Reportar acoso presenciado a través de los canales apropiados",
        bad: "Participar o fomentar comportamiento inapropiado"
      }
    ],
    tips: [
      "Aprenda diferentes estrategias de intervención (directa, distracción, delegación, retraso)",
      "Concéntrese en apoyar al objetivo en lugar de confrontar al acosador",
      "Hacer seguimiento con la persona objetivo para ofrecer apoyo continuo"
    ]
  },
  10: {
    title: "Políticas y Recursos",
    description: "Entendiendo dónde encontrar información y apoyo relacionado con el acoso sexual.",
    story: {
      scenario: "Un nuevo empleado quiere entender el enfoque de la empresa para prevenir y abordar el acoso.",
      challenge: "Navegar por varias políticas y recursos para encontrar información relevante.",
      insight: "Conocer los recursos disponibles antes de que se necesiten ayuda a garantizar respuestas rápidas y apropiadas."
    },
    keyPoints: [
      "La mayoría de las organizaciones tienen políticas específicas de acoso",
      "Las políticas típicamente describen procedimientos de reporte y procesos de investigación",
      "Los recursos pueden incluir RRHH, PAE, defensores, o agencias externas"
    ],
    examples: [
      {
        good: "Revisar las políticas de acoso durante la incorporación y periódicamente después",
        bad: "Esperar hasta que haya un problema para aprender sobre los procedimientos de reporte"
      },
      {
        good: "Conocer múltiples opciones de reporte dentro de su organización",
        bad: "Asumir que no hay nada que pueda hacer si se siente incómodo con su gerente directo"
      }
    ],
    tips: [
      "Familiarícese con las políticas específicas de su organización",
      "Sepa a quién contactar en diferentes situaciones",
      "Entienda las opciones de reporte tanto internas como externas"
    ]
  },
  11: {
    title: "Protección Contra Represalias",
    description: "Entendiendo las protecciones para quienes reportan acoso.",
    story: {
      scenario: "Un empleado duda en reportar acoso por miedo a consecuencias negativas para su carrera.",
      challenge: "Superar miedos de represalias al reportar preocupaciones legítimas.",
      insight: "Las protecciones contra represalias son un componente crucial de la prevención efectiva del acoso."
    },
    keyPoints: [
      "Las represalias por reportar acoso son ilegales",
      "Las represalias pueden tomar muchas formas más allá del despido",
      "Tanto los denunciantes como los testigos están protegidos contra represalias"
    ],
    examples: [
      {
        good: "Mantener un trato profesional hacia los empleados que reportan preocupaciones",
        bad: "Excluir, degradar o tratar de manera diferente a alguien que ha presentado una queja"
      },
      {
        good: "Tener políticas claras contra represalias y monitorear el cumplimiento",
        bad: "Represalias sutiles como cambiar asignaciones, horarios o dinámicas sociales"
      }
    ],
    tips: [
      "Documente cualquier cambio en el trato después de un reporte",
      "Sepa que la protección se extiende a testigos y aquellos que participan en investigaciones",
      "Entienda formas de represalias tanto obvias como sutiles"
    ]
  },
  12: {
    title: "Acoso Digital",
    description: "Entendiendo cómo ocurre el acoso a través de comunicaciones electrónicas.",
    story: {
      scenario: "Un empleado recibe mensajes sugestivos de un colega a través de la plataforma de chat de la empresa.",
      challenge: "Navegar límites apropiados en lugares de trabajo cada vez más digitales.",
      insight: "Las comunicaciones digitales están sujetas a los mismos estándares que las interacciones en persona."
    },
    keyPoints: [
      "El acoso puede ocurrir a través de cualquier medio, incluidos canales digitales",
      "Las comunicaciones escritas crean registros permanentes",
      "Los estándares profesionales se aplican a todas las comunicaciones relacionadas con el trabajo"
    ],
    examples: [
      {
        good: "Mantener lenguaje y contenido profesional en todas las comunicaciones laborales",
        bad: "Enviar imágenes sugestivas, enlaces o mensajes a través de plataformas de trabajo"
      },
      {
        good: "Usar un tono profesional en comunicaciones digitales incluso durante conversaciones casuales",
        bad: "Asumir que chats privados o mensajes fuera de horario están exentos de estándares laborales"
      }
    ],
    tips: [
      "Recuerde que las comunicaciones digitales crean registros que pueden revisarse posteriormente",
      "Mantenga límites profesionales en todas las plataformas conectadas al trabajo",
      "Considere si se sentiría cómodo con que su mensaje fuera compartido con RRHH"
    ]
  },
  13: {
    title: "Consentimiento en el Lugar de Trabajo",
    description: "Entendiendo la importancia del consentimiento claro para cualquier contacto físico.",
    story: {
      scenario: "Un miembro del equipo que proviene de una cultura donde los abrazos son comunes saluda a nuevos colegas con abrazos, sin darse cuenta de que algunos están incómodos.",
      challenge: "Respetar diferentes niveles de comodidad con el contacto físico en un lugar de trabajo diverso.",
      insight: "El consentimiento explícito asegura límites físicos respetuosos independientemente de las diferencias culturales."
    },
    keyPoints: [
      "El consentimiento debe darse libremente, no asumirse",
      "Los límites personales varían ampliamente entre individuos",
      "Los entornos profesionales generalmente requieren límites más formales"
    ],
    examples: [
      {
        good: "Preguntar antes de iniciar contacto físico: '¿Te gustaría un abrazo?'",
        bad: "Asumir que todos están cómodos con el mismo nivel de contacto físico"
      },
      {
        good: "Respetar señales no verbales que indican incomodidad",
        bad: "Continuar saludos físicos con alguien que se tensa o retrocede"
      }
    ],
    tips: [
      "Por defecto, mantenga límites físicos más formales en entornos profesionales",
      "Preste atención a las diferencias culturales e individuales en la comodidad con el contacto físico",
      "En caso de duda, pregunte antes de tocar"
    ]
  },
  14: {
    title: "Dinámicas de Poder",
    description: "Entendiendo cómo la jerarquía organizacional afecta las situaciones de acoso.",
    story: {
      scenario: "Un gerente frecuentemente elogia la apariencia de un subordinado directo de maneras que lo incomodan.",
      challenge: "Abordar comportamiento inapropiado cuando las diferencias de poder complican la situación.",
      insight: "Los desequilibrios de poder influyen significativamente tanto en el impacto del comportamiento como en la capacidad de respuesta."
    },
    keyPoints: [
      "Las diferencias de poder amplifican el impacto del comportamiento potencialmente acosador",
      "Aquellos con menos poder pueden temer consecuencias profesionales por rechazo o reporte",
      "Aquellos con autoridad tienen mayor responsabilidad de mantener límites apropiados"
    ],
    examples: [
      {
        good: "Gerentes manteniendo relaciones estrictamente profesionales con subordinados directos",
        bad: "Supervisores pidiendo citas a subordinados o haciendo comentarios sobre su apariencia"
      },
      {
        good: "Organizaciones proporcionando canales alternativos de reporte cuando los gerentes están involucrados",
        bad: "Esperar que los subordinados confronten directamente a los supervisores sobre comportamiento incómodo"
      }
    ],
    tips: [
      "Aquellos en posiciones de autoridad deben ser especialmente conscientes de mantener límites profesionales",
      "Las organizaciones deben proporcionar múltiples canales de reporte para abordar desequilibrios de poder",
      "Considere cómo las diferencias de poder podrían afectar la capacidad de alguien para decir libremente 'no'"
    ]
  },
  15: {
    title: "Acoso por Terceros",
    description: "Entendiendo la responsabilidad organizacional por acoso de no empleados.",
    story: {
      scenario: "Un cliente repetidamente hace comentarios inapropiados a un representante de servicio al cliente.",
      challenge: "Equilibrar relaciones con clientes y protección del empleado.",
      insight: "Las organizaciones tienen el deber de proteger a los empleados del acoso independientemente de su fuente."
    },
    keyPoints: [
      "Las organizaciones deben proteger a los empleados del acoso por terceros",
      "Esto incluye acoso por clientes, consumidores, proveedores o visitantes",
      "Los empleadores pueden ser responsables si no toman medidas apropiadas"
    ],
    examples: [
      {
        good: "Un gerente interviniendo cuando un cliente es inapropiado con un empleado",
        bad: "Decir a los empleados que toleren el acoso porque 'el cliente siempre tiene la razón'"
      },
      {
        good: "Tener políticas claras sobre acoso por terceros y apoyar a los empleados afectados",
        bad: "Priorizar relaciones comerciales sobre el bienestar de los empleados"
      }
    ],
    tips: [
      "Conozca la política de su organización sobre acoso por terceros",
      "Reporte incidentes que involucren a no empleados a través de los mismos canales",
      "Entienda que su empleador tiene el deber de proporcionar un lugar de trabajo libre de acoso independientemente de quién esté causando el problema"
    ]
  },
  16: {
    title: "Responsabilidad Compartida",
    description: "Entendiendo el papel de todos en crear un lugar de trabajo libre de acoso.",
    story: {
      scenario: "Un equipo está trabajando para mejorar la cultura de su departamento después de varios incidentes de comportamiento inapropiado.",
      challenge: "Determinar quién es responsable de crear y mantener un lugar de trabajo respetuoso.",
      insight: "Un entorno verdaderamente libre de acoso requiere compromiso a todos los niveles."
    },
    keyPoints: [
      "Todos contribuyen a la cultura del lugar de trabajo",
      "La gerencia tiene responsabilidad especial pero no es la única responsable",
      "La intervención de testigos es crucial para el cambio cultural"
    ],
    examples: [
      {
        good: "Todos los miembros del equipo hablando cuando observan comportamiento problemático",
        bad: "Asumir que la prevención del acoso es responsabilidad exclusiva de RRHH"
      },
      {
        good: "Líderes modelando comportamiento apropiado y abordando problemas rápidamente",
        bad: "Crear políticas sin cumplimiento o seguimiento"
      }
    ],
    tips: [
      "Considere cómo su propio comportamiento contribuye a la cultura del lugar de trabajo",
      "Apoye a colegas que hablan sobre comportamiento inapropiado",
      "Responsabilice a los líderes de crear entornos laborales seguros"
    ]
  },
  17: {
    title: "Consentimiento Continuo",
    description: "Entendiendo que el consentimiento puede ser retirado en cualquier momento.",
    story: {
      scenario: "Dos colegas que habían estado saliendo deciden terminar su relación, pero uno continúa buscando interacción romántica.",
      challenge: "Respetar cuando alguien retira el consentimiento para una relación o interacción.",
      insight: "El consentimiento pasado no garantiza el consentimiento futuro - las personas tienen derecho a cambiar de opinión."
    },
    keyPoints: [
      "El consentimiento debe ser continuo y puede ser retirado en cualquier momento",
      "La historia de relación previa no anula los límites actuales",
      "La persecución continua después del retiro del consentimiento puede constituir acoso"
    ],
    examples: [
      {
        good: "Respetar cuando alguien dice que quiere terminar una relación o interacción",
        bad: "Continuar persiguiendo románticamente a alguien porque estaban interesados en el pasado"
      },
      {
        good: "Mantener límites profesionales con ex parejas románticas en el trabajo",
        bad: "Usar el entorno laboral compartido para forzar la interacción con alguien que ha retirado el consentimiento"
      }
    ],
    tips: [
      "Acepte los límites cambiados con gracia",
      "Establezca límites profesionales claros cuando las relaciones personales cambien",
      "Busque mediación si es necesario para establecer relaciones profesionales viables"
    ]
  },
  18: {
    title: "Retroalimentación Profesional vs. Acoso",
    description: "Entendiendo la diferencia entre retroalimentación relacionada con el trabajo y acoso.",
    story: {
      scenario: "Un empleado no está seguro si la retroalimentación crítica de su gerente constituye acoso.",
      challenge: "Distinguir entre retroalimentación legítima del lugar de trabajo y comportamiento inapropiado.",
      insight: "La crítica profesional difiere del acoso tanto en contenido como en entrega."
    },
    keyPoints: [
      "La retroalimentación profesional se centra en el desempeño laboral, no en atributos personales",
      "La crítica constructiva es específica, relacionada con el trabajo y entregada respetuosamente",
      "La retroalimentación debe apuntar a mejorar el desempeño, no denigrar a la persona"
    ],
    examples: [
      {
        good: "Proporcionar retroalimentación específica y constructiva sobre la calidad del trabajo o comportamiento",
        bad: "Hacer comentarios personales disfrazados de retroalimentación profesional"
      },
      {
        good: "Enfocar la crítica en acciones que pueden cambiarse, no en características personales",
        bad: "Usar sesiones de retroalimentación para intimidar o hacer que alguien se sienta incómodo"
      }
    ],
    tips: [
      "La retroalimentación legítima debe sentirse constructiva incluso cuando es crítica",
      "La retroalimentación debe ser sobre lo que haces, no sobre quién eres",
      "Si la retroalimentación se siente personal o inapropiada, buscar una segunda opinión puede ayudar a aclarar"
    ]
  },
  19: {
    title: "Reportes e Investigaciones",
    description: "Entendiendo qué esperar cuando se reporta acoso.",
    story: {
      scenario: "Un empleado está considerando reportar acoso pero no está seguro sobre el proceso.",
      challenge: "Navegar procesos formales de reporte mientras se maneja la ansiedad sobre posibles resultados.",
      insight: "Saber qué esperar ayuda a los empleados a tomar decisiones informadas sobre reportar."
    },
    keyPoints: [
      "Las organizaciones típicamente tienen procedimientos establecidos de investigación",
      "La confidencialidad se mantiene en la medida de lo posible",
      "Tanto el denunciante como el acusado tienen derechos durante las investigaciones"
    ],
    examples: [
      {
        good: "Conducir investigaciones rápidas, exhaustivas e imparciales",
        bad: "Desestimar quejas sin investigación adecuada o decir a los empleados que 'lo resuelvan entre ellos'"
      },
      {
        good: "Proporcionar apoyo a todas las partes durante el proceso de investigación",
        bad: "No comunicarse con el denunciante sobre el estado de la investigación"
      }
    ],
    tips: [
      "Familiarícese con los procedimientos específicos de investigación de su organización",
      "Documente detalles relevantes antes de reportar",
      "Entienda que las investigaciones toman tiempo para ser exhaustivas y justas"
    ]
  },
  20: {
    title: "Severidad y Frecuencia",
    description: "Entendiendo cómo tanto incidentes únicos severos como comportamientos repetidos constituyen acoso.",
    story: {
      scenario: "Una organización está revisando sus materiales de capacitación sobre acoso para asegurar una cobertura integral.",
      challenge: "Ayudar a los empleados a entender diferentes manifestaciones de acoso.",
      insight: "Tanto incidentes aislados graves como patrones de comportamientos menores pueden crear ambientes hostiles."
    },
    keyPoints: [
      "Un solo incidente severo puede constituir acoso",
      "Comportamientos 'menores' repetidos pueden crear colectivamente un ambiente hostil",
      "Ambos tipos de acoso están prohibidos y deben ser abordados"
    ],
    examples: [
      {
        good: "Tomar todos los reportes en serio independientemente de la severidad percibida",
        bad: "Desestimar incidentes 'menores' sin considerar su efecto acumulativo"
      },
      {
        good: "Abordar patrones de comportamiento antes de que escalen",
        bad: "Requerir múltiples incidentes antes de tomar acción sobre mala conducta seria"
      }
    ],
    tips: [
      "No descarte comportamientos solo porque ocurren una vez",
      "Preste atención a patrones de comportamiento que individualmente pueden parecer menores",
      "Reporte tanto incidentes severos como comportamientos problemáticos continuos"
    ]
  }
}; 