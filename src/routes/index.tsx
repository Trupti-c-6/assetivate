import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";

import {
  CtaLink,
  CtaSection,
  FeatureCard,
  Panel,
  Section,
  SectionHeading,
  StepList,
  WorkflowStrip,
} from "@/components/site/primitives";
import { PlannedCard, ProductCard } from "@/components/site/ProductCard";
import { flagshipProduct as flagship, products, portfolioThemes } from "@/data/products";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASSETIVATE — Practical software systems for business workflows" },
      {
        name: "description",
        content:
          "ASSETIVATE builds practical software systems that turn repetitive business processes into scalable digital workflows. Explore the product portfolio.",
      },
      { property: "og:title", content: "ASSETIVATE — Practical software for business workflows" },
      {
        property: "og:description",
        content:
          "A portfolio of software products that turn repetitive business operations into reliable digital workflows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ASSETIVATE",
          description:
            "ASSETIVATE builds practical software systems that turn repetitive business processes into scalable digital workflows.",
          url: "https://assetivate.com",
        }),
      },
    ],
  }),
  component: Home,
});

const builds = [
  {
    title: "Workflow software",
    body: "Products that give a repeatable business process a defined structure, owner and status instead of an inbox thread.",
  },
  {
    title: "Operational automation",
    body: "Reminders, notifications and status tracking that remove the manual follow-up work around a process.",
  },
  {
    title: "Structured data capture",
    body: "Interfaces that collect exactly the information and documents a process needs, in a consistent format.",
  },
];

const problems = [
  "Processes that live in email threads and spreadsheets",
  "Information collected two or three times because it arrived incomplete",
  "No reliable view of where work is stuck",
  "Follow-up that depends on someone remembering",
  "A process that changes depending on who runs it",
];

const whyPoints = [
  {
    title: "Products, not projects",
    body: "We build reusable software we maintain and improve — not one-off deliverables handed over and abandoned.",
  },
  {
    title: "Narrow and practical",
    body: "Each product solves one operational problem properly rather than promising to solve everything.",
  },
  {
    title: "Built to be run daily",
    body: "Reliability, clear states and predictable behaviour matter more than novelty features.",
  },
  {
    title: "One portfolio, shared foundations",
    body: "Shared engineering and design foundations mean each new product starts from a mature base.",
  },
];

function Home() {
  useEffect(() => {
    track("homepage_viewed");
  }, []);


  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
        <div className="container-page relative py-24 sm:py-32">
          <div className="max-w-3xl animate-rise">
            <p className="eyebrow">Software product portfolio</p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-6xl">
              <span className="text-gradient">ASSETIVATE builds practical software systems</span>{" "}
              that turn repetitive business processes into scalable digital workflows.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We design and engineer reusable products for the operational work businesses repeat
              every week — onboarding, intake, tracking and follow-up.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink
                href={flagship.primaryCta.href}
                onClick={() => track("cta_clicked", { cta: "hero_primary_start_free" })}
              >
                Start Free with {flagship.name}
              </CtaLink>
              <CtaLink
                to="/products/onboardos"
                variant="outline"
                onClick={() => track("cta_clicked", { cta: "hero_secondary" })}
              >
                Explore OnboardOS
              </CtaLink>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              OnboardOS is live. Your first 3 clients are free.
            </p>
            <dl className="mt-14 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {[
                ["Focus", "Business workflow software"],
                ["Model", "Product-led SaaS portfolio"],
                ["Current products", `${products.length} live in the portfolio`],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-2 text-sm text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What we build"
          title="Software for the work that repeats"
          body="ASSETIVATE is a technology company building a portfolio of software products. We are not an agency, a consultancy or a marketing service."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {builds.map((b) => (
            <FeatureCard key={b.title} {...b} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Product portfolio"
          title="The portfolio today"
          body="Every product has a clear problem, a category and an honest status. Our first product, OnboardOS, is available now."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
          <PlannedCard label="Additional products are in planning. They will appear here when they exist as real software." />
        </div>
        <div className="mt-8">
          <CtaLink to="/products" variant="outline">
            View full portfolio
          </CtaLink>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Current product"
              title={flagship.name}
              body={flagship.oneLiner}
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {flagship.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink
                href={flagship.primaryCta.href}
                onClick={() =>
                  track("cta_clicked", { cta: "home_flagship_start_free", product: flagship.slug })
                }
              >
                Start Free
              </CtaLink>
              <CtaLink to="/products/onboardos" variant="outline">
                See How It Works
              </CtaLink>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Free for your first 3 clients. Pro (₹4,999/month, unlimited clients) is coming soon.
            </p>
          </div>
          <Panel>
            <p className="eyebrow">Workflow</p>
            <div className="mt-4">
              <WorkflowStrip steps={flagship.workflow} />
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <p className="eyebrow">How it works</p>
              <div className="mt-5">
                <StepList steps={flagship.howItWorks.slice(0, 3)} />
              </div>
            </div>
          </Panel>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Problems solved"
              title="Operational drag is a software problem"
              body="The processes that slow a business down are rarely complicated. They are just undefined."
            />
            <ul className="mt-8 space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Why ASSETIVATE" title="How we work" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyPoints.map((w) => (
                <FeatureCard key={w.title} {...w} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Product-led philosophy"
              title="Try the product before you talk to anyone"
              body="Our default path is discovery, then understanding, then a hands-on trial. Sales conversations are optional, not a gate."
            />
          </div>
          <Panel>
            <p className="eyebrow">Future portfolio direction</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {portfolioThemes.map((t) => (
                <li key={t} className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              These are directions the portfolio is built to support. Nothing here is presented as an
              available product.
            </p>
          </Panel>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-dashed border-border p-8">
            <p className="eyebrow">Proof</p>
            <h2 className="mt-3 text-2xl font-semibold">Customer proof will be published here</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We do not publish testimonials, logos or metrics we have not earned. As products go live
              and customers agree to be named, real proof will appear in this section.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="eyebrow">Resources</p>
            <h2 className="mt-3 text-2xl font-semibold">Insights on business automation</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Practical writing on workflow design, client onboarding and operational systems — our
              long-term organic acquisition engine.
            </p>
            <Link
              to="/resources"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Browse resources <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </Section>

      <CtaSection
        title="Ready to make client onboarding simpler?"
        body="Create a workflow, send one secure link, collect information and files, and review everything in one place with OnboardOS."
        primary={{ label: "Start Free", href: flagship.primaryCta.href }}
        secondary={{ label: "Explore Products", to: "/products" }}
        note="Your first 3 clients are free."
      />
    </>
  );
}
