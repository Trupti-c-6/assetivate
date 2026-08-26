import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Panel, Section, SectionHeading } from "@/components/site/primitives";
import { products } from "@/data/products";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ASSETIVATE — product enquiries & early access" },
      {
        name: "description",
        content:
          "Contact ASSETIVATE about products, early access to OnboardOS, or an operational process you want to automate.",
      },
      { property: "og:title", content: "Contact ASSETIVATE" },
      {
        property: "og:description",
        content: "Product enquiries, early access requests and partnership questions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

type Status = "idle" | "error" | "info";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const detail = String(form.get("message") ?? "").trim();

    if (!email.includes("@") || detail.length < 10) {
      setStatus("error");
      setMessage("Please enter a valid email address and a message of at least 10 characters.");
      return;
    }

    track("cta_clicked", { cta: "contact_form_submit" });
    setStatus("info");
    setMessage(
      "This form is not connected to a mailbox or backend yet, so nothing was sent. Please email us directly using the address below while we finish setup.",
    );
  }

  return (
    <>
      <Section className="border-b border-border pb-14">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to us about a process worth automating"
          body="Product questions, early access requests, or a repetitive operation you would like to see turned into software."
        />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={onSubmit} noValidate className="surface-panel p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email <span className="text-muted-foreground">(required)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="interest" className="block text-sm font-medium">
                  What is this about?
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {products.map((p) => (
                    <option key={p.slug} value={`${p.slug}-pro`}>
                      {p.name} Pro waitlist
                    </option>
                  ))}
                  {products.map((p) => (
                    <option key={`${p.slug}-support`} value={`${p.slug}-support`}>
                      {p.name} question
                    </option>
                  ))}
                  <option value="process">A process I want to automate</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message <span className="text-muted-foreground">(required)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border border-input bg-background p-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Send message
            </button>

            <p
              aria-live="polite"
              className={
                status === "error"
                  ? "mt-4 text-sm text-destructive"
                  : "mt-4 text-sm text-muted-foreground"
              }
            >
              {message}
            </p>
          </form>

          <div className="space-y-4">
            <Panel>
              <p className="eyebrow">Direct contact</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Email address to be confirmed — this is a placeholder until the company mailbox is
                configured.
              </p>
              <p className="mt-4 font-mono text-sm">hello@assetivate.example</p>
            </Panel>
            <Panel>
              <p className="eyebrow">Company details</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Registered name: to be confirmed</li>
                <li>Registration number: to be confirmed</li>
                <li>Address: to be confirmed</li>
              </ul>
            </Panel>
            <Panel>
              <p className="eyebrow">Response time</p>
              <p className="mt-3 text-sm text-muted-foreground">
                We reply to genuine product enquiries as quickly as we can. We do not promise a
                guaranteed response window we cannot keep.
              </p>
            </Panel>
          </div>
        </div>
      </Section>
    </>
  );
}
