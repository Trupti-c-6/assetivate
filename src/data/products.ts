// ─── Product application URL ────────────────────────────────────────────────
// Single source of truth for the live OnboardOS application.
// All product-related links (signup, login) are derived from this value.

export const PRODUCT_APP_URL = "https://onboard-os-seven.vercel.app";

export const productAppUrl = (path = "") =>
  `${PRODUCT_APP_URL}${path}`;

export const PRODUCT_SIGNUP_URL = productAppUrl("/signup");
export const PRODUCT_LOGIN_URL = productAppUrl("/login");

// ─── Types ──────────────────────────────────────────────────────────────────

export type ProductStatus =
  | "LIVE"
  | "COMING SOON"
  | "IN DEVELOPMENT";

export type PricingPlan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;

  /** External destination (opens in a new tab). */
  ctaHref?: string;

  /** Internal route destination. */
  ctaTo?: string;

  highlighted?: boolean;
  note?: string;
};

export type ShowcaseItem = {
  src: string;
  alt: string;
  caption: string;
  body?: string;
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

  problem: {
    title: string;
    body: string;
    points: string[];
  };

  solution: {
    title: string;
    body: string;
  };

  comparison: {
    without: string[];
    withProduct: string[];
  };

  howItWorks: {
    step: string;
    title: string;
    body: string;
  }[];

  features: {
    title: string;
    body: string;
  }[];

  audience: {
    title: string;
    body: string;
  }[];

  workflow: string[];

  benefits: string[];

  /**
   * Product screenshots.
   *
   * Currently empty because we are not displaying
   * screenshots on the product page.
   */
  showcase: ShowcaseItem[];

  pricing: {
    model: string;
    plans: PricingPlan[];
    note: string;
  };

  faq: {
    q: string;
    a: string;
  }[];

  primaryCta: {
    label: string;
    href: string;
  };
};

// ─── Products ───────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    slug: "onboardos",

    name: "OnboardOS",

    category: "Client onboarding software",

    status: "LIVE",

    oneLiner:
      "Collect client information and documents through one structured workflow — instead of chasing them across email, chat and spreadsheets.",

    shortDescription:
      "Build a reusable onboarding workflow, send each client one secure link, and collect structured information and files in one place. Track progress, review submissions, and request changes to individual items.",

    fullDescription:
      "OnboardOS is client onboarding software for businesses and professionals who repeatedly need to collect structured information and documents from clients. You create a reusable onboarding workflow with the questions and files you need, then send each client one secure link. Clients complete everything without creating an account. You track progress, review every submission in one place, and request changes to a specific item instead of rejecting the whole submission.",

    problemSolved:
      "Client onboarding information scattered across email, WhatsApp, spreadsheets and forms — with repeated follow-ups and no clear view of what is missing.",

    // ─── Problem ──────────────────────────────────────────────────────────

    problem: {
      title: "Client onboarding is scattered everywhere",

      body:
        "Most providers collect onboarding information through a mix of email threads, WhatsApp messages, spreadsheets, Google Forms and documents. Every client becomes a fresh chase — and nobody can say at a glance what is still missing.",

      points: [
        "Information scattered across email and chat",
        "Repeated follow-up messages to the same client",
        "Missing documents discovered late",
        "A different process for every client",
        "No clear view of onboarding progress",
      ],
    },

    // ─── Solution ─────────────────────────────────────────────────────────

    solution: {
      title: "One structured workflow, one secure link",

      body:
        "OnboardOS turns your onboarding process into a reusable workflow. Clients get one secure link and complete everything in a guided portal — no account needed. You get structured responses, organised files, progress tracking and a single place to review it all.",
    },

    // ─── Comparison ──────────────────────────────────────────────────────

    comparison: {
      without: [
        "Information scattered across email threads",
        "Files sent through WhatsApp and chat apps",
        "Details collected in spreadsheets and forms",
        "Repeated follow-up messages",
        "Missing documents discovered late",
        "A different process for every client",
        "Hard to know what is still missing",
      ],

      withProduct: [
        "One structured onboarding workflow",
        "One secure link per client",
        "Information collected in one place",
        "Organised file collection",
        "Clear progress tracking",
        "Structured review in one place",
        "Request changes only where needed",
      ],
    },

    // ─── How it works ─────────────────────────────────────────────────────

    howItWorks: [
      {
        step: "01",

        title: "Create your workflow",

        body:
          "Build a reusable onboarding process based on the information you need from clients.",
      },

      {
        step: "02",

        title: "Add the information you need",

        body:
          "Collect structured responses using text fields, selections, and file uploads.",
      },

      {
        step: "03",

        title: "Send your client one secure link",

        body:
          "Clients complete the onboarding without needing to create an account.",
      },

      {
        step: "04",

        title: "Track progress",

        body:
          "See where each client is in the onboarding process.",
      },

      {
        step: "05",

        title: "Review and request changes",

        body:
          "Review everything in one place and request changes to individual responses when necessary.",
      },
    ],

    // ─── Features ─────────────────────────────────────────────────────────

    features: [
      {
        title: "Reusable workflow templates",

        body:
          "Create onboarding workflows once and reuse them for multiple clients.",
      },

      {
        title: "Structured client data collection",

        body:
          "Collect short text, long text, single-choice, and multiple-choice responses.",
      },

      {
        title: "Secure client portal",

        body:
          "Send clients a secure onboarding link — no account creation required.",
      },

      {
        title: "File collection",

        body:
          "Collect documents and files with supported file type and size validation.",
      },

      {
        title: "Centralised review",

        body:
          "Review client responses in one structured place.",
      },

      {
        title: "Secure file access",

        body:
          "Access submitted files through secure, controlled access.",
      },

      {
        title: "Request changes",

        body:
          "Request changes to one specific piece of information instead of rejecting the entire submission.",
      },

      {
        title: "Progress tracking",

        body:
          "Track where clients are throughout the onboarding process.",
      },

      {
        title: "Branded provider experience",

        body:
          "Customise your organisation details, logo, and brand colour.",
      },

      {
        title: "AI-assisted submission summaries",

        body:
          "When configured, assist providers with summarising submitted onboarding information.",
      },
    ],

    // ─── Audience ─────────────────────────────────────────────────────────

    audience: [
      {
        title: "Agencies",

        body:
          "Standardise client onboarding across projects.",
      },

      {
        title: "Consultants",

        body:
          "Collect the information you need before engagements begin.",
      },

      {
        title: "Service providers",

        body:
          "Create a repeatable process for every customer.",
      },

      {
        title: "Freelancers",

        body:
          "Stop chasing information across multiple channels.",
      },

      {
        title: "Growing businesses",

        body:
          "Turn repeated onboarding processes into structured workflows.",
      },
    ],

    // ─── Workflow ─────────────────────────────────────────────────────────

    workflow: [
      "Workflow created",
      "Secure link sent",
      "Client completes onboarding",
      "Progress tracked",
      "Reviewed in one place",
      "Changes requested where needed",
      "Onboarding complete",
    ],

    // ─── Benefits ─────────────────────────────────────────────────────────

    benefits: [
      "Less back-and-forth with clients",
      "One organised onboarding process",
      "Stop chasing client information",
      "Clear visibility into what is missing",
      "Easier document collection",
      "Faster, structured review",
    ],

    // ─── Showcase ─────────────────────────────────────────────────────────
    //
    // Intentionally empty.
    //
    // We are removing the screenshot section because the images were
    // not loading correctly on the deployed Vercel site.
    //
    showcase: [],

    // ─── Pricing ──────────────────────────────────────────────────────────

    pricing: {
      model:
        "Free for your first 3 client onboardings, then ₹4,999 for a month of unlimited Pro access",

      plans: [
        {
          name: "Free",

          price: "₹0",

          cadence: "",

          description:
            "Your first 3 client onboarding instances are free.",

          features: [
            "First 3 client onboardings included",
            "Full access to the current OnboardOS experience",
            "No feature restrictions",
            "No card required",
          ],

          cta: "Start Free",

          ctaHref: PRODUCT_SIGNUP_URL,
        },

        {
          name: "Pro",

          price: "₹4,999",

          cadence: " / 1 month of access",

          description:
            "1 month of Pro access with unlimited client onboardings.",

          features: [
            "Unlimited client onboardings while your Pro access is active",
            "Full access to the OnboardOS experience",
            "Secure Razorpay checkout inside the app",
            "Reactivate with payment when your access period ends",
          ],

          cta: "Start Free",

          ctaHref: PRODUCT_SIGNUP_URL,

          highlighted: true,

          note:
            "Pro is purchased inside OnboardOS after you sign up. Pro access is activated after successful payment verification.",
        },
      ],

      note:
        "No feature restrictions. Move to Pro inside the app when you need to onboard more than 3 clients.",
    },

    // ─── FAQ ──────────────────────────────────────────────────────────────

    faq: [
      {
        q: "What is OnboardOS?",

        a:
          "OnboardOS helps businesses create structured workflows for collecting information and documents from clients. You build a reusable onboarding workflow, send each client one secure link, and review everything they submit in one place.",
      },

      {
        q: "Who is OnboardOS for?",

        a:
          "Agencies, consultants, service providers, freelancers, and growing businesses — anyone who repeatedly needs to collect structured information and documents from clients.",
      },

      {
        q: "Is OnboardOS available now?",

        a:
          "Yes. OnboardOS is live. You can create an account and start using the product today.",
      },

      {
        q: "Do my clients need to create an account?",

        a:
          "No. Clients complete their onboarding through the secure link you send them — no account creation required.",
      },

      {
        q: "Can clients upload files?",

        a:
          "Yes. Clients can upload documents and files as part of their onboarding, with supported file type and size validation.",
      },

      {
        q: "Can I reuse onboarding workflows?",

        a:
          "Yes. Workflows are reusable templates — build your onboarding process once and use it for every client.",
      },

      {
        q: "Can I review client responses before approving them?",

        a:
          "Yes. Every submission is reviewed in one structured place before you approve it.",
      },

      {
        q: "Can I request changes to a specific response?",

        a:
          "Yes. You can request changes to an individual response instead of restarting the entire onboarding process.",
      },

      {
        q: "How does the free plan work?",

        a:
          "Your first 3 client onboardings are free, with full access to the currently available OnboardOS experience. No card required.",
      },

      {
        q: "What happens after my first 3 onboardings?",

        a:
          "You move to Pro from inside the app. Pro is ₹4,999 for 1 month of access with unlimited client onboardings.",
      },

      {
        q: "What does Pro include?",

        a:
          "Unlimited client onboardings for 1 month of Pro access, with the same full product experience as Free.",
      },

      {
        q: "How does upgrading work?",

        a:
          "Sign up first, then complete secure Razorpay checkout inside OnboardOS. Pro access is activated after successful payment verification.",
      },

      {
        q: "Does Pro auto-renew?",

        a:
          "No. Pro is a one-month access period. When it ends, you reactivate it by completing payment again.",
      },

      {
        q: "How do I get started?",

        a:
          "Create your workspace using the Start Free button — it takes you straight to the real OnboardOS signup page.",
      },
    ],

    // ─── Primary CTA ──────────────────────────────────────────────────────

    primaryCta: {
      label: "Start Free",
      href: PRODUCT_SIGNUP_URL,
    },
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

// ─── Portfolio ───────────────────────────────────────────────────────────────

export const portfolioThemes = [
  "Workflow automation",
  "Business onboarding",
  "Internal operations tools",
  "Productivity software",
  "AI-assisted business tools",
  "Data and analytics utilities",
];

export const flagshipProduct = products[0]!;
