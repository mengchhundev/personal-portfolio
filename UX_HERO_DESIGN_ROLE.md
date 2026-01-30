# Hero design role — UX/UI assessment

## Is the Hero correct in design role?

**Yes.** From a UX/UI perspective, the Hero is doing its job and is **correct in design role**.

---

## How the Hero fulfills its role

| Hero responsibility   | How your Hero handles it |
|-----------------------|---------------------------|
| **Establish identity** | Role label (“DevOps Engineer”) + profile photo + “Available for opportunities.” |
| **Communicate value** | Headline: “Building reliable **infrastructure** that scales.” |
| **Supporting copy** | Rotating taglines (automation, pipelines, IaC · CI/CD · Kubernetes). |
| **Primary action** | “View my work” → scrolls to Experience (in-page CTA so visitors move into the portfolio). |
| **Secondary actions** | GitHub + LinkedIn (social proof and contact). |
| **Guide further** | Scroll cue at bottom. |
| **Hierarchy** | Role → headline → tagline → CTAs; on desktop, copy left / photo right; on mobile, photo first then copy. |

---

## Improvements made for role clarity

1. **Primary in-page CTA** — “View my work” was added as the first button (teal, high emphasis). It scrolls to `#experience` so the hero’s main job is “get them into the page,” not only “send them to GitHub/LinkedIn.”
2. **Tagline accessibility** — The typewriter region has `aria-live="polite"` and `aria-atomic="true"` so screen readers announce the current tagline when it changes.

---

## Optional next steps (not required for “correct” design role)

- Add your name (e.g. “Hi, I’m [Name]” or under the role) for a more personal first impression.
- Replace placeholder GitHub/LinkedIn URLs with your real profiles.
