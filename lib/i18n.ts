export type Lang = "en" | "ar";
export const LANGS: Lang[] = ["ar", "en"];
export const isLang = (x: string): x is Lang => x === "en" || x === "ar";
export const dirOf = (l: Lang) => (l === "ar" ? "rtl" : "ltr");
export const other = (l: Lang): Lang => (l === "ar" ? "en" : "ar");
export const href = (l: Lang, p = "") => `/${l}${p}`;

export type Bi = { en: string; ar: string };

// Investor/partner contact. Override per environment; invest@ is the only address in the design spec.
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "invest@kafoai.com";
export const INVEST_EMAIL = "invest@kafoai.com";

export const UI = {
  nav: {
    products: { en: "Products", ar: "المنتجات" },
    forBanks: { en: "For banks", ar: "للبنوك" },
    insights: { en: "Insights", ar: "رؤى" },
    research: { en: "Research", ar: "الأبحاث" },
    investors: { en: "Investors", ar: "للمستثمرين" },
    partner: { en: "Partner with us", ar: "كن شريكاً" },
    switch: { en: "العربية", ar: "English" },
  },
  home: { en: "Home", ar: "الرئيسية" },
  brand: { en: "Kafo AI", ar: "كافو AI" },
  footer: { en: "All rights reserved", ar: "جميع الحقوق محفوظة" },
  eyebrow: {
    en: "AI · Fintech · Blockchain · Islamic finance",
    ar: "الذكاء الاصطناعي · التقنية المالية · البلوك تشين · التمويل الإسلامي",
  },
  h1: { en: "Building intelligent financial infrastructure.", ar: "نبني بنية تحتية مالية أكثر ذكاءً." },
  intro: {
    en: "Kafo AI is a technology venture that pairs market knowledge with dedicated AI and fintech R&D. We build products in AI risk intelligence, personal finance, blockchain credit and Islamic digital finance.",
    ar: "كافو AI شراكة تقنية ناشئة تجمع المعرفة بالأسواق مع البحث والتطوير المتخصص، لبناء منتجات في ذكاء المخاطر والتمويل الشخصي والائتمان على البلوك تشين والتمويل الرقمي الإسلامي.",
  },
  ctaPortfolio: { en: "Explore the portfolio", ar: "استكشف المنتجات" },
  ctaPilot: { en: "Discuss a pilot", ar: "ناقش مشروعاً تجريبياً" },
  whatIs: { en: "What is Kafo AI?", ar: "ما هي كافو AI؟" },
  whatIsAnswer: {
    en: "Kafo AI is a fintech and AI venture that builds intelligent financial infrastructure. Its portfolio of nine products serves banks, fintechs and consumers, in Arabic and English.",
    ar: "كافو AI شركة ناشئة في الذكاء الاصطناعي والتقنية المالية تبني بنية تحتية مالية ذكية. تضم محفظتها تسعة منتجات تخدم البنوك وشركات التقنية المالية والمستهلكين، بالعربية والإنجليزية.",
  },
  factLabels: {
    focus: { en: "Focus", ar: "التركيز" },
    languages: { en: "Languages", ar: "اللغات" },
    products: { en: "Products", ar: "المنتجات" },
  },
  factFocus: { en: "AI, fintech, blockchain, Islamic finance", ar: "الذكاء الاصطناعي، التقنية المالية، البلوك تشين، التمويل الإسلامي" },
  factLanguages: { en: "Arabic, English", ar: "العربية، الإنجليزية" },
  portfolio: { en: "The portfolio", ar: "منظومة المنتجات" },
  portfolioSub: { en: "Nine AI and fintech products", ar: "تسعة منتجات في الذكاء الاصطناعي والتقنية المالية" },
  pillars: [
    { n: "01", t: { en: "Market", ar: "الأسواق" }, d: { en: "Market knowledge, business development and partner access", ar: "المعرفة بالأسواق وتطوير الأعمال والوصول إلى الشركاء" } },
    { n: "02", t: { en: "R&D", ar: "البحث والتطوير" }, d: { en: "AI engineering, research and fintech product development", ar: "هندسة الذكاء الاصطناعي والأبحاث وتطوير المنتجات المالية" } },
    { n: "03", t: { en: "Portfolio", ar: "المحفظة" }, d: { en: "Nine AI and fintech products", ar: "تسعة منتجات في الذكاء الاصطناعي والتقنية المالية" } },
  ],
  thesis: [
    { t: { en: "One platform, nine products", ar: "منصة واحدة وتسعة منتجات" }, d: { en: "Shared AI, data and blockchain foundations reduce the cost of each new product.", ar: "أسس مشتركة في الذكاء الاصطناعي والبيانات والبلوك تشين تخفّض كلفة كل منتج جديد." } },
    { t: { en: "Arabic-first by design", ar: "العربية أولاً" }, d: { en: "Native Arabic products and Islamic finance research for a market that is underserved.", ar: "منتجات عربية أصيلة وأبحاث في التمويل الإسلامي لسوق لم يُخدَم بما يكفي." } },
    { t: { en: "Evidence over hype", ar: "الدليل قبل الوعود" }, d: { en: "Every public claim is checked against working code. Stages are reported as they are.", ar: "كل ادعاء علني يُتحقَّق منه مقابل شيفرة فعلية، والمراحل تُعرض كما هي." } },
  ],
  showcase: {
    title: { en: "Our products in action", ar: "منتجاتنا قيد العمل" },
    sub: { en: "Screens from our working products, using demo or public data.", ar: "لقطات من منتجاتنا العاملة، ببيانات تجريبية أو عامة." },
    all: { en: "See all nine products", ar: "اطّلع على المنتجات التسعة" },
  },
  latestInsights: { en: "Latest insights", ar: "أحدث الرؤى" },
  allInsights: { en: "All insights", ar: "كل الرؤى" },
  englishOnly: { en: "", ar: "(بالإنجليزية)" },
  related: { en: "Related products", ar: "منتجات ذات صلة" },
  faq: { en: "Frequently asked", ar: "أسئلة شائعة" },
  features: { en: "What it does", ar: "ما الذي يقدمه" },
  visit: { en: "Visit", ar: "زيارة" },
  readMore: { en: "Read more", ar: "اقرأ المزيد" },
  partner: {
    h1: { en: "Partner with Kafo AI", ar: "كن شريكاً مع كافو AI" },
    intro: {
      en: "Pilot programmes, proof-of-concept work and co-development across risk analytics, embedded finance and credit intelligence.",
      ar: "برامج تجريبية وإثبات مفهوم وتطوير مشترك في تحليلات المخاطر والتمويل المدمج والذكاء الائتماني.",
    },
    areas: { en: "Areas of partnership", ar: "مجالات الشراكة" },
    ways: { en: "Ways to work together", ar: "طرق التعاون" },
    cta: { en: "Start a partnership enquiry", ar: "ابدأ استفسار شراكة" },
    categories: [
      { en: "AI financial intelligence", ar: "الذكاء المالي بالذكاء الاصطناعي" },
      { en: "Embedded finance & banking tech", ar: "التمويل المدمج وتقنيات البنوك" },
      { en: "Personal finance innovation", ar: "ابتكار في التمويل الشخصي" },
      { en: "Blockchain credit intelligence", ar: "الذكاء الائتماني على البلوك تشين" },
      { en: "Islamic fintech research", ar: "أبحاث التقنية المالية الإسلامية" },
      { en: "Joint R&D", ar: "البحث والتطوير المشترك" },
      { en: "Licensing & co-development", ar: "الترخيص والتطوير المشترك" },
      { en: "Pilots & proof of concept", ar: "المشاريع التجريبية وإثبات المفهوم" },
    ] as Bi[],
    kinds: [
      { en: "Pilot / PoC", ar: "مشروع تجريبي" },
      { en: "Licensing", ar: "ترخيص" },
      { en: "Co-development", ar: "تطوير مشترك" },
      { en: "R&D", ar: "بحث وتطوير" },
      { en: "Investment", ar: "استثمار" },
    ] as Bi[],
  },
  banks: {
    h1: { en: "AI solutions for banks", ar: "حلول الذكاء الاصطناعي للبنوك" },
    intro: {
      en: "Pilot programmes, proof-of-concept work and co-development across risk analytics, embedded finance and credit intelligence.",
      ar: "برامج تجريبية وإثبات مفهوم وتطوير مشترك في تحليلات المخاطر والتمويل المدمج والذكاء الائتماني.",
    },
    products: { en: "Products relevant to banks", ar: "منتجات مناسبة للبنوك" },
  },
  investors: {
    h1: { en: "Investors", ar: "للمستثمرين" },
    intro: {
      en: "Kafo AI is building shared AI, data and blockchain infrastructure behind nine products. The next milestone is going live with launch partners.",
      ar: "تبني كافو AI بنية تحتية مشتركة للذكاء الاصطناعي والبيانات والبلوك تشين خلف تسعة منتجات. المرحلة القادمة هي الإطلاق مع شركاء الإطلاق.",
    },
    thesis: { en: "Why Kafo AI", ar: "لماذا كافو AI" },
    how: { en: "How access works", ar: "كيف يتم الوصول" },
    steps: [
      { t: { en: "Request access", ar: "اطلب الوصول" }, d: { en: "Send the form or email invest@kafoai.com.", ar: "أرسل طلباً أو راسل invest@kafoai.com." } },
      { t: { en: "Short intro call", ar: "مكالمة تعارف قصيرة" }, d: { en: "We confirm your fit and what you want to see.", ar: "نتأكد من ملاءمتك وما تودّ الاطلاع عليه." } },
      { t: { en: "NDA", ar: "اتفاقية سرية" }, d: { en: "Signed electronically.", ar: "تُوقَّع إلكترونياً." } },
      { t: { en: "Data room opens", ar: "فتح غرفة البيانات" }, d: { en: "Documents are watermarked to you and every view is logged.", ar: "تُوسَم المستندات باسمك ويُسجَّل كل اطلاع." } },
    ],
    kinds: [
      { en: "Venture capital", ar: "رأس المال الجريء" },
      { en: "Angel", ar: "مستثمر ملاك" },
      { en: "Family office", ar: "مكتب عائلي" },
      { en: "Corporate / strategic", ar: "شركات / استراتيجي" },
      { en: "Institutional", ar: "مؤسسي" },
    ] as Bi[],
    kindsLabel: { en: "Investor types we speak with", ar: "أنواع المستثمرين الذين نتحدث معهم" },
    cta: { en: "Request access", ar: "اطلب الوصول" },
    note: {
      en: "For professional and institutional investors. The data room is private and opens after an introduction and NDA. This page is information only and is not an offer or solicitation to buy securities.",
      ar: "موجّه للمستثمرين المحترفين والمؤسسيين. غرفة البيانات خاصة وتُفتح بعد التعارف وتوقيع اتفاقية السرية. هذه الصفحة للمعلومات فقط وليست عرضاً أو دعوة لشراء أوراق مالية.",
    },
  },
};

export type Product = {
  slug: string;
  name: string;
  tagline: Bi;
  desc: Bi;
  seoTitle: Bi;
  external?: { url: string; label: string };
  features?: { t: Bi; d: Bi; status?: string }[];
  faq?: { q: Bi; a: Bi }[];
  steps?: { t: Bi; d: Bi }[];
  banks?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "omnirisk",
    name: "OmniRisk",
    tagline: { en: "AI risk intelligence", ar: "ذكاء المخاطر" },
    desc: { en: "Multi-chain digital-asset risk analytics with explainable scoring.", ar: "تحليلات مخاطر الأصول الرقمية عبر سلاسل متعددة مع تقييم قابل للتفسير." },
    seoTitle: { en: "OmniRisk | Crypto Risk Intelligence Platform", ar: "OmniRisk | منصة تحليل مخاطر العملات الرقمية — كافو AI" },
    external: { url: "https://omnirisk.io", label: "omnirisk.io" },
    banks: true,
    features: [
      { t: { en: "On-chain analytics", ar: "تحليلات على السلسلة" }, d: { en: "Transaction and address analysis across supported chains.", ar: "تحليل المعاملات والعناوين عبر السلاسل المدعومة." } },
      { t: { en: "Explainable scoring", ar: "تقييم قابل للتفسير" }, d: { en: "Each risk score is shown with the signals that drive it.", ar: "يُعرض كل تقييم مخاطر مع الإشارات التي تحرّكه." } },
      { t: { en: "Market risk", ar: "مخاطر السوق" }, d: { en: "Assessment of token and market-level exposure.", ar: "تقييم التعرض على مستوى الرمز والسوق." } },
      { t: { en: "Agentic investigations", ar: "تحقيقات بالوكلاء الأذكياء" }, d: { en: "AI agents that assemble an investigation trail for an analyst.", ar: "وكلاء ذكاء اصطناعي يجمعون مسار التحقيق للمحلل." } },
    ],
    faq: [
      {
        q: { en: "Does OmniRisk do bank credit scoring?", ar: "هل يقدّم OmniRisk تقييماً ائتمانياً مصرفياً؟" },
        a: { en: "No. OmniRisk scores digital-asset and on-chain risk. For verifiable credit intelligence, see RayaChain.", ar: "لا. يقيّم OmniRisk مخاطر الأصول الرقمية والمخاطر على السلسلة. للمعلومات الائتمانية القابلة للتحقق، راجع RayaChain." },
      },
    ],
  },
  {
    slug: "ai-wealth",
    name: "AI Wealth",
    tagline: { en: "AI personal finance manager (PFM)", ar: "مدير مالي شخصي بالذكاء الاصطناعي (PFM)" },
    desc: {
      en: "An AI personal finance manager (PFM): expenses, budgets, savings goals and holdings in one clear view.",
      ar: "مدير مالي شخصي بالذكاء الاصطناعي (PFM): المصروفات والميزانيات وأهداف الادخار والأصول في عرض واحد واضح.",
    },
    seoTitle: { en: "AI Wealth | AI Personal Finance Manager (PFM)", ar: "AI Wealth | مدير مالي شخصي بالذكاء الاصطناعي — كافو AI" },
  },
  {
    slug: "rayachain",
    name: "RayaChain",
    tagline: { en: "Blockchain credit intelligence", ar: "ذكاء ائتماني على البلوك تشين" },
    desc: { en: "Verifiable credit intelligence recorded on blockchain.", ar: "معلومات ائتمانية قابلة للتحقق مسجّلة على البلوك تشين." },
    seoTitle: { en: "RayaChain | Blockchain Credit Scoring", ar: "RayaChain | التقييم الائتماني بالبلوك تشين — كافو AI" },
    banks: true,
  },
  {
    slug: "circul",
    name: "Circul",
    tagline: { en: "Digital savings circles", ar: "جمعيات ادخار رقمية" },
    desc: { en: "An Arabic-first digital Jam’iya for contributions and payout rotations.", ar: "جمعية رقمية بالعربية أولاً لتنظيم المساهمات وأدوار الاستلام." },
    seoTitle: { en: "Circul | Digital Savings Circle (Jam’iya)", ar: "Circul | جمعية رقمية للادخار — كافو AI" },
  },
  {
    slug: "islamic-finance",
    name: "Islamic Crypto Lending",
    tagline: { en: "Islamic digital finance", ar: "التمويل الرقمي الإسلامي" },
    desc: { en: "Research into Sharia-compliant models for digital-asset financing.", ar: "بحث في نماذج متوافقة مع الشريعة لتمويل الأصول الرقمية." },
    seoTitle: { en: "Islamic Digital Finance | Sharia-Compliant Crypto", ar: "التمويل الرقمي الإسلامي | متوافق مع الشريعة — كافو AI" },
  },
  {
    slug: "qardx-instant",
    name: "QardX Instant",
    tagline: { en: "Embedded fintech", ar: "تقنية مالية مدمجة" },
    desc: { en: "Infrastructure for embedding financial services in applications.", ar: "بنية تحتية لدمج الخدمات المالية في التطبيقات." },
    seoTitle: { en: "QardX Instant | Embedded Fintech Infrastructure", ar: "QardX Instant | تقنية مالية مدمجة — كافو AI" },
    banks: true,
  },
  {
    slug: "lasttable",
    name: "LastTable",
    tagline: { en: "AI revenue engine for hospitality", ar: "محرك إيرادات ذكي للضيافة" },
    desc: {
      en: "Fills empty tables, brings in new diners and drives growth automatically for UAE restaurants.",
      ar: "يملأ الطاولات الفارغة ويجلب روّاداً جدداً ويحقق نمواً تلقائياً لمطاعم الإمارات.",
    },
    seoTitle: { en: "LastTable | AI Revenue Engine for Restaurants", ar: "LastTable | محرك إيرادات ذكي للمطاعم — كافو AI" },
    external: { url: "https://lasttable.ae", label: "lasttable.ae" },
    steps: [
      { t: { en: "See what is really free", ar: "اطّلع على الطاولات المتاحة فعلاً" }, d: { en: "Every time slot shown is a table the venue has open right now, from the same system it books on.", ar: "كل موعد معروض هو طاولة متاحة لدى المطعم الآن، من النظام نفسه الذي يحجز عليه." } },
      { t: { en: "Book with your phone number", ar: "احجز برقم هاتفك" }, d: { en: "The table is held for five minutes while you confirm with a one-time code. No account, no card.", ar: "تُحجز الطاولة خمس دقائق ريثما تؤكد برمز لمرة واحدة. دون حساب ودون بطاقة." } },
      { t: { en: "Show up and pay there", ar: "احضر وادفع في المطعم" }, d: { en: "Your booking and any Flash discount appear on the venue’s screen. You pay the restaurant at the end of the meal.", ar: "يظهر حجزك وأي خصم فلاش على شاشة المطعم. تدفع للمطعم في نهاية الوجبة." } },
    ],
    features: [
      { t: { en: "Flash Tables", ar: "طاولات فلاش" }, d: { en: "Venues put time-limited offers on the few tables they want to fill, such as 10–25% off food.", ar: "عروض محدودة المدة يضعها المطعم على الطاولات التي يريد ملأها." }, status: "Live" },
      { t: { en: "Cancellation Radar", ar: "رادار الإلغاءات" }, d: { en: "Watches a full venue for your party size and time, and sends an alert when a matching table opens up.", ar: "يراقب المطعم الممتلئ ويرسل تنبيهاً عندما تتوفر طاولة مطابقة." }, status: "In progress" },
      { t: { en: "AI assistant", ar: "المساعد الذكي" }, d: { en: "Answers diners’ questions from live availability only, so it never suggests a table that isn’t there.", ar: "يجيب عن الأسئلة من التوفر المباشر فقط." }, status: "Live" },
      { t: { en: "Ramadan mode", ar: "وضع رمضان" }, d: { en: "Separate iftar and suhoor slots that follow each day’s sunset time. Participating venues help shape it.", ar: "مواعيد إفطار وسحور منفصلة تتبع وقت الغروب كل يوم." }, status: "Planned" },
    ],
    faq: [
      { q: { en: "Is LastTable free for diners?", ar: "هل LastTable مجاني للرواد؟" }, a: { en: "Yes. Diners browse without an account, verify their phone by SMS when they book, and pay the restaurant directly. They never pay in the app.", ar: "نعم. يتصفح الرواد دون حساب، ويتحققون من هواتفهم برسالة نصية عند الحجز، ويدفعون للمطعم مباشرة. لا دفع داخل التطبيق." } },
      { q: { en: "How do venues pay?", ar: "كيف تدفع المطاعم؟" }, a: { en: "Managing tables is free. A venue pays a credit only for a new guest who books through LastTable and shows up.", ar: "إدارة الطاولات مجانية. يدفع المطعم رصيداً فقط عن ضيف جديد يحجز عبر LastTable ويحضر." } },
      { q: { en: "Can I use the app now?", ar: "هل يمكنني استخدام التطبيق الآن؟" }, a: { en: "The app beta is invite-only. Leave your number for a link, or book on the web at app.lasttable.ae.", ar: "النسخة التجريبية للتطبيق بالدعوة فقط. اترك رقمك لتصلك الدعوة، أو احجز عبر الويب على app.lasttable.ae." } },
    ],
  },
  {
    slug: "growthos",
    name: "GrowthOS",
    tagline: { en: "Agentic growth platform", ar: "منصة نمو بالوكلاء الأذكياء" },
    desc: {
      en: "A multi-tenant agentic growth platform with an Arabic-first Agent Studio, where AI employees work under owner approval and spend caps.",
      ar: "منصة نمو متعددة المستأجرين تعمل بالوكلاء الأذكياء، مع استوديو وكلاء عربي أولاً وموظفين بالذكاء الاصطناعي تحت موافقة المالك وحدود الإنفاق.",
    },
    seoTitle: { en: "GrowthOS | Agentic AI Growth Platform", ar: "GrowthOS | منصة نمو بالذكاء الاصطناعي — كافو AI" },
    external: { url: "https://app.kafoai.com", label: "app.kafoai.com" },
    features: [
      { t: { en: "Agent Studio", ar: "استوديو الوكلاء" }, d: { en: "Build and manage AI agents in an Arabic-first studio.", ar: "ابنِ وكلاء الذكاء الاصطناعي وأدِرهم في استوديو عربي أولاً." } },
      { t: { en: "AI Employee Studio", ar: "استوديو الموظفين الأذكياء" }, d: { en: "Set up AI employees and playbooks for a business.", ar: "أعدّ موظفين بالذكاء الاصطناعي وخطط عمل لنشاطك التجاري." } },
      { t: { en: "Campaign governance", ar: "حوكمة الحملات" }, d: { en: "Campaigns pass through approval and governance controls before anything goes out.", ar: "تمر الحملات عبر ضوابط الموافقة والحوكمة قبل إطلاق أي شيء." } },
      { t: { en: "Safety controls", ar: "ضوابط الأمان" }, d: { en: "Kill switches, spend caps and audit logs. Live AI runs only in workspaces the owner has approved.", ar: "مفاتيح إيقاف وحدود إنفاق وسجلات تدقيق. ولا يعمل الذكاء الاصطناعي الحي إلا في مساحات عمل وافق عليها المالك." } },
    ],
    faq: [
      {
        q: { en: "Is GrowthOS live?", ar: "هل GrowthOS متاح الآن؟" },
        a: {
          en: "GrowthOS is live in pilot at app.kafoai.com. Today, outbound messages and ad spend are disabled; Kafo Sales (email, replies and meeting booking) is in development.",
          ar: "GrowthOS متاح تجريبياً على app.kafoai.com. حالياً الرسائل الصادرة والإنفاق الإعلاني معطّلان، وكفو للمبيعات (البريد والردود وحجز الاجتماعات) قيد التطوير.",
        },
      },
      {
        q: { en: "Who uses GrowthOS?", ar: "من يستخدم GrowthOS؟" },
        a: {
          en: "LastTable and Circul connect to GrowthOS as clients. GrowthOS does not change their data.",
          ar: "يرتبط LastTable وCircul بـ GrowthOS كعميلين. ولا يعدّل GrowthOS بياناتهما.",
        },
      },
    ],
  },
  {
    slug: "meithera",
    name: "Meithera",
    tagline: { en: "Fractional property investment (proposed)", ar: "استثمار عقاري جزئي (مقترح)" },
    desc: {
      en: "A proposed Irish platform for fractional investment in refurbished homes, shown today as a demonstration with fictional data.",
      ar: "منصة إيرلندية مقترحة للاستثمار الجزئي في المنازل المجددة، تُعرض اليوم كنموذج تجريبي ببيانات افتراضية.",
    },
    seoTitle: { en: "Meithera | Proposed Fractional Property Platform", ar: "Meithera | منصة عقارية مقترحة للملكية الجزئية — كافو AI" },
    external: { url: "https://meithera.omnirisk.io", label: "meithera.omnirisk.io" },
    features: [
      { t: { en: "Home Digital Passport", ar: "جواز المنزل الرقمي" }, d: { en: "Each home has a digital passport and an illustrative returns calculator.", ar: "لكل منزل جواز رقمي وحاسبة توضيحية للعوائد." }, status: "Demonstration" },
      { t: { en: "Raya Chain register", ar: "سجل Raya Chain" }, d: { en: "In the demonstration, a simulated register shows holders, cap tables and payouts, with an explorer for audit.", ar: "في النموذج التجريبي، يعرض سجل محاكى الملّاك وجداول الملكية والدفعات، مع مستكشف للتدقيق." }, status: "Demonstration" },
      { t: { en: "Supervisor view", ar: "عرض المشرف" }, d: { en: "An illustrative supervisory view with CSV and JSON export.", ar: "عرض إشرافي توضيحي مع تصدير بصيغتي CSV وJSON." }, status: "Demonstration" },
      { t: { en: "Tenant to owner", ar: "من مستأجر إلى مالك" }, d: { en: "A simulator for tenants buying into their home over time. This stage would need further authorisation.", ar: "محاكي لشراء المستأجر حصة في منزله تدريجياً. وتحتاج هذه المرحلة إلى ترخيص إضافي." }, status: "Proposed" },
    ],
    faq: [
      {
        q: { en: "Is Meithera authorised or regulated?", ar: "هل Meithera مرخّصة أو خاضعة للتنظيم؟" },
        a: {
          en: "No. Meithera is a demonstration. It is not authorised or regulated by the Central Bank of Ireland, and the Innovation Hub provides guidance, not approval. Every home, person and figure shown is fictional.",
          ar: "لا. Meithera نموذج تجريبي. وهي غير مرخّصة أو خاضعة لتنظيم البنك المركزي الإيرلندي، وتقدّم Innovation Hub إرشاداً لا موافقة. وكل منزل وشخص ورقم معروض هو افتراضي.",
        },
      },
      {
        q: { en: "Can I invest through Meithera?", ar: "هل يمكنني الاستثمار عبر Meithera؟" },
        a: {
          en: "No. The demonstration has no real investments, payments, identity checks, tokens or wallets.",
          ar: "لا. لا يتضمن النموذج التجريبي أي استثمارات أو مدفوعات أو فحوص هوية أو رموز أو محافظ حقيقية.",
        },
      },
      {
        q: { en: "What is the idea?", ar: "ما هي الفكرة؟" },
        a: {
          en: "Meithera is proposed to let people fund the refurbishment of vacant homes in small amounts, under EU crowdfunding rules and with a partner first, so more homes come to the market. Any live service would be subject to regulatory assessment.",
          ar: "تقترح Meithera تمكين الناس من تمويل تجديد المنازل الشاغرة بمبالغ صغيرة، وفق قواعد التمويل الجماعي الأوروبية ومع شريك أولاً، لزيادة المنازل المتاحة في السوق. وأي خدمة فعلية تخضع للتقييم التنظيمي.",
        },
      },
    ],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
