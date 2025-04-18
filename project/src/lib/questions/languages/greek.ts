import { QuestionSet } from '../index';
import type { Question } from '../../../types';

const questions: Question[] = [
  {
    id: 1,
    text: "Τι αποτελεί σεξουαλική παρενόχληση στο χώρο εργασίας;",
    options: [
      "Μόνο σωματική επαφή που είναι σεξουαλικής φύσης",
      "Μόνο λεκτικά σχόλια που είναι σεξουαλικής φύσης",
      "Οποιαδήποτε ανεπιθύμητη συμπεριφορά σεξουαλικής φύσης που δημιουργεί εχθρικό περιβάλλον",
      "Μόνο συμπεριφορά που σκόπιμα προορίζεται να είναι επιβλαβής"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'easy',
    explanation: 'Η σεξουαλική παρενόχληση περιλαμβάνει οποιαδήποτε ανεπιθύμητη συμπεριφορά σεξουαλικής φύσης που δημιουργεί εχθρικό ή προσβλητικό περιβάλλον εργασίας. Περιλαμβάνει σωματική, λεκτική και οπτική συμπεριφορά.',
    feedback: {
      correct: 'Σωστά! Η σεξουαλική παρενόχληση περιλαμβάνει ένα ευρύ φάσμα ανεπιθύμητων συμπεριφορών σεξουαλικής φύσης.',
      incorrect: 'Λάθος. Η σεξουαλική παρενόχληση είναι ευρύτερη και περιλαμβάνει οποιαδήποτε ανεπιθύμητη συμπεριφορά σεξουαλικής φύσης που δημιουργεί εχθρικό περιβάλλον.'
    }
  },
  {
    id: 2,
    text: "Τι είναι η παρενόχληση \"Quid Pro Quo\";",
    options: [
      "Όταν κάποιος κάνει απρεπή αστεία σεξουαλικής φύσης στο χώρο εργασίας",
      "Όταν κάποιος προσφέρει εργασιακά οφέλη με αντάλλαγμα σεξουαλικές χάρες",
      "Όταν κάποιος κάνει ακούσια σχόλια που προσβάλλουν άλλους",
      "Όταν κάποιος παρενοχλεί συναδέλφους σε ομαδικό περιβάλλον"
    ],
    correctAnswer: 1,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Η παρενόχληση "Quid Pro Quo" (κάτι αντί κάποιου) συμβαίνει όταν ένα άτομο με εξουσία προσφέρει ή υπονοεί ότι θα δώσει εργασιακά οφέλη με αντάλλαγμα σεξουαλικές χάρες, ή απειλεί με αρνητικές συνέπειες αν απορριφθούν τέτοιες προτάσεις.',
    feedback: {
      correct: 'Σωστά! Η παρενόχληση "Quid Pro Quo" περιλαμβάνει την ανταλλαγή εργασιακών ωφελειών για σεξουαλικές χάρες.',
      incorrect: 'Λάθος. Η παρενόχληση "Quid Pro Quo" αφορά συγκεκριμένα την προσφορά εργασιακών ωφελειών με αντάλλαγμα σεξουαλικές χάρες.'
    }
  },
  {
    id: 3,
    text: "Τι συνιστά εχθρικό εργασιακό περιβάλλον στο πλαίσιο της σεξουαλικής παρενόχλησης;",
    options: [
      "Μόνο όταν κάποιος αισθάνεται σωματικά απειλούμενος",
      "Όταν συνάδελφοι έχουν διαφωνίες για εργασιακά θέματα",
      "Όταν ανεπιθύμητη συμπεριφορά σεξουαλικής φύσης επηρεάζει την απόδοση ή δημιουργεί δυσάρεστο περιβάλλον",
      "Μόνο όταν υπάρχει άμεση απειλή απόλυσης"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Ένα εχθρικό εργασιακό περιβάλλον δημιουργείται όταν ανεπιθύμητη συμπεριφορά σεξουαλικής φύσης είναι αρκετά σοβαρή ή διάχυτη ώστε να επηρεάζει την εργασιακή απόδοση ενός ατόμου ή να δημιουργεί ένα εκφοβιστικό, εχθρικό ή προσβλητικό περιβάλλον εργασίας.',
    feedback: {
      correct: 'Σωστά! Ένα εχθρικό εργασιακό περιβάλλον δημιουργείται από επαναλαμβανόμενη ή σοβαρή ανεπιθύμητη συμπεριφορά σεξουαλικής φύσης.',
      incorrect: 'Λάθος. Ένα εχθρικό εργασιακό περιβάλλον αφορά τον τρόπο που η σεξουαλική συμπεριφορά επηρεάζει το γενικό περιβάλλον εργασίας, όχι μόνο άμεσες απειλές.'
    }
  },
  {
    id: 4,
    text: "Αν κάποιος προτίθεται να κάνει ένα σεξουαλικό σχόλιο ως αστείο, μπορεί ακόμα να θεωρηθεί παρενόχληση;",
    options: [
      "Όχι, εφόσον η πρόθεση ήταν μόνο να είναι αστείο",
      "Ναι, η πρόθεση δεν έχει σημασία αν το σχόλιο είναι ανεπιθύμητο και σεξουαλικής φύσης",
      "Μόνο αν το άτομο που κάνει το σχόλιο είναι προϊστάμενος",
      "Μόνο αν το αστείο επαναλαμβάνεται πολλές φορές"
    ],
    correctAnswer: 1,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Ακόμα και αν ένα σχόλιο σεξουαλικής φύσης προορίζεται ως αστείο, μπορεί να αποτελεί σεξουαλική παρενόχληση αν είναι ανεπιθύμητο και δημιουργεί εχθρικό περιβάλλον. Η αντίληψη του αποδέκτη και το αποτέλεσμα της συμπεριφοράς είναι πιο σημαντικά από την πρόθεση.',
    feedback: {
      correct: 'Σωστά! Η πρόθεση δεν εξαλείφει τη δυνατότητα σεξουαλικής παρενόχλησης. Το πώς το λαμβάνει ο αποδέκτης είναι πιο σημαντικό.',
      incorrect: 'Λάθος. Ακόμα και τα "αστεία" σεξουαλικής φύσης μπορούν να αποτελούν παρενόχληση αν είναι ανεπιθύμητα, ανεξάρτητα από την πρόθεση.'
    }
  },
  {
    id: 5,
    text: "Ποια είναι τα κατάλληλα σωματικά όρια στο χώρο εργασίας;",
    options: [
      "Μόνο χειραψίες είναι πάντα κατάλληλες",
      "Οποιαδήποτε επαφή είναι εντάξει αν φαίνεται φιλική",
      "Τα όρια ποικίλλουν ανάλογα με τις προσωπικές προτιμήσεις, αλλά η συναίνεση είναι πάντα απαραίτητη",
      "Η σωματική επαφή είναι πάντα ακατάλληλη σε επαγγελματικό περιβάλλον"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Τα σωματικά όρια στο χώρο εργασίας ποικίλλουν ανάλογα με το άτομο, την κουλτούρα και το πλαίσιο. Ο σεβασμός των προσωπικών ορίων και η λήψη συναίνεσης είναι πάντα απαραίτητα. Η επίγνωση ότι διαφορετικά άτομα έχουν διαφορετικά επίπεδα άνεσης με τη σωματική επαφή είναι σημαντική.',
    feedback: {
      correct: 'Σωστά! Τα κατάλληλα σωματικά όρια ποικίλλουν, αλλά ο σεβασμός και η συναίνεση είναι πάντα απαραίτητα.',
      incorrect: 'Λάθος. Τα άτομα έχουν διαφορετικά επίπεδα άνεσης με τη σωματική επαφή, και η συναίνεση είναι πάντα απαραίτητη.'
    }
  },
  {
    id: 6,
    text: "Πώς μπορεί να συμβεί η οπτική σεξουαλική παρενόχληση στο χώρο εργασίας;",
    options: [
      "Μόνο μέσω της εμφάνισης προσβλητικών εικόνων στο χώρο εργασίας",
      "Μόνο μέσω ακατάλληλων χειρονομιών",
      "Μέσω προσβλητικών εικόνων, χειρονομιών, ή απρεπούς βλέμματος",
      "Οπτική παρενόχληση δεν είναι μορφή σεξουαλικής παρενόχλησης"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Η οπτική σεξουαλική παρενόχληση μπορεί να περιλαμβάνει την προβολή ή κοινή χρήση σεξουαλικά υπαινικτικού υλικού, ακατάλληλες χειρονομίες σεξουαλικής φύσης, ή παρατεταμένο βλέμμα (κοίταγμα) που προκαλεί δυσφορία. Αυτές οι συμπεριφορές μπορούν να δημιουργήσουν εχθρικό εργασιακό περιβάλλον.',
    feedback: {
      correct: 'Σωστά! Η οπτική σεξουαλική παρενόχληση περιλαμβάνει πολλές διαφορετικές συμπεριφορές, όπως προσβλητικές εικόνες, χειρονομίες και ακατάλληλο κοίταγμα.',
      incorrect: 'Λάθος. Η οπτική σεξουαλική παρενόχληση περιλαμβάνει ένα εύρος συμπεριφορών πέρα από αυτό που επιλέξατε.'
    }
  },
  {
    id: 7,
    text: "Ποιος μπορεί να είναι θύμα σεξουαλικής παρενόχλησης;",
    options: [
      "Μόνο γυναίκες",
      "Μόνο υφιστάμενοι από τους προϊσταμένους τους",
      "Οποιοσδήποτε, ανεξάρτητα από φύλο, θέση ή άλλα χαρακτηριστικά",
      "Μόνο άτομα που είναι ευάλωτα ή έχουν χαμηλή αυτοπεποίθηση"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'easy',
    explanation: 'Η σεξουαλική παρενόχληση μπορεί να επηρεάσει οποιονδήποτε, ανεξάρτητα από το φύλο, την ηλικία, τη θέση εργασίας ή άλλα χαρακτηριστικά. Άνδρες, γυναίκες και άτομα κάθε φύλου μπορούν να είναι θύματα ή δράστες σεξουαλικής παρενόχλησης.',
    feedback: {
      correct: 'Σωστά! Η σεξουαλική παρενόχληση μπορεί να επηρεάσει οποιονδήποτε, ανεξάρτητα από το φύλο, τη θέση εργασίας ή άλλους παράγοντες.',
      incorrect: 'Λάθος. Η σεξουαλική παρενόχληση μπορεί να συμβεί σε οποιονδήποτε, όχι μόνο στις ομάδες που αναφέρατε.'
    }
  },
  {
    id: 8,
    text: "Τι πρέπει να κάνετε αν γίνετε μάρτυρας σεξουαλικής παρενόχλησης στο χώρο εργασίας;",
    options: [
      "Να το αγνοήσετε, δεν είναι δική σας δουλειά",
      "Να το συζητήσετε μόνο ανεπίσημα με άλλους συναδέλφους",
      "Να παρέμβετε άμεσα και να αναφέρετε το περιστατικό στους αρμόδιους",
      "Να περιμένετε να δείτε αν συμβαίνει ξανά πριν κάνετε οτιδήποτε"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'medium',
    explanation: 'Ως παρατηρητής σεξουαλικής παρενόχλησης, είναι σημαντικό να αναλάβετε δράση. Αυτό μπορεί να περιλαμβάνει την ασφαλή παρέμβαση όταν είναι δυνατό, την υποστήριξη του θύματος, και την αναφορά του περιστατικού στους αρμόδιους, όπως το τμήμα ανθρώπινου δυναμικού ή τους προϊσταμένους.',
    feedback: {
      correct: 'Σωστά! Οι παρατηρητές παίζουν σημαντικό ρόλο στην πρόληψη της σεξουαλικής παρενόχλησης με την παρέμβαση και την αναφορά.',
      incorrect: 'Λάθος. Η σιωπή ή η αδράνεια των παρατηρητών συχνά επιτρέπει στη σεξουαλική παρενόχληση να συνεχιστεί.'
    }
  },
  {
    id: 9,
    text: "Ποιες είναι οι πιθανές συνέπειες της σεξουαλικής παρενόχλησης στο χώρο εργασίας;",
    options: [
      "Μόνο νομικές συνέπειες για την εταιρεία",
      "Μόνο ψυχολογικές επιπτώσεις για το θύμα",
      "Νομικές, ψυχολογικές, οικονομικές και εργασιακές συνέπειες για όλους τους εμπλεκόμενους",
      "Συνήθως δεν υπάρχουν σημαντικές συνέπειες"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'hard',
    explanation: 'Η σεξουαλική παρενόχληση μπορεί να έχει εκτεταμένες συνέπειες: ψυχολογικές (άγχος, κατάθλιψη) για το θύμα, νομικές και οικονομικές για τους δράστες και τις εταιρείες, καθώς και επιπτώσεις στην εργασιακή κουλτούρα, την παραγωγικότητα και το ηθικό ολόκληρης της ομάδας.',
    feedback: {
      correct: 'Σωστά! Η σεξουαλική παρενόχληση έχει πολλαπλές και εκτεταμένες συνέπειες για όλους τους εμπλεκόμενους.',
      incorrect: 'Λάθος. Οι συνέπειες της σεξουαλικής παρενόχλησης είναι ευρείες και επηρεάζουν διάφορους τομείς και άτομα.'
    }
  },
  {
    id: 10,
    text: "Γιατί τα θύματα σεξουαλικής παρενόχλησης συχνά δεν αναφέρουν τα περιστατικά;",
    options: [
      "Επειδή συνήθως δεν είναι σοβαρά περιστατικά",
      "Λόγω φόβου αντιποίνων, ντροπής, ή έλλειψης εμπιστοσύνης στο σύστημα αναφοράς",
      "Επειδή προτιμούν να το χειριστούν μόνοι τους",
      "Επειδή δεν υπάρχουν διαθέσιμες διαδικασίες αναφοράς"
    ],
    correctAnswer: 1,
    category: 'harassment',
    difficulty: 'hard',
    explanation: 'Τα θύματα συχνά δεν αναφέρουν σεξουαλική παρενόχληση λόγω φόβου για αντίποινα (π.χ. απώλεια εργασίας), ντροπής ή αμηχανίας, μη αναγνώρισης της συμπεριφοράς ως παρενόχληση, έλλειψης εμπιστοσύνης στο σύστημα αναφοράς, ή φόβου ότι δε θα τους πιστέψουν.',
    feedback: {
      correct: 'Σωστά! Υπάρχουν πολλοί περίπλοκοι λόγοι για τους οποίους τα θύματα συχνά δεν αναφέρουν σεξουαλική παρενόχληση.',
      incorrect: 'Λάθος. Οι φόβοι για αντίποινα, η ντροπή και η έλλειψη εμπιστοσύνης είναι πραγματικά εμπόδια για την αναφορά.'
    }
  },
  {
    id: 11,
    text: "Τι πρέπει να κάνει ένας διευθυντής όταν λαμβάνει καταγγελία για σεξουαλική παρενόχληση;",
    options: [
      "Να διεξάγει τη δική του άτυπη έρευνα πριν λάβει μέτρα",
      "Να ζητήσει από τον καταγγέλλοντα να επιλύσει το ζήτημα απευθείας με τον φερόμενο δράστη",
      "Να ακούσει με προσοχή, να καταγράψει λεπτομέρειες και να ακολουθήσει τις επίσημες διαδικασίες της εταιρείας",
      "Να κάνει τη δική του κρίση για το αν η καταγγελία είναι έγκυρη"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'hard',
    explanation: 'Όταν λαμβάνουν μια καταγγελία, οι διευθυντές πρέπει να ανταποκριθούν άμεσα, να ακούσουν προσεκτικά, να καταγράψουν τις λεπτομέρειες και να ακολουθήσουν τις επίσημες διαδικασίες της εταιρείας. Πρέπει να λάβουν σοβαρά υπόψη κάθε καταγγελία και να την προωθήσουν στις κατάλληλες αρχές, όπως το HR.',
    feedback: {
      correct: 'Σωστά! Οι διευθυντές πρέπει να αντιμετωπίζουν επαγγελματικά τις καταγγελίες και να ακολουθούν τις επίσημες διαδικασίες.',
      incorrect: 'Λάθος. Οι διευθυντές δεν πρέπει να διεξάγουν τις δικές τους έρευνες ή να αξιολογούν την εγκυρότητα των καταγγελιών, αλλά να ακολουθούν τις καθιερωμένες διαδικασίες.'
    }
  },
  {
    id: 12,
    text: "Ποια από τις παρακάτω συμπεριφορές ΔΕΝ αποτελεί συνήθως σεξουαλική παρενόχληση;",
    options: [
      "Επαγγελματικά σχόλια για την εργασιακή απόδοση",
      "Επαναλαμβανόμενες προσκλήσεις για ραντεβού μετά από απορρίψεις",
      "Κοινή χρήση σεξουαλικών εικόνων στο χώρο εργασίας",
      "Αφή σε ευαίσθητες περιοχές του σώματος"
    ],
    correctAnswer: 0,
    category: 'harassment',
    difficulty: 'easy',
    explanation: 'Επαγγελματικά σχόλια για την εργασιακή απόδοση που δεν έχουν σεξουαλικό περιεχόμενο και επικεντρώνονται στην ποιότητα της εργασίας δεν αποτελούν σεξουαλική παρενόχληση. Όλες οι άλλες επιλογές περιγράφουν συμπεριφορές που συνήθως αποτελούν σεξουαλική παρενόχληση.',
    feedback: {
      correct: 'Σωστά! Επαγγελματικά σχόλια για την εργασιακή απόδοση που δεν έχουν σεξουαλικό υπαινιγμό είναι κατάλληλα στο χώρο εργασίας.',
      incorrect: 'Λάθος. Επαγγελματικά σχόλια για την εργασιακή απόδοση είναι συνήθως κατάλληλα, ενώ οι άλλες επιλογές περιγράφουν μορφές σεξουαλικής παρενόχλησης.'
    }
  },
  {
    id: 13,
    text: "Ποιες αποτελεσματικές στρατηγικές μπορούν να χρησιμοποιήσουν οι οργανισμοί για την πρόληψη της σεξουαλικής παρενόχλησης;",
    options: [
      "Ύπαρξη μόνο γραπτής πολιτικής χωρίς εκπαίδευση",
      "Ανάληψη δράσης μόνο μετά από επίσημες καταγγελίες",
      "Σαφείς πολιτικές, τακτική εκπαίδευση, προσβάσιμες διαδικασίες αναφοράς και άμεση αντιμετώπιση περιστατικών",
      "Διαχωρισμός των φύλων στο χώρο εργασίας"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'medium',
    explanation: 'Οι αποτελεσματικές στρατηγικές πρόληψης σεξουαλικής παρενόχλησης περιλαμβάνουν σαφείς πολιτικές μηδενικής ανοχής, τακτική εκπαίδευση των εργαζομένων, πολλαπλά και προσβάσιμα κανάλια αναφοράς, γρήγορη και δίκαιη έρευνα καταγγελιών, και καλλιέργεια μιας κουλτούρας σεβασμού.',
    feedback: {
      correct: 'Σωστά! Η αποτελεσματική πρόληψη απαιτεί μια ολοκληρωμένη προσέγγιση που συμπεριλαμβάνει πολιτικές, εκπαίδευση, αναφορά και δράση.',
      incorrect: 'Λάθος. Η αποτελεσματική πρόληψη απαιτεί πολλαπλές στρατηγικές, όχι μόνο μία προσέγγιση ή αντιδραστικά μέτρα.'
    }
  },
  {
    id: 14,
    text: "Πώς επηρεάζουν οι δυναμικές εξουσίας τη σεξουαλική παρενόχληση στο χώρο εργασίας;",
    options: [
      "Δεν σχετίζονται με τη σεξουαλική παρενόχληση",
      "Οι παρενοχλητές είναι πάντα σε θέσεις εξουσίας",
      "Η εξουσία μπορεί να δημιουργήσει φόβο αντιποίνων και να επηρεάσει τη συναίνεση",
      "Μόνο οι άνθρωποι σε χαμηλότερες θέσεις μπορούν να είναι θύματα"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Οι δυναμικές εξουσίας είναι σημαντικός παράγοντας στη σεξουαλική παρενόχληση. Όταν υπάρχει διαφορά εξουσίας, τα θύματα μπορεί να φοβούνται αντίποινα και να διστάζουν να αναφέρουν περιστατικά. Επιπλέον, η συναίνεση γίνεται προβληματική όταν υπάρχει πιθανότητα πίεσης λόγω της επαγγελματικής εξουσίας.',
    feedback: {
      correct: 'Σωστά! Η εξουσία επηρεάζει σημαντικά τη δυναμική της παρενόχλησης και τη δυνατότητα αναφοράς.',
      incorrect: 'Λάθος. Οι δυναμικές εξουσίας παίζουν σημαντικό ρόλο στη σεξουαλική παρενόχληση, επηρεάζοντας το φόβο αντιποίνων και τη συναίνεση.'
    }
  },
  {
    id: 15,
    text: "Ποιος είναι ο καλύτερος τρόπος για να εκφράσετε τη δυσφορία σας όταν κάποιος κάνει ένα σεξουαλικό σχόλιο που σας κάνει να νιώθετε άβολα;",
    options: [
      "Να ανταποδώσετε με παρόμοιο σχόλιο για να δείξετε ότι δεν σας πειράζει",
      "Να το αγνοήσετε και να ελπίζετε ότι δεν θα επαναληφθεί",
      "Να εκφράσετε με σαφήνεια ότι το σχόλιο ήταν ακατάλληλο και σας έκανε να νιώσετε άβολα",
      "Να μιλήσετε για αυτό μόνο με άλλους συναδέλφους"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'easy',
    explanation: 'Η σαφής, άμεση επικοινωνία είναι συνήθως ο καλύτερος τρόπος για να αντιμετωπίσετε ανεπιθύμητη συμπεριφορά. Δηλώνοντας με ηρεμία αλλά σταθερά ότι το σχόλιο ήταν ακατάλληλο και σας έκανε να νιώσετε άβολα, θέτετε σαφή όρια και δίνετε στο άτομο την ευκαιρία να αλλάξει τη συμπεριφορά του.',
    feedback: {
      correct: 'Σωστά! Η άμεση, ξεκάθαρη επικοινωνία των ορίων σας είναι συχνά ο πιο αποτελεσματικός τρόπος για να αντιμετωπίσετε ακατάλληλες συμπεριφορές.',
      incorrect: 'Λάθος. Η αγνόηση, η ανταπόδοση ή το να μιλάτε μόνο με τρίτους συνήθως δεν επιλύει το πρόβλημα και μπορεί να το επιδεινώσει.'
    }
  },
  {
    id: 16,
    text: "Ποια είναι η καλύτερη προσέγγιση για να ανταποκριθείτε σε μια άβολη κατάσταση στο χώρο εργασίας;",
    options: [
      "Να αποφύγετε το άτομο που προκαλεί τη δυσφορία",
      "Να ανταποδώσετε με παρόμοια συμπεριφορά",
      "Να αξιολογήσετε την κατάσταση και να επιλέξετε μια κατάλληλη απάντηση, από άμεση επικοινωνία έως επίσημη αναφορά",
      "Να μιλήσετε για το περιστατικό μόνο με συναδέλφους"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Η αποτελεσματική ανταπόκριση σε άβολες καταστάσεις απαιτεί αξιολόγηση της σοβαρότητας και του πλαισίου. Οι επιλογές περιλαμβάνουν άμεση επικοινωνία με το άτομο, αναζήτηση υποστήριξης από προϊσταμένους ή HR, ή επίσημη αναφορά για σοβαρά περιστατικά. Η επιλογή της κατάλληλης απάντησης εξαρτάται από την περίσταση.',
    feedback: {
      correct: 'Σωστά! Η αποτελεσματική ανταπόκριση απαιτεί αξιολόγηση της κατάστασης και επιλογή της καταλληλότερης προσέγγισης.',
      incorrect: 'Λάθος. Η απλή αποφυγή, η ανταπόδοση ή το κουτσομπολιό δεν επιλύουν αποτελεσματικά το πρόβλημα.'
    }
  },
  {
    id: 17,
    text: "Πώς μπορεί να συμβεί η ψηφιακή παρενόχληση στο χώρο εργασίας;",
    options: [
      "Μόνο μέσω επίσημων καναλιών επικοινωνίας της εταιρείας",
      "Μόνο κατά τη διάρκεια του ωραρίου εργασίας",
      "Μέσω email, μηνυμάτων, κοινωνικών δικτύων, ή οποιασδήποτε ψηφιακής πλατφόρμας, ακόμη και εκτός ωραρίου εργασίας",
      "Μόνο όταν ένας υπολογιστής της εταιρείας χρησιμοποιείται"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Η ψηφιακή παρενόχληση μπορεί να συμβεί μέσω οποιουδήποτε ψηφιακού μέσου, συμπεριλαμβανομένων email, μηνυμάτων κειμένου, εφαρμογών ανταλλαγής μηνυμάτων, κοινωνικών δικτύων και άλλων πλατφορμών. Μπορεί να συμβεί εντός ή εκτός του παραδοσιακού ωραρίου εργασίας και μπορεί να περιλαμβάνει συσκευές της εταιρείας ή προσωπικές συσκευές.',
    feedback: {
      correct: 'Σωστά! Η ψηφιακή παρενόχληση δεν περιορίζεται από ώρα, τοποθεσία ή πλατφόρμα.',
      incorrect: 'Λάθος. Η ψηφιακή παρενόχληση μπορεί να συμβεί σε οποιαδήποτε ψηφιακή πλατφόρμα, οποιαδήποτε στιγμή, χρησιμοποιώντας οποιαδήποτε συσκευή.'
    }
  },
  {
    id: 18,
    text: "Ποιες είναι οι ευθύνες ενός οργανισμού σχετικά με την παρενόχληση από τρίτα μέρη (όπως πελάτες ή προμηθευτές);",
    options: [
      "Δεν έχουν καμία ευθύνη, καθώς δεν μπορούν να ελέγξουν τη συμπεριφορά τρίτων",
      "Έχουν ευθύνη μόνο αν η παρενόχληση συμβαίνει στις εγκαταστάσεις της εταιρείας",
      "Έχουν ευθύνη να προστατεύουν τους εργαζομένους από παρενόχληση τρίτων και να αντιμετωπίζουν τέτοια περιστατικά",
      "Έχουν ευθύνη μόνο αν η παρενόχληση είναι επαναλαμβανόμενη"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'hard',
    explanation: 'Οι οργανισμοί έχουν ευθύνη να παρέχουν ένα ασφαλές εργασιακό περιβάλλον για όλους τους εργαζομένους, συμπεριλαμβανομένης της προστασίας από παρενόχληση τρίτων μερών όπως πελάτες, προμηθευτές ή επισκέπτες. Πρέπει να έχουν πολιτικές για την αντιμετώπιση τέτοιων περιστατικών, να εκπαιδεύουν τους εργαζομένους σχετικά με αυτές, και να λαμβάνουν κατάλληλα μέτρα όταν συμβαίνουν παρενοχλήσεις.',
    feedback: {
      correct: 'Σωστά! Οι οργανισμοί έχουν την ευθύνη να προστατεύουν τους εργαζομένους από παρενόχληση, ανεξάρτητα από την πηγή της.',
      incorrect: 'Λάθος. Οι οργανισμοί έχουν την ευθύνη να διατηρούν ένα εργασιακό περιβάλλον χωρίς παρενοχλήσεις, ακόμη και όταν προέρχονται από τρίτα μέρη.'
    }
  },
  {
    id: 19,
    text: "Πώς διαφέρει η επαγγελματική ανατροφοδότηση (feedback) από την παρενόχληση;",
    options: [
      "Η επαγγελματική ανατροφοδότηση είναι πάντα γραπτή, ενώ η παρενόχληση είναι συνήθως προφορική",
      "Η επαγγελματική ανατροφοδότηση επικεντρώνεται στην εργασιακή απόδοση και είναι εποικοδομητική, ενώ η παρενόχληση είναι προσωπική και συχνά ταπεινωτική",
      "Η επαγγελματική ανατροφοδότηση δίνεται μόνο από διευθυντές, ενώ η παρενόχληση μπορεί να προέρχεται από οποιονδήποτε",
      "Η επαγγελματική ανατροφοδότηση είναι πάντα θετική, ενώ η παρενόχληση είναι πάντα αρνητική"
    ],
    correctAnswer: 1,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Η επαγγελματική ανατροφοδότηση επικεντρώνεται στην εργασιακή απόδοση, είναι συγκεκριμένη, εποικοδομητική και στοχεύει στη βελτίωση, ακόμη και όταν είναι διορθωτική. Η παρενόχληση, αντίθετα, είναι συχνά προσωπική, ταπεινωτική, δεν έχει εποικοδομητικό σκοπό και μπορεί να στοχεύει στα προσωπικά χαρακτηριστικά ή την ταυτότητα ενός ατόμου αντί για την εργασιακή του απόδοση.',
    feedback: {
      correct: 'Σωστά! Η επαγγελματική ανατροφοδότηση επικεντρώνεται στην εργασιακή απόδοση και βελτίωση, ενώ η παρενόχληση είναι προσωπική και ακατάλληλη.',
      incorrect: 'Λάθος. Η διαφορά μεταξύ επαγγελματικής ανατροφοδότησης και παρενόχλησης δεν είναι θέμα του ποιος την παρέχει ή αν είναι γραπτή, αλλά το περιεχόμενο και ο σκοπός της.'
    }
  },
  {
    id: 20,
    text: "Τι αποτελεί αντίποινα στο πλαίσιο αναφοράς σεξουαλικής παρενόχλησης;",
    options: [
      "Μόνο άμεση απόλυση μετά από αναφορά",
      "Οποιαδήποτε αρνητική ενέργεια κατά ενός ατόμου επειδή ανέφερε παρενόχληση ή συμμετείχε σε έρευνα σχετικά με παρενόχληση",
      "Μόνο επίσημες πειθαρχικές ενέργειες",
      "Αντίποινα συμβαίνουν μόνο όταν η αρχική καταγγελία είναι έγκυρη"
    ],
    correctAnswer: 1,
    category: 'policy',
    difficulty: 'hard',
    explanation: 'Τα αντίποινα περιλαμβάνουν οποιαδήποτε αρνητική ενέργεια κατά ενός ατόμου επειδή ανέφερε σεξουαλική παρενόχληση, υπέβαλε καταγγελία, ή συμμετείχε σε έρευνα ή δικαστική διαδικασία. Αυτό μπορεί να περιλαμβάνει απόλυση, υποβιβασμό, ανάθεση λιγότερο επιθυμητών εργασιών, αρνητικές αξιολογήσεις, εχθρική συμπεριφορά, ή οποιαδήποτε άλλη δυσμενή αλλαγή στις συνθήκες εργασίας.',
    feedback: {
      correct: 'Σωστά! Τα αντίποινα μπορούν να πάρουν πολλές μορφές και είναι παράνομα ανεξάρτητα από το αν η αρχική καταγγελία αποδειχθεί βάσιμη.',
      incorrect: 'Λάθος. Τα αντίποινα έχουν ευρύτερο ορισμό και περιλαμβάνουν πολλές μορφές δυσμενών ενεργειών.'
    }
  }
];

export const greekQuestions: QuestionSet = {
  language: "Greek",
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