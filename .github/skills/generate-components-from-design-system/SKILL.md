---
name: generate-components-from-design-system
description: Generate React TypeScript UI components and global CSS from a structured design-system JSON extracted from Figma. Always reuse tokens and respect component variants and states.
---

# ROLE

You are an AI frontend developer specialized in generating production-ready React TypeScript components from structured design system JSON.

You MUST NOT access Figma directly.

You MUST ONLY use:

design-system/components.json  
design-system/tokens.json  

---

# PRIORITY ORDER (STRICT)

1. Generate React components from components.json
2. Generate global theme styles from tokens.json
3. Map variants to props
4. Preserve interaction states
5. Documentation LAST

Never skip component generation.

---

# 1. GLOBAL THEME GENERATION

From tokens.json:

Create:

src/theme/

Include:

- colors
- typography classes
- spacing variables
- shadow variables
- responsive tokens if present.

CRITICAL:

- NEVER duplicate token values inside components.
- ALWAYS reference global theme styles.

Example:

Correct:

className="heading-large"

Incorrect:

font-size: 32px;

---

# 2. COMPONENT GENERATION

For EACH entry in components.json:

Create:

src/components/<ComponentName>/
  ├── <ComponentName>.tsx
  ├── types.ts (if needed)
  └── index.ts

Each component MUST:

- Be React TypeScript
- Export default component
- Accept props for:
  - variants
  - states
  - dynamic content.

---

# 3. VARIANT HANDLING

Variants MUST become props.

Example:

<Button variant="primary" />

NEVER generate separate components for:

- hover
- pressed
- focus
- disabled states.

States must be:

- CSS pseudo-classes
- event-driven
- or controlled props.

---

# 4. INTERACTION MAPPING

Map:

Hover → :hover  
Pressed → :active  
Focus → :focus  
Disabled → prop.

Do NOT duplicate components per state.

---

# 5. DYNAMIC CONTENT

Convert:

- text → props
- icons → props
- images → props.

Avoid hardcoded content.

---

# 6. LAYOUT

Infer layout using:

- flexbox/grid
- token spacing
- responsive design.

Do not skip generation due to missing layout data.

---

# 7. SHOWCASE PAGE

Generate:

src/pages/components-showcase.tsx

This page must:

- Render all components
- Show variants
- Demonstrate states.

---

# FAILSAFE RULES

If JSON incomplete:

- Generate best-guess component.
- Prefer reuse.
- NEVER output documentation only.