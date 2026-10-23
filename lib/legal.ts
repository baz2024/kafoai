import type { Bi } from "./i18n";

export const LEGAL_UPDATED = "2026-10-22";

export type LegalDoc = {
  slug: "privacy" | "terms";
  title: Bi;
  seoTitle: Bi;
  description: Bi;
  sections: { h: Bi; p: Bi[] }[];
};

// Draft text. It states only what the site actually does today (static pages, no analytics or advertising
// cookies, enquiries by email) and must be reviewed by counsel before relying on it.
export const LEGAL: LegalDoc[] = [
  {
    slug: "privacy",
    title: { en: "Privacy Policy", ar: "سياسة الخصوصية" },
    seoTitle: { en: "Privacy Policy | Kafo AI", ar: "سياسة الخصوصية | كافو AI" },
    description: {
      en: "How Kafo AI handles personal information on kafoai.com: what we collect, why, who processes it and your choices.",
      ar: "كيف تتعامل كافو AI مع المعلومات الشخصية على kafoai.com: ما نجمعه ولماذا ومن يعالجه وخياراتك.",
    },
    sections: [
      {
        h: { en: "Who we are", ar: "من نحن" },
        p: [
          {
            en: "Kafo AI (“we”, “us”) operates kafoai.com. This policy explains how we handle personal information when you use this website or contact us.",
            ar: "تشغّل كافو AI («نحن») موقع kafoai.com. توضح هذه السياسة كيف نتعامل مع المعلومات الشخصية عند استخدامك الموقع أو تواصلك معنا.",
          },
        ],
      },
      {
        h: { en: "What we collect", ar: "ما الذي نجمعه" },
        p: [
          {
            en: "Information you send us. When you email us about a partnership or investor access, we receive your email address and whatever you include in your message, such as your name, organisation and interests.",
            ar: "المعلومات التي ترسلها لنا. عندما تراسلنا بخصوص شراكة أو الوصول للمستثمرين، نستلم بريدك الإلكتروني وما تضمّنه رسالتك من اسم وجهة ومجالات اهتمام.",
          },
          {
            en: "Technical data. Our hosting provider records standard request logs, such as IP address, browser type, pages requested and time, to deliver the site, keep it secure and diagnose faults.",
            ar: "البيانات التقنية. يسجّل مزوّد الاستضافة سجلات الطلبات المعتادة، مثل عنوان IP ونوع المتصفح والصفحات المطلوبة والوقت، لتقديم الموقع وحمايته وتشخيص الأعطال.",
          },
          {
            en: "At the time of writing this site does not use advertising cookies or third-party analytics. If that changes we will update this policy and, where required, ask for your consent.",
            ar: "وقت كتابة هذه السياسة، لا يستخدم الموقع ملفات تعريف ارتباط إعلانية أو تحليلات من أطراف ثالثة. وإذا تغيّر ذلك سنحدّث هذه السياسة ونطلب موافقتك عند اللزوم.",
          },
        ],
      },
      {
        h: { en: "How we use it", ar: "كيف نستخدمها" },
        p: [
          {
            en: "We use your information to reply to your enquiry, assess partnership or investor requests, run the data-room introduction and NDA process, keep the website secure and meet legal obligations. We do not sell personal information.",
            ar: "نستخدم معلوماتك للرد على استفسارك وتقييم طلبات الشراكة والمستثمرين وإدارة عملية التعارف واتفاقية السرية لغرفة البيانات وحماية الموقع والوفاء بالالتزامات القانونية. لا نبيع المعلومات الشخصية.",
          },
        ],
      },
      {
        h: { en: "Who processes it", ar: "من يعالجها" },
        p: [
          {
            en: "We use service providers to run the site and our email, including a hosting and content-delivery provider and a DNS provider. They process data on our behalf under their own terms. Pages on this site link to other websites, which have their own privacy practices.",
            ar: "نستعين بمزوّدي خدمات لتشغيل الموقع والبريد الإلكتروني، منهم مزوّد استضافة وتوصيل محتوى ومزوّد DNS. يعالجون البيانات نيابةً عنا وفق شروطهم. وتحتوي صفحات الموقع على روابط لمواقع أخرى لها ممارسات خصوصية خاصة بها.",
          },
        ],
      },
      {
        h: { en: "How long we keep it", ar: "مدة الاحتفاظ" },
        p: [
          {
            en: "We keep correspondence for as long as needed to handle your enquiry and any resulting relationship, and for a reasonable period afterwards, unless the law requires longer. Server logs are kept by our hosting provider for a short period.",
            ar: "نحتفظ بالمراسلات للمدة اللازمة لمعالجة استفسارك وأي علاقة تنتج عنه، ولمدة معقولة بعد ذلك ما لم يوجب القانون مدة أطول. وتحتفظ جهة الاستضافة بسجلات الخوادم لفترة قصيرة.",
          },
        ],
      },
      {
        h: { en: "Your rights", ar: "حقوقك" },
        p: [
          {
            en: "Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal information, to object to certain uses, and to complain to your data-protection authority. To exercise these rights, email us.",
            ar: "بحسب مكان إقامتك، قد يحق لك الاطلاع على معلوماتك الشخصية أو تصحيحها أو حذفها أو تقييد استخدامها، والاعتراض على بعض الاستخدامات، وتقديم شكوى إلى جهة حماية البيانات. لممارسة هذه الحقوق راسلنا.",
          },
        ],
      },
      {
        h: { en: "Changes and contact", ar: "التغييرات والتواصل" },
        p: [
          {
            en: "We may update this policy and will change the date below when we do. Questions: invest@kafoai.com.",
            ar: "قد نحدّث هذه السياسة وسنغيّر التاريخ أدناه عند ذلك. للاستفسار: invest@kafoai.com.",
          },
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: { en: "Terms of Use", ar: "شروط الاستخدام" },
    seoTitle: { en: "Terms of Use | Kafo AI", ar: "شروط الاستخدام | كافو AI" },
    description: {
      en: "The terms for using kafoai.com, including that content is for information only and is not investment, legal or financial advice.",
      ar: "شروط استخدام kafoai.com، ومنها أن المحتوى للمعلومات فقط وليس نصيحة استثمارية أو قانونية أو مالية.",
    },
    sections: [
      {
        h: { en: "Acceptance", ar: "القبول" },
        p: [
          {
            en: "By using kafoai.com you agree to these terms. If you do not agree, please do not use the site.",
            ar: "باستخدامك kafoai.com فإنك توافق على هذه الشروط. وإن لم توافق فيُرجى عدم استخدام الموقع.",
          },
        ],
      },
      {
        h: { en: "Information only, not advice", ar: "للمعلومات فقط وليس نصيحة" },
        p: [
          {
            en: "Everything on this site, including product descriptions, articles, research summaries and investor information, is provided for general information. It is not investment, legal, tax or financial advice, and it is not an offer or solicitation to buy or sell any security, token or financial product. Risk scores and analytics described here are informational and may be wrong or out of date.",
            ar: "كل ما في هذا الموقع، ومنه أوصاف المنتجات والمقالات وملخصات الأبحاث ومعلومات المستثمرين، مقدَّم للمعلومات العامة. وهو ليس نصيحة استثمارية أو قانونية أو ضريبية أو مالية، وليس عرضاً أو دعوة لشراء أو بيع أي ورقة مالية أو رمز أو منتج مالي. والتقييمات والتحليلات الموصوفة هنا للاستئناس فقط وقد تكون خاطئة أو قديمة.",
          },
          {
            en: "Product descriptions show what we are building and may include features that are in development. Statements about the future are not guarantees.",
            ar: "تبيّن أوصاف المنتجات ما نعمل على بنائه وقد تشمل ميزات قيد التطوير. والعبارات المتعلقة بالمستقبل ليست ضمانات.",
          },
        ],
      },
      {
        h: { en: "Investor information", ar: "معلومات المستثمرين" },
        p: [
          {
            en: "Investor content is intended for professional and institutional investors. Access to any data room is by invitation and subject to a separate agreement.",
            ar: "محتوى المستثمرين موجّه للمستثمرين المحترفين والمؤسسيين. والوصول إلى أي غرفة بيانات يكون بدعوة وبموجب اتفاقية منفصلة.",
          },
        ],
      },
      {
        h: { en: "Intellectual property", ar: "الملكية الفكرية" },
        p: [
          {
            en: "The site, its text, design and logos belong to Kafo AI or its licensors. You may view and share links to pages and quote short extracts with attribution, but you may not copy the site wholesale or use our names and logos in a way that suggests endorsement.",
            ar: "الموقع ونصوصه وتصميمه وشعاراته مملوكة لكافو AI أو مرخّصيها. يجوز لك الاطلاع على الصفحات ومشاركة روابطها واقتباس مقاطع قصيرة مع ذكر المصدر، ولا يجوز نسخ الموقع بالكامل أو استخدام أسمائنا وشعاراتنا بما يوحي بالتزكية.",
          },
        ],
      },
      {
        h: { en: "Third-party links", ar: "روابط أطراف ثالثة" },
        p: [
          {
            en: "Links to other sites, such as product sites and research papers, are provided for convenience. We do not control those sites and are not responsible for their content.",
            ar: "الروابط إلى مواقع أخرى، مثل مواقع المنتجات والأوراق البحثية، مقدَّمة للتسهيل. ولا نتحكم في تلك المواقع ولا نتحمل مسؤولية محتواها.",
          },
        ],
      },
      {
        h: { en: "No warranty and limits on liability", ar: "إخلاء الضمان وحدود المسؤولية" },
        p: [
          {
            en: "The site is provided “as is” and “as available”. To the extent the law allows, we do not warrant that it is accurate, complete or uninterrupted, and we are not liable for losses arising from your use of or reliance on it. Nothing here limits liability that cannot be limited by law.",
            ar: "يُقدَّم الموقع «كما هو» و«حسب التوفر». وبالقدر الذي يسمح به القانون، لا نضمن دقته أو اكتماله أو استمراره، ولا نتحمل مسؤولية الخسائر الناشئة عن استخدامك له أو اعتمادك عليه. ولا يحدّ شيء هنا من مسؤولية لا يجوز تحديدها قانوناً.",
          },
        ],
      },
      {
        h: { en: "Changes and contact", ar: "التغييرات والتواصل" },
        p: [
          {
            en: "We may update these terms and will change the date below when we do. Governing law and jurisdiction for any commercial relationship will be set out in the agreement we sign with you. Questions: invest@kafoai.com.",
            ar: "قد نحدّث هذه الشروط وسنغيّر التاريخ أدناه عند ذلك. أما القانون الواجب التطبيق والاختصاص القضائي لأي علاقة تجارية فيُحدَّدان في الاتفاقية التي نوقّعها معك. للاستفسار: invest@kafoai.com.",
          },
        ],
      },
    ],
  },
];

export const getLegal = (slug: string) => LEGAL.find((d) => d.slug === slug);
