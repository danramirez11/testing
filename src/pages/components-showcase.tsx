import BankCard from "../components/BankCard";
import ButtonCircle from "../components/ButtonCircle";
import ButtonGlow from "../components/ButtonGlow";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonPrimaryColor from "../components/ButtonPrimaryColor";
import ListCard from "../components/ListCard";
import NavigationMenu from "../components/NavigationMenu";
import NavigationOutline from "../components/NavigationOutline";
import Notification from "../components/Notification";
import PricingCard from "../components/PricingCard";
import TemplateCard from "../components/TemplateCard";
import Testimonial from "../components/Testimonial";
import TextButton from "../components/TextButton";
import "./components-showcase.css";

export default function ComponentsShowcase() {
  return (
    <div className="showcase">
      <section className="showcase__section">
        <h2>Navigation</h2>
        <div className="showcase__row">
          <NavigationOutline />
          <NavigationOutline mode="Dark" size="Large" />
          <NavigationOutline size="Extra Large" />
        </div>
        <NavigationMenu />
        <NavigationMenu mode="Dark" style="Glass" />
        <NavigationMenu breakpoint="Mobile" />
      </section>

      <section className="showcase__section">
        <h2>Buttons</h2>
        <div className="showcase__row">
          <TextButton />
          <TextButton mode="Dark" size="Large" />
          <ButtonPrimary />
          <ButtonPrimary style="Outline" size="Large" />
          <ButtonPrimaryColor state="Normal" />
          <ButtonPrimaryColor state="Hover" />
          <ButtonPrimaryColor state="Inactive" />
          <ButtonGlow />
          <ButtonGlow mode="Dark" size="Large" />
          <ButtonCircle />
          <ButtonCircle mode="Dark" size="Large" state="Hover" />
        </div>
      </section>

      <section className="showcase__section">
        <h2>Cards</h2>
        <div className="showcase__row">
          <BankCard type="Card 1" label="DEBIT CARD" />
          <BankCard type="Card 2" />
          <BankCard type="Card 3" />
          <BankCard type="Card 4" />
        </div>
        <div className="showcase__row">
          <PricingCard />
          <PricingCard mode="Dark" />
          <PricingCard style="Outline" />
          <PricingCard style="Flat" />
        </div>
        <div className="showcase__row">
          <Testimonial />
          <Testimonial mode="Dark" />
          <Testimonial style="Outline" />
          <Testimonial style="Flat" />
        </div>
        <div className="showcase__row">
          <TemplateCard />
          <TemplateCard mode="Dark" />
          <TemplateCard style="Outline" />
          <TemplateCard style="Flat" />
        </div>
        <div className="showcase__row">
          <ListCard />
          <ListCard mode="Dark" />
          <ListCard style="Outline" />
          <ListCard style="Flat" />
        </div>
        <div className="showcase__row">
          <Notification />
          <Notification mode="Dark" />
          <Notification style="Outline" />
          <Notification style="Flat" />
          <Notification activities={[{ id: "1", title: "Hola amikos", text: "Thomas es muy cansón", time: "Just now" }]} unreadCount={0} />
        </div>
      </section>
    </div>
  );
}
