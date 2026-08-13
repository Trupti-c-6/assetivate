import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";

const nav = [
  { label: "Products", to: "/products" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="ASSETIVATE home">
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-md border border-primary/40 bg-primary/10 font-mono text-xs text-primary"
          >
            A
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.22em]">ASSETIVATE</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/products"
            onClick={() => track("cta_clicked", { cta: "header_explore_products" })}
            className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore Products
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-lg border border-border md:hidden"
        >
          <span aria-hidden="true" className="font-mono text-sm">
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn("border-t border-border md:hidden", open ? "block" : "hidden")}
      >
        <nav aria-label="Mobile" className="container-page flex flex-col py-3">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-1 py-2.5 text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
