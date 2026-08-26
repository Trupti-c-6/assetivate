import { Link } from "@tanstack/react-router";

import { StatusBadge } from "@/components/site/primitives";
import type { Product } from "@/data/products";
import { track } from "@/lib/analytics";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-border-strong">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <StatusBadge status={product.status} />
      </div>
      <p className="mt-1 font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
        {product.category}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.shortDescription}</p>
      <dl className="mt-5 border-t border-border pt-4">
        <dt className="eyebrow">Problem solved</dt>
        <dd className="mt-1.5 text-sm text-foreground/90">{product.problemSolved}</dd>
      </dl>
      <div className="mt-6 flex-1" />
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <a
          href={product.primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("cta_clicked", { cta: "product_card_start_free", product: product.slug })}
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          {product.primaryCta.label}
        </a>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          onClick={() => track("cta_clicked", { cta: "product_card", product: product.slug })}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Explore {product.name}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export function PlannedCard({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-transparent p-6">
      <p className="eyebrow">Portfolio direction</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
