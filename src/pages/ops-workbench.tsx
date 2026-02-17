import NavigationMenu from "../components/NavigationMenu";
import TextButton from "../components/TextButton";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonPrimaryColor from "../components/ButtonPrimaryColor";
import ButtonGlow from "../components/ButtonGlow";
import BankCard from "../components/BankCard";
import TemplateCard from "../components/TemplateCard";
import ListCard from "../components/ListCard";
import Notification from "../components/Notification";
import NavigationOutline from "../components/NavigationOutline";
import PricingCard from "../components/PricingCard";
import Testimonial from "../components/Testimonial";
import "./ops-workbench.css";

const priorityQueue = [
  {
    title: "Chargeback surge",
    description: "Review 12 disputed payments tied to same merchant MCC in the last 6 hours.",
    tag: "High priority",
    buttonText: "Open case",
    imageSrc:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Account takeover",
    description: "New device logins for 4 accounts flagged by velocity rules and location mismatch.",
    tag: "Investigate",
    buttonText: "Review signals",
    imageSrc:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Merchant onboarding",
    description: "Compliance review needed for two enterprise payouts before settlement window.",
    tag: "Due in 2h",
    buttonText: "Start review",
    imageSrc:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80",
  },
];

const alertFeed = [
  { id: "1", title: "Risk engine", text: "Rule 42 triggered 18 times", time: "3m ago" },
  { id: "2", title: "Dispute queue", text: "5 new chargebacks received", time: "12m ago" },
  { id: "3", title: "Settlement", text: "2 payouts awaiting approval", time: "45m ago" },
  { id: "4", title: "Merchant review", text: "Manual screening needed", time: "2h ago" },
];

const runbookItems = [
  "Verify disputed transactions",
  "Contact merchant compliance",
  "Queue provisional credits",
  "Audit settlement batch",
  "Update case notes",
];

const approvals = [
  "Partner payout - Acme Mobility",
  "Credit limit increase - Rivera LLC",
  "Wire release - R&D hold",
  "FX lock extension - Atlas",
  "Manual KYC override",
];

const coverageTiers = [
  {
    title: "Core coverage",
    price: "24/5",
    subtitle: "Ops desk",
    features: ["Monitoring alerts", "On-call escalation", "Daily audit log", "Two approvals"],
    buttonText: "View runbook",
    style: "Glass" as const,
  },
  {
    title: "Priority coverage",
    price: "24/7",
    subtitle: "Risk response",
    features: ["Dedicated analyst", "Same-hour reviews", "Weekly risk pack", "Unlimited approvals"],
    buttonText: "Escalation map",
    style: "Outline" as const,
  },
];

export default function OpsWorkbench() {
  return (
    <div className="ops-workbench">
      <div className="ops-workbench__content">
        <header className="ops-workbench__header">
          <NavigationMenu
            mode="Light"
            style="Glass"
            logoText="Northline Ops"
            items={["Overview", "Cases", "Risk", "Payouts", "Reports"]}
            onLoginClick={() => {}}
            onSignupClick={() => {}}
          />
        </header>

        <section className="ops-hero">
          <div className="ops-hero__intro">
            <TextButton mode="Light" size="Medium" text="Operations desk" showLeftIcon showRightIcon={false} />
            <h1 className="ops-hero__title">Risk, disputes, and settlement operations in one workspace.</h1>
            <p className="ops-hero__subtitle">
              Track investigations, approvals, and payout status while keeping your risk engine and compliance checks in
              sync with real-time alerts.
            </p>
            <div className="ops-hero__actions">
              <ButtonPrimaryColor text="Create case" state="Normal" showLeftIcon={false} showRightIcon />
              <ButtonPrimary mode="Light" size="Large" style="Outline" text="Export report" showRightIcon={false} />
              <ButtonGlow mode="Light" size="Large" style="Glass" text="Run audit" showGlow />
            </div>
            <div className="ops-hero__meta">
              <ButtonPrimary mode="Light" size="Small" style="Outline" text="Risk score: 72" showRightIcon={false} />
              <ButtonPrimary mode="Light" size="Small" style="Outline" text="Open cases: 14" showRightIcon={false} />
              <ButtonPrimary mode="Light" size="Small" style="Outline" text="Payouts: 3" showRightIcon={false} />
            </div>
          </div>
          <div className="ops-hero__summary">
            <div className="ops-hero__cards">
              <BankCard type="Card 3" label="OPS CARD" name="Amelia Chen" cardNumber="**** **** **** 4182" />
              <BankCard type="Card 4" label="CONTROL CARD" name="Kofi Mensah" cardNumber="**** **** **** 9920" />
            </div>
            <div className="ops-hero__stats">
              <div className="ds-card ds-card--glass-light ops-hero__stat">
                <span className="ops-hero__stat-label">Disputes today</span>
                <strong className="ops-hero__stat-value">18</strong>
                <span className="ops-hero__stat-caption">6 in review, 4 resolved</span>
              </div>
              <div className="ds-card ds-card--glass-light ops-hero__stat">
                <span className="ops-hero__stat-label">Payout window</span>
                <strong className="ops-hero__stat-value">2h 18m</strong>
                <span className="ops-hero__stat-caption">Next settlement batch</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ops-section">
          <div className="ops-section__header">
            <div>
              <p className="ops-section__eyebrow">Priority queue</p>
              <h2 className="ops-section__title">Cases needing action before end of shift.</h2>
            </div>
            <NavigationOutline mode="Light" size="Large" />
          </div>
          <div className="ops-section__grid">
            {priorityQueue.map((item) => (
              <TemplateCard
                key={item.title}
                mode="Light"
                style="Glass"
                showGlow
                title={item.title}
                description={item.description}
                tag={item.tag}
                buttonText={item.buttonText}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </section>

        <section className="ops-section ops-section--split">
          <div className="ops-section__stack">
            <ListCard
              mode="Light"
              style="Outline"
              title="Today runbook"
              summary="Most-used tasks for the morning review window."
              items={runbookItems}
            />
            <ListCard
              mode="Light"
              style="Outline"
              title="Pending approvals"
              summary="Queue of approvals awaiting signature."
              items={approvals}
            />
          </div>
          <Notification mode="Light" style="Glass" activities={alertFeed} unreadCount={3} />
        </section>

        <section className="ops-section ops-section--wide">
          <div className="ops-section__header">
            <div>
              <p className="ops-section__eyebrow">Coverage</p>
              <h2 className="ops-section__title">Ops coverage tiers for escalation and reviews.</h2>
            </div>
          </div>
          <div className="ops-section__grid ops-section__grid--pricing">
            {coverageTiers.map((tier) => (
              <PricingCard
                key={tier.title}
                mode="Light"
                style={tier.style}
                showGlow={tier.style === "Glass"}
                title={tier.title}
                price={tier.price}
                subtitle={tier.subtitle}
                features={tier.features}
                buttonText={tier.buttonText}
              />
            ))}
            <Testimonial
              mode="Light"
              style="Glass"
              title="Ops brief"
              subtitle="Weekly risk overview"
              body="Chargebacks stayed below threshold, but cross-border volume is up 12 percent. Focus reviews on new card-not-present spikes and confirm merchant MCC mappings before payout."
              author="Mara Patel, Head of Risk Ops"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
