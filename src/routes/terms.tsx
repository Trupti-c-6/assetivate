import { createFileRoute } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ASSETIVATE" },
      {
        name: "description",
        content:
          "The terms that govern use of the ASSETIVATE website and, where applicable, its software products and paid plans.",
      },
      { property: "og:title", content: "ASSETIVATE Terms of Service" },
      { property: "og:description", content: "Terms governing use of the ASSETIVATE website and products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. These terms",
    body: "These terms govern your use of the ASSETIVATE website. Individual products may have additional product-specific terms, which will be published with the product and take precedence for that product.",
  },
  {
    title: "2. Company details",
    body: "The contracting entity, registration number and registered address are to be confirmed and will be stated here before any paid product is sold.",
  },
  {
    title: "3. Website content",
    body: "Website content is provided for information. Product descriptions describe intended functionality; where a product is not yet live, this is stated on the product page and no functionality is promised as available.",
  },
  {
    title: "4. Accounts and product access",
    body: "Where a product requires an account, you are responsible for the accuracy of the details you provide and for keeping your access credentials secure.",
  },
  {
    title: "5. Subscriptions and payment",
    body: "No payment processing happens on this website. Paid access to OnboardOS is purchased inside the OnboardOS application through secure Razorpay checkout, and the applicable plan terms are shown at the point of purchase. Pro grants a one-month access period and does not renew automatically.",
  },
  {
    title: "6. Acceptable use",
    body: "You may not use the website or any product to break the law, infringe the rights of others, attempt unauthorised access, or interfere with the operation of the service.",
  },
  {
    title: "7. Intellectual property",
    body: "ASSETIVATE retains all rights in its software, brand and website content. Customer data submitted to a product remains the customer's.",
  },
  {
    title: "8. Availability",
    body: "We aim for reliable service but do not guarantee uninterrupted availability of the website. Any service level commitments for a paid product will be stated in that product's terms.",
  },
  {
    title: "9. Liability",
    body: "To the extent permitted by law, our liability arising from use of this website is limited. Specific limitations for paid products will be set out in the applicable product terms.",
  },
  {
    title: "10. Changes and governing law",
    body: "We may update these terms as products launch. The governing law and jurisdiction are to be confirmed alongside the company registration details.",
  },
];

function TermsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Legal"
        title="Terms of Service"
        body="Items marked as to be confirmed are placeholders for details that are not yet finalised. This page is not legal advice and should be reviewed before any paid product launches."
      />
      <p className="mt-6 text-xs text-muted-foreground">Last updated: to be confirmed</p>
      <div className="mt-10 max-w-3xl space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
