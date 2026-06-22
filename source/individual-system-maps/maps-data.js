window.INDIVIDUAL_SYSTEM_MAPS = [
  {
    id: "alle-interviews",
    group: "Gecombineerd",
    name: "Alle interviews – geïntegreerde systeemkaart",
    subtitle: "9 bewoners en 4 zorgprofessionals · 145 gecodeerde onderwerpen samengebracht",
    interviewContext: "De kaart combineert negen bewonersperspectieven en vier professionele perspectieven uit woonzorgcentrum Rubroek. De gesprekken gaan over identiteit, dagelijks leven, relaties, verlies, autonomie, professionele ruimte, veiligheid en mogelijkheden voor betekenisvolle deelname.",
    center: "Betekenisvol, autonoom en verbonden leven binnen veilige, mensgerichte zorg",
    story: "Welbevinden groeit wanneer identiteit en competentie samengaan met vertrouwde relaties en passende deelname. Beperkingen vragen steun; systeemdruk bepaalt de beschikbare ruimte.",
    leverage: "Borg maatwerk, professionele tijd, veiligheid en samenwerking.",
    source: "Alle interviewanalyses in Bewoners en Zorg pro's",
    coverage: {
      interviews: 13,
      residents: 9,
      professionals: 4,
      codedSubjects: 145
    },
    themes: [
      {
        title: "Persoonlijke betekenis & regie",
        tone: "strength",
        items: [
          { code: "VAKIDENTITEIT", meaning: "Werk, vakkennis en levensrollen blijven bronnen van waardigheid" },
          { code: "AUTONOMIE", meaning: "Zelf kiezen, grenzen stellen en niet onnodig geholpen worden" },
          { code: "COMPETENTIE", meaning: "Maken, leren, regelen en kennis overdragen geven eigenwaarde" },
          { code: "ZINGEVING", meaning: "Geloof, waarden, ethiek en levensverhalen dragen betekenis" },
          { code: "DAGELIJKS_RITME", meaning: "Muziek, nieuws, sport, eten en handwerk structureren de dag" },
          { code: "WENSEN", meaning: "Concrete verlangens openen energie: buiten, vissen, tuin, trein of uitje" }
        ]
      },
      {
        title: "Relaties, erkenning & deelname",
        tone: "relation",
        items: [
          { code: "VERTROUWDE_RELATIES", meaning: "Een vaste vriend, begeleider of professional maakt contact veilig" },
          { code: "GEHOORD_WORDEN", meaning: "Serieus luisteren voorkomt dat verdriet en signalen worden weggewuifd" },
          { code: "WEDERKERIGHEID", meaning: "Bewoners willen bijdragen, jongeren ontmoeten en niet alleen ontvangen" },
          { code: "FAMILIEVERBINDING", meaning: "Familie geeft warmte, maar afstand en weinig bezoek veroorzaken gemis" },
          { code: "MAATWERK", meaning: "Aansluiten bij persoon, cultuur, identiteit en interesse maakt contact betekenisvol" },
          { code: "DEELNAME_BUITEN", meaning: "Naar buiten en meedoen verbinden bewoners opnieuw met het gewone leven" }
        ]
      },
      {
        title: "Kwetsbaarheid & toegangsbarrières",
        tone: "barrier",
        items: [
          { code: "LICHAMELIJK_VERLIES", meaning: "Verlamming, letsel en ouderdom beperken kunnen en bereik" },
          { code: "MEDISCHE_REGELS", meaning: "Medicatie, indicaties en veiligheidsregels begrenzen vrijheid" },
          { code: "COMMUNICATIE_COGNITIE", meaning: "Afasie, geheugenverlies en cognitieve verschillen vragen geduld" },
          { code: "ROUW_EENZAAMHEID", meaning: "Verlies, familieafstand en weinig gelijkwaardig contact verkleinen de wereld" },
          { code: "ANGST_TERUGTREKKING", meaning: "Angst, krenking en afweer verminderen vragen en deelnemen" },
          { code: "AFHANKELIJKHEID", meaning: "Toegang tot identiteit, buitenwereld en activiteiten hangt vaak van anderen af" }
        ]
      },
      {
        title: "Professionele voorwaarden",
        tone: "opportunity",
        items: [
          { code: "PROFESSIONELE_PASSIE", meaning: "Professionals leven op wanneer hun vak zichtbaar verschil maakt" },
          { code: "ZORGDRUK", meaning: "Werkdruk, personeelstekort en versnippering breken aandacht", polarity: "negative" },
          { code: "BEZUINIGING_BUREAUCRATIE", meaning: "Afbouw en systemen vernauwen tijd, toegang en professioneel oordeel", polarity: "negative" },
          { code: "ERKENNING_ROL", meaning: "Vakpositie en heldere rollen maken eigenaarschap mogelijk" },
          { code: "VEILIGHEID_VERANTWOORDELIJKHEID", meaning: "Duidelijke medische grenzen maken deelname verantwoord" },
          { code: "SAMENWERKING_MIDDELEN", meaning: "Wijkpartners, vrijwilligers, klein budget en disciplines maken maatwerk haalbaar" }
        ]
      }
    ],
    crossLinks: [
      { from: "VAKIDENTITEIT", to: "COMPETENTIE", polarity: "positive", label: "activeert" },
      { from: "COMPETENTIE", to: "AUTONOMIE", polarity: "positive", label: "versterkt" },
      { from: "AUTONOMIE", to: "DEELNAME_BUITEN", polarity: "positive", label: "stimuleert" },
      { from: "VERTROUWDE_RELATIES", to: "GEHOORD_WORDEN", polarity: "positive", label: "maakt veilig" },
      { from: "WEDERKERIGHEID", to: "VERTROUWDE_RELATIES", polarity: "positive", label: "verdiept" },
      { from: "MAATWERK", to: "DEELNAME_BUITEN", polarity: "positive", label: "maakt mogelijk" },
      { from: "LICHAMELIJK_VERLIES", to: "AFHANKELIJKHEID", polarity: "negative", label: "vergroot" },
      { from: "MEDISCHE_REGELS", to: "DEELNAME_BUITEN", polarity: "negative", label: "begrenst" },
      { from: "COMMUNICATIE_COGNITIE", to: "GEHOORD_WORDEN", polarity: "negative", label: "bemoeilijkt" },
      { from: "PROFESSIONELE_PASSIE", to: "MAATWERK", polarity: "positive", label: "voedt" },
      { from: "ZORGDRUK", to: "GEHOORD_WORDEN", polarity: "negative", label: "breekt aandacht" },
      { from: "BEZUINIGING_BUREAUCRATIE", to: "ZORGDRUK", polarity: "negative", label: "vergroot" },
      { from: "VEILIGHEID_VERANTWOORDELIJKHEID", to: "DEELNAME_BUITEN", polarity: "positive", label: "maakt verantwoord" },
      { from: "SAMENWERKING_MIDDELEN", to: "MAATWERK", polarity: "positive", label: "maakt haalbaar" }
    ]
  },
  {
    id: "arie",
    group: "Bewoners",
    name: "Arie",
    subtitle: "Bloemist, ondernemer en zelfstandig stadsmens",
    interviewContext: "Man op hoge leeftijd, ruim twee jaar in het woonzorgcentrum. Hij werkte 45 jaar als bloemist in Rotterdam en bezat zeven winkels. Na een ongeluk met een hond raakte zijn been onherstelbaar beschadigd. Hij gaat nog dagelijks zelfstandig met de scootmobiel de stad in; zijn vrouw woont in Almere en zijn kinderen komen weinig.",
    center: "Eigen regie, vakmanschap en actieve deelname",
    story: "Arie leeft op wanneer hij kan handelen, vertellen en zelf op pad kan. Het ongeluk beperkte zijn bewegingsvrijheid, maar zijn identiteit blijft die van een regelaar en kenner.",
    leverage: "Laat hem meedoen, uitleggen en liefst iets regelen.",
    source: "Interviewanalyse_Arie_Bloemist.docx",
    themes: [
      {
        title: "Vakidentiteit & regie",
        tone: "strength",
        items: [
          { code: "BLOEMEN", meaning: "45 jaar vakkennis, handel en trots" },
          { code: "HANDEL", meaning: "Ondernemerschap geeft vrijheid en regie" },
          { code: "TEVREDENHEID", meaning: "Berusting én het gevoel alles te hebben gedaan" }
        ]
      },
      {
        title: "Relaties & generatie",
        tone: "relation",
        items: [
          { code: "KINDEREN", meaning: "Trots, maar weinig bezoek en beschermende vlakheid", polarity: "negative" },
          { code: "ECHTGENOTE", meaning: "Contact op afstand; gemis blijft onbesproken", polarity: "negative" },
          { code: "JEUGD", meaning: "Meeleven met vaderloosheid; sterk arbeidsethos" }
        ]
      },
      {
        title: "Verlies & dagelijkse grenzen",
        tone: "barrier",
        items: [
          { code: "ONGELUK", meaning: "Breuklijn: beschadigd been en opname" },
          { code: "REIZEN", meaning: "Glansperiode die lichamelijk niet meer kan" },
          { code: "ETEN", meaning: "Klein dagelijks ongenoegen dat hij zelf oplost" }
        ]
      },
      {
        title: "Wensen & deelname",
        tone: "opportunity",
        items: [
          { code: "VEILING", meaning: "Trots én concrete wens om terug te gaan" },
          { code: "BUITEN", meaning: "Dagelijks stadsleven houdt zijn identiteit levend" },
          { code: "UITJE", meaning: "Eten, bingo en samen fantaseren activeren wensen" }
        ]
      }
    ],
    crossLinks: [
      { from: "BLOEMEN", to: "VEILING", polarity: "positive", label: "activeert" },
      { from: "ONGELUK", to: "REIZEN", polarity: "negative", label: "beperkt" },
      { from: "BUITEN", to: "TEVREDENHEID", polarity: "positive", label: "behoudt regie" }
    ]
  },
  {
    id: "coby",
    group: "Bewoners",
    name: "Coby",
    subtitle: "Bewoner met afasie, één functionele hand en liefde voor buiten",
    interviewContext: "Coby woont al ongeveer 10–15 jaar in het woonzorgcentrum. Ze heeft ernstige woordvindproblemen en één functionele hand, waarmee ze nog breit. Buiten zijn, wandelen en boodschappen doen geven haar zichtbaar plezier. Voor grotere uitstappen heeft ze fysiek sterke, positieve en geduldige begeleiding nodig.",
    center: "Eigenwaarde door buiten zijn en vertrouwd contact",
    story: "Coby zoekt verbinding, maar alleen op een geduldige en positieve manier die haar competentie intact laat. Buiten zijn is de duidelijkste bron van welbevinden.",
    leverage: "Een vaste, sterke en geduldige begeleider voor korte uitstappen.",
    source: "Interviewanalyse_Coby_en_Cor.docx",
    themes: [
      {
        title: "Competentie & eigen grens",
        tone: "strength",
        items: [
          { code: "BREIEN", meaning: "Trots op wat met één hand nog kan; samen hoeft niet" }
        ]
      },
      {
        title: "Vertrouwd contact",
        tone: "relation",
        items: [
          { code: "CAMILLE", meaning: "Sterk, positief en geduldig contact schept vertrouwen" }
        ]
      },
      {
        title: "Communicatiedrempel",
        tone: "barrier",
        items: [
          { code: "AFASIE", meaning: "Woorden zoeken vraagt tijd en aandacht van de ander" }
        ]
      },
      {
        title: "Buitenwereld & wens",
        tone: "opportunity",
        items: [
          { code: "BUITEN", meaning: "Wandelen en boodschappen zijn kern van welbevinden" },
          { code: "DIERENTUIN", meaning: "Grootste concrete wens; fysieke begeleiding nodig" }
        ]
      }
    ],
    crossLinks: [
      { from: "CAMILLE", to: "BUITEN", polarity: "positive", label: "maakt veilig" },
      { from: "CAMILLE", to: "DIERENTUIN", polarity: "positive", label: "maakt mogelijk" },
      { from: "AFASIE", to: "CAMILLE", polarity: "negative", label: "vraagt geduld" }
    ]
  },
  {
    id: "cor",
    group: "Bewoners",
    name: "Cor",
    subtitle: "Zelfredzame modelbouwer met een duidelijke voorkeur voor alleen",
    interviewContext: "Cor woont al ongeveer 10–15 jaar in het woonzorgcentrum en is geboren in Rotterdam. Hij doet vrijwel alles zelfstandig, bouwt modellen op zijn kamer en gaat alleen naar buiten. Hij wijst groepscontact en hulp meestal af; vissen is de enige concrete activiteit waarvoor hij samenwerking zou accepteren.",
    center: "Autonomie zonder sociale druk",
    story: "Cor wijst opgelegde verbinding af. Zijn welbevinden zit in zelfstandigheid en eigen bezigheden; vissen is de ene concrete opening voor samenwerking.",
    leverage: "Respecteer het nee en sluit alleen aan bij een zelfgekozen doel.",
    source: "Interviewanalyse_Coby_en_Cor.docx",
    themes: [
      {
        title: "Autonomie & identiteit",
        tone: "strength",
        items: [
          { code: "ALLEEN", meaning: "Zelfredzaamheid en liever zelfstandig handelen" },
          { code: "MODELBOUW", meaning: "Eigen bezigheid en stille bron van trots" }
        ]
      },
      {
        title: "Sociale grenzen",
        tone: "relation",
        items: [
          { code: "AFWEER", meaning: "Humor en terugkaatsen beschermen tegen gevoelsvragen", polarity: "negative" }
        ]
      },
      {
        title: "Veranderde omgeving",
        tone: "barrier",
        items: [
          { code: "BUURT", meaning: "De vroegere buurt voelt veranderd en trekt niet meer" }
        ]
      },
      {
        title: "Voorwaardelijke opening",
        tone: "opportunity",
        items: [
          { code: "VISSEN", meaning: "Enige doel waarvoor hij samenwerking accepteert" }
        ]
      }
    ],
    crossLinks: [
      { from: "AFWEER", to: "ALLEEN", polarity: "positive", label: "beschermt" },
      { from: "VISSEN", to: "ALLEEN", polarity: "negative", label: "opent tijdelijk" },
      { from: "MODELBOUW", to: "ALLEEN", polarity: "positive", label: "ondersteunt" }
    ]
  },
  {
    id: "evelina",
    group: "Bewoners",
    name: "Evelina",
    subtitle: "Weduwe, rolstoelgebruiker en maker met behoefte aan lichtheid",
    interviewContext: "Evelina woont drie jaar in het woonzorgcentrum en gebruikt een rolstoel. Ze verzorgde jarenlang haar zieke man tot zijn overlijden. Ze heeft geen broers of zussen en ontvangt vooral bezoek van één goede vriendin. De dag vóór het interview liet ze haar eerste tatoeage zetten.",
    center: "Gezien worden, lachen en even naar buiten",
    story: "Evelina draagt zwaar verdriet én een krachtige behoefte aan lichtheid. Haar sociale wereld is klein; één vertrouwde relatie en korte persoonlijke momenten hebben daarom veel gewicht.",
    leverage: "Eén-op-één wandelen, humor en serieus luisteren naar zorgsignalen.",
    source: "Interviewanalyse_Evelina.docx",
    themes: [
      {
        title: "Lichtheid & identiteit",
        tone: "strength",
        items: [
          { code: "TATOEAGE", meaning: "Doorbraak, vreugde en trots op een nieuwe ervaring" },
          { code: "LACHEN", meaning: "Samen lachen is een expliciete levensbehoefte" },
          { code: "HANDWERK", meaning: "Herkenbare activiteit en blijvende competentie" },
          { code: "KOKEN", meaning: "Herinnering, groepsdeelname en kunnen meehelpen" }
        ]
      },
      {
        title: "Dragende relaties & zingeving",
        tone: "relation",
        items: [
          { code: "VRIENDIN", meaning: "Enige bezoek en belangrijkste sociale steun" },
          { code: "GELOOF", meaning: "Bron van steun; dominee als gewenste vertrouwenspersoon" },
          { code: "JEUGD", meaning: "Wederkerige kijk: jongeren mogen hulp vragen én helpen" }
        ]
      },
      {
        title: "Verdriet & niet gehoord",
        tone: "barrier",
        items: [
          { code: "ROUW", meaning: "Overleden man en zware jaren van mantelzorg" },
          { code: "GEHOORD", meaning: "Een beladen zorgsignaal wordt door anderen weggewuifd" },
          { code: "MOPPEREN", meaning: "Negativiteit van medebewoners drukt de dag" }
        ]
      },
      {
        title: "Belangrijkste wens",
        tone: "opportunity",
        items: [
          { code: "BUITEN", meaning: "Al is het maar een uur: wandelen en eruit zijn" }
        ]
      }
    ],
    crossLinks: [
      { from: "VRIENDIN", to: "TATOEAGE", polarity: "positive", label: "maakt mogelijk" },
      { from: "BUITEN", to: "LACHEN", polarity: "positive", label: "geeft lichtheid" },
      { from: "GEHOORD", to: "ROUW", polarity: "negative", label: "laat vastzitten" }
    ]
  },
  {
    id: "nico",
    group: "Bewoners",
    name: "Nico",
    subtitle: "Muziekliefhebber en voormalig medewerker sociale werkplaats",
    interviewContext: "Nico is ongeveer 72 jaar, woont in het woonzorgcentrum en werkte vroeger administratief bij een sociale werkplaats. Hij is deels verlamd, gebruikt een rolstoel en heeft geheugenproblemen. Hij is ongetrouwd, heeft geen kinderen en verloor zijn ouders en zus; een broer woont in Portugal.",
    center: "Veilige regie tussen verlies en plezier",
    story: "Nico's wereld wordt kleiner door lichamelijk verlies, geheugenproblemen en angst. Muziek, bewegen en waardering voor jonge zorgverleners openen juist contact en eigenwaarde.",
    leverage: "Vast, veilig contact via muziek, bewegen en iets mogen uitleggen.",
    source: "Interviewanalyse_Laurens_Rubroek_1.docx",
    themes: [
      {
        title: "Identiteit & plezier",
        tone: "strength",
        items: [
          { code: "MUZIEK", meaning: "LP's en luisteren brengen directe levendigheid" },
          { code: "MODELBOUW", meaning: "Trots op vroeger maken; verlies van fijne motoriek" },
          { code: "BEWEGEN", meaning: "Fietsen en fysiotherapie geven plezier en trots" },
          { code: "SCHOOL", meaning: "Warme herinnering die door vergeetachtigheid heen breekt" }
        ]
      },
      {
        title: "Relaties & waardering",
        tone: "relation",
        items: [
          { code: "WAARDERING", meaning: "Sterke warmte voor jonge zorgverleners en stagiaires" },
          { code: "FAMILIE", meaning: "Foto's verbinden met broer, nichtje en overleden zus" }
        ]
      },
      {
        title: "Verlies & kwetsbaarheid",
        tone: "barrier",
        items: [
          { code: "VERLIES", meaning: "Ouders en zus overleden" },
          { code: "VAL", meaning: "Traumatische breuklijn en redding door nichtje" },
          { code: "LICHAAM", meaning: "Verlamming en verlies van fijne motoriek" },
          { code: "GEHEUGEN", meaning: "Namen en details verdwijnen; terugtrekking volgt" },
          { code: "EENZAAMHEID", meaning: "Alleen-zijn wordt verdedigend gerechtvaardigd" }
        ]
      },
      {
        title: "Regie & veilige deelname",
        tone: "opportunity",
        items: [
          { code: "AUTONOMIE", meaning: "Zelf rijden en keuzes bewaken zijn waardigheid" },
          { code: "ANGST", meaning: "Niet alleen naar buiten durven vraagt vaste steun", polarity: "negative" }
        ]
      }
    ],
    crossLinks: [
      { from: "LICHAAM", to: "MODELBOUW", polarity: "negative", label: "neemt af" },
      { from: "AUTONOMIE", to: "BEWEGEN", polarity: "positive", label: "versterkt" },
      { from: "WAARDERING", to: "EENZAAMHEID", polarity: "negative", label: "doorbreekt" }
    ]
  },
  {
    id: "identiteit",
    group: "Bewoners",
    name: "Bewoner – genderidentiteit",
    subtitle: "Privacygevoelig: identiteit die een leven lang vrijwel verborgen bleef",
    interviewContext: "Deze bewoner vertelde vrijwel het hele leven alleen aan een broer en zus zich ook vrouw te voelen. Een bijeenkomst met een externe spreker maakte het voor het eerst mogelijk dit in het woonzorgcentrum uit te spreken. Een pruik, nagellak en hulp bij verzorging zijn kleine handelingen met grote betekenis voor de identiteit.",
    center: "Veilig zichtbaar kunnen zijn als zichzelf",
    story: "Een externe bijeenkomst maakte spreken mogelijk. Kleine verzorgingshandelingen dragen grote identiteit, maar zijn nu afhankelijk van toevallige welwillendheid.",
    leverage: "Borg een vast, discreet verzorgingsmoment en herkenning van buitenaf.",
    source: "Interviewanalyse_Laurens_Rubroek_2.docx",
    privacy: "De naam is bewust niet opgenomen.",
    themes: [
      {
        title: "Zichtbare identiteit",
        tone: "strength",
        items: [
          { code: "IDENTITEIT", meaning: "Pruik en nagellak maken vrouw-zijn zichtbaar" },
          { code: "VERZORGING", meaning: "Kleur en esthetiek geven rustige voldoening" }
        ]
      },
      {
        title: "Lang verborgen verhaal",
        tone: "relation",
        items: [
          { code: "GEHEIM", meaning: "Levenslang zwijgen, behalve tegen broer en zus", polarity: "negative" }
        ]
      },
      {
        title: "Afhankelijkheid",
        tone: "barrier",
        items: [
          { code: "AFHANKELIJKHEID", meaning: "Zelf verzorgen lukt niet; identiteit hangt van anderen af" }
        ]
      },
      {
        title: "Erkenning & kantelpunt",
        tone: "opportunity",
        items: [
          { code: "ERKENNING", meaning: "Externe spreker maakte uitspreken en herkenning mogelijk" }
        ]
      }
    ],
    crossLinks: [
      { from: "ERKENNING", to: "IDENTITEIT", polarity: "positive", label: "ontsluit" },
      { from: "GEHEIM", to: "IDENTITEIT", polarity: "negative", label: "houdt verborgen" },
      { from: "AFHANKELIJKHEID", to: "VERZORGING", polarity: "negative", label: "maakt kwetsbaar" }
    ]
  },
  {
    id: "onderwijzeres",
    group: "Bewoners",
    name: "Oud-onderwijzeres uit Suriname",
    subtitle: "Geloof, familie, onderwijs en nuttig blijven",
    interviewContext: "Surinaamse vrouw die zes à zeven jaar in het woonzorgcentrum woont. Ze werkte als onderwijzeres in Suriname, is lid van de Evangelische Broedergemeente en heeft vijf dochters en veel klein- en achterkleinkinderen. Ze haakt, knutselt en maakt kaarten voor haar familie.",
    center: "Betekenis door geloof, familie en kennis overdragen",
    story: "Haar bronnen van veerkracht zijn geloof, familie en bezig blijven. Het voelbare gemis zit in veranderde familiegewoonten; haar natuurlijke rol is die van leraar en overdrager.",
    leverage: "Laat haar vrijwillig leren, vertellen en handwerk overdragen.",
    source: "Interviewanalyse_Laurens_Rubroek_3.docx",
    themes: [
      {
        title: "Bronnen van betekenis",
        tone: "strength",
        items: [
          { code: "GELOOF", meaning: "Bidden geeft kracht en dankbaarheid" },
          { code: "SURINAME", meaning: "Wortels, warmte en leven tussen twee landen" },
          { code: "LIEFDE", meaning: "Levensles: liefde voor familie en voor jezelf" },
          { code: "AANPASSING", meaning: "Mild accepteren dat niet alles perfect is" }
        ]
      },
      {
        title: "Familie & verlies",
        tone: "relation",
        items: [
          { code: "FAMILIE", meaning: "Warmte en trots, maar bezoek is niet vanzelfsprekend" },
          { code: "MAN", meaning: "Tedere herinnering aan samen koken en zijn overlijden", polarity: "negative" }
        ]
      },
      {
        title: "Generatieverandering",
        tone: "barrier",
        items: [
          { code: "OPVOEDING", meaning: "Kleinkinderen worden niet meer vanzelf naar oma gestuurd" }
        ]
      },
      {
        title: "Bijdragen & bezig blijven",
        tone: "opportunity",
        items: [
          { code: "ONDERWIJS", meaning: "Trots en identiteit als geboren onderwijzeres" },
          { code: "HANDWERK", meaning: "Haken en kaarten verbinden haar met familie" },
          { code: "BEZIGHEID", meaning: "Doen beschermt tegen somberheid en leeg geklets" }
        ]
      }
    ],
    crossLinks: [
      { from: "GELOOF", to: "AANPASSING", polarity: "positive", label: "draagt" },
      { from: "ONDERWIJS", to: "HANDWERK", polarity: "positive", label: "kan overdragen" },
      { from: "OPVOEDING", to: "FAMILIE", polarity: "negative", label: "vergroot afstand" }
    ]
  },
  {
    id: "jan",
    group: "Bewoners",
    name: "Jan",
    subtitle: "Oud-chemisch analist, maker en treinenliefhebber",
    interviewContext: "Jan woont drie jaar in het woonzorgcentrum en is geboren in Rotterdam. Hij studeerde scheikunde en werkte als chemisch analist in het bedrijf van zijn vader. Hij heeft geen kinderen, nog één zus en een oude vriend die hem bezoekt. Hoewel hij mogelijk met een rollator naar buiten kan, doet hij dat niet meer.",
    center: "Uitgenodigd worden om te maken en de wereld weer in te gaan",
    story: "Jan heeft een rijke binnenwereld maar vraagt zelf nauwelijks iets. Een schoolkrenking lijkt zijn terughoudendheid te voeden; treinen en maken zijn de duidelijkste toegang tot energie.",
    leverage: "Nodig hem actief uit voor treinervaringen en samen ontwerpen.",
    source: "Interviewanalyse_Laurens_Rubroek_4.docx",
    themes: [
      {
        title: "Vakmanschap & binnenwereld",
        tone: "strength",
        items: [
          { code: "SCHEIKUNDE", meaning: "Beroepskennis blijft een sterke identiteit" },
          { code: "FANTASIE", meaning: "Rijke binnenwereld met boten, walvissen en dromen" },
          { code: "MAKEN", meaning: "Ontwerpen en bouwen zijn gemiste én levende waarden" },
          { code: "NIEUWS", meaning: "Krant en journaal vormen een dagelijks anker" },
          { code: "MILDHEID", meaning: "Oordeelloosheid; boosheid vooral op verwijt" }
        ]
      },
      {
        title: "Dierbare verbinding",
        tone: "relation",
        items: [
          { code: "VRIEND", meaning: "Langdurige vriendschap en bezoek geven warmte" }
        ]
      },
      {
        title: "Krenking & terugtrekking",
        tone: "barrier",
        items: [
          { code: "KRENKING", meaning: "Publiek afgemaakt; daarna nooit meer vragen gesteld" },
          { code: "OORLOG", meaning: "Beladen jeugdherinnering die niet wordt geopend" },
          { code: "VERLIES", meaning: "Zussen verloren; verdriet flitst weg in zelfcorrectie" },
          { code: "BINNEN", meaning: "Komt niet buiten hoewel het lichamelijk mogelijk lijkt" }
        ]
      },
      {
        title: "Wens & generatiekracht",
        tone: "opportunity",
        items: [
          { code: "TREINEN", meaning: "Jeugddroom en concrete wens om tram of trein te sturen" },
          { code: "GEMAK", meaning: "Bewondering voor mentale lichtheid van jongeren" }
        ]
      }
    ],
    crossLinks: [
      { from: "KRENKING", to: "BINNEN", polarity: "negative", label: "voedt terugtrekking" },
      { from: "MAKEN", to: "FANTASIE", polarity: "positive", label: "geeft vorm" },
      { from: "TREINEN", to: "GEMAK", polarity: "positive", label: "kan verbinden" }
    ]
  },
  {
    id: "zelfredzame-man",
    group: "Bewoners",
    name: "Zelfredzame bewoner",
    subtitle: "Oud-bedrijfsleider en scheepsbouwer, opgenomen vanwege medicatietoezicht",
    interviewContext: "Man eind zeventig, cognitief scherp en fysiek zelfstandig. Hij woont uitsluitend in het woonzorgcentrum omdat zijn epilepsiemedicatie onder toezicht moet worden ingenomen. Zijn jongere vrouw woont thuis en hij gaat in het weekend naar haar toe. Hij werkte als bedrijfsleider, in de scheepsbouw en als organisatieadviseur.",
    center: "Competent blijven binnen regels die zijn vrijheid beperken",
    story: "Zijn identiteit is gebouwd op kennis, zelfstandigheid en verantwoordelijkheid. Medicatieregels en indicaties maken hem afhankelijk, terwijl relationele aansluiting in huis beperkt is.",
    leverage: "Organiseer vissen of moestuinwerk rond veilige medicatieafspraken.",
    source: "Interviewanalyse_Laurens_Rubroek_5.docx",
    themes: [
      {
        title: "Vakmanschap & principes",
        tone: "strength",
        items: [
          { code: "SCHEEPSBOUW", meaning: "Sterkste bron van trots, detail en vakidentiteit" },
          { code: "ZELFSTANDIGHEID", meaning: "Alles zelf kunnen is de kern van zijn zelfbeeld" },
          { code: "OPVOEDING", meaning: "Grenzen, consequenties en leren luisteren" },
          { code: "RESPECT", meaning: "Formele omgangsvormen bewaken waardigheid" },
          { code: "GELOOF", meaning: "Afgesloten religieus hoofdstuk na familieconflict" }
        ]
      },
      {
        title: "Relaties & aansluiting",
        tone: "relation",
        items: [
          { code: "ECHTGENOTE", meaning: "Liefde op afstand; alleen weekenden samen" },
          { code: "MEDEBEWONERS", meaning: "Cognitieve kloof beperkt gelijkwaardig gesprek", polarity: "negative" },
          { code: "VERLIES", meaning: "Kinderen verbraken contact; kleinkinderen nooit ontmoet", polarity: "negative" },
          { code: "GEVOELENS", meaning: "Direct gevoelsgesprek roept ongemak en vermijding op", polarity: "negative" }
        ]
      },
      {
        title: "Systeemgrenzen",
        tone: "barrier",
        items: [
          { code: "MEDICATIE", meaning: "Streng schema bepaalt wonen en elk toekomstplan" },
          { code: "EPILEPSIE", meaning: "Aanval op 65-jarige leeftijd is de grote breuklijn" },
          { code: "INDICATIE", meaning: "Bureaucratische categorieën bepalen woonmogelijkheden" },
          { code: "REIZEN", meaning: "Spanje en vrijheid botsen op medicatieregels" }
        ]
      },
      {
        title: "Wensen & dagelijkse bronnen",
        tone: "opportunity",
        items: [
          { code: "VISSEN", meaning: "Duidelijkste concrete wens en kennisgebied" },
          { code: "MOESTUIN", meaning: "Regelen, onderhouden en vakkennis inzetten" },
          { code: "SPORT", meaning: "Voetbal geeft enthousiasme en gesprek" },
          { code: "NIEUWS", meaning: "Krant en wereldnieuws bieden ritme en niveau" }
        ]
      }
    ],
    crossLinks: [
      { from: "EPILEPSIE", to: "MEDICATIE", polarity: "negative", label: "veroorzaakt regime" },
      { from: "MEDICATIE", to: "REIZEN", polarity: "negative", label: "blokkeert" },
      { from: "SCHEEPSBOUW", to: "ZELFSTANDIGHEID", polarity: "positive", label: "vormt identiteit" },
      { from: "MOESTUIN", to: "ZELFSTANDIGHEID", polarity: "positive", label: "activeert" }
    ]
  },
  {
    id: "dick",
    group: "Zorgprofessionals",
    name: "Dick – muziektherapeut",
    subtitle: "Relationele muziekpraktijk onder druk van versnippering",
    interviewContext: "Muziektherapeut binnen de ouderenzorg. Zijn interview van ongeveer 82 minuten gaat over de kracht van muziek voor herkenning, culturele groepen en rouw, maar ook over werken op zeven locaties, personeelstekort, triage, bureaucratie en het verlies van vaste aandacht voor bewoners.",
    center: "Muzikale aandacht kunnen bieden waar die betekenis heeft",
    story: "Dick ziet muziek als relationeel goud, maar versnippering en triage trekken hem richting incidentbestrijding. Zijn morele pijn ontstaat waar aandacht en groepscultuur breken.",
    leverage: "Bescherm vaste groepen, professionele afweging en tijd voor aandacht.",
    source: "Interview_analyse_emotionele_onderwerpen.docx",
    themes: [
      {
        title: "Vakpassie & betekenis",
        tone: "strength",
        items: [
          { code: "PASSIE", meaning: "Muziek kan herkenning, contact en leven terugbrengen" },
          { code: "IDENTITEIT", meaning: "Culturele muziekgroepen vragen bescherming en continuïteit" },
          { code: "ROUW", meaning: "De groep moet verlies en een lege stoel kunnen dragen" },
          { code: "KWETSBAARHEID", meaning: "Bewonersverhalen maken de menselijke inzet voelbaar" }
        ]
      },
      {
        title: "Steun & vertrouwen",
        tone: "relation",
        items: [
          { code: "VERTROUWEN", meaning: "Een steunende teamleider herstelt rust en draagkracht" }
        ]
      },
      {
        title: "Organisatieverlies",
        tone: "barrier",
        items: [
          { code: "VERSNIPPERING", meaning: "Van één vaste plek naar zeven locaties op afroep" },
          { code: "BEZUINIGING", meaning: "Eerdere en nieuwe afbouw roepen verlieservaring op" },
          { code: "VISIELOOSHEID", meaning: "Middelen zonder visie leiden tot verspilling" },
          { code: "PERSONEELSTEKORT", meaning: "Vertrek van personeel breekt alledaagse aandacht" },
          { code: "CHAOS", meaning: "Verhuizing en onaf werk ondermijnen eigenaarschap" }
        ]
      },
      {
        title: "Morele & uitvoeringsdruk",
        tone: "barrier",
        items: [
          { code: "WERKDRUK", meaning: "Reizen en gebrek aan voorbereiding worden overweldigend" },
          { code: "TRIAGE", meaning: "Zelf bepalen wie geen therapie krijgt geeft morele nood" },
          { code: "ANGST", meaning: "Vrees voor vernauwing tot alleen roepgedrag" },
          { code: "BUREAUCRATIE", meaning: "Excel-verwijzing vervangt professioneel overzicht" },
          { code: "MISSTANDEN", meaning: "Vrijheidsbeperking van bewoners doet pijn in het vak" }
        ]
      }
    ],
    crossLinks: [
      { from: "BEZUINIGING", to: "VERSNIPPERING", polarity: "negative", label: "versterkt" },
      { from: "VERSNIPPERING", to: "WERKDRUK", polarity: "negative", label: "vergroot" },
      { from: "BUREAUCRATIE", to: "TRIAGE", polarity: "negative", label: "dwingt" },
      { from: "VERTROUWEN", to: "WERKDRUK", polarity: "positive", label: "dempt" }
    ]
  },
  {
    id: "josien",
    group: "Zorgprofessionals",
    name: "Josien – fysiotherapeut",
    subtitle: "25 jaar ouderenzorg tussen vakidentiteit en uitfasering",
    interviewContext: "Fysiotherapeut van 65 jaar met ongeveer 25 jaar ervaring in de ouderenzorg. Ze spreekt vanuit een doorleefde visie op functioneren en relationele zorg. Verwijssystemen, uitsluiting van overleg en onduidelijke taakverdeling geven haar het gevoel dat haar vak wordt uitgefaseerd en dragen bij aan eerder stoppen.",
    center: "Als mens én behandelaar van betekenis blijven",
    story: "Josien verdedigt relationele, functionele zorg tegen een systeem dat haar vak en positie smaller maakt. Burgerlijke ongehoorzaamheid houdt menselijkheid tijdelijk open.",
    leverage: "Geef behandelaren positie, klein budget en ruimte om relationeel te handelen.",
    source: "Interview_analyse_emotionele_onderwerpen.docx",
    themes: [
      {
        title: "Vakvisie & betekenis",
        tone: "strength",
        items: [
          { code: "BEHOUD", meaning: "Behouden van functioneren is niet hetzelfde als therapie" },
          { code: "IDENTITEIT", meaning: "Spanning tussen aanwezig zijn als mens en als fysiotherapeut" },
          { code: "VRIENDSCHAP", meaning: "Een mooie laatste fase draait om relaties tussen bewoners" }
        ]
      },
      {
        title: "Erkenning & loopbaan",
        tone: "relation",
        items: [
          { code: "ERKENNING", meaning: "Uitsluiting van regieoverleg tast behandelaarschap aan", polarity: "negative" },
          { code: "JONGEREN", meaning: "Nieuwe collega's verliezen volgens haar professionele tools", polarity: "negative" },
          { code: "PENSIOEN", meaning: "Systeemfrustratie versnelt haar besluit om te stoppen", polarity: "negative" },
          { code: "TOEKOMST", meaning: "Eigen ouderdom maakt het tekort persoonlijk" }
        ]
      },
      {
        title: "Systeemdruk",
        tone: "barrier",
        items: [
          { code: "UITFASERING", meaning: "Het vak voelt stap voor stap uit het systeem gezet" },
          { code: "BEZUINIGING", meaning: "Verwijssysteem wordt ervaren als verkapte besparing" },
          { code: "OVERBEHANDELING", meaning: "Boosheid over consumentisme in de eerste lijn" },
          { code: "SPAGAAT", meaning: "Eerst collega's wegzetten, nu met hen concurreren" }
        ]
      },
      {
        title: "Handelingsruimte",
        tone: "opportunity",
        items: [
          { code: "ONGEHOORZAAMHEID", meaning: "Toch aanschuiven en cappuccino's halen bewaart menselijkheid" },
          { code: "BUDGET", meaning: "Geen kleine portemonnee maakt gewone uitjes persoonlijk betaald" },
          { code: "AFDELING", meaning: "Onduidelijke rolverdeling veroorzaakt strijd met het zorgteam", polarity: "negative" }
        ]
      }
    ],
    crossLinks: [
      { from: "BEZUINIGING", to: "UITFASERING", polarity: "negative", label: "versnelt" },
      { from: "ERKENNING", to: "IDENTITEIT", polarity: "negative", label: "raakt" },
      { from: "ONGEHOORZAAMHEID", to: "VRIENDSCHAP", polarity: "positive", label: "schept ruimte" },
      { from: "JONGEREN", to: "PENSIOEN", polarity: "negative", label: "maakt verdrietig" }
    ]
  },
  {
    id: "diederik",
    group: "Zorgprofessionals",
    name: "Diederik – geestelijk verzorger",
    subtitle: "Vrijplaats, zingeving en maatwerk voor iedereen",
    interviewContext: "Geestelijk verzorger met een eerdere loopbaan in de architectuur. Hij ziet zijn werk als een vrijplaats voor zingeving, ethiek en levenseinde, niet alleen voor religieuze bewoners. Het interview gaat ook over beeldvorming als ‘de dominee’, minder uren, wijkverbinding, stilteruimtes en interdisciplinair maatwerk.",
    center: "Ongehinderde ruimte voor betekenis, ethiek en ritueel",
    story: "Diederik ziet geestelijke zorg als brede vrijplaats, niet als religieuze niche. Beeldvorming en urenverlies verkleinen toegang, terwijl maatwerk en wijkverbinding laten zien wat mogelijk is.",
    leverage: "Maak toegang vanzelfsprekend en verbind zingeving met wijk en disciplines.",
    source: "Interview_analyse_emotionele_onderwerpen.docx",
    themes: [
      {
        title: "Vakidentiteit & zingeving",
        tone: "strength",
        items: [
          { code: "LOOPBAAN", meaning: "Architectuur en theologie vormen één ontwerpende loopbaan" },
          { code: "ZINGEVING", meaning: "Betekenisvol leven reikt verder dan diagnose of religie" },
          { code: "ETHIEK", meaning: "Moreel beraad opent gezamenlijke afweging" },
          { code: "LEVENSEINDE", meaning: "Rituelen op maat ondersteunen bewoner en familie" }
        ]
      },
      {
        title: "Vrijplaats & beeldvorming",
        tone: "relation",
        items: [
          { code: "VRIJPLAATS", meaning: "Bewoners moeten zonder drempel toegang houden" },
          { code: "BEELDVORMING", meaning: "Het label 'dominee' sluit niet-religieuze bewoners uit", polarity: "negative" },
          { code: "NAAMGEVING", meaning: "De functienaam roept weerstand en verwarring op", polarity: "negative" }
        ]
      },
      {
        title: "Systeemdruk",
        tone: "barrier",
        items: [
          { code: "BEZUINIGING", meaning: "25% minder uren laat huiskamergesprekken verdwijnen" }
        ]
      },
      {
        title: "Mogelijkheden & verbinding",
        tone: "opportunity",
        items: [
          { code: "WIJKVERBINDING", meaning: "Kerk en vrijwilligers kunnen continuïteit dragen" },
          { code: "TROTS", meaning: "Een eigen strategiebeeld maakt het vak zichtbaar" },
          { code: "MAATWERK", meaning: "Metal draaien toont radicale aansluiting bij één persoon" },
          { code: "STILTERUIMTE", meaning: "Ontwerpen van plek verbindt bouwkundige en spirituele kennis" },
          { code: "SAMENWERKING", meaning: "Kok, therapeuten, activiteiten en jongeren versterken elkaar" }
        ]
      }
    ],
    crossLinks: [
      { from: "BEELDVORMING", to: "VRIJPLAATS", polarity: "negative", label: "vernauwt toegang" },
      { from: "BEZUINIGING", to: "SAMENWERKING", polarity: "negative", label: "neemt tijd" },
      { from: "MAATWERK", to: "ZINGEVING", polarity: "positive", label: "maakt concreet" },
      { from: "WIJKVERBINDING", to: "SAMENWERKING", polarity: "positive", label: "verankert" }
    ]
  },
  {
    id: "martijn",
    group: "Zorgprofessionals",
    name: "Martijn – basisarts",
    subtitle: "Jonge arts tussen samen beslissen, veiligheid en betrokkenheid",
    interviewContext: "Basisarts aan het begin van zijn loopbaan, met de ambitie huisarts te worden. Hij hecht aan samen beslissen en langdurige betrokkenheid, maar bewaakt medische grenzen. In het interview onderzoekt hij vooral verantwoordelijkheid en signalering wanneer bewoners met vrijwilligers aan activiteiten buiten het huis deelnemen.",
    center: "Medisch verantwoord én menselijk betrokken handelen",
    story: "Martijn zoekt langdurige betrokkenheid en samen beslissen, maar ziet scherpe grenzen rond medische verantwoordelijkheid. Zijn energie zit dichtbij bewoners, activiteiten en gedeelde interesses.",
    leverage: "Maak verantwoordelijkheden rond vrijwilligers helder en houd artsen dichtbij het dagelijks leven.",
    source: "Interview_analyse_emotionele_onderwerpen.docx",
    themes: [
      {
        title: "Vakontwikkeling",
        tone: "strength",
        items: [
          { code: "LOOPBAAN", meaning: "Huisartsgeneeskunde trekt door variatie en langdurige band" },
          { code: "SAMENBESLISSEN", meaning: "Cliënt en familie meenemen is een kernwaarde" },
          { code: "BETROKKENHEID", meaning: "Meekijken in activiteiten en huiskamers geeft energie" },
          { code: "POSITIE", meaning: "Als jonge 'guppy' houdt hij beleid nog op afstand" }
        ]
      },
      {
        title: "Menselijke betekenis",
        tone: "relation",
        items: [
          { code: "EENZAAMHEID", meaning: "Hij gunt bewoners nabijheid en minder isolement" },
          { code: "GROOTOUDERS", meaning: "Vitale grootouders maken ouder worden persoonlijk" },
          { code: "VOETBAL", meaning: "Gedeelde passie opent contact, ook bij dementie" },
          { code: "GELUK", meaning: "Gelukkig zijn relativeert status en carrière" }
        ]
      },
      {
        title: "Medische grenzen",
        tone: "barrier",
        items: [
          { code: "CONFLICT", meaning: "Samen beslissen stopt waar behandeling onverantwoord wordt" },
          { code: "VERANTWOORDELIJKHEID", meaning: "Uitjes roepen de vraag op wie medisch verantwoordelijk is" },
          { code: "SIGNALERING", meaning: "Vrijwilligers mogen medische risico's niet ongemerkt dragen" }
        ]
      },
      {
        title: "Systeemverwachtingen",
        tone: "barrier",
        items: [
          { code: "REGISTRATIELAST", meaning: "Administratiedruk bedreigt toekomstige huisartspraktijk" },
          { code: "VERWACHTINGEN", meaning: "Familie verwacht soms meer zorg dan het huis biedt" }
        ]
      }
    ],
    crossLinks: [
      { from: "SAMENBESLISSEN", to: "CONFLICT", polarity: "negative", label: "kent grens" },
      { from: "VERANTWOORDELIJKHEID", to: "SIGNALERING", polarity: "negative", label: "vereist afbakening" },
      { from: "VOETBAL", to: "BETROKKENHEID", polarity: "positive", label: "opent contact" },
      { from: "EENZAAMHEID", to: "BETROKKENHEID", polarity: "positive", label: "motiveert" }
    ]
  }
];

{
  const combinedMap = window.INDIVIDUAL_SYSTEM_MAPS.find((map) => map.id === "alle-interviews");
  const literalInterviewLanguage = {
    VAKIDENTITEIT: { displayLabel: "Bloemen", speaker: "Arie" },
    AUTONOMIE: { displayLabel: "Ik kan het zelf", speaker: "Nico" },
    COMPETENTIE: { displayLabel: "Zelf dingen maken", speaker: "Jan" },
    ZINGEVING: { displayLabel: "We blijven bidden", speaker: "Oud-onderwijzeres uit Suriname" },
    DAGELIJKS_RITME: { displayLabel: "Alles met muziek", speaker: "Nico" },
    WENSEN: { displayLabel: "Gewoon even eruit", speaker: "Evelina" },
    VERTROUWDE_RELATIES: { displayLabel: "Sterk, positief, geduldig", speaker: "Coby" },
    GEHOORD_WORDEN: { displayLabel: "Dan moeten ze wel luisteren", speaker: "Evelina" },
    WEDERKERIGHEID: { displayLabel: "Help me", speaker: "Evelina" },
    FAMILIEVERBINDING: { displayLabel: "Wel leuk als ze even komen", speaker: "Oud-onderwijzeres uit Suriname" },
    MAATWERK: { displayLabel: "Die persoon springt eruit", speaker: "Diederik" },
    DEELNAME_BUITEN: { displayLabel: "Wandelen", speaker: "Evelina" },
    LICHAMELIJK_VERLIES: { displayLabel: "Ik kan er niet meer", speaker: "Nico" },
    MEDISCHE_REGELS: { displayLabel: "Je krijgt niet voor 14 dagen mee", speaker: "Zelfredzame bewoner" },
    COMMUNICATIE_COGNITIE: { displayLabel: "Ik weet het niet meer", speaker: "Nico" },
    ROUW_EENZAAMHEID: { displayLabel: "We missen die stoel", speaker: "Dick – muziektherapeut" },
    ANGST_TERUGTREKKING: { displayLabel: "Ik durf niet meer alleen naar buiten", speaker: "Nico" },
    AFHANKELIJKHEID: { displayLabel: "Ik kan het niet zelf doen", speaker: "Bewoner – genderidentiteit" },
    PROFESSIONELE_PASSIE: { displayLabel: "Je hebt goud in handen", speaker: "Dick – muziektherapeut" },
    ZORGDRUK: { displayLabel: "Waar ben ik dan nog?", speaker: "Dick – muziektherapeut" },
    BEZUINIGING_BUREAUCRATIE: { displayLabel: "Verkapte bezuiniging", speaker: "Josien – fysiotherapeut" },
    ERKENNING_ROL: { displayLabel: "Heet ik dan nog wel behandelaar?", speaker: "Josien – fysiotherapeut" },
    VEILIGHEID_VERANTWOORDELIJKHEID: { displayLabel: "Waar ligt de verantwoordelijkheid?", speaker: "Martijn – basisarts" },
    SAMENWERKING_MIDDELEN: { displayLabel: "Dat vond ik een fantastisch idee", speaker: "Diederik – geestelijk verzorger" }
  };

  const literalMap = JSON.parse(JSON.stringify(combinedMap));
  literalMap.id = "alle-interviews-letterlijk";
  literalMap.name = "Alle interviews – letterlijke interviewtaal";
  literalMap.subtitle = "Dezelfde 24 systeemelementen, gelabeld met woorden en korte zinnen uit de interviews";
  literalMap.interviewContext = "Deze variant gebruikt per geconsolideerd systeemelement één representatieve, letterlijke formulering uit de interviewanalyses. De formulering is geen samenvatting van alle geïnterviewden, maar een menselijk herkenbaar anker voor de bredere analytische systeemterm.";
  literalMap.source = "Letterlijke kernfragmenten uit alle interviewanalyses";
  literalMap.themes.forEach((theme) => {
    theme.items.forEach((item) => {
      const literal = literalInterviewLanguage[item.code];
      item.analyticalTerm = item.code.replaceAll("_", " ");
      item.displayLabel = literal.displayLabel;
      item.literalSpeaker = literal.speaker;
      item.meaning = `${item.meaning}. Letterlijke formulering: “${literal.displayLabel}” — ${literal.speaker}.`;
    });
  });
  window.INDIVIDUAL_SYSTEM_MAPS.splice(1, 0, literalMap);
}
