import { createFileRoute } from "@tanstack/react-router";

import { CtaSection, Section, SectionHeading } from "@/components/site/primitives";
import { PlannedCard, ProductCard } from "@/components/site/ProductCard";
import { flagshipProduct, portfolioThemes, products } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — ASSETIVATE software portfolio" },
      {
        name: "description",
        content:
          "The ASSETIVATE product portfolio: practical software for client onboarding, workflow automation and business operations. Current status for every product.",
      },
      { property: "og:title", content: "ASSETIVATE product portfolio" },
      {
        property: "og:description",
        content:
          "Practical software products for client onboarding, workflow automation and business operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <Section className="border-b border-border pb-14">
        <SectionHeading
          eyebrow="Product portfolio"
          title="Software products built to be used every day"
          body="Each product solves one operational problem. OnboardOS, our client onboarding software, is available now."
        />
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
          <PlannedCard label="More products are planned. They will be listed here once they exist as real, usable software." />
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Architecture"
          title="Built to grow from one product to many"
          body="The portfolio is designed so a new product can be added without rebuilding the company website around it. These are the categories the architecture supports."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioThemes.map((t) => (
            <li key={t} className="rounded-xl border border-border bg-card px-4 py-3.5 text-sm">
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection
        title="Start with OnboardOS"
        body="Create a reusable onboarding workflow, send clients one secure link, and review everything in one place."
        primary={{ label: flagshipProduct.primaryCta.label, href: flagshipProduct.primaryCta.href }}
        secondary={{ label: "See pricing", to: "/pricing" }}
        note="Your first 3 clients are free."
      />
    </>
  );
}
