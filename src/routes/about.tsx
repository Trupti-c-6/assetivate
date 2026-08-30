import { createFileRoute } from "@tanstack/react-router";

import { CtaSection, FeatureCard, Panel, Section, SectionHeading } from "@/components/site/primitives";
import { portfolioThemes } from "@/data/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ASSETIVATE — a software product company" },
      {
        name: "description",
        content:
          "ASSETIVATE is a technology company building a portfolio of practical software products for repetitive business operations. Not an agency or consultancy.",
      },
      { property: "og:title", content: "About ASSETIVATE" },
      {
        property: "og:description",
        content:
          "A technology company building a portfolio of practical software products for repetitive business operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  { title: "Practical engineering", body: "We solve the problem in front of us with software that behaves predictably." },
  { title: "Product quality", body: "Interfaces, states and edge cases get the same attention as core features." },
  { title: "Reliability", body: "Tools used in daily operations must be dependable before they are clever." },
  { title: "Simplicity", body: "Fewer concepts, clearer flows. Complexity is a cost we pay on the customer's behalf." },
  { title: "Automation", body: "If a step can be handled by the system, it should not be handled by a person." },
  { title: "Continuous development", body: "Products are maintained and improved after launch, not shipped and forgotten." },
];

const notUs = [
  "Generic AI agency",
  "Freelance development shop",
  "Digital marketing agency",
  "Corporate consulting firm",
];

function AboutPage() {
  return (
    <>
      <Section className="border-b border-border pb-14">
        <SectionHeading
          eyebrow="About"
          title="ASSETIVATE is a software product company"
          body="We build practical software and automation tools that solve repetitive operational problems for businesses. Each product is reusable software we own, maintain and improve."
        />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Business model" title="Product-led, portfolio-first" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              ASSETIVATE operates as a parent brand for a portfolio of independent software products.
              A customer discovers a specific product, understands it, tries it, and subscribes if it
              earns a place in their operations. The company grows by adding products, not by adding
              billable hours.
            </p>
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <p className="eyebrow">Model</p>
              <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                ASSETIVATE → product portfolio → individual product → free access or trial →
                activation → paid access → reinvestment → product growth
              </p>
            </div>
          </div>
          <Panel>
            <p className="eyebrow">What we are not</p>
            <ul className="mt-4 space-y-2.5">
              {notUs.map((n) => (
                <li key={n} className="flex gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              We do not sell time or generic services. We build software products, and we are judged
              on whether those products keep working.
            </p>
          </Panel>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="Principles" title="How we decide what to build" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <FeatureCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Direction"
            title="Where the portfolio is heading"
            body="Our first product addresses client onboarding. The portfolio is built to extend into adjacent operational categories as each product proves itself."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {portfolioThemes.map((t) => (
              <li key={t} className="rounded-xl border border-border bg-card px-4 py-3.5 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-8 lg:grid-cols-2">
          <Panel>
            <p className="eyebrow">Founder</p>
            <h2 className="mt-3 text-2xl font-semibold">Founded and built by Trupti Chimmalagi</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              ASSETIVATE was founded and built by Trupti Chimmalagi with the goal of creating
              practical software that simplifies repeated business processes. OnboardOS, the first
              product in the portfolio, is live today.
            </p>
            <a
              href="mailto:acendra0306@gmail.com"
              className="mt-6 inline-flex font-mono text-sm text-primary hover:underline"
            >
              acendra0306@gmail.com
            </a>
          </Panel>
          <div className="rounded-2xl border border-dashed border-border p-8">
            <p className="eyebrow">Company information</p>
            <h2 className="mt-3 text-2xl font-semibold">Legal and registration details</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Registered entity name, registration number, registered address and tax details are to
              be confirmed and will be published here. We do not publish company details we cannot
              verify.
            </p>
          </div>
        </div>
      </Section>

      <CtaSection
        title="See what we have built"
        body="OnboardOS is live today — the clearest statement of what ASSETIVATE does."
        primary={{ label: "Explore Products", to: "/products" }}
        secondary={{ label: "Contact us", to: "/contact" }}
      />
    </>
  );
}
