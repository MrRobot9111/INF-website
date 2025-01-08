// Data object mapping each course to its information
const courseData = {
    informationsteknik: {
      title: "Informationsteknik nivå 1",
      content: `
 <p>
      Kursen <strong>Informationsteknik nivå 1</strong> på gymnasienivå täcker grundläggande aspekter av datorteknik, nätverk, programmering och digital kommunikation. Här är de viktigaste momenten som ingår:
   </p>
   <ol>
      <li><strong>Datorers uppbyggnad och funktion</strong>
         <ul>
            <li>Genomgång av datorns grundläggande komponenter (CPU, RAM, moderkort, lagringsenheter)</li>
            <li>Hur operativsystem fungerar och interagerar med datorns hårdvara</li>
         </ul>
      </li>
      <li><strong>Nätverksteknik</strong>
         <ul>
            <li>Grundläggande nätverkstopologier och protokoll (t.ex. TCP/IP)</li>
            <li>Hur man kopplar upp enheter och skapar enklare nätverk</li>
            <li>Grundläggande säkerhetsåtgärder för nätverk</li>
         </ul>
      </li>
      <li><strong>Digital kommunikation och etik</strong>
         <ul>
            <li>Grundläggande förståelse för hur digital kommunikation fungerar</li>
            <li>Säkerhet och integritet online</li>
            <li>Etiska frågor och ansvar inom IT och sociala medier</li>
         </ul>
      </li>
   </ol>
      `,
    },
    "programmering-nivå-1": {
      title: "Programmering nivå 1",
      content: `
   <p>
      I kursen <strong>Programmering nivå 1</strong> på gymnasienivå ligger fokus på att introducera grundläggande programmeringskoncept och bygga en bas för mer avancerade programmeringskurser. Här är de viktigaste momenten som ingår:
   </p>
   <ol>
      <li><strong>Grundläggande Programmeringskoncept</strong>
         <ul>
            <li>Förståelse för grundläggande begrepp som variabler, datatyper (t.ex. heltal, flyttal, strängar), och operatorer (t.ex. +, -, *, /)</li>
            <li>Introduktion till algoritmer och hur man strukturerar kod logiskt</li>
         </ul>
      </li>
      <li><strong>Kontrollstrukturer</strong>
         <ul>
            <li>Villkorssatser: <code>if</code>, <code>else if</code>, <code>else</code></li>
            <li>Loopar: <code>for</code>, <code>while</code>, och <code>do-while</code></li>
         </ul>
      </li>
      <li><strong>Funktioner och Metoder</strong>
         <ul>
            <li>Hur man skapar och använder funktioner för att återanvända kod och organisera programmet bättre</li>
            <li>Argument och returvärden samt skillnaden mellan lokala och globala variabler</li>
         </ul>
      </li>
   </ol>
      `,
    },
    tillämpad: {
      title: "Tillämpad programmering nivå 1",
      content: `
   <p>
      Kursen <strong>Tillämpad programmering nivå 1</strong> på gymnasienivå täcker grundläggande aspekter av programmering med fokus på praktisk tillämpning. Här är de viktigaste momenten som ingår:
   </p>
   <ol>
      <li><strong>Programmeringsspråk och syntax</strong>
         <ul>
            <li>Introduktion till ett eller flera programmeringsspråk (ofta Python)</li>
            <li>Grundläggande syntax och programmeringsstrukturer</li>
         </ul>
      </li>
      <li><strong>Problemlösning och algoritmer</strong>
         <ul>
            <li>Utveckling av logiskt tänkande och problemlösningsförmåga</li>
            <li>Skapande av algoritmer för att lösa praktiska problem</li>
         </ul>
      </li>
      <li><strong>Programutveckling och debugging</strong>
         <ul>
            <li>Grundläggande metoder för att strukturera kod</li>
            <li>Tekniker för att hitta och åtgärda fel i program</li>
         </ul>
      </li>
   </ol>
      `,
    },
    webutveckling: {
      title: "Webutveckling nivå 1",
      content: `
         <ol>
      <li><strong>HTML (Hypertext Markup Language)</strong>
         <ul>
            <li>Introduktion till HTML och dess roll i webbdesign</li>
            <li>Skapa strukturerade webbsidor genom HTML-element som rubriker, paragrafer, bilder, länkar, listor, och formulär</li>
            <li>Grundläggande SEO-principer genom korrekt användning av semantiska element</li>
         </ul>
      </li>
      <li><strong>CSS (Cascading Style Sheets)</strong>
         <ul>
            <li>Lägga till och justera stilmallar (CSS) för att kontrollera webbsidans layout och design</li>
            <li>Använda färger, typsnitt, marginaler, padding och positionering för att skapa visuellt tilltalande och användarvänliga webbsidor</li>
            <li>Introduktion till responsiv design, inklusive grunderna i flexbox och media queries för anpassning till olika skärmstorlekar</li>
         </ul>
      </li>
      <li><strong>Grundläggande JavaScript</strong>
         <ul>
            <li>Introduktion till JavaScript för att skapa dynamiska och interaktiva webbsidor</li>
            <li>Användning av variabler, villkor och loopar för att utföra enkla operationer</li>
            <li>Eventhantering, exempelvis klick- och hoverhändelser, för att förbättra användarupplevelsen</li>
         </ul>
      </li>
   </ol>
      `,
    },
    "programmering-nivå-2": {
      title: "Programmering nivå 2",
      content: 
      `
         <p>
      I kursen <strong>Programmering nivå 2</strong> på gymnasienivå byggs kunskaperna från Programmering nivå 1 vidare, med fokus på mer avancerade programmeringskoncept, objektorienterad programmering och algoritmer. Här är de centrala momenten som ingår:
   </p>
   <ol>
      <li><strong>Fördjupad Objektorienterad Programmering (OOP)</strong>
         <ul>
            <li>Skapande och användning av klasser och objekt, vilket inkluderar:
               <ul>
                  <li>Konstruktorer, metoder, och egenskaper</li>
                  <li>Begrepp som arv (inheritance), inkapsling (encapsulation), och polymorfism</li>
               </ul>
            </li>
            <li>Att förstå och använda designmönster som <code>Singleton</code> och <code>Factory</code> i mindre skala</li>
         </ul>
      </li>
      <li><strong>Avancerade Datastrukturer och Algoritmer</strong>
         <ul>
            <li>Introduktion till mer komplexa datastrukturer som listor, stackar, köer, och hash-tabeller</li>
            <li>Implementering och förståelse av vanliga algoritmer, exempelvis sorteringsalgoritmer (bubbel-, urvalssortering) och sökalgoritmer (binär sökning)</li>
            <li>Grundläggande förståelse för algoritmers komplexitet och hur man bedömer deras effektivitet (Big O-notation kan introduceras)</li>
         </ul>
      </li>
      <li><strong>Hantera Fel och Undantag (Exception Handling)</strong>
         <ul>
            <li>Tekniker för att hantera oväntade situationer i programmet genom att använda undantag (try, catch, throw)</li>
            <li>Skapa robusta program som kan fortsätta köra eller stänga ner säkert vid fel</li>
         </ul>
      </li>
   </ol>
      `,
    },
    alternativ: {
      title: "Alternativ",
      content: `
      <p>Elever som väljer alternativet "Alternativ" har möjlighet att specialisera sig ytterligare inom teknik eller språk. Följande kurser finns att välja mellan:</p>

    <section>
        <h2>1. Teknik specialisering nivå 1</h2>
        <ul>
            <li>En fördjupning inom ett tekniskt område som väljs i samråd med lärare.</li>
            <li>Möjligheten att arbeta med avancerade projekt som kopplar till teknikens roll i samhället och innovation.</li>
            <li>Utforskning av aktuella trender, som AI, hållbar teknik eller ny produktutveckling.</li>
        </ul>
    </section>

    <section>
        <h2>2. Tillämpad programmering nivå 2</h2>
        <ul>
            <li>Fokus på avancerade programmeringskoncept, inklusive objektorienterad programmering, datastrukturer och algoritmer.</li>
            <li>Introduktion till agila arbetsmetoder, versionshantering med Git och testdriven utveckling.</li>
            <li>Praktiskt arbete med större projekt och utveckling av robusta applikationer.</li>
        </ul>
    </section>

    <section>
        <h2>3. Engelska nivå 3</h2>
        <ul>
            <li>Fördjupade studier i det engelska språket med fokus på både muntlig och skriftlig kommunikation.</li>
            <li>Analys av komplexa texter och utveckling av akademiskt skrivande.</li>
            <li>Ökad förståelse för kulturella och historiska aspekter i engelskspråkiga länder.</li>
        </ul>
    </section>

    <p>Eleven kan välja den kurs som bäst matchar deras intressen och framtida mål. Detta val ger en unik möjlighet att fördjupa sig inom ett specifikt område som kompletterar den övriga utbildningen.</p>
      `
    },
  };
  
  // Select elements
  const scrim = document.getElementById('scrim');
  const cards = document.querySelectorAll(".plus-icon");
  const expandedSection = document.querySelector(".expanded-information");
  const exitIcon = document.querySelector(".exit-icon-desktop");
  const expandedHeader = document.querySelector(".expanded-information-header");
  const expandedParagraph = document.querySelector(".expanded-information-paragraph");

  console.log(exitIcon);

  // Hide the explanded information card from the beggining

  expandedSection.classList.add("hide-more-information-card");
  
  // Show course details when a card is clicked
  cards.forEach((card) => {
    card.addEventListener("click", () => {

      // Add a scrim to the backgrund

      scrim.classList.toggle('active'); // Toggle the scrim visibility

      const courseId = card.getAttribute("data-course");
      const courseInfo = courseData[courseId];
  
      if (courseInfo) {
        // Update the expanded information content
        expandedHeader.textContent = courseInfo.title;
        expandedParagraph.innerHTML = courseInfo.content;
  
        // Show the expanded section
        expandedSection.classList.remove("hide-more-information-card");
      }
    });
  });
  
  // Hide the expanded section when the exit icon is clicked
  exitIcon.addEventListener("click", () => {
   console.log("Exit icon clicked");
    expandedSection.classList.add("hide-more-information-card");
    scrim.classList.remove('active');
  });
  