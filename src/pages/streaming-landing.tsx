import NavigationMenu from "../components/NavigationMenu";
import ButtonPrimaryColor from "../components/ButtonPrimaryColor";
import ButtonGlow from "../components/ButtonGlow";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonCircle from "../components/ButtonCircle";
import TextButton from "../components/TextButton";
import TemplateCard from "../components/TemplateCard";
import ListCard from "../components/ListCard";
import Notification from "../components/Notification";
import NavigationOutline from "../components/NavigationOutline";
import PricingCard from "../components/PricingCard";
import Testimonial from "../components/Testimonial";
import "./streaming-landing.css";

function PlayIcon({ color = "currentColor", size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 6l10 6-10 6z" fill={color} />
    </svg>
  );
}

function PlusIcon({ color = "currentColor", size = 18 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const trendingCards = [
  {
    title: "Echoes of Neon",
    description: "Cyber-noir thriller premiering weekly with Dolby Atmos audio.",
    tag: "New season",
    buttonText: "Watch trailer",
    imageSrc:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Orion Drift",
    description: "Space opera saga with cinematic HDR visuals and IMAX scenes.",
    tag: "Exclusive",
    buttonText: "Resume",
    imageSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Midnight Circuit",
    description: "High-stakes racing documentary built for ultra-wide screens.",
    tag: "Live finale",
    buttonText: "Set reminder",
    imageSrc:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

const activityFeed = [
  { id: "1", title: "Season 3 dropped", text: "Nightshift City", time: "Just now" },
  { id: "2", title: "Live now", text: "Aurora Concert", time: "5m ago" },
  { id: "3", title: "Because you watched", text: "Vector Run", time: "15m ago" },
  { id: "4", title: "Premiering", text: "Solstice", time: "Tonight" },
];

const watchlistItems = ["Continue: Orion Drift", "Add: Neon Atlas", "Download: Glacier 7", "Queue: The Pulse", "Watch: Solaris"];

export default function StreamingLanding() {
  return (
    <div className="streaming-landing">
      <div className="streaming-landing__content">
        <header className="streaming-landing__header">
          <NavigationMenu
            mode="Light"
            style="Glass"
            logoText="Cinemix+"
            items={["Discover", "Live", "Originals", "Plans", "Support"]}
            onLoginClick={() => {}}
            onSignupClick={() => {}}
          />
        </header>

        <section className="hero">
          <div className="hero__left">
            <div className="hero__eyebrow">
              <TextButton mode="Light" size="Medium" text="Live premieres" showLeftIcon showRightIcon={false} />
              <span className="hero__eyebrow-text">Ultra HD streaming built for night mode.</span>
            </div>
            <h1 className="hero__title">Turn your room into a private cinema.</h1>
            <p className="hero__subtitle">
              Stream cinematic originals, live concerts, and award-winning films with immersive audio and zero ads.
            </p>
            <div className="hero__cta">
              <ButtonPrimaryColor
                text="Start free trial"
                state="Normal"
                showLeftIcon
                showRightIcon={false}
                icon={<PlayIcon />}
              />
              <ButtonGlow
                mode="Light"
                size="Large"
                style="Glass"
                text="Browse trailers"
                showLeftIcon
                showRightIcon={false}
                icon={<PlusIcon />}
                showGlow
              />
            </div>
            <div className="hero__meta">
              <ButtonPrimary
                mode="Light"
                size="Small"
                style="Outline"
                text="4K HDR"
                showLeftIcon={false}
                showRightIcon={false}
              />
              <ButtonPrimary
                mode="Light"
                size="Small"
                style="Outline"
                text="Dolby Atmos"
                showLeftIcon={false}
                showRightIcon={false}
              />
              <ButtonPrimary
                mode="Light"
                size="Small"
                style="Outline"
                text="Offline downloads"
                showLeftIcon={false}
                showRightIcon={false}
              />
            </div>
            <div className="hero__stats">
              <div className="ds-card ds-card--glass-light hero__stat">
                <span className="hero__stat-label">Active viewers</span>
                <strong className="hero__stat-value">2.4M</strong>
                <span className="hero__stat-caption">Streaming right now</span>
              </div>
              <div className="ds-card ds-card--glass-light hero__stat">
                <span className="hero__stat-label">Weekly drops</span>
                <strong className="hero__stat-value">160+</strong>
                <span className="hero__stat-caption">New episodes</span>
              </div>
            </div>
          </div>
          <div className="hero__right">
            <TemplateCard
              mode="Light"
              style="Glass"
              showGlow
              title="Featured tonight"
              description="Nightshift City returns with a 90-minute premiere in Dolby Vision."
              tag="Live premiere"
              buttonText="Watch now"
              imageSrc="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80"
            />
            <div className="hero__stack">
              <ListCard
                mode="Light"
                style="Glass"
                title="Your watchlist"
                summary="Keep your streak alive with hand-picked picks."
                items={watchlistItems}
              />
              <Notification mode="Light" style="Glass" activities={activityFeed} unreadCount={4} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__header">
            <div>
              <p className="section__eyebrow">Trending now</p>
              <h2 className="section__title">Stories designed for OLED screens.</h2>
            </div>
            <NavigationOutline mode="Light" size="Large" />
          </div>
          <div className="section__grid">
            {trendingCards.map((card) => (
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
        </section>

        <section className="section section--split">
          <div>
            <p className="section__eyebrow">Immersive experiences</p>
            <h2 className="section__title">Every genre, perfectly tuned.</h2>
            <p className="section__copy">
              From live esports to art-house cinema, Cinemix+ adapts your stream quality and audio mix in real time.
            </p>
            <div className="section__actions">
              <ButtonGlow mode="Light" size="Large" style="Outline" text="Explore genres" showGlow={false} />
              <ButtonCircle
                className="hero__play-button"
                mode="Light"
                size="Large"
                state="Selected"
                style="Glass"
                icon={<PlayIcon />}
              />
            </div>
          </div>
          <div className="section__cards">
            <ListCard
              mode="Light"
              style="Outline"
              title="Tonight's lineup"
              summary="Live concerts, premieres, and sport finals tailored to you."
              items={["Aurora Live", "Final Drift GP", "Neon Atlas", "Arctic Pulse", "Zero Hour"]}
            />
            <Notification
              mode="Light"
              style="Outline"
              activities={activityFeed}
              unreadCount={2}
            />
          </div>
        </section>

        <section className="section">
          <div className="section__header">
            <div>
              <p className="section__eyebrow">Plans</p>
              <h2 className="section__title">Pick the stream that fits your night.</h2>
            </div>
            <ButtonPrimary mode="Light" size="Medium" style="Outline" text="Compare plans" showRightIcon={false} />
          </div>
          <div className="section__grid section__grid--pricing">
            <PricingCard
              mode="Light"
              style="Glass"
              showGlow
              title="Studio"
              price="$12"
              subtitle="per month"
              features={["Full HD", "2 screens", "Offline downloads", "Ad-free originals"]}
              buttonText="Start trial"
            />
            <PricingCard
              mode="Light"
              style="Outline"
              showGlow={false}
              title="Ultra"
              price="$18"
              subtitle="per month"
              features={["4K HDR", "4 screens", "Spatial audio", "Live events"]}
              buttonText="Go Ultra"
            />
            <PricingCard
              mode="Light"
              style="Outline"
              showGlow
              title="Family"
              price="$24"
              subtitle="per month"
              features={["6 profiles", "Kids hub", "Offline on all", "Premium support"]}
              buttonText="Add family"
            />
          </div>
        </section>

        <section className="section section--wide">
          <div className="section__header">
            <div>
              <p className="section__eyebrow">Creator spotlight</p>
              <h2 className="section__title">"Cinemix+ makes every frame glow."</h2>
            </div>
            <ButtonGlow mode="Light" size="Medium" style="Glass" text="Read story" showGlow />
          </div>
          <Testimonial
            mode="Light"
            style="Glass"
            showGlow
            title="Aurora Live"
            subtitle="Grammy-winning immersive concert series"
            body="We premiered our tour in full 4K HDR, and the audience felt every moment. The latency-free stream and live chat made the release unforgettable."
            author="Aria Vu, Creative Director"
          />
        </section>

        <footer className="footer">
          <div className="footer__brand">
            <div className="footer__logo">Cinemix+</div>
            <p className="footer__copy">Stream bold originals, live music, and global cinema without leaving the couch.</p>
          </div>
          <div className="footer__links">
            <TextButton mode="Light" size="Small" text="Help center" showRightIcon={false} />
            <TextButton mode="Light" size="Small" text="Device apps" showRightIcon={false} />
            <TextButton mode="Light" size="Small" text="Press kit" showRightIcon={false} />
          </div>
          <ButtonPrimaryColor
            text="Get Cinemix+"
            state="Normal"
            showLeftIcon
            showRightIcon={false}
            icon={<PlayIcon />}
          />
        </footer>
      </div>
    </div>
  );
}
