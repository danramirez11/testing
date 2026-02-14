import Alert from "../components/Alert";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Input from "../components/Input";
import "./components-showcase.css";

const iconStub = (
  <span className="showcase__icon" aria-hidden>
    *
  </span>
);

function ComponentsShowcase() {
  return (
    <div className="showcase">
      <header className="showcase__header">
        <h1 className="type-docs-component-name">Component Showcase</h1>
        <p className="type-docs-component-description">
          Variants and states pulled from the design system tokens.
        </p>
      </header>

      <section className="showcase__section">
        <h2 className="type-docs-component-subtitle">Alert</h2>
        <div className="showcase__row">
          <Alert status="Default" message="Default alert" icon={iconStub} />
          <Alert status="Success" message="Success alert" icon={iconStub} />
          <Alert status="Warning" message="Warning alert" icon={iconStub} />
          <Alert status="Error" message="Error alert" icon={iconStub} />
          <Alert status="Info" message="Info alert" icon={iconStub} />
        </div>
      </section>

      <section className="showcase__section">
        <h2 className="type-docs-component-subtitle">Avatar</h2>
        <div className="showcase__row">
          <Avatar size="24px" type="Image" />
          <Avatar size="32px" type="Image + Notification" showNotification />
          <Avatar size="40px" type="Avatar + Name" name="Jordan" />
          <Avatar size="48px" type="Avatar + Caret" caretIcon={iconStub} />
        </div>
      </section>

      <section className="showcase__section">
        <h2 className="type-docs-component-subtitle">Button</h2>
        <div className="showcase__grid">
          <div className="showcase__row">
            <Button style="Filled" color="Primary" size="Large">
              Primary
            </Button>
            <Button style="Filled" color="Secondary" size="Medium">
              Secondary
            </Button>
            <Button style="Filled" color="Neutral" size="Small">
              Neutral
            </Button>
            <Button style="Filled" color="Primary" icon="Center" size="Medium" iconNode={iconStub} />
          </div>
          <div className="showcase__row">
            <Button style="Ghost" color="Primary" size="Medium">
              Ghost
            </Button>
            <Button style="Borderless" color="Secondary" size="Medium">
              Borderless
            </Button>
            <Button style="Round" color="Primary" size="Medium">
              Round
            </Button>
            <Button style="Filled" color="Primary" size="Medium" state="Hover">
              Hover
            </Button>
            <Button style="Filled" color="Primary" size="Medium" state="Active">
              Active
            </Button>
            <Button style="Filled" color="Primary" size="Medium" disabled>
              Disabled
            </Button>
          </div>
        </div>
      </section>

      <section className="showcase__section">
        <h2 className="type-docs-component-subtitle">Input</h2>
        <div className="showcase__grid">
          <Input label="Default" placeholder="Type here" helpText="Helper text" />
          <Input label="With icons" placeholder="Search" iconLeft={iconStub} iconRight={iconStub} />
          <Input label="Error" placeholder="Invalid" state="Error" helpText="Error message" />
          <Input label="Success" placeholder="Validated" state="Success" helpText="Success message" />
          <Input label="Text area" placeholder="Multi-line" type="Text Area" />
          <Input label="Disabled" placeholder="Disabled" disabled state="Disabled" />
        </div>
      </section>
    </div>
  );
}

export default ComponentsShowcase;
