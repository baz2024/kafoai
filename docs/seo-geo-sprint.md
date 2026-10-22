# KAFO AI — SEO, GEO, INDEXNOW & PUBLIC OUTREACH MASTER SPRINT

Act as a world-class Technical SEO Architect, Generative Engine Optimisation (GEO) Specialist, B2B Fintech Growth Strategist, Arabic SEO Expert, and Senior Next.js Engineer.

Your mission is to make **https://kafoai.com** the authoritative public-facing website for Kafo AI and its fintech innovation ecosystem.

SEO, GEO, discoverability, trust, and partnership lead generation are PRIMARY product requirements, not optional enhancements.

Implement the work in the existing repository. Do not deliver only recommendations or an audit.

## 1. Core objectives

Optimise the website for:

- Google Search
- Bing Search
- Google AI Overviews and AI Mode
- ChatGPT Search
- Perplexity
- Microsoft Copilot
- Other search and AI discovery systems where supported

Do not promise first-page rankings or guaranteed inclusion in AI-generated answers.

Measure discoverability using verifiable search indexing, organic impressions, qualified visits, referrals, branded searches and partnership enquiries.

## 2. Indexable Next.js architecture

Use Next.js App Router with TypeScript.

Requirements:

- Server-rendered or statically generated public pages
- Crawlable HTML containing meaningful content
- No client-side-only rendering for critical SEO content
- Route-level metadata
- Dynamic sitemap generation
- Canonical URLs
- Correct redirects
- Proper 404 and 410 responses
- No accidental `noindex`
- No duplicate locale URLs
- Fast page loads
- Optimised Core Web Vitals
- Accessible semantic HTML

Use client components only where interactivity requires them.

Implement incremental static regeneration where appropriate.

## 3. Bilingual SEO

Every important page must exist in English and Arabic.

Use `/en/` and `/ar/` URL structures.

Implement:

- English and Arabic keyword research
- Native Arabic financial terminology
- Correct RTL rendering
- Reciprocal hreflang
- Language-specific metadata
- Locale-aware breadcrumbs
- Unique content for each language
- Arabic and English XML sitemaps
- Proper language switching
- No automatic redirects that prevent crawlers from accessing a language

Target the UAE market primarily, with relevant international English-language searches.

Do not generate thin city-specific pages solely to capture keywords.

## 4. Product search architecture

Build authoritative product pages for:

1. OmniRisk — AI-powered digital asset risk intelligence
2. AI Wealth — AI-powered personal finance management
3. RayaChain — IoV-based blockchain credit intelligence
4. Circul — UAE digital savings circles
5. Islamic Crypto Lending — Islamic digital finance research
6. QardX Instant — financial technology infrastructure, subject to verification
7. LastTable — AI revenue engine for UAE hospitality (open testing)

Inspect the repositories and documentation before publishing product claims.

Create clear entity relationships between Kafo AI and its products.

Each product page must contain:

- Clear definition
- Problem and target users
- Verified capabilities
- Technology overview
- Product development status
- Practical use cases
- Relevant FAQs
- Internal links
- Partnership CTA
- Structured data where appropriate

## 5. GEO — AI search visibility

Make Kafo AI easy for AI search engines to understand, retrieve and accurately describe.

Implement:

- Clear answer-first explanations
- Consistent company and product names
- Entity-focused internal linking
- Original technical explanations
- Evidence-backed statements
- Named authors and editorial review where verified
- Relevant primary-source citations
- Organisation and product JSON-LD
- Useful explanatory FAQs
- HTML-accessible research content
- Updated dates reflecting genuine revisions
- Optional `llms.txt` as an experimental supplementary file

Do not rely on `llms.txt` as a guaranteed AI discovery mechanism.

Review robots.txt and CDN/WAF policies to ensure legitimate search crawlers can access public content.

Do not weaken security controls merely to allow AI crawlers.

## 6. Structured data

Implement accurate JSON-LD using schema.org.

Use applicable types:

- Organization
- WebSite
- WebPage
- BreadcrumbList
- SoftwareApplication
- Article
- Person, only for confirmed public team members

Connect the corporate entity and products using appropriate identifiers and relationships.

Use stable canonical URLs as entity identifiers.

Only publish verified organisation information.

Validate structured data and do not create fictitious reviews, ratings, customers or endorsements.

## 7. IndexNow, Google and Bing

Implement:

- Google Search Console verification support
- Bing Webmaster Tools verification support
- XML sitemap index
- Locale-specific sitemaps
- IndexNow key file and verification
- IndexNow submissions for newly published, updated or deleted public URLs
- Automatic submissions through a controlled deployment or publishing workflow
- Retry logic and failure logging
- URL canonicalisation
- Indexing diagnostics

IndexNow supports participating search engines, including Bing; it does not replace Google's normal crawling and indexing processes.

Do not repeatedly submit unchanged URLs.

Do not expose API credentials.

## 8. SEO content clusters

Create bilingual topical clusters around:

**AI financial intelligence**
- AI risk intelligence
- Explainable financial AI
- Digital asset risk assessment
- Agentic AI for financial analysis

**Personal finance**
- AI personal finance managers
- Budget management
- Expense tracking
- Financial goals

**Blockchain credit intelligence**
- Blockchain-based credit scoring
- Verifiable financial credentials
- IoV credit models, after verifying the terminology
- Privacy and decentralised identity

**Islamic fintech**
- Islamic digital finance
- Sharia-compliant financing principles
- Digital asset financing research

**UAE fintech**
- UAE financial technology innovation
- Digital savings circles
- Embedded finance
- UAE–Ireland fintech R&D collaboration

Build pillar pages and supporting articles linked to the relevant product pages.

Prioritise useful, original and accurate content over article volume.

## 9. Public outreach and partnership conversion

Build dedicated landing pages for:

- Banks and financial institutions
- Fintech technology partnerships
- Blockchain innovation partnerships
- Islamic finance innovation
- Research and development partnerships
- UAE strategic partners

Each page must offer genuinely distinct content and use cases.

Create strong conversion paths:

- Request a partnership meeting
- Explore a joint pilot
- Request a product demonstration
- Discuss technology licensing
- Contact the Kafo AI team

Implement secure, functional enquiry forms with consent capture, anti-spam controls and reliable delivery.

Prepare bilingual outreach emails, LinkedIn messages, partnership briefs and follow-up templates.

Do not automatically send external outreach without explicit approval.

## 10. Off-page visibility strategy

Prepare a legitimate digital PR and authority-building strategy.

Identify relevant opportunities for:

- UAE fintech directories
- Startup ecosystem profiles
- Research collaborations
- Fintech conferences
- Guest technical contributions
- Founder interviews
- Relevant professional associations
- Genuine partner announcements

Never buy spam links, invent media coverage or use link farms.

Create consistent company descriptions and a reusable press/media kit.

## 11. Analytics and measurement

Implement privacy-conscious analytics and conversion tracking.

Create an SEO/GEO measurement framework covering:

- Search Console impressions and clicks
- Indexed versus submitted URLs
- Organic landing-page performance
- Arabic versus English traffic
- Branded versus non-branded searches
- Bing search performance
- AI referral traffic where identifiable
- Product-page engagement
- Partnership form completions
- Qualified enquiries

Use explicit event names and document their definitions.

Do not present estimated AI visibility as verified rankings.

## 12. Quality assurance

Before completion:

- Test rendered HTML without JavaScript
- Validate sitemaps
- Check robots.txt
- Verify canonical and hreflang relationships
- Validate structured data
- Check internal and external links
- Test English and Arabic pages
- Review mobile and desktop layouts
- Run Lighthouse and accessibility audits
- Test IndexNow configuration
- Test partnership forms
- Confirm no staging URLs are indexed
- Confirm private documents and internal endpoints are not exposed

Produce a prioritised list of issues and resolve critical blockers.

## 13. Deliverables

Implement and commit:

1. SEO/GEO-ready bilingual website
2. Technical SEO infrastructure
3. Structured data
4. XML sitemaps
5. IndexNow integration
6. Product landing pages
7. Bilingual content clusters
8. Partnership conversion pages
9. Outreach templates
10. Analytics instrumentation
11. SEO/GEO audit report
12. Search Console and Bing setup instructions
13. A 90-day organic growth roadmap

Create a feature branch and pull request.

Do not deploy to production or initiate outreach without approval.

**Final objective:** Make Kafo AI a discoverable, credible and authoritative source of information about its own technology, attract relevant searches in Arabic and English, and turn qualified visitors into strategic partnership opportunities.

Start by auditing the current website and repository, then implement the highest-impact technical and content improvements.
