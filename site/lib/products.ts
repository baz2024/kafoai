export type ProductStatus = 'LAUNCH-READY' | 'OPEN TESTING' | 'PRE-LAUNCH';

export interface ProductFeature {
  title: string;
  titleAr: string;
  desc: string;
  descAr: string;
  status: 'LIVE' | 'READY' | 'IN PROGRESS' | 'PLANNED';
}

export interface ProductFaq {
  q: string;
  qAr: string;
  a: string;
  aAr: string;
}

export interface LastTableSystem {
  key: string;
  keyAr: string;
  title: string;
  titleAr: string;
  desc: string;
  descAr: string;
  status: string;
  accent: string;
}

export interface Product {
  slug: string;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  categoryEn: string;
  categoryAr: string;
  descEn: string;
  descAr: string;
  longDescEn: string;
  longDescAr: string;
  accent: string;
  status: ProductStatus;
  statusAr: string;
  externalUrl?: string;
  features: ProductFeature[];
  faq: ProductFaq[];
  ltSystems?: LastTableSystem[];
}

export const products: Product[] = [
  {
    slug: 'omnirisk',
    nameEn: 'OmniRisk',
    nameAr: 'OmniRisk',
    taglineEn: 'AI Risk Intelligence',
    taglineAr: 'ذكاء المخاطر الرقمية',
    categoryEn: 'Digital Asset Risk Intelligence',
    categoryAr: 'ذكاء مخاطر الأصول الرقمية',
    accent: '#5CC8F0',
    status: 'LAUNCH-READY',
    statusAr: 'جاهز للإطلاق',
    externalUrl: 'https://omnirisk.io',
    descEn: 'Multi-chain digital asset risk analytics with explainable scoring across eight blockchains.',
    descAr: 'تحليلات مخاطر الأصول الرقمية عبر ثماني سلاسل بلوك تشين مع تقييم قابل للتفسير.',
    longDescEn: 'OmniRisk is a multi-chain digital asset risk intelligence platform. It analyses on-chain transactions and addresses across eight blockchains — Ethereum, BNB Chain, Arbitrum, Optimism, Solana, Base, Polygon and Bittensor — and produces explainable risk scores that show analysts exactly which signals drove each result. OmniRisk does not provide investment advice or bank credit scoring.',
    longDescAr: 'OmniRisk منصة متخصصة في ذكاء مخاطر الأصول الرقمية متعددة السلاسل. تحلّل المعاملات والعناوين على الشبكة عبر ثماني سلاسل بلوك تشين، وتُنتج تقييمات مخاطر قابلة للتفسير توضّح للمحللين بالضبط الإشارات التي أدت إلى كل نتيجة. لا تقدّم OmniRisk نصائح استثمارية أو تقييمًا ائتمانيًا مصرفيًا تقليديًا.',
    features: [
      { title: 'On-chain analytics', titleAr: 'تحليلات على الشبكة', desc: 'Transaction and address analysis across 8 supported chains including Ethereum, Solana and Bittensor.', descAr: 'تحليل المعاملات والعناوين عبر 8 سلاسل مدعومة بما فيها إيثيريوم وسولانا وبيتنسور.', status: 'READY' },
      { title: 'Explainable scoring', titleAr: 'تقييم قابل للتفسير', desc: 'Each risk score is accompanied by the precise signals that drove it — no black-box outputs.', descAr: 'كل تقييم مخاطر مصحوب بالإشارات الدقيقة التي أنتجته، دون مخرجات مبهمة.', status: 'READY' },
      { title: 'Market risk assessment', titleAr: 'تقييم مخاطر السوق', desc: 'Token and market-level exposure analysis combining microstructure and sentiment signals.', descAr: 'تحليل تعرّض الرموز الرقمية والأسواق يجمع إشارات البنية المصغّرة والمشاعر السوقية.', status: 'READY' },
      { title: 'Agentic investigations', titleAr: 'تحقيقات وكيلة', desc: 'AI agents assemble structured investigation trails for analysts using a hardened tool registry.', descAr: 'وكلاء ذكاء اصطناعي يبنون مسارات تحقيق منظّمة للمحللين باستخدام سجل أدوات محمي.', status: 'READY' },
      { title: 'Sentiment engine', titleAr: 'محرك تحليل المشاعر', desc: 'Scores 12+ news adapters plus social signals with explainable lexicon mathematics.', descAr: 'يقيّم أكثر من 12 محوّل إخباري وإشارات اجتماعية بحسابات معجمية قابلة للتفسير.', status: 'READY' },
      { title: 'Prediction engine', titleAr: 'محرك التنبؤ', desc: 'Heuristic and statistical prediction including Markov regime detection and Monte Carlo simulation.', descAr: 'تنبؤ إرشادي وإحصائي يشمل اكتشاف الأنظمة بنموذج ماركوف ومحاكاة مونت كارلو.', status: 'READY' },
    ],
    faq: [
      { q: 'Does OmniRisk provide investment advice?', qAr: 'هل توفر OmniRisk نصائح استثمارية؟', a: 'No. OmniRisk is a risk intelligence platform that provides data-driven risk scores and analysis. It does not provide investment advice, buy or sell recommendations, or any form of financial guidance.', aAr: 'لا. OmniRisk منصة ذكاء مخاطر تقدّم تقييمات مخاطر وتحليلات مستندة إلى البيانات. لا تقدّم نصائح استثمارية أو توصيات شراء أو بيع أو أي توجيه مالي.' },
      { q: 'Which blockchains does OmniRisk support?', qAr: 'ما سلاسل البلوك تشين التي تدعمها OmniRisk؟', a: 'OmniRisk supports eight chains: Ethereum, BNB Chain, Arbitrum, Optimism, Solana, Base, Polygon and Bittensor.', aAr: 'تدعم OmniRisk ثماني سلاسل: إيثيريوم، سلسلة BNB، أربيتروم، أوبتيميزم، سولانا، بيس، بوليغون وبيتنسور.' },
      { q: 'Is OmniRisk a bank credit scoring tool?', qAr: 'هل OmniRisk أداة تقييم ائتماني مصرفي؟', a: 'No. OmniRisk scores digital asset and on-chain risk. For verifiable blockchain credit intelligence, see RayaChain.', aAr: 'لا. تقيّم OmniRisk مخاطر الأصول الرقمية والمعاملات على الشبكة. لمعلومات ائتمانية قابلة للتحقق على البلوك تشين، راجع RayaChain.' },
    ],
  },
  {
    slug: 'ai-wealth',
    nameEn: 'AI Wealth',
    nameAr: 'AI Wealth',
    taglineEn: 'AI Personal Finance Manager',
    taglineAr: 'مدير مالي شخصي ذكي',
    categoryEn: 'Personal Finance Management',
    categoryAr: 'إدارة المال الشخصي',
    accent: '#6FE3A8',
    status: 'LAUNCH-READY',
    statusAr: 'جاهز للإطلاق',
    descEn: 'Intelligent personal finance management — expenses, budgets, savings goals and AI-powered financial guidance.',
    descAr: 'إدارة مالية شخصية ذكية: المصاريف، الميزانيات، أهداف الادخار والإرشاد المالي بالذكاء الاصطناعي.',
    longDescEn: 'AI Wealth is an intelligent personal finance management application that brings together expense tracking, budget management, savings goals and financial planning. It uses a deterministic rules engine to generate financial plans with an optional AI-powered narrative layer that explains recommendations in plain language — in English, Arabic and French. Halal mode filters instruments to Sharia-compliant options.',
    longDescAr: 'AI Wealth تطبيق ذكي لإدارة المال الشخصي يجمع تتبّع المصاريف وإدارة الميزانية وأهداف الادخار والتخطيط المالي. يستخدم محركًا تحليليًا حتميًا لإنشاء خطط مالية مع طبقة سردية اختيارية بالذكاء الاصطناعي تشرح التوصيات بلغة واضحة، بالعربية والإنجليزية والفرنسية. تُفلتر أوضاع الحلال الأدوات لتشمل الخيارات المتوافقة مع الشريعة.',
    features: [
      { title: 'Expense tracking', titleAr: 'تتبع المصاريف', desc: 'Log and categorise expenses for complete financial visibility.', descAr: 'سجّل المصاريف وصنّفها للحصول على رؤية مالية شاملة.', status: 'READY' },
      { title: 'Budget management', titleAr: 'إدارة الميزانية', desc: 'Set spending limits per category and track them in real time.', descAr: 'حدّد حدود الإنفاق لكل فئة وتابعها في الوقت الفعلي.', status: 'READY' },
      { title: 'Savings goals', titleAr: 'أهداف الادخار', desc: 'Define financial goals and track progress with guided contribution plans.', descAr: 'حدّد أهدافًا مالية وتابع التقدم بخطط مساهمة موجّهة.', status: 'READY' },
      { title: 'AI advisor plans', titleAr: 'خطط المستشار الذكي', desc: 'Deterministic financial plans with optional AI narrative in EN, AR and FR.', descAr: 'خطط مالية حتمية مع سرد ذكاء اصطناعي اختياري بالعربية والإنجليزية والفرنسية.', status: 'READY' },
      { title: 'Halal mode', titleAr: 'وضع الحلال', desc: 'Filters portfolio suggestions to Sharia-compliant instruments only.', descAr: 'يُفلتر اقتراحات المحفظة لتشمل الأدوات المتوافقة مع الشريعة الإسلامية فحسب.', status: 'READY' },
      { title: 'Holdings overview', titleAr: 'نظرة عامة على الممتلكات', desc: 'Track financial holdings and asset allocation in a single clear view.', descAr: 'تابع ممتلكاتك المالية وتوزيع الأصول في عرض واحد واضح.', status: 'READY' },
    ],
    faq: [
      { q: 'Is AI Wealth a financial advisor?', qAr: 'هل AI Wealth مستشار مالي؟', a: 'No. AI Wealth is a personal finance management tool. It provides data-driven plans and educational guidance based on your inputs. It is not a licensed financial advisor and does not guarantee returns.', aAr: 'لا. AI Wealth أداة لإدارة المال الشخصي. تقدّم خططًا مستندة إلى البيانات وإرشادات تعليمية بناءً على مدخلاتك. ليست مستشارًا ماليًا مرخّصًا ولا تضمن عوائد.' },
      { q: 'What languages does AI Wealth support?', qAr: 'ما اللغات التي يدعمها AI Wealth؟', a: 'AI Wealth supports English, Arabic and French, with full RTL support for Arabic.', aAr: 'يدعم AI Wealth الإنجليزية والعربية والفرنسية، مع دعم كامل للكتابة من اليمين لليسار بالعربية.' },
    ],
  },
  {
    slug: 'rayachain',
    nameEn: 'RayaChain',
    nameAr: 'RayaChain',
    taglineEn: 'Blockchain Credit Intelligence',
    taglineAr: 'ذكاء ائتماني على البلوك تشين',
    categoryEn: 'Verifiable Credit Intelligence',
    categoryAr: 'ذكاء ائتماني قابل للتحقق',
    accent: '#9AA8FF',
    status: 'LAUNCH-READY',
    statusAr: 'جاهز للإطلاق',
    descEn: 'Cross-chain risk broadcast and verifiable credit intelligence via LayerZero OFT protocol.',
    descAr: 'بث مخاطر عبر السلاسل وذكاء ائتماني قابل للتحقق عبر بروتوكول LayerZero OFT.',
    longDescEn: 'RayaChain is the cross-chain risk intelligence broadcast layer of the Kafo AI platform. It connects six blockchains — Solana (hub), Ethereum, Arbitrum, Base, Polygon and BNB Chain — using the LayerZero OFT protocol, enabling verifiable credit intelligence to be published and verified natively on each chain. RayaChain\'s backend is operational; the consumer-facing frontend interface is in development.',
    longDescAr: 'RayaChain هي طبقة بث ذكاء المخاطر عبر السلاسل في منصة كافو AI. تربط ست سلاسل بلوك تشين — سولانا (المحور) وإيثيريوم وأربيتروم وبيس وبوليغون وسلسلة BNB — عبر بروتوكول LayerZero OFT، ما يتيح نشر الذكاء الائتماني القابل للتحقق والتأكد منه على كل سلسلة بشكل أصلي. الخلفية التقنية لـ RayaChain تعمل؛ وواجهة المستخدم قيد التطوير.',
    features: [
      { title: 'Cross-chain broadcast', titleAr: 'بث عبر السلاسل', desc: 'Publish risk scores and verdicts from a source chain to multiple destination chains simultaneously.', descAr: 'نشر تقييمات المخاطر والأحكام من سلسلة مصدر إلى سلاسل وجهة متعددة في آن واحد.', status: 'READY' },
      { title: 'LayerZero OFT protocol', titleAr: 'بروتوكول LayerZero OFT', desc: 'Token transfer and message routing across 6 supported chains via the OFT standard.', descAr: 'نقل الرموز وتوجيه الرسائل عبر 6 سلاسل مدعومة وفق معيار OFT.', status: 'READY' },
      { title: 'Verifiable credit intelligence', titleAr: 'ذكاء ائتماني قابل للتحقق', desc: 'Credit intelligence recorded on-chain for auditability and cross-party verification.', descAr: 'ذكاء ائتماني مسجّل على الشبكة لضمان قابلية التدقيق والتحقق من أطراف متعددة.', status: 'READY' },
      { title: 'Solana hub routing', titleAr: 'توجيه عبر محور سولانا', desc: 'All cross-chain messages route through Solana as the hub chain for reliability and speed.', descAr: 'جميع الرسائل عبر السلاسل تمر عبر سولانا كسلسلة محورية لضمان الموثوقية والسرعة.', status: 'READY' },
    ],
    faq: [
      { q: 'What is IoV in the RayaChain context?', qAr: 'ما معنى IoV في سياق RayaChain؟', a: 'In the RayaChain architecture, IoV refers to Internet of Value — the concept of moving financial intelligence and verifiable data across blockchain networks, enabling trust to be established without centralised intermediaries.', aAr: 'في بنية RayaChain، يعني IoV إنترنت القيمة — مفهوم نقل الذكاء المالي والبيانات القابلة للتحقق عبر شبكات البلوك تشين، ما يتيح تأسيس الثقة دون وسطاء مركزيين.' },
      { q: 'Is the RayaChain frontend available?', qAr: 'هل واجهة RayaChain متاحة؟', a: 'The RayaChain backend and broadcast infrastructure are operational. The consumer-facing frontend interface is in active development.', aAr: 'الخلفية التقنية وبنية البث لـ RayaChain تعمل. واجهة المستخدم قيد التطوير الفعال.' },
    ],
  },
  {
    slug: 'circul',
    nameEn: 'Circul',
    nameAr: 'Circul',
    taglineEn: 'Digital Savings Circles',
    taglineAr: 'جمعيات ادخار رقمية',
    categoryEn: 'UAE Digital Savings Circles',
    categoryAr: 'جمعيات ادخار رقمية إماراتية',
    accent: '#F2B866',
    status: 'LAUNCH-READY',
    statusAr: 'جاهز للإطلاق',
    descEn: 'Arabic-first digital Jam\'iya for UAE savings circles — organise contributions, manage payout rotations.',
    descAr: 'جمعية رقمية بالعربية أولاً للإمارات — نظّم المساهمات وأدر أدوار الاستلام.',
    longDescEn: 'Circul is an Arabic-first digital Jam\'iya (جمعية) application for the UAE. It modernises the traditional rotating savings and credit association (ROSCA) by letting members organise savings circles, coordinate contributions, track balances and manage payout rotations through a secure mobile application. The current build includes a shared sandbox environment with simulated banking and payment flows — no real funds move in the sandbox.',
    longDescAr: 'Circul تطبيق جمعية رقمية بالعربية أولاً للإمارات العربية المتحدة. يُحدّث الجمعية التقليدية للادخار والائتمان الدوراني بتمكين الأعضاء من تنظيم دوائر الادخار وتنسيق المساهمات وتتبع الأرصدة وإدارة أدوار الاستلام عبر تطبيق جوال آمن. يتضمن الإصدار الحالي بيئة تجريبية مشتركة بتدفقات مصرفية ومدفوعات محاكاة — لا تتحرك أموال حقيقية في البيئة التجريبية.',
    features: [
      { title: 'Circle management', titleAr: 'إدارة الجمعية', desc: 'Create and manage savings circles with defined contribution schedules and payout rotations.', descAr: 'إنشاء وإدارة جمعيات الادخار بجداول مساهمة وأدوار استلام محددة.', status: 'READY' },
      { title: 'Arabic-first design', titleAr: 'تصميم بالعربية أولاً', desc: 'Built from the ground up for Arabic-speaking UAE users, with full RTL support and native UX.', descAr: 'مبنيّ من الأساس للمستخدمين الناطقين بالعربية في الإمارات، مع دعم كامل للاتجاه من اليمين لليسار وتجربة مستخدم أصيلة.', status: 'READY' },
      { title: 'Contribution tracking', titleAr: 'تتبع المساهمات', desc: 'Track every member\'s contribution status in real time with full history.', descAr: 'تابع حالة مساهمة كل عضو في الوقت الفعلي مع سجل كامل.', status: 'READY' },
      { title: 'Private invitations', titleAr: 'دعوات خاصة', desc: 'Invite trusted members through secure private links with identity verification.', descAr: 'دعوة الأعضاء الموثوقين عبر روابط خاصة آمنة مع التحقق من الهوية.', status: 'READY' },
      { title: 'Sandbox environment', titleAr: 'بيئة تجريبية', desc: 'Full-featured demo with simulated banking flows. Live payment integrations are a future milestone.', descAr: 'نسخة تجريبية كاملة المزايا بتدفقات مصرفية محاكاة. تكاملات المدفوعات الحية هدف مستقبلي.', status: 'READY' },
    ],
    faq: [
      { q: 'Does Circul use real money?', qAr: 'هل تستخدم Circul أموالًا حقيقية؟', a: 'The current Circul build is a sandbox environment with simulated banking and payment flows. No real funds move. Live payment integrations are a planned future milestone.', aAr: 'الإصدار الحالي من Circul بيئة تجريبية بتدفقات مصرفية ومدفوعات محاكاة. لا تتحرك أموال حقيقية. تكاملات المدفوعات الحية هدف مستقبلي مخطط.' },
      { q: 'What is a Jam\'iya?', qAr: 'ما هي الجمعية؟', a: 'A Jam\'iya (جمعية) is a traditional rotating savings circle common in the Arab world, where members contribute a fixed amount each period and take turns receiving the total pool. Circul modernises this with digital tracking and management.', aAr: 'الجمعية دائرة ادخار تقليدية دوارة شائعة في العالم العربي، يساهم فيها الأعضاء بمبلغ ثابت كل فترة ويتناوبون على تلقّي المبلغ الإجمالي. تُحدّث Circul هذا النظام بالتتبع والإدارة الرقمية.' },
    ],
  },
  {
    slug: 'islamic-crypto-lending',
    nameEn: 'Islamic Crypto Lending',
    nameAr: 'Islamic Crypto Lending',
    taglineEn: 'Islamic Digital Finance',
    taglineAr: 'التمويل الرقمي الإسلامي',
    categoryEn: 'Islamic Digital Finance Research',
    categoryAr: 'بحوث التمويل الرقمي الإسلامي',
    accent: '#D9C27A',
    status: 'PRE-LAUNCH',
    statusAr: 'قبل الإطلاق',
    descEn: 'Research into Sharia-compliant digital asset financing models and responsible Islamic fintech innovation.',
    descAr: 'بحوث في نماذج تمويل الأصول الرقمية المتوافقة مع الشريعة وابتكار التقنية المالية الإسلامية المسؤول.',
    longDescEn: 'The Islamic Crypto Lending initiative is a research programme exploring Sharia-compliant models for digital asset financing. It investigates how blockchain-based financing structures can be designed to meet Islamic finance principles — avoiding interest (riba) and uncertainty (gharar) while enabling access to digital asset capital. No operational lending product or Sharia certification is claimed at this stage.',
    longDescAr: 'مبادرة Islamic Crypto Lending برنامج بحثي يستكشف نماذج التمويل الإسلامية المتوافقة مع الشريعة لتمويل الأصول الرقمية. يبحث في كيفية تصميم هياكل التمويل القائمة على البلوك تشين لتستوفي مبادئ التمويل الإسلامي — تجنب الربا والغرر مع تمكين الوصول إلى رأس مال الأصول الرقمية. لا يُدّعى منتج إقراض تشغيلي أو اعتماد شرعي في هذه المرحلة.',
    features: [
      { title: 'Sharia-compliant models', titleAr: 'نماذج متوافقة مع الشريعة', desc: 'Research into financing structures that satisfy Islamic finance principles including prohibition of riba.', descAr: 'بحث في هياكل التمويل التي تستوفي مبادئ التمويل الإسلامي بما فيها تحريم الربا.', status: 'IN PROGRESS' },
      { title: 'Blockchain financing structures', titleAr: 'هياكل التمويل على البلوك تشين', desc: 'Exploring how smart contracts can encode Islamic finance conditions without centralised intermediaries.', descAr: 'استكشاف كيفية ترميز العقود الذكية لشروط التمويل الإسلامي دون وسطاء مركزيين.', status: 'IN PROGRESS' },
      { title: 'Responsible innovation framework', titleAr: 'إطار الابتكار المسؤول', desc: 'Building a responsible approach to Islamic digital finance that prioritises ethics and compliance.', descAr: 'بناء نهج مسؤول للتمويل الرقمي الإسلامي يُعلي من شأن الأخلاقيات والامتثال.', status: 'IN PROGRESS' },
    ],
    faq: [
      { q: 'Is Islamic Crypto Lending an operational lending product?', qAr: 'هل Islamic Crypto Lending منتج إقراض تشغيلي؟', a: 'No. This initiative is a research programme. We are investigating Sharia-compliant models for digital asset financing. No operational lending, approved Islamic financial products or Sharia certification is claimed at this stage.', aAr: 'لا. هذه المبادرة برنامج بحثي. نستكشف نماذج متوافقة مع الشريعة لتمويل الأصول الرقمية. لا يُدّعى إقراض تشغيلي أو منتجات مالية إسلامية معتمدة أو اعتماد شرعي في هذه المرحلة.' },
      { q: 'Is this Sharia-certified?', qAr: 'هل هذا معتمد شرعيًا؟', a: 'No Sharia certification is claimed. The research aims to develop models that would be suitable for Sharia review, not to certify them.', aAr: 'لا يُدّعى أي اعتماد شرعي. يهدف البحث إلى تطوير نماذج تكون مناسبة للمراجعة الشرعية، لا إلى اعتمادها.' },
    ],
  },
  {
    slug: 'qardx-instant',
    nameEn: 'QardX Instant',
    nameAr: 'QardX Instant',
    taglineEn: 'Embedded Financial Technology',
    taglineAr: 'تقنية مالية مدمجة',
    categoryEn: 'Embedded Fintech Infrastructure',
    categoryAr: 'بنية تحتية للتقنية المالية المدمجة',
    accent: '#7FB3D5',
    status: 'LAUNCH-READY',
    statusAr: 'جاهز للإطلاق',
    descEn: 'Contract-first fintech infrastructure for embedding financial services into applications.',
    descAr: 'بنية تحتية لتقنية مالية قائمة على العقود لتضمين الخدمات المالية في التطبيقات.',
    longDescEn: 'QardX Instant is a contract-first financial technology infrastructure platform. It provides the APIs, admin tooling and mobile SDKs needed to embed financial services into applications — enabling developers and organisations to build embedded finance features without rebuilding core financial infrastructure from scratch. The platform follows a structured four-phase development approach with API, web admin, mobile and shared contracts.',
    longDescAr: 'QardX Instant منصة بنية تحتية لتقنية مالية قائمة على العقود. توفّر واجهات برمجية وأدوات إدارة وحزم تطوير جوال لتضمين الخدمات المالية في التطبيقات — تمكّن المطوّرين والمنظمات من بناء ميزات التمويل المدمج دون إعادة بناء البنية التحتية المالية الأساسية من الصفر. تتبع المنصة نهج تطوير منظّم بأربع مراحل مع واجهة برمجية ولوحة إدارة ويب ومحمول وعقود مشتركة.',
    features: [
      { title: 'Financial services API', titleAr: 'واجهة برمجية للخدمات المالية', desc: 'RESTful API for embedding financial services, built contract-first for reliability and interoperability.', descAr: 'واجهة برمجية RESTful لتضمين الخدمات المالية، مبنية على أساس العقود أولاً للموثوقية والتشغيل البيني.', status: 'READY' },
      { title: 'Web admin dashboard', titleAr: 'لوحة إدارة ويب', desc: 'Management console for monitoring, configuration and operational oversight.', descAr: 'لوحة تحكم للمراقبة والتهيئة والإشراف التشغيلي.', status: 'READY' },
      { title: 'Mobile SDK', titleAr: 'حزمة تطوير جوال', desc: 'React Native / Expo mobile client for consumer-facing embedded finance features.', descAr: 'عميل جوال بـ React Native / Expo لميزات التمويل المدمج الموجّهة للمستهلكين.', status: 'READY' },
      { title: 'Shared contracts', titleAr: 'عقود مشتركة', desc: 'Typed domain contracts, DTOs and validators shared across all platform surfaces.', descAr: 'عقود نطاق محدّدة النوع وكائنات نقل بيانات ومدققات مشتركة عبر جميع واجهات المنصة.', status: 'READY' },
    ],
    faq: [
      { q: 'What types of financial services can QardX Instant embed?', qAr: 'ما أنواع الخدمات المالية التي يمكن لـ QardX Instant تضمينها؟', a: 'QardX Instant provides the infrastructure layer for embedding financial services. Specific financial products and their regulatory requirements depend on the jurisdiction and use case of the integrating application.', aAr: 'يوفّر QardX Instant الطبقة البنية التحتية لتضمين الخدمات المالية. تعتمد المنتجات المالية المحددة ومتطلباتها التنظيمية على الاختصاص القضائي وحالة الاستخدام للتطبيق المدمج.' },
    ],
  },
  {
    slug: 'lasttable',
    nameEn: 'LastTable',
    nameAr: 'LastTable',
    taglineEn: 'AI Revenue Engine · Hospitality',
    taglineAr: 'محرك إيرادات ذكي للضيافة',
    categoryEn: 'Restaurant Booking & Growth Platform',
    categoryAr: 'منصة حجز مطاعم ونمو',
    accent: '#C8475F',
    status: 'OPEN TESTING',
    statusAr: 'اختبار مفتوح',
    externalUrl: 'https://lasttable.ae',
    descEn: 'Real-time restaurant booking and AI-powered growth engine for UAE hospitality.',
    descAr: 'منصة حجز مطاعم فوري ومحرك نمو ذكي لقطاع الضيافة في الإمارات.',
    longDescEn: 'LastTable is a real-time restaurant booking platform and AI-powered growth engine for UAE hospitality. Venues publish the tables they genuinely have available tonight, and diners book one in seconds with a phone number — no account, no card. Restaurants pay only when a new guest books through LastTable and shows up. It comprises three connected systems built and operated by Kafo AI.',
    longDescAr: 'LastTable منصة حجز مطاعم فوري ومحرك نمو بالذكاء الاصطناعي لقطاع الضيافة الإماراتي. تنشر المطاعم الطاولات المتاحة فعلاً الليلة، ويحجز رواد المطاعم واحدة في ثوانٍ برقم الجوال — دون حساب ودون بطاقة. يدفع المطعم فقط عندما يحجز ضيف جديد عبر LastTable ويحضر. تتكوّن من ثلاثة أنظمة مترابطة مبنيّة ومُشغَّلة بواسطة كافو AI.',
    features: [
      { title: 'Real-time availability', titleAr: 'توفر فوري', desc: 'Venues publish live, accurate table availability — only what is genuinely free right now.', descAr: 'تنشر المطاعم توافر الطاولات مباشرةً وبدقة — فقط ما هو متاح فعلاً الآن.', status: 'LIVE' },
      { title: 'Phone-number booking', titleAr: 'حجز برقم الجوال', desc: 'Diners book with their phone number and a one-time OTP code — no account or card required.', descAr: 'يحجز الرواد برقم جوالهم ورمز OTP لمرة واحدة — دون حساب أو بطاقة.', status: 'LIVE' },
      { title: 'Flash Tables', titleAr: 'طاولات فلاش', desc: 'Venues place time-limited offers on specific tables to fill empty capacity during slow periods.', descAr: 'تضع المطاعم عروضًا محدودة المدة على طاولات محددة لملء الطاقة الفارغة في أوقات الهدوء.', status: 'LIVE' },
      { title: 'Cancellation Radar', titleAr: 'رادار الإلغاءات', desc: 'Monitors fully-booked venues and alerts diners the moment a matching table becomes available.', descAr: 'يراقب المطاعم الممتلئة وينبّه الرواد فور توفر طاولة مناسبة.', status: 'IN PROGRESS' },
      { title: 'AI concierge', titleAr: 'المساعد الذكي', desc: 'Answers diner questions from live availability data only — never suggests a table that is not available.', descAr: 'يجيب على أسئلة الرواد من بيانات التوفر المباشر فحسب — لا يقترح طاولة غير متاحة.', status: 'LIVE' },
      { title: 'GrowthOS by Kafo AI', titleAr: 'GrowthOS بواسطة كافو AI', desc: 'AI growth layer that turns empty capacity into targeted campaigns with attribution for new vs returning diners.', descAr: 'طبقة نمو ذكية تحوّل الطاقة الفارغة إلى حملات مستهدفة مع نسب الحجوزات إلى رواد جدد أو عائدين.', status: 'IN PROGRESS' },
    ],
    faq: [
      { q: 'Is LastTable free for diners?', qAr: 'هل LastTable مجاني للرواد؟', a: 'Yes. Diners browse without an account, verify their phone by SMS when they book, and pay the restaurant directly. They never pay in the app.', aAr: 'نعم. يتصفح الرواد دون حساب، ويتحققون من هاتفهم عبر رسالة SMS عند الحجز، ويدفعون للمطعم مباشرةً. لا يدفعون في التطبيق أبدًا.' },
      { q: 'How do venues pay for LastTable?', qAr: 'كيف تدفع المطاعم لـ LastTable؟', a: 'Managing tables and the restaurant software is free. A venue pays a credit only when a new guest books through LastTable and actually shows up. Returning guests, cancellations and no-shows cost nothing.', aAr: 'إدارة الطاولات وبرنامج المطعم مجاني. يدفع المطعم رصيدًا فقط عندما يحجز ضيف جديد عبر LastTable ويحضر فعلاً. الضيوف العائدون والإلغاءات وحالات عدم الحضور لا تكلف شيئًا.' },
      { q: 'What is GrowthOS?', qAr: 'ما هو GrowthOS؟', a: 'GrowthOS is a separate Kafo AI system that connects to LastTable through a secure API. It turns empty restaurant capacity into targeted marketing campaigns and attributes each booking as new or returning — automatically, with the owner\'s approval.', aAr: 'GrowthOS نظام منفصل لكافو AI يتصل بـ LastTable عبر واجهة برمجية آمنة. يحوّل الطاقة الفارغة للمطاعم إلى حملات تسويقية مستهدفة وينسب كل حجز إلى ضيف جديد أو عائد — تلقائيًا بموافقة صاحب المطعم.' },
    ],
    ltSystems: [
      {
        key: '01 · MARKETPLACE',
        keyAr: '01 · منصة السوق',
        title: 'Diner app & web',
        titleAr: 'تطبيق الرواد والويب',
        desc: 'Discovery, live availability, instant booking and Flash Tables on iOS, Android and web.',
        descAr: 'الاستكشاف، التوفر المباشر، الحجز الفوري وطاولات Flash على iOS وأندرويد والويب.',
        status: 'BUILT · UAE PREVIEW',
        accent: '#C8475F',
      },
      {
        key: '02 · RESTAURANT SAAS',
        keyAr: '02 · برنامج المطعم',
        title: 'LastTable Business',
        titleAr: 'LastTable Business',
        desc: 'Reservations, tables, guest CRM, analytics, credits and billing.',
        descAr: 'الحجوزات، الطاولات، إدارة علاقات الضيوف، التحليلات، الأرصدة والفواتير.',
        status: 'BUILT · LIVE IN PILOT',
        accent: '#C8475F',
      },
      {
        key: '03 · GROWTHOS · KAFO AI',
        keyAr: '03 · GrowthOS · كافو AI',
        title: 'AI growth layer',
        titleAr: 'طبقة النمو الذكية',
        desc: 'Turns empty capacity into campaigns the owner approves, attributing each booking as new or returning.',
        descAr: 'تحوّل الطاقة الفارغة إلى حملات يوافق عليها صاحب المطعم، مع نسب كل حجز لضيف جديد أو عائد.',
        status: 'READ API DEPLOYED · CAMPAIGNS IN PROGRESS',
        accent: '#3FD4C4',
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export const SITE_URL = 'https://kafoai.com';
