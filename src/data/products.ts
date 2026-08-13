export type ProductStatus = "LIVE" | "COMING SOON" | "IN DEVELOPMENT";

export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  note?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  oneLiner: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  problem: { title: string; body: string; points: string[] };
  solution: { title: string; body: string };
  howItWorks: { step: string; title: string; body: string }[];
  features: { title: string; body: string }[];
  audience: { title: string; body: string }[];
  workflow: string[];
  benefits: string[];
  pricing: { model: string; plans: PricingPlan[]; note: string };
  faq: { q: string; a: string }[];
  primaryCta: { label: string; to: string };
};

export const products: Product[] = [
  {
    slug: "onboardos",
    name: "OnboardOS",
    category: "Client onboarding & workflow automation",
    status: "IN DEVELOPMENT",
    oneLiner: "Client onboarding software that turns email chasing into a structured, trackable workflow.",
    shortDescription:
      "Build reusable onboarding workflows, send them to clients, and collect structured information and documents through a portal — with autosave, tracking, reminders and review built in.",
    fullDescription:
      "OnboardOS is a client onboarding system for service businesses and operations teams. You define an onboarding workflow once — the steps, the information you need, the documents you require — and reuse it for every client. Clients complete onboarding in a guided portal that autosaves progress, so nothing is lost half way through. Your team sees exactly who has completed what, reviews submissions in one place, requests changes when something is missing, and approves when it is ready. Transactional notifications and automated reminders keep the process moving without manual follow-up.",
    problemSolved: "Manual, email-based client onboarding that is slow, inconsistent and impossible to track.",
    problem: {
      title: "Onboarding lives in inboxes, and it shows",
      body: "Most teams onboard clients with a mix of email threads, spreadsheets, PDF forms and reminders someone has to remember to send. It works until volume increases — then information arrives incomplete, documents get lost, and nobody can answer a simple question: where is this client stuck?",
      points: [
        "The same information is requested two or three times",
        "Required documents arrive in the wrong format, or never arrive",
        "No single view of onboarding progress across clients",
        "Follow-up depends on a person remembering to follow up",
        "Every team member runs onboarding slightly differently",
      ],
    },
    solution: {
      title: "One reusable workflow instead of one thread per client",
      body: "OnboardOS turns your onboarding process into a defined workflow with steps, required fields and required documents. Clients get a portal instead of a checklist buried in an email. Your team gets structured data, completion tracking, review and approval — and reminders that send themselves.",
    },
    howItWorks: [
      {
        step: "01",
        title: "Create a workflow template",
        body: "Define the onboarding steps, the information you need at each step and which documents are required. Save it as a reusable template.",
      },
      {
        step: "02",
        title: "Send it to your client",
        body: "Invite a client to their onboarding. They receive a link to a guided portal — no account setup friction, no attachments to hunt for.",
      },
      {
        step: "03",
        title: "The client completes onboarding",
        body: "Clients answer structured questions and upload files step by step. Progress autosaves, so they can stop and return later.",
      },
      {
        step: "04",
        title: "Track and review",
        body: "See completion status per client and per step. Review submissions, request changes on anything incomplete, then approve.",
      },
      {
        step: "05",
        title: "Let automation handle follow-up",
        body: "Transactional notifications confirm each stage, and automated reminders nudge stalled onboardings without manual chasing.",
      },
    ],
    features: [
      { title: "Workflow templates", body: "Define onboarding once and reuse it for every client, with steps in a fixed order." },
      { title: "Structured information capture", body: "Ask for exactly the fields you need, so data arrives complete and consistent." },
      { title: "Document collection", body: "Request required files per step and keep them attached to the client record." },
      { title: "Client portal", body: "A clean guided experience for clients, instead of a long email with instructions." },
      { title: "Autosave progress", body: "Partial answers are saved as clients work, so nothing is lost between sessions." },
      { title: "Completion tracking", body: "See where every client is in the process, down to the individual step." },
      { title: "Review, change requests and approval", body: "Approve complete submissions, or send a specific step back for correction." },
      { title: "Transactional notifications", body: "Automatic confirmations when onboarding is sent, submitted, approved or returned." },
      { title: "Automated reminders", body: "Scheduled nudges for incomplete onboardings, so follow-up is not a manual task." },
    ],
    audience: [
      { title: "Agencies and studios", body: "Onboard new clients with the same information set every time, without a founder in the loop." },
      { title: "Professional services", body: "Collect documents and structured details for engagements that require a paper trail." },
      { title: "Operations teams", body: "Standardise an internal intake process and track completion across many requests." },
      { title: "B2B service providers", body: "Replace onboarding email threads with a portal clients can complete on their own time." },
    ],
    workflow: [
      "Template created",
      "Onboarding sent",
      "Client completes steps",
      "Documents collected",
      "Submission reviewed",
      "Changes requested or approved",
      "Onboarding complete",
    ],
    benefits: [
      "Shorter time from signed client to started work",
      "Complete, structured information on the first pass",
      "One place to see onboarding status",
      "Consistent process regardless of who runs it",
      "Less manual follow-up per client",
    ],
    pricing: {
      model: "Subscription with a free tier planned",
      plans: [
        {
          name: "Free",
          price: "Not set",
          cadence: "",
          description: "Intended for trying OnboardOS on a small number of onboardings.",
          features: ["Limited active onboardings", "Core workflow builder", "Client portal", "Document collection"],
          cta: "Join the early access list",
          note: "Limits not finalised.",
        },
        {
          name: "Team",
          price: "Not set",
          cadence: "",
          description: "Intended for teams running onboarding continuously.",
          features: [
            "Higher onboarding volume",
            "Multiple workflow templates",
            "Review, change requests and approvals",
            "Automated reminders",
          ],
          cta: "Join the early access list",
          highlighted: true,
          note: "Monthly and annual options planned.",
        },
        {
          name: "Scale",
          price: "Not set",
          cadence: "",
          description: "Intended for higher volume and additional usage requirements.",
          features: ["Usage-based allowances", "Additional team members", "Priority support"],
          cta: "Talk to us",
          note: "Usage-based pricing planned.",
        },
      ],
      note: "OnboardOS pricing is not finalised. These tiers describe the intended structure, not published prices.",
    },
    faq: [
      {
        q: "Is OnboardOS available today?",
        a: "Not yet. OnboardOS is in active development. You can join the early access list and we will contact you when it is ready to use.",
      },
      {
        q: "Do clients need to create an account?",
        a: "The client experience is designed around a direct link to their onboarding portal, with progress saved as they go.",
      },
      {
        q: "Can I use more than one onboarding process?",
        a: "Yes. Workflows are templates, so you can maintain different onboarding processes for different services or client types.",
      },
      {
        q: "What happens if a client stops half way?",
        a: "Progress autosaves, and automated reminders are designed to nudge incomplete onboardings so they do not stall silently.",
      },
      {
        q: "Can I ask a client to fix one step without restarting?",
        a: "Yes. Reviewers can request changes on a specific step rather than rejecting the whole onboarding.",
      },
      {
        q: "How is pricing decided?",
        a: "Pricing is not published yet. The plan is a free tier for evaluation plus paid subscription tiers based on onboarding volume.",
      },
    ],
    primaryCta: { label: "Join the early access list", to: "/contact" },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const portfolioThemes = [
  "Workflow automation",
  "Business onboarding",
  "Internal operations tools",
  "Productivity software",
  "AI-assisted business tools",
  "Data and analytics utilities",
];

export const flagshipProduct = products[0]!;
