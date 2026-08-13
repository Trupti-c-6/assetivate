import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { CtaLink, CtaSection, FaqList, Section, SectionHeading } from "@/components/site/primitives";
import { products } from "@/data/products";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ASSETIVATE products" },
      {
        name: "description",
        content:
          "How ASSETIVATE prices its software products: per-product plans with free tiers, trials, monthly and annual subscriptions, and usage-based options.",
      },
      { property: "og:title", content: "ASSETIVATE pricing" },
      {
        property: "og:description",
        content: "Per-product pricing with free tiers, trials, subscriptions and usage-based options.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const models = [
  { title: "Free tier", body: "A usable free level for evaluating a product on real work before paying." },
  { title: "Trial", body: "Time-limited access to paid capability where a free tier does not fit the product." },
  { title: "Monthly plans", body: "Standard subscription billing, cancellable, priced per product." },
  { title: "Annual plans", body: "Annual commitment at a lower effective rate where it suits the customer." },
  { title: "Usage-based", body: "Allowances tied to volume for products where usage varies significantly." },
];

const faq = [
  {
    q: "Why are prices not shown yet?",
    a: "We publish prices when a product is genuinely available to buy. Listing prices for software you cannot yet use is misleading, so the tiers describe structure only.",
  },
  {
    q: "Is pricing the same across all ASSETIVATE products?",
    a: "No. Each product is priced independently based on the value and usage of that product. There is no company-wide bundle at this stage.",
  },
  {
    q: "Is payment connected today?",
    a: "No. Checkout and subscription billing are not connected. The site has a defined integration point so payments can be enabled per product when a product is ready to sell.",
  },
  {
    q: "What happens after a trial ends?",
    a: "Where a product offers a trial, you will be able to move to a paid plan or continue on a free tier where the product provides one. No automatic charges without a confirmed subscription.",
  },
];

function PricingPage() {
  useEffect(() => {
    track("pricing_viewed");
  }, []);

  return (
    <>
      <Section className="border-b border-border pb-14">
        <SectionHeading
          eyebrow="Pricing"
          title="Priced per product, not per company"
          body="ASSETIVATE is a portfolio. Each product carries its own pricing so the company is never locked into one product's economics."
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Pricing models" title="What the architecture supports" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
            <div key={m.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="By product" title="Current product pricing" />
        <div className="mt-10 space-y-14">
          {products.map((product) => (
            <div key={product.slug}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{product.name}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{product.pricing.note}</p>
                </div>
                <CtaLink to="/products/onboardos" variant="outline">
                  Product details
                </CtaLink>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {product.pricing.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={
                      plan.highlighted
                        ? "rounded-2xl border border-primary/40 bg-card p-6 shadow-glow"
                        : "rounded-2xl border border-border bg-card p-6"
                    }
                  >
                    <p className="eyebrow">{plan.name}</p>
                    <p className="mt-3 text-2xl font-semibold">{plan.price}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                    <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                      {plan.features.map((f) => (
                        <li key={f} className="flex gap-2.5">
                          <span aria-hidden="true" className="text-primary">
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    {plan.note ? (
                      <p className="mt-5 text-xs text-muted-foreground">{plan.note}</p>
                    ) : null}
                    <CtaLink
                      to="/contact"
                      variant={plan.highlighted ? "solid" : "outline"}
                      className="mt-6 w-full"
                      onClick={() =>
                        track("cta_clicked", { cta: "pricing_plan", plan: plan.name, product: product.slug })
                      }
                    >
                      {plan.cta}
                    </CtaLink>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-dashed border-border p-8">
          <p className="eyebrow">Payment configuration</p>
          <h2 className="mt-3 text-2xl font-semibold">Billing is not connected yet</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            There is no checkout on this site, and no fake payment flow. When a product is ready to
            sell, a payment provider and per-product plans must be configured, and the subscription
            path becomes: product → signup → trial → subscription → payment → account → product usage.
          </p>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="FAQ" title="Pricing questions" />
        <div className="mt-8 max-w-3xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <CtaSection
        title="Want early pricing when it is set?"
        body="Tell us which product you are interested in and we will share pricing before it is published."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "Explore products", to: "/products" }}
      />
    </>
  );
}
