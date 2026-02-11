import type React from "react";
import AccentButton from "../components/AccentButton";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const sectionStyle: React.CSSProperties = {
  display: "grid",
  gap: "16px",
  padding: "24px",
  background: "#ffffff",
  borderRadius: "16px",
};

const gridStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
};

export default function ComponentsShowcase() {
  return (
    <div style={{ display: "grid", gap: "24px", padding: "32px" }}>
      <section style={sectionStyle}>
        <h2>Button - Ghost</h2>
        <div style={gridStyle}>
          <Button label="Basic S" size="s" style="ghost" trailingIcon />
          <Button label="Basic S" size="s" style="ghost" trailingIcon state="hovered" />
          <Button label="Basic S" size="s" style="ghost" />
          <Button label="Basic S" size="s" style="ghost" state="hovered" />
          <Button size="s-solo" style="ghost-rounded" leadingIcon />
          <Button size="s-solo" style="ghost-rounded" leadingIcon state="hovered" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Button - Public Bordered</h2>
        <div style={gridStyle}>
          <Button label="Public L" size="l" style="public-bordered" trailingIcon />
          <Button label="Public L" size="l" style="public-bordered" trailingIcon state="hovered" />
          <Button label="Public L" size="l" style="public-bordered" leadingIcon />
          <Button label="Public L" size="l" style="public-bordered" leadingIcon state="hovered" />
          <Button label="Public L" size="l" style="public-bordered" />
          <Button label="Public L" size="l" style="public-bordered" state="hovered" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Accent Button</h2>
        <div style={gridStyle}>
          <AccentButton label="Button" state="default" />
          <AccentButton label="Button" state="hover" />
          <AccentButton label="Button" state="clicked" />
        </div>
      </section>

      <section style={sectionStyle}>
        <h2>Text Input</h2>
        <TextInput placeholder="Name" />
      </section>
    </div>
  );
}
