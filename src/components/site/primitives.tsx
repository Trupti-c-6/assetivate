import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/data/products";

export function Section({
  children,
  className,
  id,
  as: As = "section",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "footer";
}) {
  return (
    <As id={id} className={cn("py-20 sm:py-28", className)}>
      <div className="container-page">{children}</div>
    </As>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p> : null}
    </div>
  );
}

export function StatusBadge({ status }: { status: ProductStatus }) {
  const tone =
    status === "LIVE"
      ? "border-primary/40 bg-primary/10 text-primary"
      : status === "IN DEVELOPMENT"
        ? "border-warning/40 bg-warning/10 text-warning"
        : "border-border-strong bg-muted text-muted-foreground";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] uppercase",
        tone,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("surface-panel p-6 sm:p-8", className)}>{children}</div>;
}

export function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

export function StepList({ steps }: { steps: { step: string; title: string; body: string }[] }) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-6">
      {steps.map((s) => (
        <li key={s.step} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-1.5 size-2.5 rounded-full bg-primary"
          />
          <p className="font-mono text-xs text-muted-foreground">{s.step}</p>
          <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function WorkflowStrip({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-lg border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
            {s}
          </span>
          {i < steps.length - 1 ? (
            <span aria-hidden="true" className="font-mono text-xs text-primary">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-card">
      {items.map((item) => (
        <details key={item.q} className="group px-5 py-4 sm:px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
            {item.q}
            <span
              aria-hidden="true"
              className="font-mono text-muted-foreground transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

type CtaTarget = { label: string; to?: string; href?: string };

export function CtaSection({
  title,
  body,
  primary,
  secondary,
  note,
}: {
  title: string;
  body: string;
  primary: CtaTarget;
  secondary?: CtaTarget;
  note?: string;
}) {
  return (
    <Section>
      <div className="surface-panel relative overflow-hidden px-6 py-14 text-center sm:px-12">
        <div aria-hidden="true" className="grid-backdrop absolute inset-0 opacity-60" />
        <div className="relative">
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">{body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink to={primary.to} href={primary.href}>
              {primary.label}
            </CtaLink>
            {secondary ? (
              <CtaLink to={secondary.to} href={secondary.href} variant="outline">
                {secondary.label}
              </CtaLink>
            ) : null}
          </div>
          {note ? <p className="mt-5 text-xs text-muted-foreground">{note}</p> : null}
        </div>
      </div>
    </Section>
  );
}

export function CtaLink({
  to,
  href,
  children,
  variant = "solid",
  className,
  onClick,
}: {
  to?: string | undefined;
  /** External URL — opens in a new tab. */
  href?: string | undefined;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
}) {
  const styles = {
    solid: "bg-primary text-primary-foreground hover:opacity-90",
    outline: "border border-border-strong bg-transparent text-foreground hover:bg-accent",
    ghost: "text-muted-foreground hover:text-foreground",
  } as const;
  const classes = cn(
    "inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    styles[variant],
    className,
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
}
