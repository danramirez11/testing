import BankCard from "../components/BankCard";
import ButtonGlow from "../components/ButtonGlow";
import ButtonPrimary from "../components/ButtonPrimary";
import ListCard from "../components/ListCard";
import NavigationMenu from "../components/NavigationMenu";
import NavigationOutline from "../components/NavigationOutline";
import Notification from "../components/Notification";
import PricingCard from "../components/PricingCard";
import TemplateCard from "../components/TemplateCard";
import Testimonial from "../components/Testimonial";
import TextButton from "../components/TextButton";
import "./landing-page.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <header className="landing__header">
        <NavigationMenu mode="Light" style="Glass" />
      </header>

      <main className="landing__main">
        <section className="landing__hero">
          <div className="landing__hero-copy">
            <span className="landing__eyebrow">Dynamic Components</span>
            <h1>Build layered interfaces faster with glass UI blocks.</h1>
            <p>
              Compose reusable cards, navigation, and feature blocks with one system. Swap
              modes, sizes, and styles without rebuilding your layout.
            </p>
            <div className="landing__cta">
              <ButtonPrimary text="Get started" size="Large" />
              <ButtonGlow text="View components" size="Large" />
            </div>
            <div className="landing__hero-meta">
              <TextButton text="300+ components" showRightIcon={false} />
              <TextButton text="2k+ variants" showRightIcon={false} />
              <TextButton text="2,116 icons" showRightIcon={false} />
            </div>
          </div>
          <div className="landing__hero-media">
            <BankCard type="Card 1" label="DEBIT CARD" />
            <TemplateCard />
          </div>
        </section>

        <section className="landing__section">
          <div className="landing__section-title">
            <h2>Keep teams aligned</h2>
            <p>Share progress, reminders, and notifications in a consistent language.</p>
          </div>
          <div className="landing__grid">
            <ListCard />
            <Notification />
            <Testimonial />
          </div>
        </section>

        <section className="landing__section">
          <div className="landing__section-title">
            <h2>Template-ready blocks</h2>
            <p>Use prebuilt cards to spin up marketing, product, and dashboard layouts.</p>
          </div>
          <div className="landing__grid landing__grid--templates">
            <TemplateCard />
            <TemplateCard style="Outline" />
            <TemplateCard style="Flat" />
          </div>
        </section>

        <section className="landing__section landing__pricing">
          <div className="landing__section-title">
            <h2>One plan, all components</h2>
            <p>Pick the style that fits your product direction.</p>
          </div>
          <div className="landing__grid landing__grid--pricing">
            <PricingCard />
            <PricingCard mode="Dark" />
            <PricingCard style="Outline" />
            <PricingCard style="Flat" />
          </div>
        </section>
      </main>

      <footer className="landing__footer">
        <div className="landing__footer-left">
          <NavigationOutline size="Medium" />
          <span>Dynamic Components System</span>
        </div>
        <div className="landing__footer-links">
          <TextButton text="Docs" showRightIcon={false} />
          <TextButton text="Pricing" showRightIcon={false} />
          <TextButton text="Contact" showRightIcon={false} />
        </div>
      </footer>
    </div>
  );
}
