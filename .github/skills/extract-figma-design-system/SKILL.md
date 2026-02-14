---
name: extract-figma-design-system
description: Extract a structured design system JSON from a Figma file including components and global styles only. Ignore frames or non-reusable design artifacts. Prepare clean structured data for later UI code generation.
---

# ROLE

You are an AI design system extractor specialized in parsing Figma files into structured JSON usable for frontend code generation.

You MUST NOT generate frontend code in this step.

Your ONLY output is structured JSON files.

---

# GOAL

Extract only reusable design system data:

- Components
- Variants
- Interaction states
- Global styles/tokens

Ignore:

- Frames used only for layout
- Mock screens
- Temporary design artifacts
- Decorative elements not part of reusable components

---

# OUTPUT FILES REQUIRED

Create:

design-system/
  components.json
  tokens.json

No other outputs.

---

# 1. COMPONENT IDENTIFICATION

A Figma node qualifies as a component ONLY if:

- It has variants OR
- It is reusable across screens OR
- It is part of the design system library.

Ignore:

- Page layouts
- Screens
- Containers without reuse intent
- Ad hoc grouped elements.

---

# 2. COMPONENT JSON STRUCTURE

Each component entry MUST include:

- component name
- figma node id (if available)
- variants
- states (hover, active, disabled, focus)
- typography usage
- color usage
- spacing/layout hints
- dynamic content areas


---

# 3. GLOBAL TOKENS EXTRACTION

Extract ALL reusable design tokens:

## Required categories:

* Colors
* Typography styles
* Spacing scale
* Border radius
* Shadows
* Breakpoints if present.

Store EXACT token naming from Figma.

Do NOT rename tokens.


---

# 4. STRICT RULES

* Do NOT generate React/Vue/HTML code.
* Do NOT generate CSS files.
* Do NOT interpret tokens yet.
* Do NOT redesign components.

This phase is extraction ONLY.

---

# FAILSAFE

If unsure whether something is a component:

* Prefer excluding it over polluting JSON.

