import { createFileRoute } from "@tanstack/react-router";

import { CtaSection, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Insights — ASSETIVATE" },
      {
        name: "description",
        content:
          "Practical writing on business automation, workflow optimisation, client onboarding and operational systems from the ASSETIVATE team.",
      },
      { property: "og:title", content: "ASSETIVATE Resources & Insights" },
      {
        property: "og:description",
        content:
          "Guides on business automation, workflow design, client onboarding and operational systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const topics = [
  { title: "Business automation guides", body: "Where automation genuinely pays off, and where it adds fragility." },
  { title: "Workflow optimisation", body: "Turning an informal process into a defined, measurable workflow." },
  { title: "Client onboarding", body: "Collecting the right information once, and starting work faster." },
  { title: "Productivity & SaaS", body: "Choosing and combining tools without creating operational debt." },
  { title: "Operational problem solving", body: "Diagnosing where work actually stalls inside a small team." },
  { title: "Product tutorials", body: "Practical walkthroughs for ASSETIVATE products as they go live." },
  { title: "Industry-specific automation", body: "How the same process differs across service industries." },
  { title: "Practical business systems", body: "Systems thinking applied at the scale of a real small business." },
];

function ResourcesPage() {
  return (
    <>
      <Section className="border-b border-border pb-14">
        <SectionHeading
          eyebrow="Resources & insights"
          title="Writing on operational systems"
          body="We are building a library of practical, non-promotional writing on how businesses can make repetitive operations less manual."
        />
      </Section>

      <Section>
        <div className="rounded-2xl border border-dashed border-border p-8">
          <p className="eyebrow">Status</p>
          <h2 className="mt-3 text-2xl font-semibold">No articles published yet</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            The first pieces are being written. Rather than filling this page with placeholder posts,
            we are listing the topics we will cover. Articles will appear here as individual pages.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Planned topics" title="What we will cover" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <article key={t.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Want the first articles?"
        body="Get in touch and we will let you know when the resource library goes live."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "Explore products", to: "/products" }}
      />
    </>
  );
}
