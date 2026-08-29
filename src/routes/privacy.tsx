import { createFileRoute } from "@tanstack/react-router";

import { Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ASSETIVATE" },
      {
        name: "description",
        content:
          "How ASSETIVATE handles personal data across its website and software products, including analytics and contact information.",
      },
      { property: "og:title", content: "ASSETIVATE Privacy Policy" },
      { property: "og:description", content: "How ASSETIVATE handles personal data." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Who we are",
    body: "ASSETIVATE builds and operates software products. The registered company name, registration number and registered address are to be confirmed and will be stated here once available.",
  },
  {
    title: "2. Information we collect",
    body: "Through this website we collect only information you submit to us directly, such as your name, email address and the content of your message. Product-specific data handling is described in the documentation for each product.",
  },
  {
    title: "3. How we use information",
    body: "We use the information you submit to respond to your enquiry, to contact you about OnboardOS Pro access where you requested it, and to keep a record of the correspondence. We do not sell personal data.",
  },
  {
    title: "4. Analytics and cookies",
    body: "No third-party analytics or advertising tools are active on this website at present. If an analytics provider is added, this section will name it, describe what is collected, and state whether consent is required in your jurisdiction.",
  },
  {
    title: "5. Legal basis and retention",
    body: "Where applicable law requires a legal basis, we rely on your consent or our legitimate interest in responding to enquiries. We retain enquiry correspondence only as long as needed for that purpose. Specific retention periods are to be confirmed.",
  },
  {
    title: "6. Data processors",
    body: "We use third-party providers for hosting and, in future, email delivery and payments. A current list of processors is to be confirmed and will be published here.",
  },
  {
    title: "7. Your rights",
    body: "Depending on your jurisdiction you may have rights to access, correct, delete or restrict the use of your personal data, and to object to processing. Contact us to exercise any of these rights.",
  },
  {
    title: "8. Security",
    body: "We take reasonable technical and organisational measures to protect personal data. No system can be guaranteed completely secure, and we will not claim otherwise.",
  },
  {
    title: "9. Changes",
    body: "We may update this policy as the company and its products develop. Material changes will be reflected on this page.",
  },
  {
    title: "10. Contact",
    body: "For privacy questions, use the contact page. A dedicated privacy contact address is to be confirmed.",
  },
];

function PrivacyPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Policy"
        body="This policy describes how ASSETIVATE handles personal data. Items marked as to be confirmed are placeholders for details that are not yet finalised, and are not legal advice."
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
