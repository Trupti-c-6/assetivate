/**
 * Analytics integration point.
 *
 * No analytics provider is connected yet. Events are forwarded to
 * `window.dataLayer` when present so a provider (GA4, Plausible, PostHog,
 * or a tag manager) can be attached later without changing call sites.
 *
 * To connect a provider: add its script to src/routes/__root.tsx head links
 * and forward `track()` to its client here.
 */
export type AnalyticsEvent =
  | "homepage_viewed"
  | "product_viewed"
  | "cta_clicked"
  | "demo_started"
  | "trial_started"
  | "signup_completed"
  | "pricing_viewed"
  | "checkout_started"
  | "subscription_completed";

type Payload = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...payload });
}
