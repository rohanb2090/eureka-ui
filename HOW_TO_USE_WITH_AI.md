# Using Eureka UI with AI Tools

This guide explains how to leverage AI tools (Lovable, Bolt, ChatGPT, Claude) to build UIs consistent with the Eureka Design System.

## 1. Generating Context for AI

To get the best results, you need to provide the AI with the current state of our design system (tokens, components, configuration).

We have an automated script to generate this context for you.

### Step 1: Run the Context Generator
In your terminal, run:

```bash
npm run gen:ai-context
```

This will create a file named `EUREKA_AI_CONTEXT.md` in the root of the project.

### Step 2: Copy the Context
Open `EUREKA_AI_CONTEXT.md` and copy its entire content.

---

## 2. Using with Lovable / Bolt / ChatGPT

When starting a new chat or project in an AI tool, use the following prompt structure:

**Initial Prompt:**

> I am building a UI using the Eureka Design System. Here is the context of our design tokens, Tailwind configuration, and component blueprints. Please strictly adhere to these guidelines, especially for colors, spacing, and component usage.
>
> [PASTE CONTENT OF EUREKA_AI_CONTEXT.md HERE]

**Follow-up Prompt (Example):**

> Create a dashboard layout with a sidebar navigation and a main content area. Use the 'Surface' tokens for background colors and 'Primary' buttons for the main actions. verifying that you are using the correct Tailwind classes from the provided config.

---

## 3. Figma Integration

### Syncing Variables
If you are using Figma for design, ensure your Figma variables match `design-tokens.json`.

1.  **Export from Figma**: Use the "Variables to JSON" plugin to export your Figma variables.
2.  **Compare**: Check the exported JSON against `design-tokens.json` to ensure alignment.
3.  **Update**: If they differ, update `design-tokens.json` to match Figma (standard source of truth) or vice-versa, then re-run `npm run gen:ai-context`.

---

## 4. Best Practices

-   **Always Re-generate Context**: Before starting a major new task with AI, run `npm run gen:ai-context` to ensure you have the latest token values and component blueprints.
-   **Be Specific**: When asking for value, refer to token names (e.g., "Use `action.primary` color") rather than hex codes.
-   **Verify Output**: AI may hallucinate utility classes. Always check the generated code against `tailwind.config.js` or the generated `EUREKA_AI_CONTEXT.md`.
