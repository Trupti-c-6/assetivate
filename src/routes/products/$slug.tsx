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
import { cn } from "@/lib/utils";

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
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
              description: "Free plan — your first 3 clients free.",
            },
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
      {/* ── 1. Hero ─────────────────────────────────────────── */}
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
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
              Client onboarding without the chaos.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{product.oneLiner}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink
                href={product.primaryCta.href}
                onClick={() => track("cta_clicked", { cta: "product_hero", product: product.slug })}
              >
                {product.primaryCta.label}
              </CtaLink>
              <a
                href="#how-it-works"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-border-strong bg-transparent px-5 text-sm font-medium text-foreground transition-all hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Your first 3 clients are free — no card required.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Problem vs Solution ──────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Problem vs solution"
          title="A structured process instead of a scattered one"
          body={product.problem.body}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="eyebrow">Without a structured system</p>
            <ul className="mt-5 space-y-3">
              {product.comparison.without.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/40 bg-card p-6 shadow-glow sm:p-8">
            <p className="eyebrow text-primary">With {product.name}</p>
            <ul className="mt-5 space-y-3">
              {product.comparison.withProduct.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/90">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-primary">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── 3. How it works ─────────────────────────────────── */}
      <Section id="how-it-works" className="scroll-mt-20 border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="How it works"
          title={`${product.name} step by step`}
          body={product.solution.body}
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <StepList steps={product.howItWorks} />
          <Panel>
            <p className="eyebrow">The flow</p>
            <div className="mt-4">
              <WorkflowStrip steps={product.workflow} />
            </div>
            <div className="mt-8 rounded-xl border border-border bg-background p-6">
              <p className="eyebrow">The outcome</p>
              <ul className="mt-4 space-y-2.5">
                {product.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </div>
      </Section>

      {/* ── 4. Verified features ────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Features"
          title="What is included today"
          body="Every feature listed here exists and works in the live product."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {product.features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Section>

      {/* ── 5. Real product showcase ────────────────────────── */}
      {product.showcase.length > 0 ? (
        <Section className="border-t border-border bg-surface/30">
          <SectionHeading
            eyebrow="Product showcase"
            title={`The real ${product.name}, as it works today`}
            body="These are screenshots of the actual product — not mockups."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {product.showcase.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full border-b border-border"
                />
                <figcaption className="p-5">
                  <p className="text-sm font-semibold">{shot.caption}</p>
                  {shot.body ? (
                    <p className="mt-1.5 text-sm text-muted-foreground">{shot.body}</p>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      {/* ── 6. Who it is for ────────────────────────────────── */}
      <Section className={cn(product.showcase.length > 0 && "border-t border-border")}>
        <SectionHeading
          eyebrow="Who it is for"
          title="Built for anyone who onboards clients repeatedly"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.audience.map((a) => (
            <FeatureCard key={a.title} {...a} />
          ))}
        </div>
      </Section>

      {/* ── 7. Pricing ──────────────────────────────────────── */}
      <Section className="border-t border-border bg-surface/30">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing — pay only when you grow"
          body={product.pricing.note}
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
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
              <p className="mt-3 text-3xl font-semibold">
                {plan.price}
                <span className="text-base font-normal text-muted-foreground">{plan.cadence}</span>
              </p>
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
                href={plan.ctaHref}
                to={plan.ctaTo}
                variant={plan.highlighted ? "solid" : "outline"}
                className="mt-6 w-full"
                onClick={() =>
                  track("cta_clicked", {
                    cta: "product_pricing",
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
      </Section>

      {/* ── 8. FAQ ──────────────────────────────────────────── */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions about this product" />
        <div className="mt-8 max-w-3xl">
          <FaqList items={product.faq} />
        </div>
      </Section>

      {/* ── 9. Final CTA ────────────────────────────────────── */}
      <CtaSection
        title="Ready to make client onboarding simpler?"
        body="Create a workflow, send one secure link, collect information and files, and review everything in one place."
        primary={{ label: product.primaryCta.label, href: product.primaryCta.href }}
        secondary={{ label: "Back to products", to: "/products" }}
        note="Your first 3 clients are free."
      />
    </>
  );
}
