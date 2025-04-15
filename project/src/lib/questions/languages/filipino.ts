import { QuestionSet } from '../index';
import type { Question } from '../../../types';

const questions: Question[] = [
  {
    id: 1,
    text: "Ano ang bumubuo ng sekswal na panliligalig sa lugar ng trabaho?",
    options: [
      "Pisikal na pakikipag-ugnayan lamang ng sekswal na katangian",
      "Berbal na komento lamang ng sekswal na katangian",
      "Anumang hindi kanais-nais na pag-uugali ng sekswal na katangian na lumilikha ng mapang-apin na kapaligiran",
      "Mga pag-uugali na sadyang nakakasakit lamang"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'easy',
    explanation: 'Ang sekswal na panliligalig ay kinabibilangan ng anumang hindi kanais-nais na pag-uugali ng sekswal na katangian na lumilikha ng mapang-apin o nakakasakit na kapaligiran sa trabaho. Kasama dito ang pisikal, berbal, at biswal na pag-uugali.',
    feedback: {
      correct: 'Tama! Ang sekswal na panliligalig ay sumasaklaw sa malawak na hanay ng hindi kanais-nais na pag-uugali ng sekswal na katangian.',
      incorrect: 'Mali. Ang sekswal na panliligalig ay mas malawak at kinabibilangan ng anumang hindi kanais-nais na pag-uugali ng sekswal na katangian na lumilikha ng mapang-apin na kapaligiran.'
    }
  },
  {
    id: 2,
    text: "Ano ang ibig sabihin ng sekswal na panliligalig na \"Quid Pro Quo\"?",
    options: [
      "Kapag may gumagawa ng hindi naaangkop na biro ng sekswal na katangian sa lugar ng trabaho",
      "Kapag may nag-aalok ng mga benepisyo sa trabaho kapalit ng mga sekswal na pabor",
      "Kapag may gumagawa ng hindi sinasadyang nakakasakit na komento",
      "Kapag may nanliligalig sa mga kasamahan sa isang pangkat na kapaligiran"
    ],
    correctAnswer: 1,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Ang panliligalig na "Quid Pro Quo" (isang bagay kapalit ng isa pang bagay) ay nangyayari kapag ang isang tao sa posisyon ng kapangyarihan ay nag-aalok o nagmumungkahi na magbigay ng mga benepisyo sa trabaho kapalit ng mga sekswal na pabor, o nagbabanta ng negatibong kahihinatnan kung ang mga mungkahing ito ay tinanggihan.',
    feedback: {
      correct: 'Tama! Ang panliligalig na "Quid Pro Quo" ay nagsasangkot ng pagpapalitan ng mga benepisyo sa trabaho para sa mga sekswal na pabor.',
      incorrect: 'Mali. Ang panliligalig na "Quid Pro Quo" ay partikular na tumutukoy sa pag-aalok ng mga benepisyo sa trabaho kapalit ng mga sekswal na pabor.'
    }
  },
  {
    id: 3,
    text: "Ano ang bumubuo ng mapang-apin na kapaligiran sa trabaho sa konteksto ng sekswal na panliligalig?",
    options: [
      "Kapag lamang na may isang tao na nakakaramdam ng pisikal na banta",
      "Kapag ang mga kasamahan ay may hindi pagkakaunawaan sa mga isyu sa trabaho",
      "Kapag ang hindi kanais-nais na pag-uugali ng sekswal na katangian ay nakakaapekto sa pagganap o lumilikha ng hindi komportableng kapaligiran",
      "Kapag lamang na may direktang banta ng pagtatanggal sa trabaho"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Ang mapang-apin na kapaligiran sa trabaho ay nililikha kapag ang hindi kanais-nais na pag-uugali ng sekswal na katangian ay sapat na malubha o napakalawak upang makaapekto sa pagganap sa trabaho ng isang tao o upang lumikha ng isang kapaligiran sa trabaho na nakakatakot, mapang-apin, o nakakasakit.',
    feedback: {
      correct: 'Tama! Ang mapang-apin na kapaligiran sa trabaho ay nililikha ng paulit-ulit o malubhang hindi kanais-nais na pag-uugali ng sekswal na katangian.',
      incorrect: 'Mali. Ang mapang-apin na kapaligiran sa trabaho ay tungkol sa kung paano naaapektuhan ng sekswal na pag-uugali ang pangkalahatang kapaligiran sa trabaho, hindi lamang ang mga direktang banta.'
    }
  },
  {
    id: 4,
    text: "Kung ang isang tao ay may intensyon na gumawa ng sekswal na komento bilang biro, maaari pa rin ba itong ituring na panliligalig?",
    options: [
      "Hindi, kung ang intensyon ay para lamang magpatawa",
      "Oo, ang intensyon ay hindi mahalaga kung ang komento ay hindi kanais-nais at may sekswal na katangian",
      "Kapag lamang ang taong gumagawa ng komento ay isang superyor",
      "Kapag lamang ang biro ay inuulit ng maraming beses"
    ],
    correctAnswer: 1,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Kahit na ang isang komento ng sekswal na katangian ay nilalayong maging biro, maaari itong bumuo ng sekswal na panliligalig kung ito ay hindi kanais-nais at lumilikha ng mapang-apin na kapaligiran. Ang persepsyon ng tumatanggap at ang epekto ng pag-uugali ay mas mahalaga kaysa sa intensyon.',
    feedback: {
      correct: 'Tama! Ang intensyon ay hindi nag-aalis ng posibilidad ng sekswal na panliligalig. Kung paano ito nararamdaman ng tumatanggap ay mas mahalaga.',
      incorrect: 'Mali. Kahit ang mga "biro" ng sekswal na katangian ay maaaring bumuo ng panliligalig kung ang mga ito ay hindi kanais-nais, anuman ang intensyon.'
    }
  },
  {
    id: 5,
    text: "Ano ang naaangkop na pisikal na limitasyon sa lugar ng trabaho?",
    options: [
      "Ang pagkamay lamang ay palaging naaangkop",
      "Anumang pisikal na pakikipag-ugnayan ay maayos kung mukhang palakaibigan",
      "Ang mga limitasyon ay nag-iiba batay sa personal na kagustuhan, ngunit ang pahintulot ay palaging kinakailangan",
      "Ang pisikal na pakikipag-ugnayan ay palaging hindi naaangkop sa isang propesyonal na kapaligiran"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Ang mga pisikal na limitasyon sa lugar ng trabaho ay nag-iiba batay sa tao, kultura, at konteksto. Ang paggalang sa personal na limitasyon at pagkuha ng pahintulot ay palaging kinakailangan. Ang kamalayan na ang iba\'t ibang tao ay may iba\'t ibang antas ng kaginhawaan sa pisikal na pakikipag-ugnayan ay mahalaga.',
    feedback: {
      correct: 'Tama! Ang naaangkop na pisikal na limitasyon ay nag-iiba, ngunit ang paggalang at pahintulot ay palaging kinakailangan.',
      incorrect: 'Mali. Ang mga tao ay may iba\'t ibang antas ng kaginhawaan sa pisikal na pakikipag-ugnayan, at ang pahintulot ay palaging kinakailangan.'
    }
  },
  {
    id: 6,
    text: "Paano maaaring mangyari ang biswal na sekswal na panliligalig sa lugar ng trabaho?",
    options: [
      "Sa pamamagitan lamang ng pagpapakita ng nakakasalang mga larawan sa lugar ng trabaho",
      "Sa pamamagitan lamang ng hindi naaangkop na galaw",
      "Sa pamamagitan ng nakakasalang mga larawan, galaw, o hindi naaangkop na pagtingin",
      "Ang biswal na panliligalig ay hindi isang uri ng sekswal na panliligalig"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Ang biswal na sekswal na panliligalig ay maaaring kabilangan ang pagpapakita o pagbabahagi ng materyal na may sekswal na pahiwatig, hindi naaangkop na galaw ng sekswal na katangian, o matagal na pagtingin (pagtitig) na nagdudulot ng kawalang-ginhawa. Ang mga pag-uugaling ito ay maaaring lumikha ng mapang-apin na kapaligiran sa trabaho.',
    feedback: {
      correct: 'Tama! Ang biswal na sekswal na panliligalig ay kinabibilangan ng iba\'t ibang pag-uugali, tulad ng nakakasalang mga larawan, galaw, at hindi naaangkop na pagtingin.',
      incorrect: 'Mali. Ang biswal na sekswal na panliligalig ay sumasaklaw sa maraming pag-uugali maliban sa pinili mo.'
    }
  },
  {
    id: 7,
    text: "Sino ang maaaring maging biktima ng sekswal na panliligalig?",
    options: [
      "Mga babae lamang",
      "Mga subordinado lamang mula sa kanilang mga superyor",
      "Sinuman, anuman ang kasarian, posisyon, o iba pang katangian",
      "Mga mahihinang tao lamang o may mababang pagpapahalaga sa sarili"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'easy',
    explanation: 'Ang sekswal na panliligalig ay maaaring makaapekto sa sinuman, anuman ang kasarian, edad, posisyon sa trabaho, o iba pang katangian. Ang mga lalaki, babae, at mga tao ng anumang kasarian ay maaaring maging biktima o may-sala ng sekswal na panliligalig.',
    feedback: {
      correct: 'Tama! Ang sekswal na panliligalig ay maaaring makaapekto sa sinuman, anuman ang kasarian, posisyon sa trabaho, o iba pang salik.',
      incorrect: 'Mali. Ang sekswal na panliligalig ay maaaring mangyari sa sinuman, hindi lamang sa mga pangkat na nabanggit mo.'
    }
  },
  {
    id: 8,
    text: "Ano ang dapat mong gawin kung ikaw ay nakasaksi ng sekswal na panliligalig sa lugar ng trabaho?",
    options: [
      "Huwag pansinin ito, hindi mo ito problema",
      "Talakayin ito nang hindi pormal sa ibang mga kasamahan lamang",
      "Makialam nang direkta at iulat ang insidente sa mga naaangkop na awtoridad",
      "Maghintay upang makita kung mangyayari ito ulit bago gumawa ng anumang aksyon"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'medium',
    explanation: 'Bilang saksi sa sekswal na panliligalig, mahalaga na kumilos. Maaaring kabilang dito ang pakikialam nang ligtas kung maaari, pagsuporta sa biktima, at pag-uulat ng insidente sa mga naaangkop na awtoridad, tulad ng departamento ng human resources o mga superyor.',
    feedback: {
      correct: 'Tama! Ang mga saksi ay may mahalagang papel sa pag-iwas sa sekswal na panliligalig sa pamamagitan ng pakikialam at pag-uulat.',
      incorrect: 'Mali. Ang katahimikan o kawalan ng aksyon ng mga saksi ay kadalasang nagpapahintulot sa sekswal na panliligalig na magpatuloy.'
    }
  },
  {
    id: 9,
    text: "Ano ang posibleng mga kahihinatnan ng sekswal na panliligalig sa lugar ng trabaho?",
    options: [
      "Mga legal na kahihinatnan lamang para sa kumpanya",
      "Mga psychological na epekto lamang para sa biktima",
      "Mga legal, psychological, pang-ekonomiya, at pang-trabahong kahihinatnan para sa lahat ng kasangkot",
      "Kadalasan ay walang mahahalagang kahihinatnan"
    ],
    correctAnswer: 2,
    category: 'harassment',
    difficulty: 'hard',
    explanation: 'Ang sekswal na panliligalig ay maaaring magkaroon ng malawak na kahihinatnan: psychological (pagkabalisa, depresyon) para sa biktima, legal at pang-ekonomiya para sa mga may-sala at mga kumpanya, pati na rin ang mga epekto sa kultura ng trabaho, produktibidad, at morale ng buong team.',
    feedback: {
      correct: 'Tama! Ang sekswal na panliligalig ay may maraming at malawak na kahihinatnan para sa lahat ng kasangkot.',
      incorrect: 'Mali. Ang mga kahihinatnan ng sekswal na panliligalig ay malawak at nakaaapekto sa iba\'t ibang larangan at mga tao.'
    }
  },
  {
    id: 10,
    text: "Bakit ang mga biktima ng sekswal na panliligalig ay kadalasang hindi nag-uulat ng mga insidente?",
    options: [
      "Dahil kadalasan ay hindi malubhang insidente ang mga ito",
      "Dahil sa takot sa paghihiganti, kahihiyan, o kakulangan ng tiwala sa sistema ng pag-uulat",
      "Dahil mas gusto nilang harapin ito nang mag-isa",
      "Dahil walang available na pamamaraan ng pag-uulat"
    ],
    correctAnswer: 1,
    category: 'harassment',
    difficulty: 'hard',
    explanation: 'Ang mga biktima ay kadalasang hindi nag-uulat ng sekswal na panliligalig dahil sa takot sa paghihiganti (hal. pagkawala ng trabaho), kahihiyan o kahihiyan, hindi pagkilala sa pag-uugali bilang panliligalig, kakulangan ng tiwala sa sistema ng pag-uulat, o takot na hindi sila paniniwalaan.',
    feedback: {
      correct: 'Tama! Maraming komplikadong mga dahilan kung bakit ang mga biktima ay kadalasang hindi nag-uulat ng sekswal na panliligalig.',
      incorrect: 'Mali. Ang takot sa paghihiganti, kahihiyan, at kakulangan ng tiwala ay tunay na hadlang sa pag-uulat.'
    }
  },
  {
    id: 11,
    text: "Ano ang dapat gawin ng isang manager kapag nakatanggap ng reklamo ng sekswal na panliligalig?",
    options: [
      "Magsagawa ng sarili nilang hindi pormal na imbestigasyon bago gumawa ng aksyon",
      "Hilingin sa nagreklamo na lutasin ang problema nang direkta sa sinasabing nanliligalig",
      "Makinig nang mabuti, itala ang mga detalye, at sundin ang opisyal na pamamaraan ng kumpanya",
      "Gumawa ng sarili nilang pagtatasa sa bisa ng reklamo"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'hard',
    explanation: 'Kapag nakatanggap ng reklamo, ang mga manager ay dapat tumugon kaagad, makinig nang mabuti, itala ang mga detalye, at sundin ang opisyal na pamamaraan ng kumpanya. Dapat nilang seryosohin ang bawat reklamo at ipasa sa mga naaangkop na awtoridad, tulad ng Human Resources.',
    feedback: {
      correct: 'Tama! Ang mga manager ay dapat mangasiwa ng mga reklamo nang propesyonal at sundin ang opisyal na pamamaraan.',
      incorrect: 'Mali. Ang mga manager ay hindi dapat magsagawa ng sarili nilang imbestigasyon o tasahin ang bisa ng mga reklamo, kundi sundin ang mga nakalatag na pamamaraan.'
    }
  },
  {
    id: 12,
    text: "Alin sa mga sumusunod na pag-uugali ang HINDI karaniwang bumubuo ng sekswal na panliligalig?",
    options: [
      "Mga propesyonal na komento sa pagganap sa trabaho",
      "Paulit-ulit na paanyaya para sa pakikipag-date pagkatapos ng pagtanggi",
      "Pagbabahagi ng mga sekswal na larawan sa lugar ng trabaho",
      "Paghipo sa maseselang bahagi ng katawan"
    ],
    correctAnswer: 0,
    category: 'harassment',
    difficulty: 'easy',
    explanation: 'Ang mga propesyonal na komento sa pagganap sa trabaho na walang sekswal na nilalaman at nakatuon sa kalidad ng trabaho ay hindi bumubuo ng sekswal na panliligalig. Ang lahat ng iba pang mga opsyon ay naglalarawan ng mga pag-uugali na karaniwang bumubuo ng sekswal na panliligalig.',
    feedback: {
      correct: 'Tama! Ang mga propesyonal na komento sa pagganap sa trabaho na walang sekswal na kahulugan ay naaangkop sa lugar ng trabaho.',
      incorrect: 'Mali. Ang mga propesyonal na komento sa pagganap sa trabaho ay karaniwang naaangkop, samantalang ang iba pang mga opsyon ay naglalarawan ng mga uri ng sekswal na panliligalig.'
    }
  },
  {
    id: 13,
    text: "Anong mga epektibong estratehiya ang maaaring gamitin ng mga organisasyon upang maiwasan ang sekswal na panliligalig?",
    options: [
      "Magkaroon lamang ng nakasulat na patakaran nang walang pagsasanay",
      "Kumilos lamang pagkatapos ng mga pormal na reklamo",
      "Malinaw na patakaran, regular na pagsasanay, accessible na pamamaraan ng pag-uulat, at agarang tugon sa mga insidente",
      "Paghihiwalay ng mga kasarian sa lugar ng trabaho"
    ],
    correctAnswer: 2,
    category: 'policy',
    difficulty: 'medium',
    explanation: 'Ang mga epektibong estratehiya sa pag-iwas sa sekswal na panliligalig ay kinabibilangan ng malinaw na zero-tolerance na patakaran, regular na pagsasanay ng mga empleyado, maramihan at accessible na channel ng pag-uulat, mabilis at patas na imbestigasyon ng mga reklamo, at pagtataguyod ng kultura ng respeto.',
    feedback: {
      correct: 'Tama! Ang epektibong pag-iwas ay nangangailangan ng komprehensibong approach na kinabibilangan ng patakaran, pagsasanay, pag-uulat, at aksyon.',
      incorrect: 'Mali. Ang epektibong pag-iwas ay nangangailangan ng maraming estratehiya, hindi lamang isang approach o reaktibong hakbang.'
    }
  },
  {
    id: 14,
    text: "Paano nakaaapekto ang mga dynamic ng kapangyarihan sa sekswal na panliligalig sa lugar ng trabaho?",
    options: [
      "Ang mga ito ay hindi nauugnay sa sekswal na panliligalig",
      "Ang mga nanliligalig ay palaging nasa posisyon ng kapangyarihan",
      "Ang kapangyarihan ay maaaring lumikha ng takot sa paghihiganti at makaapekto sa pahintulot",
      "Ang mga tao sa mas mababang posisyon lamang ang maaaring maging biktima"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Ang mga dynamic ng kapangyarihan ay isang mahalagang salik sa sekswal na panliligalig. Kapag mayroong pagkakaiba sa kapangyarihan, ang mga biktima ay maaaring matakot sa paghihiganti at mag-atubiling mag-ulat. Bukod dito, ang pahintulot ay nagiging problematiko kapag may posibilidad ng pressure dahil sa propesyonal na awtoridad.',
    feedback: {
      correct: 'Tama! Ang kapangyarihan ay nakaaapekto nang malaki sa mga dynamics ng panliligalig at sa posibilidad ng pag-uulat.',
      incorrect: 'Mali. Ang mga dynamic ng kapangyarihan ay may mahalagang papel sa sekswal na panliligalig, na nakaaapekto sa takot sa paghihiganti at pahintulot.'
    }
  },
  {
    id: 15,
    text: "Ano ang pinakamahusay na paraan upang ipahayag ang iyong kawalang-ginhawa kapag may gumagawa ng sekswal na komento na nagpaparamdam sa iyo ng hindi komportable?",
    options: [
      "Tumugon ng katulad na komento upang ipakita na hindi ka naaapektuhan",
      "Huwag pansinin ito at umasang hindi ito mauulit",
      "Ipahayag nang malinaw na ang komento ay hindi naaangkop at nagparamdam sa iyo ng hindi komportable",
      "Pag-usapan ito sa ibang mga kasamahan lamang"
    ],
    correctAnswer: 2,
    category: 'respect',
    difficulty: 'easy',
    explanation: 'Ang malinaw at direktang komunikasyon ay kadalasang ang pinakamahusay na paraan upang harapin ang hindi kanais-nais na pag-uugali. Sa pamamagitan ng pagsasabi nang mahinahon ngunit matibay na ang komento ay hindi naaangkop at nagparamdam sa iyo ng hindi komportable, nagtatakda ka ng malinaw na limitasyon at binibigyan ang tao ng pagkakataon na baguhin ang kanilang pag-uugali.',
    feedback: {
      correct: 'Tama! Ang direkta at malinaw na komunikasyon ng iyong mga limitasyon ay kadalasang ang pinakamabisang paraan upang harapin ang hindi naaangkop na pag-uugali.',
      incorrect: 'Mali. Ang pag-iwas, pagtugon, o pakikipag-usap lamang sa mga third party ay kadalasang hindi nalulutas ang problema at maaaring magpalala nito.'
    }
  },
  {
    id: 16,
    text: "Paano maaaring mag-ambag ang teknolohiya sa sekswal na panliligalig sa lugar ng trabaho?",
    options: [
      "Sa pamamagitan ng hindi kanais-nais na mensahe, cyberstalking, o pagbabahagi ng hindi naaangkop na nilalaman",
      "Sa pamamagitan ng pormal na propesyonal na komunikasyon",
      "Sa pamamagitan ng anonymous na sistema ng pag-uulat",
      "Ang teknolohiya ay hindi maaaring gamitin para sa sekswal na panliligalig"
    ],
    correctAnswer: 0,
    category: 'harassment',
    difficulty: 'hard',
    explanation: 'Ang teknolohiya ay maaaring mapadalas ang sekswal na panliligalig sa pamamagitan ng hindi kanais-nais na mensahe, cyberstalking, pagbabahagi ng hindi naaangkop na nilalaman, o patuloy na komunikasyon pagkatapos ng pagtanggi. Ang digital na panliligalig ay kasingdami ng personal na panliligalig.',
    feedback: {
      correct: 'Tama! Ang mga digital na channel ay maaaring maging kasangkapan para sa sekswal na panliligalig at nangangailangan ng parehong patakaran ng respeto.',
      incorrect: 'Mali. Ang teknolohiya ay maaaring magamit nang hindi wasto para sa iba\'t ibang anyo ng sekswal na panliligalig, lalo na sa mas digital na kapaligiran ng trabaho ngayon.'
    }
  },
  {
    id: 17,
    text: "Ano ang ibig sabihin ng \"pag-interbensyon ng saksi\" sa pag-iwas sa sekswal na panliligalig?",
    options: [
      "Kapag ang isang saksi ay nakikialam nang ligtas upang ihinto o maiwasan ang sekswal na panliligalig",
      "Kapag ang management ay nagbabantay sa lahat ng mga empleyado",
      "Kapag ang isang empleyado ay nag-uulat ng panliligalig na personal niyang naranasan",
      "Kapag ang human resources ay nagbibigay ng patunay sa korte"
    ],
    correctAnswer: 0,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Ang pag-interbensyon ng saksi ay nangyayari kapag ang isang taong nakasaksi ng pag-uugali ng sekswal na panliligalig ay nakikialam upang ihinto ito, ilihis ang atensyon ng may-sala, suportahan ang biktima, o iulat ang insidente. Ito ay isang mahalagang estratehiya para sa paglaban sa sekswal na panliligalig sa lugar ng trabaho.',
    feedback: {
      correct: 'Tama! Ang pag-interbensyon ng mga saksi ay napakahalaga upang ihinto ang sekswal na panliligalig sa sandaling nangyayari ito.',
      incorrect: 'Mali. Ang pag-interbensyon ng saksi ay tungkol sa agarang aksyon ng sinumang nakakakita ng isang episode ng sekswal na panliligalig.'
    }
  },
  {
    id: 18,
    text: "Alin sa mga sumusunod ang HINDI isang epektibong estratehiya para sa pagtugon sa sekswal na panliligalig sa lugar ng trabaho?",
    options: [
      "Paggamit ng \"tingnan at maghintay\" na approach bago harapin ang mga problema",
      "Regular na pagsasanay at pagpapataas ng kamalayan para sa lahat ng empleyado",
      "Malinaw at accessible na pamamaraan ng pag-uulat",
      "Agarang at pare-parehong tugon sa lahat ng reklamo"
    ],
    correctAnswer: 0,
    category: 'policy',
    difficulty: 'hard',
    explanation: 'Ang pagpapaliban ng aksyon sa potensyal na mga insidente ng sekswal na panliligalig ay nagpapahintulot sa nakakasalang pag-uugali na magpatuloy at lumala. Ipinakikita rin nito sa biktima at sa iba na hindi sineseryoso ng organisasyon ang sekswal na panliligalig.',
    feedback: {
      correct: 'Tama! Ang \"tingnan at maghintay\" na approach ay hindi epektibo at nakakasama; ang sekswal na panliligalig ay nangangailangan ng agarang aksyon.',
      incorrect: 'Mali. Ang agarang aksyon ay mahalaga; ang \"tingnan at maghintay\" na approach ay nagpapahintulot sa sekswal na panliligalig na magpatuloy at lumala.'
    }
  },
  {
    id: 19,
    text: "Alin sa mga sumusunod ang isang halimbawa ng sekswalmente mapang-apin na kapaligiran sa trabaho?",
    options: [
      "Isang kapaligiran kung saan may mga hayagang sekswal na komento at larawan",
      "Isang superbisor na nagtatakda ng malinaw na deadline para sa mga proyekto",
      "Mga kasamahan na nagbibigay ng konstruktibong feedback sa pagganap sa trabaho",
      "Isang team na nag-oorganisa ng regular na social event"
    ],
    correctAnswer: 0,
    category: 'harassment',
    difficulty: 'medium',
    explanation: 'Ang sekswalmente mapang-apin na kapaligiran sa trabaho ay nailalarawan ng laganap na pag-uugali ng sekswal na katangian na nakakasagabal sa kakayahan ng isang indibidwal na magtrabaho o lumilikha ng nakakatakot o nakakasakit na kapaligiran. Maaaring kabilang dito ang hayagang larawan, sekswal na komento, pagpapahiwatig, o iba pang anyo ng hindi kanais-nais na sekswal na pag-uugali.',
    feedback: {
      correct: 'Tama! Ang presensya ng sekswal na komento at larawan ay lumilikha ng mapang-apin na kapaligiran kung saan ang mga tao ay hindi maaaring magtrabaho nang epektibo.',
      incorrect: 'Mali. Ang sekswalmente mapang-apin na kapaligiran sa trabaho ay nailalarawan ng hindi naaangkop na pag-uugali ng sekswal na katangian na lumilikha ng nakakatakot o nakakasakit na kapaligiran.'
    }
  },
  {
    id: 20,
    text: "Anong salik ang pinakamahalaga sa pagbabawas ng sekswal na panliligalig sa lugar ng trabaho?",
    options: [
      "Isang malakas na pamumuno na nagmomodelo ng magalang na pag-uugali at nagpapanatili ng malinaw na pamantayan",
      "Mahigpit na paghihiwalay sa pagitan ng mga empleyado ng iba't ibang kasarian",
      "Pag-iwas sa mga talakayan tungkol sa sensitibong paksa sa lugar ng trabaho",
      "Pagtuon lamang sa produktibidad at pag-iwas sa interpersonal na dynamics"
    ],
    correctAnswer: 0,
    category: 'respect',
    difficulty: 'medium',
    explanation: 'Ang pamumuno na nagmomodelo ng magalang na pag-uugali, agad na tumutugon sa mga insidente, at nagpapanatili ng malinaw na pamantayan ay lumilikha ng isang kultura kung saan ang sekswal na panliligalig ay mas hindi malamang na mangyari. Ang mga lider ay nagtatakda ng tono para sa buong organisasyon.',
    feedback: {
      correct: 'Tama! Ang mga lider ay tumutukoy sa organisasyonal na kultura sa pamamagitan ng kanilang mga pag-uugali at tugon sa sekswal na panliligalig.',
      incorrect: 'Mali. Ang epektibong strategies ay nangangailangan ng aktibong pamumuno, hindi paghihiwalay o pag-iwas sa mga isyu.'
    }
  }
];

export const filipinoQuestions: QuestionSet = {
  language: "Filipino",
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