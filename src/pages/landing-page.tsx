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
        <NavigationMenu
          mode="Light"
          style="Glass"
          logoText="Streamline"
          items={["Series", "Movies", "Live", "Plans"]}
        />
      </header>

      <main className="landing__main">
        <section className="landing__hero">
          <div className="landing__hero-copy">
            <span className="landing__eyebrow">Premium streaming service</span>
            <h1>Film nights that feel curated, crisp, and personal.</h1>
            <p>
              Streamline brings 4K premieres, creator-led collections, and offline downloads
              together with profiles that learn your pace.
            </p>
            <div className="landing__cta">
              <ButtonPrimary text="Start free trial" size="Large" />
              <ButtonGlow text="Browse the catalog" size="Large" />
            </div>
            <div className="landing__hero-meta">
              <TextButton text="1,200+ films" showRightIcon={false} />
              <TextButton text="65k episodes" showRightIcon={false} />
              <TextButton text="120 live channels" showRightIcon={false} />
            </div>
          </div>
          <div className="landing__hero-media">
            <BankCard
              type="Card 1"
              label="STREAM PASS"
              cardNumber="**** **** **** 9092"
              name="Ava Ortega"
              validThru="09/27"
            />
            <TemplateCard
              title="Tonight's Spotlight"
              description="A rotating slate of director cuts, festival winners, and critic favorites refreshed every Friday."
              tag="New season"
              buttonText="Explore picks"
            />
          </div>
        </section>

        <section className="landing__section">
          <div className="landing__section-title">
            <h2>Watch smarter, together</h2>
            <p>Personalized queues, watch parties, and live reminders keep everyone synced.</p>
          </div>
          <div className="landing__grid">
            <ListCard
              title="Tonight's watchlist"
              summary="Up next: Finish Neon Harbor and queue fresh shorts."
              items={[
                "Neon Harbor S2E4",
                "The Signal Room",
                "Midnight Derby",
                "Chroma City",
                "Frame by Frame",
              ]}
            />
            <Notification
              activities={[
                { id: "1", title: "Live Studio", text: "premiere starts", time: "9:00 pm" },
                { id: "2", title: "Ari Kim", text: "started a watch party", time: "12m ago" },
                { id: "3", title: "Streamline", text: "added 24 new episodes", time: "1h ago" },
                { id: "4", title: "Editors Pick", text: "curated fresh shorts", time: "2h ago" },
              ]}
              unreadCount={3}
            />
            <Testimonial
              title="Studio Nine"
              subtitle="Indie film collective"
              body="Streamline helped our premieres land with the right audience instantly. The curated shelves and watch-party tools doubled our opening-week retention."
              author="Priya Rao, Distribution Lead"
            />
          </div>
        </section>

        <section className="landing__section">
          <div className="landing__section-title">
            <h2>Collections built for your mood</h2>
            <p>Tap into genre paths, creator notes, and live playlists for any night in.</p>
          </div>
          <div className="landing__grid landing__grid--templates">
            <TemplateCard
              title="Cinematic Deep Dives"
              description="A guided trail through award winners, restored classics, and behind-the-scenes commentary."
              tag="Curated"
              buttonText="Start the journey"
            />
            <TemplateCard
              style="Outline"
              title="Creator-led Fridays"
              description="Weekly playlists by filmmakers, editors, and critics with personal notes and live Q&A."
              tag="Live weekly"
              buttonText="Join the live"
            />
            <TemplateCard
              style="Flat"
              title="Family co-op"
              description="Profiles, kid-safe controls, and time limits with a shared calendar for premieres."
              tag="For families"
              buttonText="Set up profiles"
            />
          </div>
        </section>

        <section className="landing__section landing__pricing">
          <div className="landing__section-title">
            <h2>Plans that scale with your screens</h2>
            <p>Choose the experience that matches how you watch.</p>
          </div>
          <div className="landing__grid landing__grid--pricing">
            <PricingCard
              title="Starter"
              price="$7"
              subtitle="per month"
              features={["HD streaming", "2 devices", "Offline for 5 titles"]}
              buttonText="Try Starter"
            />
            <PricingCard
              mode="Dark"
              title="Premier"
              price="$14"
              subtitle="per month"
              features={["4K + HDR", "4 devices", "Live channels", "Download 50 titles"]}
              buttonText="Go Premier"
            />
            <PricingCard
              style="Outline"
              title="Studio"
              price="$22"
              subtitle="per month"
              features={["8 devices", "Creator streams", "Shared watch parties", "Priority premieres"]}
              buttonText="Choose Studio"
            />
            <PricingCard
              style="Flat"
              title="Annual Pass"
              price="$129"
              subtitle="per year"
              features={["2 months free", "4K + HDR", "Offline on every device", "Member screenings"]}
              buttonText="Lock it in"
            />
          </div>
        </section>
      </main>

      <footer className="landing__footer">
        <div className="landing__footer-left">
          <NavigationOutline size="Medium" />
          <span>Streamline Studios</span>
        </div>
        <div className="landing__footer-links">
          <TextButton text="Help center" showRightIcon={false} />
          <TextButton text="Device support" showRightIcon={false} />
          <TextButton text="Press" showRightIcon={false} />
        </div>
      </footer>
    </div>
  );
}
