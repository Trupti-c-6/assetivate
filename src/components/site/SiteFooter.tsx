import { Link } from "@tanstack/react-router";

import { products, PRODUCT_LOGIN_URL, PRODUCT_SIGNUP_URL } from "@/data/products";

const company = [
  { label: "About ASSETIVATE", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.22em]">ASSETIVATE</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Practical software systems that turn repetitive business processes into scalable digital
            workflows.
          </p>
        </div>

        <nav aria-label="Products">
          <p className="eyebrow">Products</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/products" className="text-muted-foreground hover:text-foreground">
                Product portfolio
              </Link>
            </li>
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
            </li>
            <li>
              <a
                href={PRODUCT_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Start Free
              </a>
            </li>
            <li>
              <a
                href={PRODUCT_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Sign in to OnboardOS
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {company.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p className="eyebrow">Legal</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legal.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-muted-foreground hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="/sitemap.xml" className="text-muted-foreground hover:text-foreground">
                Sitemap
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ASSETIVATE · Founded and built by Trupti Chimmalagi
          </p>
          <p>
            <a href="mailto:acendra0306@gmail.com" className="hover:text-foreground">
              acendra0306@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
