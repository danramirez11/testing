import NavigationMenu from "../components/NavigationMenu";
import BankCard from "../components/BankCard";
import NavigationOutline from "../components/NavigationOutline";
import TextButton from "../components/TextButton";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonPrimaryColor from "../components/ButtonPrimaryColor";
import ButtonGlow from "../components/ButtonGlow";
import TemplateCard from "../components/TemplateCard";
import PricingCard from "../components/PricingCard";
import ListCard from "../components/ListCard";
import Notification from "../components/Notification";
import "./card-plans.css";

const debitCards = [
  {
    title: "Everyday Debit",
    description: "Instant balance sync, free domestic transfers, and real-time merchant data per swipe.",
    tag: "Core",
    buttonText: "See specs",
    imageSrc:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Travel Debit",
    description: "Global ATM access, dynamic FX rates, and 3D Secure for international checkout.",
    tag: "FX ready",
    buttonText: "Network map",
    imageSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Student Debit",
    description: "Lower limits, smart guardrails, and monthly insights to build strong habits.",
    tag: "18+",
    buttonText: "Eligibility",
    imageSrc:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
  },
];

const creditPlans = [
  {
    title: "Credit Core",
    price: "15.9%",
    subtitle: "Variable APR",
    features: ["Limits up to $10k", "45-day grace period", "Cash advance 3%", "Virtual card numbers"],
    buttonText: "Disclosure",
    style: "Glass" as const,
  },
  {
    title: "Credit Plus",
    price: "19.9%",
    subtitle: "Variable APR",
    features: ["Limits up to $25k", "2% FX fee", "Priority dispute desk", "Dynamic spend alerts"],
    buttonText: "Disclosure",
    style: "Outline" as const,
  },
  {
    title: "Credit Elite",
    price: "23.9%",
    subtitle: "Variable APR",
    features: ["Limits up to $60k", "0% FX fee", "Metal card", "Personalized risk score"],
    buttonText: "Disclosure",
    style: "Outline" as const,
  },
];

const controlEvents = [
  { id: "1", title: "Merchant controls", text: "Per-category locks", time: "Always on" },
  { id: "2", title: "Daily limits", text: "Custom spend caps", time: "Editable" },
  { id: "3", title: "Geo-fencing", text: "Auto-block outside region", time: "Optional" },
  { id: "4", title: "Instant freeze", text: "One-tap lock", time: "Immediate" },
];

export default function CardPlans() {
  return (
    <div className="card-plans">
      <div className="card-plans__content">
        <header className="card-plans__header">
          <NavigationMenu
            mode="Light"
            style="Glass"
            logoText="Northline Bank"
            items={["Overview", "Debit", "Credit", "Fees", "Support"]}
            onLoginClick={() => {}}
            onSignupClick={() => {}}
          />
        </header>

        <section className="card-hero">
          <div className="card-hero__intro">
            <TextButton mode="Light" size="Medium" text="Card architecture" showLeftIcon showRightIcon={false} />
            <h1 className="card-hero__title">Debit and credit cards, explained with the technical details.</h1>
            <p className="card-hero__subtitle">
              Compare networks, limits, controls, and fees across our debit and credit portfolio. Every plan lists
              processing rules, risk controls, and issuance limits so you can map them to your needs.
            </p>
            <div className="card-hero__actions">
              <ButtonPrimaryColor text="Download spec sheet" state="Normal" showLeftIcon={false} showRightIcon />
              <ButtonPrimary mode="Light" size="Large" style="Outline" text="View fee schedule" showRightIcon={false} />
              <ButtonGlow mode="Light" size="Large" style="Glass" text="API docs" showGlow />
            </div>
          </div>
          <div className="card-hero__media">
            <div className="card-hero__carousel">
              <div className="card-hero__cards">
                <BankCard type="Card 1" label="DEBIT CARD" cardNumber="**** **** **** 7842" />
                <BankCard type="Card 2" label="CREDIT CARD" cardNumber="**** **** **** 2301" />
              </div>
              <div className="card-hero__controls">
                <NavigationOutline mode="Light" size="Large" />
                <div className="card-hero__pill">Issued on Visa and Mastercard networks</div>
              </div>
            </div>
            <div className="card-hero__stats">
              <div className="ds-card ds-card--glass-light card-hero__stat">
                <span className="card-hero__stat-label">Debit coverage</span>
                <strong className="card-hero__stat-value">180+ countries</strong>
                <span className="card-hero__stat-caption">ATM and POS acceptance</span>
              </div>
              <div className="ds-card ds-card--glass-light card-hero__stat">
                <span className="card-hero__stat-label">Credit issuance</span>
                <strong className="card-hero__stat-value">$1k - $60k</strong>
                <span className="card-hero__stat-caption">Dynamic underwriting</span>
              </div>
            </div>
          </div>
        </section>

        <section className="card-section">
          <div className="card-section__header">
            <div>
              <p className="card-section__eyebrow">Debit portfolio</p>
              <h2 className="card-section__title">Debit cards with transparent limits.</h2>
            </div>
            <ButtonPrimary mode="Light" size="Medium" style="Outline" text="Compare debit" showRightIcon={false} />
          </div>
          <div className="card-section__grid">
            {debitCards.map((card) => (
              <TemplateCard
                key={card.title}
                mode="Light"
                style="Glass"
                showGlow
                title={card.title}
                description={card.description}
                tag={card.tag}
                buttonText={card.buttonText}
                imageSrc={card.imageSrc}
              />
            ))}
          </div>
          <div className="card-section__split">
            <ListCard
              mode="Light"
              style="Outline"
              title="Debit fee schedule"
              summary="Core fees and free allowances by plan."
              items={["$0 monthly fee (Everyday)", "2 free ATM withdrawals / week", "1.5% FX conversion (Travel)", "$0 replacement virtual card"]}
            />
            <ListCard
              mode="Light"
              style="Outline"
              title="Debit limits"
              summary="Configurable caps that update in real time."
              items={["POS daily: $2,500", "ATM daily: $600", "Contactless: $300", "Online: $1,500"]}
            />
          </div>
        </section>

        <section className="card-section card-section--alt">
          <div className="card-section__header">
            <div>
              <p className="card-section__eyebrow">Credit portfolio</p>
              <h2 className="card-section__title">APR, limits, and risk controls by tier.</h2>
            </div>
            <ButtonPrimary mode="Light" size="Medium" style="Outline" text="Risk model" showRightIcon={false} />
          </div>
          <div className="card-section__grid card-section__grid--pricing">
            {creditPlans.map((plan) => (
              <PricingCard
                key={plan.title}
                mode="Light"
                style={plan.style}
                showGlow={plan.style === "Glass"}
                title={plan.title}
                price={plan.price}
                subtitle={plan.subtitle}
                features={plan.features}
                buttonText={plan.buttonText}
              />
            ))}
          </div>
        </section>

        <section className="card-section card-section--details">
          <div className="card-section__header">
            <div>
              <p className="card-section__eyebrow">Controls</p>
              <h2 className="card-section__title">Security, monitoring, and instant controls.</h2>
            </div>
            <ButtonGlow mode="Light" size="Medium" style="Outline" text="Control center" showGlow={false} />
          </div>
          <div className="card-section__details">
            <div className="card-section__spec-grid">
              <div className="ds-card ds-card--glass-light card-spec">
                <span className="card-spec__label">Network routing</span>
                <strong>Dual-network routing</strong>
                <p className="card-spec__body">Smart routing picks the lowest latency or best FX path per region.</p>
              </div>
              <div className="ds-card ds-card--glass-light card-spec">
                <span className="card-spec__label">Tokenization</span>
                <strong>Dynamic tokens</strong>
                <p className="card-spec__body">Unique tokens per merchant with auto-rotation every 24 hours.</p>
              </div>
              <div className="ds-card ds-card--glass-light card-spec">
                <span className="card-spec__label">Disputes</span>
                <strong>Automated case intake</strong>
                <p className="card-spec__body">Upload receipts in-app and track chargebacks in real time.</p>
              </div>
            </div>
            <Notification mode="Light" style="Glass" activities={controlEvents} unreadCount={0} />
          </div>
        </section>

        <footer className="card-footer">
          <div className="card-footer__brand">
            <div className="card-footer__logo">Northline Bank Cards</div>
            <p className="card-footer__copy">All plans include instant virtual cards, in-app limits, and 24/7 fraud monitoring.</p>
          </div>
          <div className="card-footer__links">
            <TextButton mode="Light" size="Small" text="Regulatory disclosures" showRightIcon={false} />
            <TextButton mode="Light" size="Small" text="Cardholder agreement" showRightIcon={false} />
            <TextButton mode="Light" size="Small" text="Security whitepaper" showRightIcon={false} />
          </div>
          <ButtonPrimary mode="Light" size="Large" style="Outline" text="Contact card ops" showRightIcon={false} />
        </footer>
      </div>
    </div>
  );
}
