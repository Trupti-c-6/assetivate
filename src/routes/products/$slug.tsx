import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect } from "react";

import {
  CtaLink,
  CtaSection,
  FaqList,
  FeatureCard,
  Panel,
  Section,
  SectionHeading,
  StatusBadge,
  StepList,
  WorkflowStrip,
} from "@/components/site/primitives";
import { getProduct } from "@/data/products";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) return {};
    const title = `${product.name} — ${product.category} | ASSETIVATE`;
    return {
      meta: [
        { title },
        { name: "description", content: product.oneLiner },
        { property: "og:title", content: `${product.name} by ASSETIVATE` },
        { property: "og:description", content: product.oneLiner },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: product.name,
            applicationCategory: "BusinessApplication",
            description: product.fullDescription,
            brand: { "@type": "Brand", name: "ASSETIVATE" },
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();

  useEffect(() => {
    track("product_viewed", { product: product.slug });
  }, [product.slug]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="grid-backdrop absolute inset-0" />
        <div className="container-page relative py-20 sm:py-28">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-muted-foreground">
            <Link to="/products" className="hover:text-foreground">
              Products
            </Link>
            <span aria-hidden="true" className="px-2">
              /
            </span>
            <span className="text-foreground">{product.name}</span>
          </nav>
          <div className="max-w-3xl animate-rise">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={product.status} />
              <p className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
                {product.category}
              </p>
            </div>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{product.oneLiner}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink
                to={product.primaryCta.to}
                onClick={() => track("cta_clicked", { cta: "product_hero", product: product.slug })}
              >
                {product.primaryCta.label}
              </CtaLink>
              <CtaLink to="/pricing" variant="outline">
                Pricing
              </CtaLink>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The problem" title={product.problem.title} body={product.problem.body} />
            <ul className="mt-7 space-y-3">
              {product.problem.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <Panel>
            <p className="eyebrow">The solution</p>
            <h2 className="mt-3 text-2xl font-semibold">{product.solution.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {product.solution.body}
            </p>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              {product.fullDescription}
            </p>
          </Panel>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="How it works" title={`${product.name} step by step`} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <StepList steps={product.howItWorks} />
          <Panel>
            <p className="eyebrow">Workflow visualisation</p>
            <div className="mt-4">
              <WorkflowStrip steps={product.workflow} />
            </div>
            <div className="mt-8 rounded-xl border border-dashed border-border p-6">
              <p className="eyebrow">Screenshots &amp; demo</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Product screenshots and an interactive demo will be published here when{" "}
                {product.name} is available. We do not show mocked interfaces as finished
                functionality.
              </p>
            </div>
          </Panel>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Key features" title="What is included" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {product.features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who it is for" title="Built for teams that onboard repeatedly" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {product.audience.map((a) => (
                <FeatureCard key={a.title} {...a} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Benefits" title="What changes in practice" />
            <ul className="mt-8 space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title={`${product.name} pricing`}
          body={product.pricing.note}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
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
              {plan.note ? <p className="mt-5 text-xs text-muted-foreground">{plan.note}</p> : null}
              <CtaLink
                to="/contact"
                variant={plan.highlighted ? "solid" : "outline"}
                className="mt-6 w-full"
                onClick={() => track("cta_clicked", { cta: "product_pricing", plan: plan.name })}
              >
                {plan.cta}
              </CtaLink>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <SectionHeading eyebrow="FAQ" title="Questions about this product" />
        <div className="mt-8 max-w-3xl">
          <FaqList items={product.faq} />
        </div>
      </Section>

      <CtaSection
        title={`Get access to ${product.name}`}
        body="Join the early access list and we will contact you when the product is ready for real use — no fake trial, no placeholder checkout."
        primary={product.primaryCta}
        secondary={{ label: "Back to products", to: "/products" }}
      />
    </>
  );
}
