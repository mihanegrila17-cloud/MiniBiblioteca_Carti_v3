(function () {
  const placeholderImg = 'img/placeholder.svg';
  const shelfByGenre = {
    Psihologic: 'Raft A1',
    Filozofic: 'Raft A2',
    Poezie: 'Raft A3',
    SF: 'Raft B1',
    Fantasy: 'Raft B2',
    Mister: 'Raft B3',
    Clasic: 'Raft C1',
    'Clasic RO': 'Raft C2',
    Roman: 'Raft C3',
    Basme: 'Raft D1',
    Satiră: 'Raft D2',
    Aventură: 'Raft D3',
    Ficțiune: 'Raft D4',
    Copii: 'Raft E1',
    Memorii: 'Raft E2',
    Eseu: 'Raft F1',
    Romantic: 'Raft F2'
  };

  const books = [
    { titlu: 'Crimă și pedeapsă', autor: 'F.M. Dostoievski', an: 1866, gen: 'Psihologic', descr: 'Vinovăție, ispășire și dileme morale în Petersburgul secolului XIX.', descriereLunga: 'Roman care te aruncă în conștiința unui tânăr frământat de vină și mândrie, într-o Rusie apăsătoare. Pe măsură ce urmărești conflictul interior al lui Raskolnikov, simți cum se împletesc filosofia, suspansul și speranța unei mântuiri imposibile. Merită citită pentru felul în care Crimă și pedeapsă (de F.M. Dostoievski) explorează zona psihologic și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Vinovăție, ispășire și dileme morale în Petersburg.', img: 'img/CRIMA_SI_PEDEAPSA.png'},
    { titlu: 'Idiotul', autor: 'F.M. Dostoievski', an: 1869, gen: 'Psihologic', descr: 'Prințul Mîșkin, inocență și destin într-o societate coruptă.', descriereLunga: 'Prințul Mîșkin, un „idiot” luminat, intră într-o lume sfâșiată de orgolii și intrigi. Inocența lui tulbură fiecare personaj, iar cititorul descoperă un portret emoționant despre bunătate, iubire și fragilitatea sufletului. Merită citită pentru felul în care Idiotul (de F.M. Dostoievski) explorează zona psihologic și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Prințul Mîșkin între inocență și corupție.', img: 'img/IDIOTUL.png'},
    { titlu: 'Frații Karamazov', autor: 'F.M. Dostoievski', an: 1880, gen: 'Filozofic', descr: 'Trei frați, credință, rațiune și vină într-un conflict moral.', descriereLunga: 'Saga Karamazovilor împletește crime, credință, ateism și pasiune într-o confruntare care zguduie conștiința. O dramă densă, unde fiecare frate poartă o parte din dilemele noastre, iar tensiunea morală te ține prins până la ultima pagină. Merită citită pentru felul în care Frații Karamazov (de F.M. Dostoievski) explorează zona filozofic și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Frați, vină și credință într-o sagă morală.', img: 'img/FRATII_KARAMZOV.png'},
    { titlu: 'Dune', autor: 'Frank Herbert', an: 1965, gen: 'SF', descr: 'Politică, ecologie și destin pe planeta Arrakis.', descriereLunga: 'Intră pe Arrakis, planeta-spice, unde politicul și ecologia se împletesc într-un destin mesianic. Jocurile de putere, profețiile și peisajele deșertului creează un univers care îți rămâne în minte și te provoacă să citești mai departe. Merită citită pentru felul în care Dune (de Frank Herbert) explorează zona SF și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Politică, ecologie și destin pe Arrakis.', img: 'img/DUNE.png'},
    { titlu: 'Mântuitorul Dunei', autor: 'Frank Herbert', an: 1969, gen: 'SF', descr: 'Paul Muad’Dib în fața consecințelor propriului jihad.', descriereLunga: 'Paul Muad’Dib trăiește gloria și prețul propriului jihad, prins între viziuni și intrigile imperiale. Un volum care arată cum eroii pot deveni prizonierii propriilor profeții, obligându-te să continui călătoria. Merită citită pentru felul în care Mântuitorul Dunei (de Frank Herbert) explorează zona SF și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Paul Muad’Dib și urmările jihadului.', img: 'img/MANTUITORUL_DUNELOR.png'},
    { titlu: 'Copiii Dunei', autor: 'Frank Herbert', an: 1976, gen: 'SF', descr: 'Dinastia Atreides, profeții și lupta pentru Arrakis.', descriereLunga: 'Moștenirea Atreides continuă, iar profețiile se adâncesc pe Arrakis. Lupta pentru putere, destin și viitorul galaxiei se împletește într-un roman care crește miza și curiozitatea de la pagină la pagină. Merită citită pentru felul în care Copiii Dunei (de Frank Herbert) explorează zona SF și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Dinastia Atreides și viitorul Arrakisului.', img: 'img/COPIII_DUNELOR.png'},
    { titlu: 'Harry Potter și Piatra Filosofală', autor: 'J.K. Rowling', an: 1997, gen: 'Fantasy', descr: 'Primul an la Hogwarts: prietenie, curaj și magie.', descriereLunga: 'Magia primei întâlniri cu Hogwarts: prietenii neașteptate, mistere ascunse și primele confruntări cu întunericul. O aventură inițiatică ce te face să vrei să descoperi fiecare secret al castelului. Merită citită pentru felul în care Harry Potter și Piatra Filozofală (de J.K. Rowling) explorează zona fantasy și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Primul an la Hogwarts: magie, prietenie, pericol.', img: 'img/HARRY_POTTER_SI_PIATRA.png'},
    { titlu: 'Harry Potter și Camera Secretelor', autor: 'J.K. Rowling', an: 1998, gen: 'Fantasy', descr: 'Misterul camerei ascunse și moștenirea lui Voldemort.', descriereLunga: 'Camera Secretelor se deschide, iar Hogwarts devine un labirint al pericolului și al prieteniei testate. Misterul, umorul și curajul se combină într-un volum care te împinge să afli cum se va închide cercul. Merită citită pentru felul în care Harry Potter și Camera Secretelor (de J.K. Rowling) explorează zona fantasy și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Camera ascunsă și pericole noi la Hogwarts.', img: 'img/HARRY_POTTER_SI_CAMERA_SECRETELOR.png'},
    { titlu: 'Harry Potter și Prizonierul din Azkaban', autor: 'J.K. Rowling', an: 1999, gen: 'Fantasy', descr: 'Sirius Black, patronusul și adevărul despre trecut.', descriereLunga: 'Un prizonier evadat, un trecut care se rearanjează și un protector făcut din lumină: patronusul. Cartea îmbină suspansul și revelațiile emoționante într-o aventură care dă profunzime universului Hogwarts. Merită citită pentru felul în care Harry Potter și Prizonierul din Azkaban (de J.K. Rowling) explorează zona fantasy și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Sirius Black și umbrele trecutului.', img: 'img/HARRY_POTTER_SI_PRIZIONERUL.png'},
    { titlu: 'Mândrie și prejudecată', autor: 'Jane Austen', an: 1813, gen: 'Clasic', descr: 'Dragoste, maniere și statut social în Anglia regency.', descriereLunga: 'Elizabeth Bennet și Mr. Darcy se înfruntă într-o lume guvernată de aparențe și orgolii. Umorul fin și romantismul inteligent te fac să vrei să vezi cum prejudecățile se transformă în pasiune. Merită citită pentru felul în care Mândrie și prejudecată (de Jane Austen) explorează zona clasic și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Dragoste și maniere în societatea engleză.', img: 'img/MANDRIE_SI_PREJUDECATA.png'},
    { titlu: 'Rațiune și simțire', autor: 'Jane Austen', an: 1811, gen: 'Clasic', descr: 'Surorile Dashwood între rațiune și pasiune.', descriereLunga: 'Surorile Dashwood navighează între judecată rece și inimă fierbinte, într-o societate care pedepsește pasul greșit. Un roman care îmbină ironia subtilă cu emoția, invitându-te să trăiești alături de ele. Merită citită pentru felul în care Rațiune și simțire (de Jane Austen) explorează zona clasic și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Surorile Dashwood între rațiune și pasiune.', img: 'img/RATIUNE_SI_SIMTIRE.png'},
    { titlu: 'Emma', autor: 'Jane Austen', an: 1815, gen: 'Clasic', descr: 'Emma Woodhouse și jocurile ei de cupidon greșit.', descriereLunga: 'Emma Woodhouse se joacă de-a pețitul și descoperă că inima nu e un joc fără consecințe. Satiră, romantism și lecții de maturizare într-o poveste care te prinde cu farmecul și umorul ei. Merită citită pentru felul în care Emma (de Jane Austen) explorează zona clasic și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Emma și potrivirile ei neinspirate.', img: 'img/EMMA.png'},
    { titlu: 'Micul Prinț', autor: 'Antoine de Saint-Exupéry', an: 1943, gen: 'Ficțiune', descr: 'O poveste tandră despre prietenie, sens și imaginație.', descriereLunga: 'Călătoria Micului Prinț de la o planetă la alta devine o meditație despre sens, prietenie și copilăria care nu moare. Fiecare întâlnire e o invitație să privești lumea cu ochi noi și să continui drumul. Merită citită pentru felul în care Micul Prinț (de Antoine de Saint-Exupéry) explorează zona ficțiune și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'O meditație tandră despre prietenie și sens.', img: 'img/MICUL_PRINT.png'},
    { titlu: 'Pilot de război', autor: 'Antoine de Saint-Exupéry', an: 1942, gen: 'Memorii', descr: 'Misiuni aeriene și reflecții în timpul războiului.', descriereLunga: 'Un pilot de recunoaștere își transformă zborurile în pagini de jurnal pline de luciditate și poezie. Între pericolul misiunilor și reflecțiile despre umanitate, cartea te poartă prin înălțimi și gânduri adânci. Merită citită pentru felul în care Pilot de război (de Antoine de Saint-Exupéry) explorează zona memorii și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Reflecții de pilot în vreme de război.', img: 'img/PILOT_DE_RAZBOI.png'},
    { titlu: 'Zbor de noapte', autor: 'Antoine de Saint-Exupéry', an: 1931, gen: 'Aventură', descr: 'Curajul piloților poștali și luptele cu furtunile.', descriereLunga: 'Primele zboruri de noapte devin metafore ale curajului și dedicării. Piloții poștali se luptă cu furtuni și singurătate, iar tu rămâi prins de atmosfera lirică și aventuroasă. Merită citită pentru felul în care Zbor de noapte (de Antoine de Saint-Exupéry) explorează zona aventură și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Piloți poștali vs. furtuni nocturne.', img: 'img/ZBOR_DE_NOAPTE.png'},
    { titlu: 'Moromeții', autor: 'Marin Preda', an: 1955, gen: 'Clasic RO', descr: 'Satul românesc între tradiție, umor și transformare.', descriereLunga: 'Ilie Moromete și familia lui trăiesc la intersecția tradiției și schimbării, cu umor și melancolie. Romanul surprinde farmecul satului românesc și tensiunile unei lumi care se transformă, lăsându-te curios pentru mai mult. Merită citită pentru felul în care Moromeții (de Marin Preda) explorează zona clasic RO și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Satul românesc între tradiție și schimbare.', img: 'img/MOROMETIIII.png'},
    { titlu: 'Delirul', autor: 'Marin Preda', an: 1975, gen: 'Clasic RO', descr: 'Istorie recentă, pasiune și luciditate în vreme tulbure.', descriereLunga: 'Un tânăr scriitor traversează vremuri tulburi, între pasiune și luciditate. Romanul te prinde cu energia epocii și dilemele morale care îi urmăresc pe toți. Merită citită pentru felul în care Delirul (de Marin Preda) explorează zona clasic RO și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Istorie recentă și pasiune lucidă.', img: 'img/DELIRUL.png'},
    { titlu: '1984', autor: 'George Orwell', an: 1949, gen: 'Distopie', descr: 'Un avertisment despre totalitarism, supraveghere și limbaj.', descriereLunga: 'Oceania este coșmarul suprem al controlului, iar Winston se zbate între frică și dorința de libertate. Distopia lui Orwell te face să simți presiunea fiecărei camere de supraveghere și te provoacă să citești mai departe. Merită citită pentru felul în care 1984 (de George Orwell) explorează zona distopie și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Distopie despre supraveghere și libertate.', img: 'img/1984-nou.png'},
    { titlu: 'Ferma animalelor', autor: 'George Orwell', an: 1945, gen: 'Satiră', descr: 'O alegorie politică despre putere și corupție.', descriereLunga: 'O fabulă amară în care animalele preiau puterea doar pentru a repeta greșelile oamenilor. Satira tăioasă și ritmul alert transformă povestea într-un avertisment care te ține lipit de pagini. Merită citită pentru felul în care Ferma animalelor (de George Orwell) explorează zona satiră și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Satiră despre putere și corupție.', img: 'img/FERMA_ANIMALELOR.png'},
    { titlu: 'Sapiens', autor: 'Yuval Noah Harari', an: 2011, gen: 'Istorie', descr: 'Cum miturile, banii și tehnologia au modelat societatea umană.', descriereLunga: 'Harari condensează istoria speciei într-o poveste clară și provocatoare: de la mituri și religii la bani și știință. Vei parcurge mileniile cu sentimentul că fiecare pagină îți deschide altă ușă spre a înțelege cine suntem. Merită citită pentru felul în care Sapiens (de Yuval Noah Harari) explorează zona istorie și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'O istorie captivantă a speciei umane.', img: 'img/SAPIENS.png'},
    { titlu: 'Homo Deus', autor: 'Yuval Noah Harari', an: 2015, gen: 'Eseu', descr: 'Previziuni despre viitorul omenirii și tehnologie.', descriereLunga: 'Un eseu despre viitorul apropiat: inteligența artificială, biotehnologiile și noile religii ale datelor. Harari te provoacă să privești înainte și să te întrebi ce înseamnă să rămâi uman, motiv pentru care vei vrea să continui lectura. Merită citită pentru felul în care Homo Deus (de Yuval Noah Harari) explorează zona eseu și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Viitorul omenirii și tehnologia.', img: 'img/HOMO_DEUS.png'},
    { titlu: '21 de lecții pentru secolul XXI', autor: 'Yuval Noah Harari', an: 2018, gen: 'Eseu', descr: 'Provocările prezentului: politică, tehnologie, sens.', descriereLunga: 'O colecție de lecții despre prezent: fake news, identitate, muncă, tehnologie și sens. Tonul direct și exemplele actuale fac ca fiecare capitol să fie o invitație să gândești critic și să mergi mai departe. Merită citită pentru felul în care 21 de lecții pentru secolul XXI (de Yuval Noah Harari) explorează zona eseu și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Provocările prezentului explicate.', img: 'img/21_DE_LECTII.png'},
    { titlu: 'Luceafărul', autor: 'Mihai Eminescu', an: 1883, gen: 'Poezie', descr: 'Poem romantic despre iubire și nemurire.', descriereLunga: 'Poem romantic care urmărește iubirea imposibilă dintre un astru și o muritoare, o meditație intensă despre nemurire, destin și fragilitatea omului. Limbajul muzical și imaginile grandioase te poartă într-o poveste care nu își pierde niciodată farmecul. Merită citită pentru felul în care Luceafărul (de Mihai Eminescu) explorează zona poezie și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Iubire imposibilă și nemurire.', img: 'img/LUCEAFARUL.png'},
    { titlu: 'Scrisorile', autor: 'Mihai Eminescu', an: 1881, gen: 'Poezie', descr: 'Satiră socială și meditație filozofică în versuri.', descriereLunga: 'Ciclul de scrisori eminesciene combină satira socială cu meditația filozofică asupra timpului, istoriei și destinului. Versurile decupează cu ironie și gravitate marile întrebări, obligându-te să revii mereu la ele. Merită citită pentru felul în care Scrisorile (de Mihai Eminescu) explorează zona poezie și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Satiră și reflecție în versuri.', img: 'img/SCRISORILE.png'},
    { titlu: 'Povestea codrului', autor: 'Mihai Eminescu', an: 1871, gen: 'Poezie', descr: 'Imagini ale naturii și dorul de originar.', descriereLunga: 'Un poem care evocă frumusețea codrului, dorul de originar și armonia omului cu natura. Liniștea și misterul pădurii devin un refugiu poetic care te face să simți că aparții acelor locuri. Merită citită pentru felul în care Povestea codrului (de Mihai Eminescu) explorează zona poezie și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Codrul, natură și dor.', img: 'img/POVESTEA_CODRULUI.png'},
    { titlu: 'Capra cu trei iezi', autor: 'Ion Creangă', an: 1875, gen: 'Basme', descr: 'Poveste populară despre încredere și prudență.', descriereLunga: 'Capra și cei trei iezi învață o lecție dură despre neascultare, prudență și consecințele ei. Tensiunea și dramatismul poveștii rămân vii, făcând-o memorabilă pentru copii și părinți deopotrivă. Merită citită pentru felul în care Capra cu trei iezi (de Ion Creangă) explorează zona basme și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Lecție despre prudență.', img: 'img/CAPRA_CU_TREI_IEZI.png'},
    { titlu: 'Ion', autor: 'Liviu Rebreanu', an: 1920, gen: 'Roman', descr: 'Lupta pentru pământ și statut în satul ardelean.', descriereLunga: 'Povestea lui Ion al Glanetașului, prins între dragoste, sărăcie și dorința de pământ într-o societate rigidă. Drama lui te face să simți ambiția, vinovăția și prețul pe care îl plătește pentru a-și atinge visul. Merită citită pentru felul în care Ion (de Liviu Rebreanu) explorează zona roman și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Pământ, iubire și statut.', img: 'img/ION.png'},
    { titlu: 'Fluturi', autor: 'Irina Binder', an: 2012, gen: 'Romantic', descr: 'Poveste despre iubire, vindecare și introspecție.', descriereLunga: 'O confesiune romanțată despre iubire, vulnerabilitate și regăsire de sine. Împletind emoția cu introspecția, „Fluturi” te face să retrăiești propriile căutări și să vrei să vezi cum se vindecă rănile. Merită citită pentru felul în care Fluturi (de Irina Binder) explorează zona romantic și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Iubire și regăsire de sine.', img: 'img/FLUTURI.png'},
    { titlu: 'Crima din Orient Express', autor: 'Agatha Christie', an: 1934, gen: 'Mister', descr: 'Poirot investighează o crimă într-un tren blocat de zăpadă.', descriereLunga: 'Unul dintre cele mai celebre cazuri Poirot: un tren blocat, o crimă perfect calculată și o galerie de suspecți. Tensiunea crește la fiecare interogatoriu și vrei să vezi cum detectivul desface nodul misterului. Merită citită pentru felul în care Crima din Orient Express (de Agatha Christie) explorează zona mister și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Poirot în trenul blocat.', img: 'img/CRIMA_IN_ORIENT.png'},
    { titlu: 'Zece negri mititei', autor: 'Agatha Christie', an: 1939, gen: 'Mister', descr: 'Zece invitați izolați, un criminal nevăzut și un poem fatal.', descriereLunga: 'Un thriller claustrofobic: zece invitați, un poem sinistru și eliminări succesive. Suspansul nu scade nicio clipă, iar finalul te face să răsfoiești înapoi pentru a reconstitui puzzle-ul. Merită citită pentru felul în care Zece negri mititei (de Agatha Christie) explorează zona mister și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Zece invitați, zece secrete.', img: 'img/10NEGRI_MITITEI.png'},
    { titlu: 'Moarte pe Nil', autor: 'Agatha Christie', an: 1937, gen: 'Mister', descr: 'O croazieră pe Nil devine scena unei crime pasionale.', descriereLunga: 'O croazieră luxuriantă se transformă într-o scenă de crimă, iar gelozia și banii se împletesc într-un complot mortal. Poirot urmărește fiecare gest sub soarele Nilului, iar tu rămâi prins până la ultima piesă a puzzle-ului. Merită citită pentru felul în care Moarte pe Nil (de Agatha Christie) explorează zona mister și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Crimă pasională pe Nil.', img: 'img/MOARTE_PE_NIL.png'},
    { titlu: 'Uciderea lui Roger Ackroyd', autor: 'Agatha Christie', an: 1926, gen: 'Mister', descr: 'Un final surprinzător într-un sat liniștit.', descriereLunga: 'Un whodunit care a făcut istorie: povestea unui sat liniștit, o crimă tulburătoare și un final care răstoarnă tot. Christie construiește o intrigă atât de abilă încât te provoacă să citești fără pauză. Merită citită pentru felul în care Uciderea lui Roger Ackroyd (de Agatha Christie) explorează zona mister și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Un whodunit cu final memorabil.', img: 'img/ROGER.png'},
    { titlu: 'Alice în Țara Minunilor', autor: 'Lewis Carroll', an: 1865, gen: 'Copii', descr: 'Alice cade într-o lume absurdă plină de personaje ciudate.', descriereLunga: 'Un basm modern cu logică răsturnată, creaturi fantastice și replici memorabile. Alice explorează o lume în care totul e posibil, iar tu te afunzi într-o aventură care îți hrănește imaginația. Merită citită pentru felul în care Alice în Țara Minunilor (de Lewis Carroll) explorează zona copii și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Aventură absurdă în Țara Minunilor.', img: 'img/AlLICE_TARA_MINUNILOR.png'},
    { titlu: 'Pippi Șosețica', autor: 'Astrid Lindgren', an: 1945, gen: 'Copii', descr: 'Fetița cu ciorapi lungi trăiește liber și nonconformist.', descriereLunga: 'Pippi, cea mai puternică fetiță din lume, trăiește liber și colorează orice regulă cu umor. Aventurile ei nonconformiste îi inspiră pe copii să viseze fără limite. Merită citită pentru felul în care Pippi Șosețica (de Astrid Lindgren) explorează zona copii și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Pippi, libertate și umor.', img: 'img/PIPPI.png'},
    { titlu: 'Matilda', autor: 'Roald Dahl', an: 1988, gen: 'Copii', descr: 'O fetiță genială cu puteri speciale își schimbă destinul.', descriereLunga: 'Matilda, o fetiță genială și sensibilă, descoperă puteri uimitoare și forța cărților. Lupta ei împotriva nedreptății e plină de umor și magie, invitând copiii să creadă în propriile resurse. Merită citită pentru felul în care Matilda (de Roald Dahl) explorează zona copii și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Inteligență și curaj împotriva nedreptății.', img: 'img/MATILDA.png'},
    { titlu: 'Jurnalul Annei Frank', autor: 'Anne Frank', an: 1947, gen: 'Memorii', descr: 'Notele unei adolescente ascunse în timpul războiului.', descriereLunga: 'Relatări intime și curajoase ale unei adolescente ascunse în plin război, despre teamă, speranță și maturizare. Vocea Annei e sinceră și vibrantă, iar paginile ei te marchează și te fac să continui să citești. Merită citită pentru felul în care Jurnalul Annei Frank (de Anne Frank) explorează zona memorii și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Curajul unei adolescente în ascunzătoare.', img: 'img/ANNE_FRANK.png'},
    { titlu: 'Educated', autor: 'Tara Westover', an: 2018, gen: 'Memorii', descr: 'De la izolare la educație și libertate personală.', descriereLunga: 'Povestea unei tinere crescute într-o familie izolată, care descoperă educația și își revendică libertatea. Drumul ei de la ignoranță la cunoaștere e plin de curaj și te inspiră să nu renunți. Merită citită pentru felul în care Educated (de Tara Westover) explorează zona memorii și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Drum de la izolare la educație.', img: 'img/EDUCATED.png'},
    { titlu: 'Becoming', autor: 'Michelle Obama', an: 2018, gen: 'Memorii', descr: 'Autobiografia fostei Prime Doamne a SUA.', descriereLunga: 'Reflecții sincere despre familie, carieră și rolul public al unei Prime Doamne. Michelle Obama vorbește cu căldură despre identitate, curaj și autenticitate, iar vocea ei te invită să-ți continui propriul drum. Merită citită pentru felul în care Becoming (de Michelle Obama) explorează zona memorii și oferă momente care rămân cu tine mult timp după ultima pagină.', overlay: 'Drumul și vocea lui Michelle Obama.', img: 'img/BECOMING.png'}
  ];

  const grid = document.getElementById('grid');
  const q = document.getElementById('q');
  const count = document.getElementById('count');
  const noResults = document.getElementById('no-results');
  const roCollator = new Intl.Collator('ro', { sensitivity: 'base' });

  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalImg = document.getElementById('modalImg');
  const modalByline = document.getElementById('modalByline');
  const modalDescr = document.getElementById('modalDescr');
  const modalClose = document.getElementById('modalClose');
  const modalAuthorBtn = document.getElementById('modalAuthorBtn');
  const modalAuthorInfo = document.getElementById('modalAuthorInfo');

  const cards = () => Array.from(grid.querySelectorAll('.card'));

  function renderBooks() {
    grid.innerHTML = '';
    books.forEach(book => {
      const card = document.createElement('article');
      card.className = 'card';
      card.tabIndex = 0;
      card.dataset.titlu = book.titlu;
      card.dataset.autor = book.autor;
      card.dataset.an = String(book.an);
      card.dataset.gen = book.gen;
      const raft = shelfByGenre[book.gen] || 'Raft general';
      card.dataset.raft = raft;
      card.dataset.descr = book.descr;
      card.dataset.descriereLunga = book.descriereLunga || book.descr;

      card.innerHTML = `
        <div class="cover-wrap">
          <img src="${book.img}" alt="${book.titlu}">
          <div class="overlay"><p>${book.overlay || book.descr}</p></div>
        </div>
        <div class="meta">
          <h3 class="title">${book.titlu}</h3>
          <div class="byline">${book.autor}</div>
          <div class="tags"><span class="tag">${book.an}</span><span class="tag">${book.gen}</span><span class="tag">${raft}</span></div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderFilterList(target, className, values) {
    const uniqueSorted = Array.from(new Set(values)).sort(roCollator.compare);
    target.innerHTML = uniqueSorted.map(val =>
      `<li><label><input type="checkbox" class="${className}" value="${val}"> ${val}</label></li>`
    ).join('');
    return Array.from(target.querySelectorAll('input'));
  }

  let authorChecks = [];
  let genreChecks = [];
  const authorFilterList = document.getElementById('authorFilters');
  const genreFilterList = document.getElementById('genreFilters');

  function renderFilters() {
    authorChecks = renderFilterList(authorFilterList, 'f-author', books.map(b => b.autor));
    genreChecks = renderFilterList(genreFilterList, 'f-genre', books.map(b => b.gen));
    authorChecks.forEach(c => c.addEventListener('change', applyFiltersAndSearch));
    genreChecks.forEach(c => c.addEventListener('change', applyFiltersAndSearch));
  }

  function updateCount() {
    const visible = cards().filter(c => c.style.display !== 'none').length;
    count.textContent = `${visible} / ${cards().length} carti vizibile`;
    noResults.style.display = (visible === 0) ? 'block' : 'none';
  }

  function currentFilters() {
    const A = authorChecks.filter(c => c.checked).map(c => c.value);
    const G = genreChecks.filter(c => c.checked).map(c => c.value);
    return { A, G };
  }

  function applyFiltersAndSearch() {
    const term = q.value.trim().toLowerCase();
    const { A, G } = currentFilters();

    cards().forEach(card => {
      const hay = (card.dataset.titlu + ' ' + card.dataset.autor + ' ' + card.dataset.gen + ' ' + (card.dataset.raft || '')).toLowerCase();
      const matchesTerm = (term === '' || hay.includes(term));
      const matchesAuthor = (A.length === 0 || A.includes(card.dataset.autor));
      const matchesGenre = (G.length === 0 || G.includes(card.dataset.gen));
      card.style.display = (matchesTerm && matchesAuthor && matchesGenre) ? '' : 'none';
    });
    updateCount();
  }

  function sortBy(key, dir) {
    const arr = cards().slice();
    arr.sort((a, b) => {
      if (key === 'an') {
        const A = parseInt(a.dataset.an, 10);
        const B = parseInt(b.dataset.an, 10);
        return (dir === 'asc') ? (A - B) : (B - A);
      } else {
        const A = a.dataset[key] || '';
        const B = b.dataset[key] || '';
        const cmp = roCollator.compare(A, B);
        return (dir === 'asc') ? cmp : -cmp;
      }
    });
    arr.forEach(c => grid.appendChild(c));
    updateCount();
  }

  function openModal() {
    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  const authorsInfo = {
    'F.M. Dostoievski': { bio: 'Autor rus al marilor romane de profunzime psihologică, care explorează vinovăția, libertatea și credința.', titles: ['Crimă și pedeapsă', 'Idiotul', 'Frații Karamazov'] },
    'Frank Herbert': { bio: 'Clasic al science-fiction-ului, a creat universul Dune unde ecologia și politica modelează destine.', titles: ['Dune', 'Mântuitorul Dunei', 'Copiii Dunei'] },
    'J.K. Rowling': { bio: 'Autoarea seriei Harry Potter, care a adus magia, prietenia și curajul în bibliotecile unei lumi întregi.', titles: ['Harry Potter și Piatra Filozofală', 'Camera Secretelor', 'Prizonierul din Azkaban'] },
    'Jane Austen': { bio: 'Maestră a satirei sociale din epoca regency, cunoscută pentru dialoguri sclipitoare și eroine ironice.', titles: ['Mândrie și prejudecată', 'Rațiune și simțire', 'Emma'] },
    'Antoine de Saint-Exupéry': { bio: 'Pilot și scriitor francez, a îmbinat aventurile aeronautice cu meditații poetice despre sensul vieții.', titles: ['Micul Prinț', 'Pilot de război', 'Zbor de noapte'] },
    'Marin Preda': { bio: 'Romancier român care a surprins satul și omul prins între istorie, morală și propriul destin.', titles: ['Moromeții', 'Delirul'] },
    'George Orwell': { bio: 'Eseist și romancier britanic, a scris distopii și satire politice despre putere și libertate.', titles: ['1984', 'Ferma animalelor'] },
    'Yuval Noah Harari': { bio: 'Istoric și eseist care sintetizează trecutul, prezentul și viitorul omenirii într-un limbaj accesibil.', titles: ['Sapiens', 'Homo Deus', '21 de lecții pentru secolul XXI'] },
    'Mihai Eminescu': { bio: 'Poet național român, voce romantică ce îmbină cosmicul cu intimitatea iubirii și a naturii.', titles: ['Luceafărul', 'Scrisorile', 'Povestea codrului'] },
    'Ion Creangă': { bio: 'Povestitor clasic român, cunoscut pentru umorul savuros și farmecul limbajului popular.', titles: ['Capra cu trei iezi'] },
    'Liviu Rebreanu': { bio: 'Romancier realist care a surprins lupta pentru pământ, dileme morale și revolta socială.', titles: ['Ion'] },
    'Irina Binder': { bio: 'Autoare contemporană de romane romantice și confesive despre vindecare și regăsire.', titles: ['Fluturi'] },
    'Agatha Christie': { bio: 'Regina misterelor, creatoarea detectivilor Hercule Poirot și Miss Marple, maestră a intrigilor cu twist.', titles: ['Crima din Orient Express', 'Zece negri mititei', 'Moarte pe Nil', 'Uciderea lui Roger Ackroyd'] },
    'Lewis Carroll': { bio: 'Matematician și scriitor, a inventat lumi absurde și pline de spirit ludic.', titles: ['Alice în Țara Minunilor'] },
    'Astrid Lindgren': { bio: 'Autoare suedeză care a dat viață unor eroine nonconformiste și curajoase.', titles: ['Pippi Șosețica'] },
    'Roald Dahl': { bio: 'Scriitor britanic de povești pentru copii, cunoscut pentru umorul său negru și personaje inventive.', titles: ['Matilda'] },
    'Anne Frank': { bio: 'Adolescentă evreică al cărei jurnal a devenit o mărturie universală a curajului în fața ororii.', titles: ['Jurnalul Annei Frank'] },
    'Tara Westover': { bio: 'Memorialistă americană care a povestit drumul său de la izolare la educație și libertate personală.', titles: ['Educated'] },
    'Michelle Obama': { bio: 'Avocată și fostă Primă Doamnă a SUA, voce puternică pentru educație, echitate și autenticitate.', titles: ['Becoming'] }
  };

  function formatAuthorInfo(name) {
    const info = authorsInfo[name];
    if (!info) return '';
    const titles = info.titles && info.titles.length ? ` Câteva titluri: ${info.titles.join(', ')}.` : '';
    return `${info.bio}${titles} Merită explorat pentru felul în care ${name} conturează lumi și personaje care rămân vii mult după lectură.`;
  }

  function showCardDetails(card) {
    const raft = card.dataset.raft ? ` • ${card.dataset.raft}` : '';
    modalTitle.textContent = card.dataset.titlu;
    modalByline.textContent = `${card.dataset.autor} • ${card.dataset.an} • ${card.dataset.gen}${raft}`;
    const img = card.querySelector('img');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalDescr.textContent = card.dataset.descriereLunga || card.dataset.descr;
    const authorText = formatAuthorInfo(card.dataset.autor);
    modalAuthorInfo.style.display = 'none';
    modalAuthorInfo.textContent = '';
    if (authorText) {
      modalAuthorBtn.style.display = 'inline-flex';
      modalAuthorBtn.onclick = () => {
        modalAuthorInfo.textContent = authorText;
        modalAuthorInfo.style.display = 'block';
      };
    } else {
      modalAuthorBtn.style.display = 'none';
      modalAuthorBtn.onclick = null;
    }
    openModal();
  }

  q.addEventListener('input', applyFiltersAndSearch);
  const clearFiltersBtn = document.getElementById('clear-filters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      authorChecks.forEach(c => c.checked = false);
      genreChecks.forEach(c => c.checked = false);
      applyFiltersAndSearch();
    });
  }

  document.querySelectorAll('.sort').forEach(li => {
    li.addEventListener('click', function () {
      document.querySelectorAll('.sort').forEach(x => x.classList.remove('active'));
      this.classList.add('active');
      sortBy(this.dataset.key, this.dataset.dir);
    });
  });

  const resetBtn = document.getElementById('reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      q.value = '';
      q.dispatchEvent(new Event('input'));
      document.querySelectorAll('.sort').forEach(x => x.classList.remove('active'));
    });
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    showCardDetails(card);
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.card');
    if (!card) return;
    e.preventDefault();
    showCardDetails(card);
  });

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  modalClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  renderBooks();
  renderFilters();
  applyFiltersAndSearch();
})();
