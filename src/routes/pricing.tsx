import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import { CtaLink, CtaSection, FaqList, Section, SectionHeading } from "@/components/site/primitives";
import { products } from "@/data/products";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — OnboardOS by ASSETIVATE" },
      {
        name: "description",
        content:
          "Start free with your first 3 client onboardings on OnboardOS. Pro is ₹4,999 for one month of unlimited onboardings. No feature restrictions.",
      },
      { property: "og:title", content: "OnboardOS pricing — start free" },
      {
        property: "og:description",
        content:
          "Your first 3 client onboardings are free. Pro is ₹4,999 for one month of unlimited onboardings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const faq = [
  {
    q: "How many clients can I onboard for free?",
    a: "Your first 3 client onboardings are free, with full access to the currently available OnboardOS experience. No card required.",
  },
  {
    q: "Are features restricted on the Free plan?",
    a: "No. The Free plan is the complete product. The only difference with Pro is client capacity.",
  },
  {
    q: "How do I move to Pro?",
    a: "Sign up first, then complete secure Razorpay checkout inside OnboardOS. Pro access is activated after successful payment verification.",
  },
  {
    q: "Does Pro auto-renew?",
    a: "No. Pro gives you 1 month of access. When the period ends, you reactivate it by completing payment again.",
  },
  {
    q: "What happens after my first 3 onboardings?",
    a: "Move to Pro for ₹4,999 to get unlimited client onboardings for a month of access.",
  },
  {
    q: "Is pricing the same across all ASSETIVATE products?",
    a: "No. Each product in the portfolio is priced independently. There is no company-wide bundle at this stage.",
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
          title="Start free with your first 3 client onboardings"
          body="Move to Pro for unlimited client onboardings when you're ready to scale. No feature restrictions — Pro only lifts the client limit."
        />
      </Section>

      {products.map((product) => (
        <Section key={product.slug}>
          <SectionHeading eyebrow={product.name} title="Two plans, one difference: onboarding capacity" />

          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
            {product.pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.highlighted
                    ? "relative flex flex-col rounded-2xl border border-primary/40 bg-card p-6 shadow-glow sm:p-8"
                    : "relative flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8"
                }
              >
                <p className="eyebrow">{plan.name}</p>
                <p className="mt-3 text-4xl font-semibold">
                  {plan.price}
                  <span className="text-base font-normal text-muted-foreground">
                    {plan.cadence}
                  </span>
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm text-muted-foreground">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span aria-hidden="true" className="text-primary">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex-1" />
                {plan.note ? (
                  <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{plan.note}</p>
                ) : null}
                <CtaLink
                  href={plan.ctaHref}
                  to={plan.ctaTo}
                  variant={plan.highlighted ? "outline" : "solid"}
                  className="mt-6 w-full"
                  onClick={() =>
                    track("cta_clicked", {
                      cta: "pricing_plan",
                      plan: plan.name,
                      product: product.slug,
                    })
                  }
                >
                  {plan.cta}
                </CtaLink>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
            {product.pricing.note}
          </p>
        </Section>
      ))}

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="FAQ" title="Pricing questions" />
        <div className="mt-8 max-w-3xl">
          <FaqList items={faq} />
        </div>
      </Section>

      <CtaSection
        title="Start onboarding clients today"
        body="Create your workspace, build a workflow, and send your first client a secure onboarding link."
        primary={{
          label: products[0]!.primaryCta.label,
          href: products[0]!.primaryCta.href,
        }}
        secondary={{ label: "Explore OnboardOS", to: "/products/onboardos" }}
        note="Your first 3 clients are free."
      />
    </>
  );
}
