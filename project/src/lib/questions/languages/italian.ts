import { QuestionSet } from '../index';
import type { Question } from '../../../types';

const questions: Question[] = [
  {
    id: 1,
    text: "Cosa costituisce molestia sessuale sul posto di lavoro?",
    options: [
      "Solo contatto fisico di natura sessuale",
      "Solo commenti verbali di natura sessuale",
      "Qualsiasi comportamento indesiderato di natura sessuale che crea un ambiente ostile",
      "Solo comportamenti intenzionalmente dannosi"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'easy',
    explanation: 'La molestia sessuale include qualsiasi comportamento indesiderato di natura sessuale che crea un ambiente di lavoro ostile o offensivo. Include comportamenti fisici, verbali e visivi.',
    feedback: {
      correct: 'Corretto! La molestia sessuale comprende un\'ampia gamma di comportamenti indesiderati di natura sessuale.',
      incorrect: 'Sbagliato. La molestia sessuale è più ampia e include qualsiasi comportamento indesiderato di natura sessuale che crea un ambiente ostile.'
    }
  },
  {
    id: 2,
    text: "Cosa si intende per molestia sessuale \"Quid Pro Quo\"?",
    options: [
      "Quando qualcuno fa battute inappropriate di natura sessuale sul posto di lavoro",
      "Quando qualcuno offre benefici lavorativi in cambio di favori sessuali",
      "Quando qualcuno fa commenti involontariamente offensivi",
      "Quando qualcuno molesta i colleghi in un ambiente di gruppo"
    ],
    correctAnswer: 1,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'La molestia "Quid Pro Quo" (qualcosa in cambio di qualcos\'altro) avviene quando una persona in posizione di potere offre o suggerisce di concedere benefici lavorativi in cambio di favori sessuali, o minaccia conseguenze negative se tali proposte vengono respinte.',
    feedback: {
      correct: 'Corretto! La molestia "Quid Pro Quo" implica lo scambio di benefici lavorativi per favori sessuali.',
      incorrect: 'Sbagliato. La molestia "Quid Pro Quo" riguarda specificamente l\'offerta di benefici lavorativi in cambio di favori sessuali.'
    }
  },
  {
    id: 3,
    text: "Cosa costituisce un ambiente di lavoro ostile nel contesto della molestia sessuale?",
    options: [
      "Solo quando qualcuno si sente fisicamente minacciato",
      "Quando i colleghi hanno disaccordi su questioni lavorative",
      "Quando comportamenti indesiderati di natura sessuale influenzano le prestazioni o creano un ambiente sgradevole",
      "Solo quando c'è una minaccia diretta di licenziamento"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Un ambiente di lavoro ostile si crea quando comportamenti indesiderati di natura sessuale sono abbastanza gravi o pervasivi da influenzare la performance lavorativa di una persona o da creare un ambiente di lavoro intimidatorio, ostile o offensivo.',
    feedback: {
      correct: 'Corretto! Un ambiente di lavoro ostile è creato da comportamenti indesiderati di natura sessuale ripetuti o gravi.',
      incorrect: 'Sbagliato. Un ambiente di lavoro ostile riguarda il modo in cui il comportamento sessuale influisce sull\'ambiente di lavoro generale, non solo le minacce dirette.'
    }
  },
  {
    id: 4,
    text: "Se qualcuno intende fare un commento sessuale come battuta, può ancora essere considerato molestia?",
    options: [
      "No, se l'intenzione era solo di essere divertente",
      "Sì, l'intenzione non è rilevante se il commento è indesiderato e di natura sessuale",
      "Solo se la persona che fa il commento è un superiore",
      "Solo se la battuta viene ripetuta più volte"
    ],
    correctAnswer: 1,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Anche se un commento di natura sessuale è inteso come battuta, può costituire molestia sessuale se è indesiderato e crea un ambiente ostile. La percezione del destinatario e l\'effetto del comportamento sono più importanti dell\'intenzione.',
    feedback: {
      correct: 'Corretto! L\'intenzione non elimina la possibilità di molestia sessuale. Come viene percepito dal destinatario è più importante.',
      incorrect: 'Sbagliato. Anche le "battute" di natura sessuale possono costituire molestia se sono indesiderate, indipendentemente dall\'intenzione.'
    }
  },
  {
    id: 5,
    text: "Quali sono i confini fisici appropriati sul posto di lavoro?",
    options: [
      "Solo le strette di mano sono sempre appropriate",
      "Qualsiasi contatto va bene se sembra amichevole",
      "I confini variano in base alle preferenze personali, ma il consenso è sempre necessario",
      "Il contatto fisico è sempre inappropriato in un ambiente professionale"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'I confini fisici sul posto di lavoro variano in base alla persona, alla cultura e al contesto. Rispettare i confini personali e ottenere il consenso è sempre necessario. La consapevolezza che persone diverse hanno diversi livelli di comfort con il contatto fisico è importante.',
    feedback: {
      correct: 'Corretto! I confini fisici appropriati variano, ma il rispetto e il consenso sono sempre necessari.',
      incorrect: 'Sbagliato. Le persone hanno diversi livelli di comfort con il contatto fisico, e il consenso è sempre necessario.'
    }
  },
  {
    id: 6,
    text: "Come può verificarsi la molestia sessuale visiva sul posto di lavoro?",
    options: [
      "Solo attraverso l'esposizione di immagini offensive sul posto di lavoro",
      "Solo attraverso gesti inappropriati",
      "Attraverso immagini offensive, gesti, o sguardi inappropriati",
      "La molestia visiva non è una forma di molestia sessuale"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'La molestia sessuale visiva può includere l\'esposizione o la condivisione di materiale sessualmente suggestivo, gesti inappropriati di natura sessuale, o sguardi prolungati (fissare) che causano disagio. Questi comportamenti possono creare un ambiente di lavoro ostile.',
    feedback: {
      correct: 'Corretto! La molestia sessuale visiva include vari comportamenti, come immagini offensive, gesti e sguardi inappropriati.',
      incorrect: 'Sbagliato. La molestia sessuale visiva comprende una gamma di comportamenti oltre a quello che hai scelto.'
    }
  },
  {
    id: 7,
    text: "Chi può essere vittima di molestie sessuali?",
    options: [
      "Solo le donne",
      "Solo i subordinati dai loro superiori",
      "Chiunque, indipendentemente dal genere, posizione o altre caratteristiche",
      "Solo persone vulnerabili o con bassa autostima"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'easy',
    explanation: 'La molestia sessuale può colpire chiunque, indipendentemente dal genere, età, posizione lavorativa o altre caratteristiche. Uomini, donne e persone di ogni genere possono essere vittime o autori di molestie sessuali.',
    feedback: {
      correct: 'Corretto! La molestia sessuale può colpire chiunque, indipendentemente dal genere, posizione lavorativa o altri fattori.',
      incorrect: 'Sbagliato. La molestia sessuale può accadere a chiunque, non solo ai gruppi che hai indicato.'
    }
  },
  {
    id: 8,
    text: "Cosa dovresti fare se sei testimone di molestie sessuali sul posto di lavoro?",
    options: [
      "Ignorarlo, non è affar tuo",
      "Discuterne solo informalmente con altri colleghi",
      "Intervenire direttamente e segnalare l'incidente alle autorità competenti",
      "Aspettare per vedere se succede di nuovo prima di fare qualsiasi cosa"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'medium',
    explanation: 'Come testimone di molestie sessuali, è importante agire. Questo può includere intervenire in modo sicuro quando possibile, supportare la vittima e segnalare l\'incidente alle autorità competenti, come il dipartimento delle risorse umane o i superiori.',
    feedback: {
      correct: 'Corretto! I testimoni giocano un ruolo importante nella prevenzione delle molestie sessuali intervenendo e segnalando.',
      incorrect: 'Sbagliato. Il silenzio o l\'inazione dei testimoni spesso consente alle molestie sessuali di continuare.'
    }
  },
  {
    id: 9,
    text: "Quali sono le possibili conseguenze delle molestie sessuali sul posto di lavoro?",
    options: [
      "Solo conseguenze legali per l'azienda",
      "Solo impatti psicologici per la vittima",
      "Conseguenze legali, psicologiche, economiche e lavorative per tutti i coinvolti",
      "Di solito non ci sono conseguenze significative"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'hard',
    explanation: 'La molestia sessuale può avere ampie conseguenze: psicologiche (ansia, depressione) per la vittima, legali ed economiche per gli autori e le aziende, nonché impatti sulla cultura del lavoro, sulla produttività e sul morale dell\'intero team.',
    feedback: {
      correct: 'Corretto! La molestia sessuale ha conseguenze multiple ed estese per tutti i coinvolti.',
      incorrect: 'Sbagliato. Le conseguenze della molestia sessuale sono ampie e influenzano vari ambiti e persone.'
    }
  },
  {
    id: 10,
    text: "Perché le vittime di molestie sessuali spesso non denunciano gli incidenti?",
    options: [
      "Perché di solito non sono incidenti seri",
      "Per paura di ritorsioni, vergogna o mancanza di fiducia nel sistema di segnalazione",
      "Perché preferiscono gestirlo da sole",
      "Perché non ci sono procedure di segnalazione disponibili"
    ],
    correctAnswer: 1,
    category: 'harassment',
    difficulty: 'hard',
    explanation: 'Le vittime spesso non denunciano le molestie sessuali per paura di ritorsioni (es. perdita del lavoro), vergogna o imbarazzo, mancato riconoscimento del comportamento come molestia, mancanza di fiducia nel sistema di segnalazione, o paura di non essere credute.',
    feedback: {
      correct: 'Corretto! Ci sono molte ragioni complesse per cui le vittime spesso non denunciano le molestie sessuali.',
      incorrect: 'Sbagliato. La paura di ritorsioni, la vergogna e la mancanza di fiducia sono ostacoli reali alla segnalazione.'
    }
  },
  {
    id: 11,
    text: "Cosa dovrebbe fare un manager quando riceve una denuncia di molestie sessuali?",
    options: [
      "Condurre la propria indagine informale prima di prendere provvedimenti",
      "Chiedere al denunciante di risolvere il problema direttamente con il presunto molestatore",
      "Ascoltare attentamente, registrare i dettagli e seguire le procedure ufficiali dell'azienda",
      "Fare la propria valutazione sulla validità della denuncia"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'hard',
    explanation: 'Quando ricevono una denuncia, i manager devono rispondere prontamente, ascoltare attentamente, registrare i dettagli e seguire le procedure ufficiali dell\'azienda. Devono prendere sul serio ogni denuncia e inoltrare alle autorità appropriate, come le Risorse Umane.',
    feedback: {
      correct: 'Corretto! I manager devono gestire le denunce in modo professionale e seguire le procedure ufficiali.',
      incorrect: 'Sbagliato. I manager non dovrebbero condurre le proprie indagini o valutare la validità delle denunce, ma seguire le procedure stabilite.'
    }
  },
  {
    id: 12,
    text: "Quale dei seguenti comportamenti NON costituisce generalmente molestia sessuale?",
    options: [
      "Commenti professionali sulle prestazioni lavorative",
      "Inviti ripetuti per appuntamenti dopo i rifiuti",
      "Condivisione di immagini sessuali sul posto di lavoro",
      "Toccare zone sensibili del corpo"
    ],
    correctAnswer: 0,
    category: 'harassment',
    difficulty: 'easy',
    explanation: 'I commenti professionali sulle prestazioni lavorative che non hanno contenuto sessuale e si concentrano sulla qualità del lavoro non costituiscono molestia sessuale. Tutte le altre opzioni descrivono comportamenti che generalmente costituiscono molestia sessuale.',
    feedback: {
      correct: 'Corretto! I commenti professionali sulle prestazioni lavorative che non hanno connotazioni sessuali sono appropriati sul posto di lavoro.',
      incorrect: 'Sbagliato. I commenti professionali sulle prestazioni lavorative sono generalmente appropriati, mentre le altre opzioni descrivono forme di molestia sessuale.'
    }
  },
  {
    id: 13,
    text: "Quali strategie efficaci possono utilizzare le organizzazioni per prevenire le molestie sessuali?",
    options: [
      "Avere solo una politica scritta senza formazione",
      "Agire solo dopo le denunce formali",
      "Politiche chiare, formazione regolare, procedure di segnalazione accessibili e risposta immediata agli incidenti",
      "Separazione dei generi sul posto di lavoro"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'medium',
    explanation: 'Le strategie efficaci di prevenzione delle molestie sessuali includono politiche chiare di tolleranza zero, formazione regolare dei dipendenti, canali di segnalazione multipli e accessibili, indagini rapide ed eque sulle denunce, e la promozione di una cultura del rispetto.',
    feedback: {
      correct: 'Corretto! La prevenzione efficace richiede un approccio completo che include politiche, formazione, segnalazione e azione.',
      incorrect: 'Sbagliato. La prevenzione efficace richiede strategie multiple, non solo un singolo approccio o misure reattive.'
    }
  },
  {
    id: 14,
    text: "Come influiscono le dinamiche di potere sulle molestie sessuali sul posto di lavoro?",
    options: [
      "Non sono correlate alle molestie sessuali",
      "I molestatori sono sempre in posizioni di potere",
      "Il potere può creare paura di ritorsioni e influenzare il consenso",
      "Solo le persone in posizioni inferiori possono essere vittime"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Le dinamiche di potere sono un fattore importante nelle molestie sessuali. Quando esiste una differenza di potere, le vittime possono temere ritorsioni ed esitare a denunciare. Inoltre, il consenso diventa problematico quando c\'è la possibilità di pressione dovuta all\'autorità professionale.',
    feedback: {
      correct: 'Corretto! Il potere influisce significativamente sulle dinamiche di molestia e sulla possibilità di denuncia.',
      incorrect: 'Sbagliato. Le dinamiche di potere giocano un ruolo importante nelle molestie sessuali, influenzando la paura di ritorsioni e il consenso.'
    }
  },
  {
    id: 15,
    text: "Qual è il modo migliore per esprimere il tuo disagio quando qualcuno fa un commento sessuale che ti fa sentire a disagio?",
    options: [
      "Rispondere con un commento simile per mostrare che non ti dà fastidio",
      "Ignorarlo e sperare che non si ripeta",
      "Esprimere chiaramente che il commento era inappropriato e ti ha fatto sentire a disagio",
      "Parlarne solo con altri colleghi"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'easy',
    explanation: 'La comunicazione chiara e diretta è solitamente il modo migliore per affrontare comportamenti indesiderati. Affermando con calma ma fermezza che il commento era inappropriato e ti ha fatto sentire a disagio, stabilisci confini chiari e dai alla persona l\'opportunità di cambiare il suo comportamento.',
    feedback: {
      correct: 'Corretto! La comunicazione diretta e chiara dei tuoi confini è spesso il modo più efficace per affrontare comportamenti inappropriati.',
      incorrect: 'Sbagliato. Ignorare, rispondere o parlarne solo con terzi di solito non risolve il problema e può peggiorarlo.'
    }
  },
  {
    id: 16,
    text: "Come può la tecnologia contribuire alle molestie sessuali sul posto di lavoro?",
    options: [
      "Attraverso messaggi indesiderati, cyberstalking o condivisione di contenuti inappropriati",
      "Attraverso comunicazioni professionali formali",
      "Attraverso sistemi di segnalazione anonimi",
      "La tecnologia non può essere utilizzata per molestie sessuali"
    ],
    correctAnswer: 0,
    category: 'harassment',
    difficulty: 'hard',
    explanation: 'La tecnologia può facilitare le molestie sessuali attraverso messaggi indesiderati, cyberstalking, condivisione di contenuti inappropriati, o comunicazioni persistenti dopo un rifiuto. Le molestie digitali sono altrettanto dannose di quelle di persona.',
    feedback: {
      correct: 'Corretto! I canali digitali possono diventare strumenti di molestia sessuale e richiedono le stesse politiche di rispetto.',
      incorrect: 'Sbagliato. La tecnologia può essere utilizzata in modo improprio per varie forme di molestie sessuali, specialmente in ambienti di lavoro sempre più digitali.'
    }
  },
  {
    id: 17,
    text: "Cosa si intende per \"intervento del testimone\" nella prevenzione delle molestie sessuali?",
    options: [
      "Quando un testimone interviene in sicurezza per fermare o prevenire molestie sessuali",
      "Quando la direzione monitora tutti i dipendenti",
      "Quando un dipendente segnala molestie che ha subito personalmente",
      "Quando le risorse umane forniscono prove in tribunale"
    ],
    correctAnswer: 0,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'L\'intervento del testimone si verifica quando qualcuno che osserva un comportamento di molestia sessuale interviene per fermarlo, distrarre l\'autore, sostenere la vittima o segnalare l\'incidente. È una strategia importante per combattere le molestie sessuali sul posto di lavoro.',
    feedback: {
      correct: 'Corretto! L\'intervento dei testimoni è cruciale per fermare le molestie sessuali nel momento in cui accadono.',
      incorrect: 'Sbagliato. L\'intervento del testimone riguarda l\'azione immediata di chi assiste a un episodio di molestia sessuale.'
    }
  },
  {
    id: 18,
    text: "Quale delle seguenti NON è una strategia efficace per affrontare le molestie sessuali sul posto di lavoro?",
    options: [
      "Adottare un approccio \"aspetta e vedi\" prima di affrontare i problemi",
      "Formazione e sensibilizzazione regolari per tutti i dipendenti",
      "Procedure di segnalazione chiare e accessibili",
      "Risposta immediata e coerente a tutte le denunce"
    ],
    correctAnswer: 0,
    category: 'policy',
    difficulty: 'hard',
    explanation: 'Ritardare l\'azione nei confronti di potenziali incidenti di molestie sessuali permette al comportamento dannoso di continuare e intensificarsi. Dimostra anche alla vittima e agli altri che l\'organizzazione non prende sul serio le molestie sessuali.',
    feedback: {
      correct: 'Corretto! L\'approccio \"aspetta e vedi\" è inefficace e dannoso; le molestie sessuali richiedono un\'azione tempestiva.',
      incorrect: 'Sbagliato. Un\'azione tempestiva è fondamentale; l\'approccio \"aspetta e vedi\" permette alle molestie sessuali di continuare e peggiorare.'
    }
  },
  {
    id: 19,
    text: "Quale dei seguenti è un esempio di ambiente di lavoro sessualmente ostile?",
    options: [
      "Un ambiente dove sono presenti commenti e immagini esplicitamente sessuali",
      "Un supervisore che stabilisce scadenze chiare per i progetti",
      "Colleghi che forniscono feedback costruttivi sulle prestazioni lavorative",
      "Un team che organizza eventi sociali regolari"
    ],
    correctAnswer: 0,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Un ambiente di lavoro sessualmente ostile è caratterizzato da comportamenti pervasivi di natura sessuale che interferiscono con le capacità di un individuo di lavorare o che creano un ambiente intimidatorio o offensivo. Questo può includere immagini esplicite, commenti sessuali, allusioni, o altre forme di comportamento sessuale indesiderato.',
    feedback: {
      correct: 'Corretto! La presenza di commenti e immagini sessuali crea un ambiente ostile in cui le persone non possono lavorare efficacemente.',
      incorrect: 'Sbagliato. Un ambiente lavorativo sessualmente ostile è caratterizzato da comportamenti inappropriati di natura sessuale che creano un\'atmosfera intimidatoria o offensiva.'
    }
  },
  {
    id: 20,
    text: "Quale fattore è più determinante nella riduzione delle molestie sessuali sul posto di lavoro?",
    options: [
      "Una leadership forte che modella comportamenti rispettosi e mantiene standard chiari",
      "Separazione rigorosa tra dipendenti di generi diversi",
      "Evitare discussioni su argomenti sensibili sul posto di lavoro",
      "Concentrarsi solo sulla produttività e ignorare le dinamiche interpersonali"
    ],
    correctAnswer: 0,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Una leadership che modella comportamenti rispettosi, affronta prontamente gli incidenti e mantiene standard chiari crea una cultura in cui le molestie sessuali sono meno probabili. I leader stabiliscono il tono per tutta l\'organizzazione.',
    feedback: {
      correct: 'Corretto! I leader definiscono la cultura organizzativa attraverso i loro comportamenti e le loro risposte alle molestie sessuali.',
      incorrect: 'Sbagliato. Le strategie efficaci richiedono una leadership attiva, non la separazione o l\'evasione delle questioni.'
    }
  }
];

export const italianQuestions: QuestionSet = {
  language: "Italian",
  questions: questions,
  metadata: {
    totalQuestions: questions.length,
    categories: [...new Set(questions.map(q => q.category))],
    difficulties: questions.reduce((acc, q) => {
      if (q.difficulty) {
        acc[q.difficulty] = (acc[q.difficulty] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>)
  }
}; 