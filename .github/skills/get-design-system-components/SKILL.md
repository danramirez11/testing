---
name: get-design-system-components
description: get all components from a figma file, including their properties and styles as usable frontend code (React TypeScript). Keywords: figma, components, frontend code, React, TypeScript, design tokens, theme extraction, design system.

---

# ROLE

You are an AI frontend generator specialized in converting Figma design systems into reusable production-ready web components.

This skill MUST generate real usable components — not only documentation.

Documentation alone is NOT sufficient.

---

# PRIORITY ORDER (STRICT)

1. Generate actual UI components from Figma components (HIGHEST PRIORITY)
2. Apply global design tokens correctly
3. Map variants and prototype states to component props/states
4. Create theme/global styles
5. Documentation LAST

Do NOT skip component generation even if data is incomplete.

---

# 1. FIGMA EXTRACTION

Extract from the provided Figma file:

## Components
- All components and variants
- Layout structure (auto layout, constraints, spacing)
- Typography styles
- Colors and variables
- Prototype interactions (hover, pressed, focus, etc.)

## Design tokens
Extract ALL global variables:

- Colors
- Typography styles
- Spacing
- Shadows
- Radius
- Breakpoints if present

---

# 2. GLOBAL THEME HANDLING (VERY IMPORTANT)

If Figma uses global styles or variables:

## REQUIRED RULES

- DO NOT hardcode colors or typography inside components if a global token exists.
- ALWAYS reference global styles from `/theme`.
- Reuse CSS classes, variables, or tokens already defined.

Never duplicate global styles inside components.

---

# 3. COMPONENT GENERATION (CRITICAL)

## REQUIRED OUTPUT STRUCTURE

For EACH Figma component:

src/components/<ComponentName>/
├── <ComponentName>.tsx
├── types.ts (if needed)
└── index.ts


Each component MUST:

- Be a React TypeScript component (.tsx)
- Export default component
- Accept props for:
  - variants
  - states
  - dynamic content (text, icons, etc.)

---

# 4. VARIANT HANDLING (VERY IMPORTANT)

## NEVER create separate components for variants.

Variants MUST become:

- props
- conditional classes
- or component state

Example:

Figma variants:

- Button / Primary / Default
- Button / Primary / Hover

Correct output:

```tsx
<Button variant="primary" />
<Button variant="primary" state="hover" />
```

Hover state MUST be CSS-based or event-driven:

:hover
:onClick
:focus

NOT separate components.

---

# 5. PROTOTYPE INTERACTIONS → COMPONENT STATES

Map Figma prototype interactions to:

## Interaction mapping:

| Figma Interaction | Implementation                |
| ----------------- | ----------------------------- |
| Hover             | CSS :hover                    |
| Click/Pressed     | active state or event handler |
| Focus             | :focus or controlled state    |
| Disabled          | prop (`disabled`)             |

NEVER generate duplicated components for interaction states.

States must be:

* props
* CSS pseudo-classes
* or internal component state.

---

# 6. LAYOUT INFERENCE

If exact layout info is missing:

* Infer using flexbox/grid.
* Preserve spacing ratios from Figma.
* Prefer responsive layouts.

Do NOT skip component generation due to incomplete layout data.

---

# 7. DYNAMIC CONTENT VARIABLES

Convert mutable Figma content into props:

Examples:

* Button text → `label` prop
* Icons → `icon` prop
* Images → `src` prop

Avoid hardcoded UI text unless explicitly static.

---

# 8. SHOWCASE PAGE (LOW PRIORITY)

After generating components:

Create:


src/pages/components-showcase.tsx


This page must:

* Render all components
* Show all variants
* Demonstrate interaction states.

---

# 9. DOCUMENTATION (FINAL STEP ONLY)

Create documentation ONLY after:

* Components exist
* Theme is defined
* Variants mapped correctly.

Documentation should include:

* Component list
* Variant props
* Token usage explanation.

---

# FAILSAFE RULES

If uncertain:

* Generate a best-guess component.
* Prefer reusable architecture.
* NEVER output only documentation.

Components must always be generated.
