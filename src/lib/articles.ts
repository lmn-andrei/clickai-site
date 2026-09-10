export const CATEGORIES = [
  "Modele",
  "Robotică",
  "Unelte",
  "Industrie",
  "Cercetare",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type ArticleSource = {
  label: string;
  url: string;
};

export type Article = {
  slug: string;
  title: string;
  lead: string;
  body: string[];
  category: Category;
  publishedAt: string;
  sources: ArticleSource[];
  util: string[];
};

export const articles: Article[] = [
  {
    slug: "figure-02-linie-auto",
    title: "Figure pune roboți umaniizi pe o linie de asamblare auto",
    lead: "Compania a anunțat un lot de roboți Figure 02 care preiau sarcini repetitive pe o linie de producție. Operatorul uman rămâne pentru excepții, nu pentru ritmul de bază.",
    body: [
      "Figure a publicat un anunț de produs în care roboții umaniizi Figure 02 lucrează pe o porțiune de linie auto. Sarcinile descrise sunt mutarea pieselor, alinierea și predarea către următorul post. Compania spune că ritmul e susținut de modelul propriu de control, antrenat pe demonstrații din fabrică.",
      "Pentru un cititor care vrea să înțeleagă utilitatea: nu e un robot de laborator. E un sistem care încearcă să înlocuiască munca repetitivă de pe bandă, acolo unde un braț industrial clasic e prea rigid. Anunțul nu include preț pe unitate și nu spune câte fabrici rulează deja în producție, dincolo de demonstrația filmată.",
      "Ce nu e în sursă: un calendar de livrare către terți, o cifră independentă de uptime și o comparație publică cu alți umaniizi. Articolul reține doar ce a comunicat compania despre rolul pe linie și despre faptul că supravegherea umană rămâne pentru excepții.",
    ],
    category: "Robotică",
    publishedAt: "2026-09-03T08:40:00+03:00",
    sources: [
      { label: "Figure", url: "https://www.figure.ai" },
    ],
    util: [
      "roboți",
      "fabrică",
      "automatizare producție",
      "umaniizi",
      "linie de asamblare",
    ],
  },
  {
    slug: "openai-agent-kit-support",
    title: "OpenAI lansează un kit de agenți pentru suport clienți",
    lead: "Un pachet nou din platforma OpenAI e gândit pentru agenți care preiau tichetul, caută în documentație și propun un răspuns. Compania îl prezintă ca produs, nu ca cercetare.",
    body: [
      "OpenAI a anunțat un kit de agenți orientat spre suport: conectare la inbox sau ticketing, căutare în baze de cunoștințe și un flux de predare către un operator uman. Documentația publică descrie limite de instrumente, jurnale de acțiuni și un mod de evaluare pe conversații reale.",
      "Pentru cine vrea să răspundă mai repede la clienți, ăsta e tipul de uneltă care intra până acum pe stack-uri separate. Anunțul vorbește despre reducerea timpului până la primul răspuns, nu despre înlocuirea completă a echipei. Cifrele de performanță vin din testele interne ale companiei.",
      "Nu există în sursă un preț pe conversație pentru toate planurile, nici un audit independent al calității răspunsurilor în română. Textul reține doar funcțiile anunțate și cadrul de predare către om.",
    ],
    category: "Unelte",
    publishedAt: "2026-09-02T16:20:00+03:00",
    sources: [
      { label: "OpenAI", url: "https://openai.com/blog" },
    ],
    util: [
      "să răspund la clienți",
      "suport",
      "automatizare firmă",
      "agenți",
      "ticketing",
    ],
  },
  {
    slug: "deepmind-robotica-sim-to-real",
    title: "DeepMind publică un model de control care trece din simulare în robot real",
    lead: "Laboratorul descrie un sistem antrenat aproape integral în simulator, apoi transferat pe un robot fizic fără re-antrenare lungă. E un rezultat de cercetare, nu un produs de vânzare.",
    body: [
      "Google DeepMind a publicat o lucrare și un material de prezentare despre un model de control antrenat în simulare și rulat pe un robot real. Accentul e pe transfer: aceleași politici, după randomizare de domeniu, țin echilibrul și prind obiecte fără săptămâni de fine-tuning pe hardware.",
      "Pentru cine urmărește robotica aplicată, mesajul e că antrenamentul scump pe robot fizic poate scădea. Pentru un atelier sau o fabrică mică, nu e o uneltă pe care o instalezi mâine. E o metodă, cu clipuri și metrici de laborator.",
      "Sursa nu anunță un SDK comercial și nu compară costul cu stivele deschise deja folosite în depozite. Articolul rămâne la ce e public: transfer sim-to-real și sarcinile demonstrate.",
    ],
    category: "Robotică",
    publishedAt: "2026-09-02T09:15:00+03:00",
    sources: [
      { label: "Google DeepMind", url: "https://deepmind.google" },
    ],
    util: [
      "roboți",
      "cercetare robotică",
      "control",
      "simulatoare",
    ],
  },
  {
    slug: "cursor-agent-codebase",
    title: "Cursor extinde agentul care editează un proiect întreg, nu un fișier",
    lead: "Editorul a scos o actualizare în care agentul planifică modificări pe mai multe fișiere și le aplică într-un singur flux. Compania îl prezintă ca pas de la autocomplete la muncă pe depozit.",
    body: [
      "Cursor a anunțat o actualizare a agentului din editor: citește structura proiectului, propune un plan și aplică patch-uri pe mai multe fișiere. Interfața arată pașii și cere confirmare înainte de scrieri largi. Modelul implicit poate fi schimbat din setări.",
      "Pentru cine vrea să codeze cu AI, diferența față de completarea de linie e că sarcina poate fi „adaugă autentificare pe rute”, nu „închide paranteza”. Anunțul nu garantează că planul e corect pe codebases vechi sau pe monorepo-uri mari. Limitările țin de context și de permisiunile date agentului.",
      "Nu există în sursă un benchmark public comun față de Copilot sau Claude Code pe aceleași task-uri. Rămân funcțiile anunțate și faptul că omul confirmă scrierile.",
    ],
    category: "Unelte",
    publishedAt: "2026-09-01T18:05:00+03:00",
    sources: [
      { label: "Cursor", url: "https://cursor.com" },
    ],
    util: [
      "să codez cu AI",
      "programare",
      "editor",
      "agenți",
      "să scriu cod",
    ],
  },
  {
    slug: "starlink-grok-voice",
    title: "Starlink folosește Grok Voice pentru peste 15.000 de apeluri pe zi",
    lead: "Serviciul de asistență Starlink rulează un agent vocal Grok la scară operațională. Compania spune că majoritatea apelurilor se închid fără operator uman.",
    body: [
      "Starlink folosește un sistem vocal bazat pe Grok pentru a prelua apeluri de asistență și vânzări, la un volum raportat de peste 15.000 de apeluri pe zi. În declarațiile publice asociate lansării, operatorul spune că aproximativ 70% dintre spețe se rezolvă fără transfer către un agent uman și că sistemul procesează mii de comenzi pe săptămână.",
      "Cifrele vin din comunicarea companiei, nu dintr-un audit independent. Ele descriu un caz de utilizare operațional — suport clienți — nu un nou model de frontieră. Grok Voice, inclusiv varianta de răspuns rapid, era deja anunțat ca produs de vorbire, cu latență sub o secundă în testele interne citate de xAI.",
      "Pentru cine vrea să automatizeze telefonul firmei, exemplul arată un model scos din demo și pus pe volum zilnic. Nu rezultă de aici o comparație de performanță față de alți asistenți vocali, în lipsa unui benchmark public comun. Articolul reține doar ce a fost afirmat public despre volum și rată de rezolvare.",
    ],
    category: "Industrie",
    publishedAt: "2026-08-24T17:50:00+03:00",
    sources: [
      { label: "xAI News", url: "https://x.ai/news" },
      { label: "Starlink", url: "https://www.starlink.com" },
    ],
    util: [
      "să răspund la clienți",
      "telefon",
      "suport vocal",
      "automatizare firmă",
      "voce",
    ],
  },
  {
    slug: "arxiv-transfer-cunostinte",
    title: "Pe arXiv, un nou val de lucrări atacă distilarea și transferul între modele",
    lead: "Feedurile cs.LG și cs.AI au publicat, în ultimele zile, mai multe preprinturi despre distilare, transfer de reprezentări și evaluare a cunoștințelor mutate dintr-un model în altul.",
    body: [
      "În intervalul acoperit de aceste feeduri, au apărut preprinturi care tratează distilarea nu ca un truc de compresie, ci ca o problemă de ce se păstrează și ce se pierde când un model mic învață de la unul mare. Alte lucrări propun metrici pentru a măsura dacă o abilitate — raționament, unealtă, limbaj de domeniu — chiar a trecut, nu doar dacă scorul pe un test scurt a crescut.",
      "Pentru un cititor care vrea modele mai mici pe mașina lui, tema e directă: cum faci un model ieftin să țină din comportamentul unuia scump. Textele sunt de laborator. Nu anunță un produs și nu spun ce laborator de frontieră va folosi metoda luna aceasta.",
      "Sursa e arXiv, deci lucrări nerevizuite. Articolul nu extrage un câștigător și nu traduce tabelele într-o recomandare de download.",
    ],
    category: "Cercetare",
    publishedAt: "2026-08-24T08:15:00+03:00",
    sources: [
      { label: "arXiv cs.LG", url: "https://arxiv.org/list/cs.LG/recent" },
      { label: "arXiv cs.AI", url: "https://arxiv.org/list/cs.AI/recent" },
    ],
    util: [
      "modele noi",
      "distilare",
      "modele mici",
      "cercetare",
    ],
  },
  {
    slug: "grok-4-6-gemini-enterprise",
    title: "Grok 4.6 ajunge pe platforma de agenți Gemini Enterprise",
    lead: "xAI a anunțat disponibilitatea lui Grok 4.6 într-un mediu de agenți operat de Google, la nouă zile după lansarea modelului.",
    body: [
      "Grok 4.6 poate fi apelat din Gemini Enterprise ca model pentru agenți. Anunțul xAI îl pune lângă canalele deja deschise: API propriu, Cursor, GitHub Copilot și Amazon Bedrock. Nu e o fuziune de laboratoare. E o listare de model într-un catalog de întreprindere.",
      "Pentru o echipă care deja lucrează în stiva Google Cloud, pragul e mai jos: poți încerca Grok fără să-ți construiești singur tot routing-ul. Anunțul nu detaliază prețul pe token în acest canal și nu spune ce unelte din Enterprise sunt permise modelului.",
      "Rămâne ce e public: disponibilitate, intervalul față de lansare și faptul că e un mediu de agenți, nu un chatbot de consum.",
    ],
    category: "Unelte",
    publishedAt: "2026-08-21T11:40:00+03:00",
    sources: [
      { label: "xAI News", url: "https://x.ai/news" },
    ],
    util: [
      "modele noi",
      "agenți",
      "enterprise",
      "să codez cu AI",
    ],
  },
  {
    slug: "grok-4-6-bedrock",
    title: "Amazon Bedrock listează Grok 4.6",
    lead: "La o săptămână de la lansare, modelul xAI este disponibil prin Bedrock, alături de canalele deja anunțate: API propriu, Cursor și Grok Build.",
    body: [
      "Amazon a adăugat Grok 4.6 în catalogul Bedrock. Asta înseamnă apel prin aceleași contracte de acces, logging și IAM pe care le folosesc deja echipele cu Claude sau Llama pe AWS. xAI a confirmat listarea în comunicarea de produs.",
      "Pentru cine își ține datele în AWS, e o cale să încerce modelul fără un al doilea vendor de infrastructură. Anunțul nu publică aici un tabel complet de preț regional și nu compară latența cu API-ul nativ xAI.",
      "Articolul reține listarea și contextul de canale. Nu deduce o alianță strategică dintr-un rând de catalog.",
    ],
    category: "Unelte",
    publishedAt: "2026-08-19T16:05:00+03:00",
    sources: [
      { label: "xAI News", url: "https://x.ai/news" },
      { label: "Amazon Bedrock", url: "https://aws.amazon.com/bedrock/" },
    ],
    util: [
      "modele noi",
      "aws",
      "api",
      "să integrez un model",
    ],
  },
  {
    slug: "grok-build-web-mobil",
    title: "Grok Build iese pe web și pe mobil",
    lead: "Mediul de construire de aplicații anunțat odată cu Grok 4.6 primește clienți web și mobili, nu doar fluxul din editor.",
    body: [
      "xAI a deschis Grok Build în browser și pe telefon. Produsul e un mediu în care descrii o aplicație și primești un proiect rulat, nu doar un fragment de cod. Anunțul îl leagă de lansarea Grok 4.6, modelul cu care a fost prezentat.",
      "Pentru cine vrea să facă un prototip fără să deschidă un IDE, canalul web scade frecarea. Pe mobil, același flux e limitat de ecran și de ce poate confirma utilizatorul dintr-o sesiune scurtă. Compania nu publică aici un catalog de tipuri de aplicații suportate cap-coadă.",
      "Sursa e comunicarea xAI. Nu există o recenzie independentă de producție în anunț.",
    ],
    category: "Unelte",
    publishedAt: "2026-08-19T10:20:00+03:00",
    sources: [
      { label: "xAI News", url: "https://x.ai/news" },
    ],
    util: [
      "să fac o aplicație",
      "prototip",
      "să codez cu AI",
      "no-code",
    ],
  },
  {
    slug: "grok-4-6-github-copilot",
    title: "Grok 4.6 este disponibil în GitHub Copilot",
    lead: "La două zile după lansare, modelul xAI apare ca opțiune în Copilot, alături de canalele Cursor și API.",
    body: [
      "GitHub Copilot listează Grok 4.6 ca model selectabil. Dezvoltatorii care deja scriu în VS Code sau pe github.com pot schimba modelul din selector, fără un SDK nou. xAI a confirmat canalul în anunțul de produs.",
      "Pentru cine vrea să codeze cu AI în fluxul GitHub, e o opțiune în plus lângă modelele deja din Copilot. Anunțul nu spune ce plan Copilot e necesar pe toate piețele și nu publică un clasament intern de acceptare a patch-urilor.",
      "Rămâne listarea și data relativă la lansarea modelului.",
    ],
    category: "Unelte",
    publishedAt: "2026-08-14T15:18:00+03:00",
    sources: [
      { label: "xAI News", url: "https://x.ai/news" },
      { label: "GitHub Copilot", url: "https://github.com/features/copilot" },
    ],
    util: [
      "să codez cu AI",
      "programare",
      "github",
      "editor",
    ],
  },
  {
    slug: "deepseek-v4-pro",
    title: "DeepSeek publică V4-Pro, o variantă deschisă a modelului de frontieră",
    lead: "Laboratorul chinez a listat DeepSeek-V4-Pro-0813 ca model open-source, în același interval în care Google și xAI au scos actualizări de produs.",
    body: [
      "DeepSeek a pus pe un depozit public greutățile și cardul de model pentru V4-Pro. E prezentat ca variantă deschisă a liniei de frontieră, cu licență și instrucțiuni de rulare. Anunțul îl plasează lângă valul de lansări din august, nu ca un răspuns nominal la un competitor anume.",
      "Pentru cine vrea să ruleze un model pe server propriu, apariția unor greutăți noi e vestea utilă. Cardul de model spune ce context și ce familii de task-uri acoperă. Nu înlocuiește un test făcut pe datele tale.",
      "Nu există în sursă o comparație oficială pe același harness cu Grok 4.6 sau Gemini 3.7. Articolul nu inventează una.",
    ],
    category: "Modele",
    publishedAt: "2026-08-13T08:22:00+03:00",
    sources: [
      { label: "DeepSeek", url: "https://www.deepseek.com" },
    ],
    util: [
      "modele noi",
      "open source",
      "să rulez local",
      "llm",
    ],
  },
  {
    slug: "gemini-3-7-flash",
    title: "Google lansează Gemini 3.7 Flash, un model ușor pentru latență mică",
    lead: "DeepMind a adăugat Gemini 3.7 Flash în familia 3.x. Este o actualizare de produs, nu un model de generație nouă.",
    body: [
      "Google a listat Gemini 3.7 Flash ca variantă rapidă în familia 3.x. Destinația declarată e latență mică: chat, clasificare, unelte care trebuie să răspundă în buclă. Anunțul îl separă explicit de o generație nouă de model.",
      "Pentru cine scrie texte sau leagă un asistent de un flux scurt, Flash e varianta pe care o alegi când costul și timpul contează mai mult decât un raționament lung. Documentația publică acoperă ferestre de context și canalele API deja folosite de familia 3.",
      "Sursa nu publică aici un tabel complet de preț pe toate regiunile. Nu e Gemini 4.",
    ],
    category: "Modele",
    publishedAt: "2026-08-12T18:40:00+03:00",
    sources: [
      { label: "Google DeepMind", url: "https://deepmind.google" },
    ],
    util: [
      "modele noi",
      "să scriu texte",
      "latență mică",
      "chat",
    ],
  },
  {
    slug: "grok-4-6",
    title: "xAI lansează Grok 4.6, construit pentru agenți care rămân pe sarcină",
    lead: "Modelul este o actualizare de post-antrenare pe fundația V9, cu fereastră de 500.000 de tokeni și un nivel nou de raționament, „xhigh”.",
    body: [
      "xAI a lansat Grok 4.6 ca actualizare de post-antrenare, nu ca pre-antrenare de la zero. Comunicarea de produs pune accent pe agenți care țin o sarcină lungă: ferestre mari, un nivel de raționament numit xhigh și instrumente legate de Grok Build.",
      "Pentru cine construiește fluxuri în care modelul trebuie să nu uite scopul după zeci de pași, ăsta e mesajul de lansare. Cifrele de context și denumirea nivelului de raționament vin din anunțul xAI. Nu sunt măsurători ale clickai.",
      "Articolul nu compară Grok 4.6 cu GPT sau Claude pe un harness propriu. Reține specificațiile publicate și poziționarea pe agenți.",
    ],
    category: "Modele",
    publishedAt: "2026-08-12T16:10:00+03:00",
    sources: [
      { label: "xAI News", url: "https://x.ai/news" },
    ],
    util: [
      "modele noi",
      "agenți",
      "llm",
      "să codez cu AI",
    ],
  },
];

export const SOURCES = [
  {
    name: "OpenAI",
    blurb: "anunțuri de produs și cercetare",
    url: "https://openai.com/blog",
  },
  {
    name: "xAI News",
    blurb: "lansări Grok, API și produse xAI",
    url: "https://x.ai/news",
  },
  {
    name: "Google DeepMind",
    blurb: "modele Gemini și cercetare de robotică",
    url: "https://deepmind.google",
  },
  {
    name: "Hugging Face Blog",
    blurb: "modele deschise, unelte, distilare",
    url: "https://huggingface.co/blog",
  },
  {
    name: "arXiv cs.AI",
    blurb: "preprinturi de inteligență artificială",
    url: "https://arxiv.org/list/cs.AI/recent",
  },
  {
    name: "arXiv cs.LG",
    blurb: "preprinturi de învățare automată",
    url: "https://arxiv.org/list/cs.LG/recent",
  },
  {
    name: "VentureBeat AI",
    blurb: "industrie, produse, companii",
    url: "https://venturebeat.com/category/ai/",
  },
];

export const INTENT_HINTS = [
  {
    label: "să scriu texte",
    keys: ["scriu", "texte", "scriere", "redactare", "chat"],
  },
  {
    label: "să-mi automatizez firma",
    keys: [
      "automatizare",
      "automatizez",
      "firma",
      "suport",
      "clienti",
      "ticketing",
      "telefon",
      "vocal",
    ],
  },
  {
    label: "roboți",
    keys: ["robot", "roboti", "robotica", "umaniizi", "fabrica"],
  },
  {
    label: "modele noi",
    keys: ["modele", "model", "llm", "lansare", "flash", "grok", "gemini", "deepseek"],
  },
  {
    label: "să codez cu AI",
    keys: ["codez", "cod", "programare", "editor", "copilot", "cursor", "github"],
  },
] as const;

export type IntentHint = (typeof INTENT_HINTS)[number]["label"];


export function getArticle(slug: string) {
  return articles.find((item) => item.slug === slug);
}

export function articlesByCategory(category: Category | "Toate") {
  if (category === "Toate") return articles;
  return articles.filter((item) => item.category === category);
}

export function relatedArticles(article: Article, limit = 3) {
  return articles
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .slice(0, limit);
}

export function formatArticleDate(iso: string) {
  const date = new Date(iso);
  const months = [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie",
  ];
  return {
    dayKey: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
    heading: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
    short: `${date.getDate()} ${months[date.getMonth()].slice(0, 3)}`,
    time: `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`,
    long: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`,
  };
}

export function groupByDay(list: Article[]) {
  const groups: { key: string; heading: string; items: Article[] }[] = [];
  for (const item of list) {
    const stamp = formatArticleDate(item.publishedAt);
    const existing = groups.find((group) => group.key === stamp.dayKey);
    if (existing) existing.items.push(item);
    else groups.push({ key: stamp.dayKey, heading: stamp.heading, items: [item] });
  }
  return groups;
}

const STOP = new Set([
  "sa",
  "sa-mi",
  "mi",
  "cu",
  "de",
  "la",
  "pe",
  "un",
  "o",
  "si",
  "in",
  "din",
  "ce",
  "vrei",
  "faci",
  "mai",
  "un",
  "o",
  "al",
  "ai",
  "a",
]);

function tokens(query: string) {
  return foldQuery(query)
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 3 && !STOP.has(token));
}

function foldQuery(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function keysForQuery(query: string) {
  const folded = foldQuery(query);
  const hint = INTENT_HINTS.find((item) => foldQuery(item.label) === folded);
  if (hint) return [...hint.keys];
  return tokens(query);
}

export function matchIntent(list: Article[], query: string) {
  const raw = query.trim();
  if (!raw) return list;
  const keys = keysForQuery(raw);
  if (keys.length === 0) return list;

  const scored = list
    .map((item) => {
      const hay = foldQuery(
        [item.title, item.lead, item.body.join(" "), item.util.join(" "), item.category].join(" "),
      );
      const utilHay = foldQuery(item.util.join(" "));
      let score = 0;
      for (const key of keys) {
        if (utilHay.includes(key)) score += 4;
        if (foldQuery(item.title).includes(key)) score += 3;
        else if (hay.includes(key)) score += 1;
      }
      return { item, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || +new Date(b.item.publishedAt) - +new Date(a.item.publishedAt));

  return scored.map((row) => row.item);
}

export const latestPublishedAt = articles[0]?.publishedAt ?? new Date().toISOString();
