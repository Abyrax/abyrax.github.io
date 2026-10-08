# ABYRAX STUDIO — WEBSITE REDESIGN & IMPLEMENTATION SPECIFICATION

> **Audience:** Codex coding agent working inside the repository for `https://abyrax.com`  
> **Document type:** Product requirements + creative direction + technical architecture + implementation plan  
> **Last prepared:** 2026-10-08  
> **Status:** Approved direction for implementation; actual repository/asset inventory must be completed by the agent  
> **Mission:** Transform the current personal developer portfolio into an exceptional, interactive, production-grade **Abyrax Studio** website while preserving the **existing logo exactly**.

---

## 0. Non-negotiable instructions to Codex

1. **Inspect before editing.** Audit the repository, package manager, hosting/deployment configuration, asset files, current routes, SEO metadata, and existing links. Review `https://abyrax.com` for reference. Do not assume the current site's implementation matches its public presentation.
2. **Preserve the existing Abyrax logo.** Reuse the canonical asset from the repository. Do **not** redraw it, recolor it, replace its typography, alter its proportions, crop it, animate its internal shapes, or substitute an AI-generated logo. Responsive sizing and surrounding presentation are allowed. If multiple logo variants exist, identify and document the canonical one.
3. **This is not a vanilla HTML/CSS redesign.** Build a modern, typed, component-based React application. The preferred foundation is **Next.js App Router + React + TypeScript + Tailwind CSS**. Browser output necessarily uses HTML/CSS, but do not implement this as standalone hand-authored `.html` pages or an old-fashioned CSS-only template. Use TSX components, Tailwind utility styling, design tokens, and intentional motion.
4. **Replace the personal resume-first information architecture.** The primary identity is **Abyrax Studio**, an independent game and creative-software venture, rather than the founder's job-seeking CV. The founder and award history belong in the Studio section, not as the whole website.
5. **All five named projects must be prominently represented** with their own dedicated detail pages: **BØTHUN: Rise of the Lights**, **Project ALKUT**, **Project Amelos**, **Seshat: Narrative Scriptor**, and **Knight of the Alliance**.
6. **Make the result visually remarkable and meaningfully interactive.** Aim for cinematic art direction, exceptional typography, thoughtful micro-interactions, editorial storytelling, fluid state transitions, and deliberate mobile experiences—not a generic SaaS template, a gaming WordPress theme, or a collection of static cards.
7. **Accuracy above hype.** Do not fabricate product capabilities, traction, launch dates, platforms, customers, funding, awards, testimonials, partners, screenshots, gameplay footage, team size, or company registration. Treat uncertain feature descriptions as plans/concepts, and preserve the distinction between **incubation acceptance** and **ongoing incubation participation**.
8. **Reuse authentic assets where available.** Prioritize existing studio art, posters, screenshots, and authorized videos. Never use unrelated game imagery, copyrighted stock as fake gameplay, or generated fake screenshots representing real applications.
9. **Progressive enhancement and accessibility are required.** No essential content should depend on WebGL, hover, animations, autoplay video, custom cursors, or client-side hydration.
10. **Do not stop at a plan or mockup.** Implement the entire working site, run build/lint/type checks, verify major interactions and routes, and provide a factual completion report including unresolved asset/content gaps.

### Explicit non-goals

- No e-commerce store, payments, authentication, accounts, or user database.
- No fabricated live AI chatbot or fake interactive product demo.
- No blog, careers board, investor portal, CMS, or newsletter unless the repository already contains an independently required version.
- No needless 3D dependencies or scroll-hijacking just to appear modern.
- No replacement of the existing brand logo and no unapproved production deployment.

---

## 1. Business context and positioning

**Brand:** Abyrax Studio  
**Home:** `https://abyrax.com`  
**Location:** Ankara, Türkiye  
**Nature:** Early-stage, independently developed game and creative-software projects; do not imply a registered corporation or a large employee team.  
**Audience:** Game players and fans; game developers, technical artists, narrative designers and writers; potential collaborators; early users; incubation/accelerator reviewers; technology partners.

### Core positioning

> **We build worlds — and the tools to create them.**

Abyrax Studio has two complementary lines of work:

- **Original games:** BØTHUN: Rise of the Lights and Project ALKUT.
- **Creator software:** Project Amelos (Unreal Engine level-design application/tooling) and Seshat: Narrative Scriptor (worldbuilding and narrative design desktop application).

**Knight of the Alliance** is a featured award-winning academic project demonstrating the founder's technical/gameplay background, **not** a current Abyrax commercial title.

The website should convey that the studio is technically capable, creative, ambitious, and credible **without presenting experiments as released products**.

### Studio recognition — exact factual guardrail

Abyrax Studio's projects BØTHUN and ALKUT supported its **acceptance into Bilkent Cyberpark's incubation program**. The website may state this carefully, e.g.:

> “Our original game projects contributed to Abyrax Studio's acceptance into Bilkent Cyberpark's incubation program.”

Do **not** claim that the studio is currently resident in the program, funded by Cyberpark, formally partnered with Bilkent, or endorsed by the institution. Do not use an institutional logo without permission.

The **Knight of the Alliance** team received **1st Ranking Team / Best Senior Project at CTIS Awards 2024**, recognized by Bilkent University in consultation with Havelsan. Do not convert this into an award received by the commercial studio.

### Messaging priorities

1. What Abyrax builds.
2. Immediate visual evidence of the work.
3. Distinct profiles for each of the five projects.
4. Credibility and authentic founder story.
5. A clear path to contact or collaborate.

### Editorial voice

Confident, succinct, original, cinematic, technical but human. Avoid empty clichés such as “revolutionizing gaming,” “industry-leading,” “world-class,” “next-generation ecosystem,” or “AI-powered everything.” Project language should differentiate **built**, **in development**, **prototype**, **concept**, and **planned**.

---

## 2. Recommended technical stack

| Concern | Decision | Why |
|---|---|---|
| Framework | **Next.js (current stable compatible major; preferably 16) App Router** | Multi-page routing, metadata, pre-rendering, modern React ecosystem |
| Language | **TypeScript, strict mode** | Safe project content models and predictable components |
| UI | **React 19-compatible components** | Component-first interaction and composition |
| Styling | **Tailwind CSS v4** + centralized design tokens | Consistent styling without a large handwritten CSS codebase |
| Motion | **Motion for React** (`motion/react`) | Scroll entry, gestures, layout transitions, interaction feedback |
| Icons | **Lucide React** (small, selectively used) | Consistent UI accents |
| Typography | `next/font` with **Space Grotesk**, **DM Sans**, and optional **IBM Plex Mono** | Distinctive editorial display, readability, technical captions |
| Content | Typed local `*.ts` / `*.mdx` content | Avoid premature CMS/backend complexity |
| Images | `next/image` when supported by host; AVIF/WebP optimization | Performance and responsive delivery |
| Video | Native `<video>` / privacy-conscious click-to-load YouTube | Avoid heavy initial embeds |
| Testing | Playwright + focused unit checks (Vitest if needed) | Test important interactive behavior |
| QA | Lighthouse / accessibility checks / production build | Real quality gate |

**Important:** First identify the hosting setup. If existing hosting is static-only (e.g. GitHub Pages), configure a compatible **static export** with pre-rendered project pages and compatible images. Do not introduce unnecessary server actions or APIs. If the host supports Next.js SSR/SSG directly, choose the simplest production approach. Preserve the custom domain and existing deployment contract.

**WebGL/Three.js policy:** Optional, **not default**. Build the hero and interactive project explorer with performant DOM/SVG/Motion first. Add React Three Fiber only if there is a demonstrable visual benefit, correct asset support, a static accessible fallback, and mobile performance budget headroom. Do not stack GSAP, Lenis, Three.js, and multiple animation systems as decoration. Native browser scrolling is the default.

Use current stable and compatible dependency versions checked against the project's lockfile and official documentation; do not blindly paste future or alpha package versions.

---

## 3. Art direction: “The Digital Foundry”

### Creative idea

A cinematic **digital atelier**: a visual language connecting fictional universes with the tooling used to create them. Combine dramatic editorial composition, atmospheric image treatment, oversized refined typography, precise software-oriented diagrams, and purposeful motion.

**Not:** a cyberpunk neon dashboard, an over-glossy glassmorphism template, or a full-screen loading animation before content appears.

### Visual system

- **Primary background:** near-black obsidian with subtle graphite surfaces; restrained warm/off-white typography.
- **Global studio accent:** derive an accent from the existing logo **without modifying the logo**. If the logo palette conflicts with project colors, keep logo unchanged and use neutral framing.
- **Project accents:**
  - **BØTHUN:** Arctic teal / aurora cyan, icy luminous gradients and mythic geometry.
  - **ALKUT:** Dark crimson / ember red, dense cinematic contrast and restrained angular framing.
  - **Amelos:** Electric cobalt / violet, gridlines, guides, nodes, editor-like precision.
  - **Seshat:** Warm gold / parchment-sand against dark slate; constellation/knowledge-graph motifs.
  - **Knight of the Alliance:** Weathered steel / muted brass; archival award presentation.
- **Avoid showing five clashing gradients simultaneously.** Project-specific color appears when that project is active; global layout remains controlled and coherent.
- **Typography:** Huge expressive display headings, compact body text, generous whitespace, occasional monospaced technical labels. Use true typographic hierarchy, not indiscriminate uppercase.
- **Layout:** 12-column desktop grid, intentional asymmetry, large visual panels, occasional full-bleed transitions, art-directed negative space, strong image crops. Avoid repetitive 3-column card grids.
- **Texture:** Very subtle grain, grid or starfield motifs only where legibility remains excellent; no noise-heavy overlays or constant motion everywhere.
- **Borders:** Hairline dividers and intentionally segmented panels rather than rounded cards around every paragraph.
- **Buttons:** Minimal expressive typography, tasteful directional arrow animation, clearly visible focus states. Do not hide semantics under bespoke visuals.

### Design signature

A **featured project stage** with left-side project navigation and a right-side cinematic artwork area. Choosing a project changes image, title, category, accent, and concise description in one coordinated transition. This should feel like a premium interactive studio reel, not a conventional carousel.

### Imagery rules

- Existing art retains authenticity and original credits where needed.
- Do not fabricate fake application screenshots for Amelos or Seshat.
- If new imagery is not provided, use **well-designed typographic composition, verified diagrams, and abstract generative motifs visibly presented as editorial art**, not misleading screenshots.
- Render all text as accessible DOM text, never burned into a new image just for aesthetic effect.
- Background media never reduces headline contrast below accessible levels.

---

## 4. Site map and navigation

```text
/
/projects
/projects/bothun
/projects/alkut
/projects/amelos
/projects/seshat
/projects/knight-of-the-alliance
/studio
/contact
/not-found (branded 404)
```

### Main navigation

**Logo (home)** · **Projects** · **Studio** · **Contact**  
Header CTA: **Explore the Work** or **Let's Talk** (choose based on scroll location/viewport).  
Header is transparent over a dark hero, resolves into a subtle opaque surface after scrolling, and remains legible. No redundant permanent second navbar.

Mobile: compact brand + menu trigger; full-screen or near-full-screen accessible drawer with clear close, focus management, scroll lock, Escape support, and route navigation. Do not rely on hover.

Footer: short studio statement, project index, contact, relevant verified social/GitHub links, location “Ankara, Türkiye”, year via current runtime/build date, privacy-safe note if no tracking, and appropriate ownership wording. Do not invent social profiles.

---

## 5. Home page — detailed experience

### 5.1 Global preloader / entry

**No blocking cinematic intro**. Brand can reveal subtly on first paint, but meaningful content and navigation must be immediately available. Do not implement progress counters that pretend to load resources.

### 5.2 Hero — first viewport

**Eyebrow:** `INDEPENDENT GAME & CREATIVE SOFTWARE STUDIO`  
**H1:** `WE BUILD WORLDS.`  
**Second line:** `AND THE TOOLS BEHIND THEM.`  
**Support:** `Original games. Thoughtful creative software. Built with equal parts imagination and engineering.`  
**Primary CTA:** `Explore Projects`  
**Secondary CTA:** `The Studio`

Composition:

- Oversized editorial typography with tightly controlled line breaks.
- Rich but restrained backdrop using existing authentic BØTHUN media or a non-misleading abstract composition.
- A diagonal/split material language subtly hinting at **Worlds** and **Tools**, not two disjoint websites.
- Small vertical index or section marker that reinforces visual identity, not faux technical metrics.
- Gentle motion: staggered headline reveal once, slow parallax within a tightly bounded range, scroll cue with useful affordance.
- On low-power devices, render a static poster and skip decorative effects.

### 5.3 Interactive “Selected Work” stage — signature interaction

Five selectable project entries. Desktop uses a **large presentation area** + slim accessible item list:

1. BØTHUN: Rise of the Lights — Original Game
2. Project ALKUT — Original Game
3. Project Amelos — Creator Tool
4. Seshat: Narrative Scriptor — Creator Tool
5. Knight of the Alliance — Award-winning Project

When active item changes:

- Background media crossfades or uses a masked reveal.
- Accent color changes at the project container level.
- Project index, category, title, two-line description, and CTA update together.
- Transitions are cancelable, deterministic, and keyboard accessible.
- Provide visible previous/next and direct-selection controls.
- Avoid automatic advancement unless a genuinely useful reason exists; no uncontrolled autoplay.
- Active item announced semantically to assistive technologies.
- On mobile, replace complex desktop layout with simple swipeable **and button-accessible** project panels, not tiny controls.

CTA: `Explore [Project]` leads to each dedicated project page.

### 5.4 “Two disciplines, one vision”

An editorial two-column section showing:

- **WORLDS:** Original interactive experiences — BØTHUN + ALKUT.
- **TOOLS:** Software empowering creators — Amelos + Seshat.

The columns may respond subtly to pointer/focus and transition into separate filtered project collections. Do not allow an interaction that exists only on desktop.

### 5.5 Process / expertise strip

Use three clear phases, not fictitious business KPIs:

`DESIGN → ENGINEER → ITERATE`

Short descriptions grounded in actual development practices (worldbuilding, gameplay systems, tooling, validation). If micro-diagrams are used, implement SVG/DOM content with legible labels and reduced-motion support.

### 5.6 Recognition / proof

Two concise proof items:

- **Bilkent Cyberpark incubation-program acceptance** — carefully qualified as described in §1.
- **Knight of the Alliance — 1st Ranking Team, CTIS Awards 2024** — assigned to the academic project/team, not the company.

Use small documentary-style typography, optional verified award imagery. Do not present university/incubator logos without clearance.

### 5.7 Closing CTA

Large typographic invitation:

`HAVE A WORLD IN MIND?`  
`LET'S BUILD SOMETHING.`

Contact button with functional email link. Provide clear alternate project browsing link.

---

## 6. Projects index `/projects`

### Required interface

- Strong heading: `THE WORK.` and clear description of what visitors are viewing.
- Accessible filters: **All / Games / Tools / Featured Academic**. Filters modify the URL query or remain stable controlled state so Back/Forward behaves sensibly. Default `All`.
- Intentional asymmetric visual grid: allow a large primary feature + supporting projects rather than five identical small cards.
- Each entry shows **real artwork if available**, title, concise verified summary, category, project status, technology chips only where accurate, and `View Project` affordance.
- Hover/focus: subtly reveal a secondary detail layer, but title + CTA remain visible without hovering.
- On touch: straightforward tap-to-open; no hover-dependent hidden navigation.
- Filters animate item layout with Motion, without layout jank or focus loss.
- Add filter result counts only if computed from actual project data; no fake counters.

### Ordering

Feature BØTHUN and Amelos strongly (game + tool), with Seshat and ALKUT closely behind; Knight as a distinguished award-winning project. All five must remain accessible in every relevant view.

---

## 7. Reusable project detail page template

Every project page should be distinctive **through its artwork, accent, copy, and optional media module**, while sharing a stable, maintainable component system.

### Page anatomy

1. Breadcrumb or `Back to Projects`.
2. Cinematic project hero: type badge, project name, short honest tagline, hero media/art, status if confirmed.
3. `Project at a glance`: category, platform, engine/stack, role/status **only when validated**.
4. `The Idea`: what problem/experience the project addresses.
5. `What We're Building` or `What Was Built`: capabilities distinguished by their actual status.
6. Authentic visual gallery (optional, no fabricated media).
7. `Behind the Build`: selected technical decisions and interesting challenges.
8. Verified external links: trailer, code, demo, etc., if available. Don't render dead/empty CTAs.
9. `Next Project` navigation, deterministic and accessible.
10. Compact studio footer with contact.

Pages should read like concise project stories, **not resume bullet dumps** or marketing landing pages with imaginary product adoption metrics.

### 7.1 BØTHUN: Rise of the Lights

- **Type:** Original game IP.
- **Description:** Nordic-inspired, story-driven semi-open-world action RPG for PC with stylized/low-poly visuals.
- **Technology:** Unreal Engine 5.6, C++ and Blueprints; Gameplay Ability System, abilities/spells, combat and AI-driven enemies as shown in existing portfolio.
- **Editorial visual direction:** Auroras, ice, luminous turquoise accents, minimal geometric runic framing (decorative, not fake historical inscriptions).
- **Valid current media:** `https://abyrax.com/assets/images/bothunpos.png` and existing public YouTube trailer `https://www.youtube.com/watch?v=xtco38VWWEo` (verify validity/accessibility at implementation time).
- **Suggested headline:** `A WORLD BENEATH THE NORTHERN LIGHTS.`
- **Do not imply:** Already released, store availability, an announced release date, or completed full game.

### 7.2 Project ALKUT

- **Type:** Original game prototype/IP.
- **Description:** Cinematic, level-based third-person action shooter/action-adventure prototype with Motion Matching, modular weapon systems, AI opponents, and loot/progression mechanics.
- **Technology:** Unreal Engine 5.5 as shown on the current public site; retain actual engine version if repository evidence is more recent.
- **Editorial visual direction:** Deep black, industrial compositions, restrained crimson/steel accents, dramatic stills.
- **Valid current media:** `https://abyrax.com/assets/images/alkutpos.jpg` and existing public YouTube trailer `https://www.youtube.com/watch?v=jec5iABCXUk` (verify at implementation time).
- **Suggested headline:** `MOTION. PRECISION. IMPACT.`
- **Do not imply:** Released game, live multiplayer, commercial distribution, or supported platforms not verified.

### 7.3 Project Amelos

- **Type:** Creator software / Unreal Engine level-design application or plugin project.
- **Core purpose:** Explore more efficient workflows for level designers working in Unreal Engine.
- **Known context:** The project originated as `ProjectAmelos`, with a proposed reusable Unreal Editor plugin approach. The user describes it as an Unreal Engine level-design app.
- **Potential future directions (label as exploration, not implemented):** context-aware level-design assistance, authoring workflow automation, editor-native tools, AI-assisted organization.
- **Editorial visual direction:** Blueprint-like vector grids, object bounding boxes, handles, nodes, viewport spatial guides; **technical concept visualizations must be labeled** if not authentic screenshots.
- **Suggested headline:** `DESIGN SPACES. REMOVE FRICTION.`
- **Critical agent task:** Inspect the provided Amelos project/materials and ask for missing feature evidence only if necessary. Do not claim an AI integration, working plugin feature, or published download unless verified.

### 7.4 Seshat: Narrative Scriptor

- **Type:** Desktop creative software.
- **Audience:** Writers, worldbuilders, narrative designers and game developers.
- **Purpose:** Organize interconnected fictional universes, story elements, and planning workflows.
- **Technologies (from known project context; verify repository):** Tauri, Rust, React, TypeScript, SQLite, Leaflet.
- **Known feature areas (verify current implementation before writing tense):** structured characters/locations/events/lore, interactive maps, timelines, relationships/graphs, visual planning workspaces.
- **Future AI exploration:** contextual worldbuilding, narrative consistency assistance, writing support. Explicitly mark these as **planned/exploratory** unless implemented.
- **Editorial visual direction:** Ink-on-dark, fine lines, relationship constellations, manuscript/editorial accent typography, warm pale gold.
- **Suggested headline:** `EVERY WORLD HAS A STORY. KEEP IT CONNECTED.`
- **Do not imply:** Public commercial availability, live cloud collaboration, or shipping Claude API integration.

### 7.5 Knight of the Alliance

- **Type:** Award-winning university senior project, **not a current studio release**.
- **Description:** Medieval-themed Unreal Engine 5 role-playing experience set around an imaginative medieval version of Bilkent University, including ChatGPT-integrated conversational NPCs.
- **Technical areas:** C++/Blueprints, character movement, combat, enemy AI and interaction; preserve only verified claims.
- **Recognition:** 1st Ranking Team / Best Senior Project, CTIS Awards 2024. Attribute to project team and university context.
- **Current media:** `https://abyrax.com/assets/images/senior-project.jpg`.
- **Existing code link:** `https://github.com/Abyrax/UE5-SeniorProject-KnightOfTheAlliance`.
- **Editorial visual direction:** Medieval steel, subdued warm highlights, museum-like archival treatment of the award.
- **Suggested headline:** `WHERE MEDIEVAL FANTASY MET CONVERSATIONAL AI.`
- **Do not imply:** Proprietary Abyrax Studio commercial release, company award, or invented involvement of external partners.

---

## 8. Studio page `/studio`

### Purpose

Tell the story of the studio in a grounded, compelling way, without reverting to a full personal CV.

### Suggested structure

1. **Mission:** “We build worlds — and the tools to create them.”
2. **Approach:** Interplay between game development and creator tooling.
3. **Founder:** Brief introduction to the independent developer behind Abyrax; verify full display name and exact role against user-provided material. Describe software/game engineering and Unreal Engine background. A portrait is optional only if one is available and authorized.
4. **Selected foundations:** Bilkent University CTIS, Knight of the Alliance award, relevant technical and simulation experience, acceptance into the incubation program (qualified correctly).
5. **What we value:** Creative ownership, resilient engineering, iterative prototyping, useful tools, narrative craft.
6. **Contact/collaboration CTA.**

Avoid presenting former employers, university institutions, or software providers as corporate customers or active partners.

---

## 9. Contact page `/contact`

### Principle

One trustworthy, useful conversion path is better than an unverified form.

- Big message: `LET'S TALK ABOUT WHAT'S NEXT.`
- Display real, verified business contact details.
- **Default functional email:** `abyrax@gmail.com` from the live portfolio, unless the owner has verified and configured a company-domain email.
- **Preferred future business email:** a verified `@abyrax.com` address; **do not invent or display one as active** without confirmation.
- Provide a mailto CTA with a helpful optional subject such as `Abyrax Studio Inquiry`.
- Optional copy-email interaction with toast/accessible live announcement and success/failure feedback.
- Verified GitHub/LinkedIn/social links only after audit.
- No fake submission confirmation, hidden third-party forms, or email collection without working delivery/privacy terms.

---

## 10. Interaction design system

| Interaction | Required behavior | Constraints |
|---|---|---|
| Global navigation | Smooth but quick route feedback; clear active state | No unusable multi-second page transitions |
| Hero text reveal | Single controlled intro stagger | Respect reduced motion; never hide content if JS fails |
| Featured project stage | Select, crossfade art, synchronized content updates | Keyboard, touch, buttons, ARIA status |
| Project cards | Contextual media reveal/parallax and subtle lift | Not hover-only; restrained transform |
| Projects filtering | Correct filtering and animated layout | Restore focus, no misleading counts |
| Gallery/lightbox | Click to enlarge real media | Escape, focus trap, prev/next, captions |
| Video | Click-to-load trailer overlay or external link | No autoplay with sound, no initial iframe payload |
| Anchor jump | Navigation to sections | Native scrolling, sticky header offset |
| Buttons | Intentional hover, focus, pressed feedback | Large enough targets, visible focus ring |
| Mobile menu | Accessible overlay/drawer | Escape, focus return, scroll lock |
| Email copy | Copies verified address | Visible + screen-reader feedback |
| Motion settings | Follow OS reduced-motion preference | Disable scale/parallax/long transforms |

### Micro-interaction philosophy

- Duration: typically ~160–350 ms for UI responses; larger editorial transitions may be longer only when they do not delay user actions.
- Animate transform and opacity first; avoid layout-triggering properties in rapid scroll animations.
- Interactions always communicate state or guide attention. Nothing should move just because the mouse moved.
- Fancy pointer-following spotlight and magnetic actions are optional desktop polish, never a dependency for navigation.
- Use native interaction patterns when custom alternatives impair usability.

---

## 11. Responsive specification

Design explicitly for **360/375, 390/430, 768, 1024, 1440, and 1920px** widths.

### Mobile

- Mobile-first composition, not compressed desktop.
- Large typography should use `clamp()`/fluid scales without overflow.
- Project artwork retains meaningful subject framing; use `object-position` per asset.
- Controls at least **44×44 CSS px** where practical.
- Featured project selector becomes swipe-friendly with visible text navigation.
- Galleries reflow cleanly; no hover interactions required.
- Avoid fixed-height heroes that crop CTA under mobile browser toolbars.
- WebGL/high-cost effects off by default on constrained devices.

### Tablet

- Stage becomes balanced stacked/split arrangement as space allows.
- Nav remains usable without awkward intermediate breakpoints.
- No 5-column filters/cards causing horizontal clipping.

### Desktop / ultrawide

- Preserve editorial rhythm and artwork quality without making body copy lines extremely long.
- Maximum readable text width around 65–75ch where appropriate.
- Allow dramatic artwork overflow within intentional clipping boundaries, not viewport overflow.

---

## 12. Accessibility, semantics, and motion safety

- WCAG **2.2 AA** as target.
- Semantic headings, landmarks, links/buttons, lists, and meaningful text alternatives.
- Visible keyboard focus; skip-to-content link.
- Full keyboard navigation for project stage, menus, lightboxes, and filter controls.
- Dialogs trap focus while open, restore it when closed, and provide Escape behavior.
- Distinguish selected state without color alone.
- Maintain at least **4.5:1** contrast for normal text and **3:1** where applicable for large text/UI boundaries.
- Respect `prefers-reduced-motion`; don't autoplay decorative video for those users.
- Announce dynamic status changes without excessive screen-reader noise.
- No audio by default, no flashing/high-frequency effects, no scroll-locking narratives.
- Use proper `<a>` elements for navigation and `<button>` for state changes, even when styled creatively.

---

## 13. Performance & technical quality

### Targets (measured under consistent, documented Lighthouse conditions)

- Core Web Vitals goals: **LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1** at p75 when field data becomes available.
- Lighthouse target: **≥ 90 Performance desktop**, **≥ 85 mobile** on representative runs; **≥ 95 Accessibility** where feasible.
- Minimum initial JavaScript. Prefer server components/static render for noninteractive sections; isolate client islands.
- Hero poster is optimized and prioritized; galleries below fold use responsive/lazy-loaded images.
- Avoid loading five full-size images/videos into first viewport.
- Lazy-load any optional heavy canvas features; retain a static fallback.
- Reserve media dimensions and font fallback metrics to prevent layout shifts.
- Never defer meaningful text solely to an animation sequence.
- Keep bundle analysis and console errors clean.

### Search / sharing

- Title and description per route.
- Open Graph / social metadata; use **authentic project assets** where possible.
- Canonical URLs at `https://abyrax.com`.
- Sitemap + robots rules for publicly navigable pages.
- Correct 404 behavior for unknown project slugs.
- Structured data only when accurate; represent independent studio identity truthfully, not as a registered company if unverified.
- Alt text describing actual content, not keyword stuffing.
- Preserve or redirect old deep links where the current site has indexed sections/routes.

### Security / privacy

- No embedded API keys or tokens.
- No contact backend without a justified threat model/rate limiting.
- Only load third-party trackers/embeds if explicitly approved.
- YouTube click-to-load preferred; avoid third-party autoplay tracking.
- Use `rel="noopener noreferrer"` appropriately for external new-tab links.
- No content or image CDN dependencies that quietly break offline builds or violate image rights.

---

## 14. Content model (typed, maintainable)

Create a single source of truth for project information. Example shape (adjust to actual use):

```ts
export type ProjectCategory = "game" | "tool" | "academic";
export type ProjectStatus = "concept" | "prototype" | "in-development" | "completed";

export interface ProjectMedia {
  src: string;
  alt: string;
  type: "image" | "video";
  caption?: string;
  poster?: string;
}

export interface Project {
  slug: "bothun" | "alkut" | "amelos" | "seshat" | "knight-of-the-alliance";
  title: string;
  eyebrow: string;
  category: ProjectCategory;
  status?: ProjectStatus; // Omit publicly if unverified.
  summary: string;
  heroTagline: string;
  accent: string;
  platform?: string[];
  stack?: string[];
  narrative: {
    idea: string;
    features: string[];
    behindTheBuild?: string[];
  };
  heroAsset?: ProjectMedia;
  gallery: ProjectMedia[];
  externalLinks: { label: string; href: string }[];
  featured: boolean;
  sortOrder: number;
}
```

Create **a small explicit content-verification registry** (e.g. `src/content/verification-notes.md`) listing statements requiring owner confirmation, especially Amelos features, launch status, company email, and media rights. Do not fill uncertainty with invented copy.

Use one content source to drive home stage, project index, detail pages, prev/next navigation, related projects, and metadata. No duplicated hard-coded project objects in separate components.

---

## 15. Proposed repository layout

Adapt to the existing repo rather than forcibly overwriting unrelated content:

```text
src/
  app/
    layout.tsx
    page.tsx
    projects/
      page.tsx
      [slug]/page.tsx
    studio/page.tsx
    contact/page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
      Header.tsx
      MobileMenu.tsx
      Footer.tsx
    home/
      Hero.tsx
      FeaturedProjectStage.tsx
      Disciplines.tsx
      StudioRecognition.tsx
      ClosingCTA.tsx
    projects/
      ProjectCard.tsx
      ProjectFilters.tsx
      ProjectHero.tsx
      ProjectGallery.tsx
      ProjectPager.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      MediaLightbox.tsx
      MotionReveal.tsx
      ProjectBadge.tsx
  content/
    projects.ts
    studio.ts
    verification-notes.md
  lib/
    metadata.ts
    media.ts
  styles/
    /* use only small shared theme/token files if necessary */
public/
  brand/
    /* original existing logo, byte-for-byte wherever possible */
  projects/
    bothun/
    alkut/
    amelos/
    seshat/
    knight-of-the-alliance/
tests/
  e2e/
  unit/
```

**Rule:** Do not create these directories if equivalents already exist. Match conventions, use existing aliases, and remove obsolete implementation only after replacements work.

---

## 16. Asset inventory and migration

### Confirmed live-site asset/reference inventory

| Project | Existing asset/reference | Intended use |
|---|---|---|
| BØTHUN | `/assets/images/bothunpos.png` | Project hero/poster; avoid cropping critical title art |
| BØTHUN | `https://www.youtube.com/watch?v=xtco38VWWEo` | Trailer CTA or privacy-conscious embed |
| ALKUT | `/assets/images/alkutpos.jpg` | Project hero/poster |
| ALKUT | `https://www.youtube.com/watch?v=jec5iABCXUk` | Trailer CTA or privacy-conscious embed |
| Knight | `/assets/images/senior-project.jpg` | Hero/poster |
| Knight | `https://github.com/Abyrax/UE5-SeniorProject-KnightOfTheAlliance` | Public source link |
| Amelos | No confirmed public asset from current website | Search repo and owner-provided materials; graceful art-directed fallback |
| Seshat | No confirmed public asset from current website | Search repo and owner-provided materials; graceful art-directed fallback |
| Abyrax logo | **Locate in repository/site markup before any redesign** | Preserve exact existing asset |

**Asset rules:**

1. Find original filenames, dimensions, compression, copyrights, and author credits.
2. Reuse original logo asset; if creating transparent/optimized exports, keep its appearance exactly the same and retain original source file.
3. Generate optimized derived AVIF/WebP images without overwriting originals.
4. Remove watermarks only if the studio owns and authorizes the underlying image; never erase third-party credits.
5. Record asset provenance and attribution requirements where necessary.
6. If Amelos/Seshat project images are missing, use truthful abstract graphics and clear headings, not placeholder stock photos or fake screenshots.
7. Existing trailer and GitHub links should be rechecked for actual availability, and inaccessible links omitted or labeled clearly.

---

## 17. Suggested baseline copy

These examples are **copy direction**, not license to fabricate details:

### Site-wide

**Meta title:** `Abyrax Studio — Games & Creative Software`  
**Meta description:** `Abyrax Studio is an independent game and creative software venture building original experiences and tools for game developers, writers, and worldbuilders.`

**Primary hero:**

> WE BUILD WORLDS.  
> AND THE TOOLS BEHIND THEM.

**Intro:**

> Abyrax Studio is an independent creative technology venture developing original games and tools for the people who make them.

**Games intro:**

> Stories to step into. Systems to master. Worlds shaped through design and engineering.

**Tools intro:**

> Creative software built around the real work of designing spaces, organizing ideas, and connecting stories.

**Studio intro:**

> Independent by design. Driven by worldbuilding, practical engineering, and a belief that excellent tools empower excellent creative work.

**Contact CTA:**

> Building something interesting? We'd love to hear about it.

### Status-sensitive wording

- Prefer **“in development”** or **“prototype”** as verified, not **“available now.”**
- Prefer **“exploring AI-assisted workflows”** to **“AI-powered product”** without a working integration.
- Prefer **“accepted into the incubation program”** to **“backed by Bilkent Cyberpark.”**
- Prefer **“award-winning academic project”** to **“our award-winning commercial game.”**

---

## 18. Implementation workflow for Codex

### Phase 0 — Repository discovery (mandatory)

- [ ] Determine existing framework, file tree, hosting, deployment pipeline, domain configuration, and actual logo asset.
- [ ] Inventory existing images/videos/links, including any Amelos and Seshat assets.
- [ ] Identify live routes, URLs, and indexing considerations.
- [ ] Confirm current source can run/build; document pre-existing errors separately.
- [ ] Create a **short implementation plan** stating scope, non-goals, migration risks, and acceptance checks before changing code.
- [ ] Do not alter production or delete source assets before safe migration strategy is clear.

**Deliverable:** one concise discovery note and an implementation plan. Then proceed with the code changes, rather than waiting indefinitely for more instructions.

### Phase 1 — Foundation

- [ ] Create/adapt Next.js + strict TypeScript + Tailwind design foundation appropriate for deployment.
- [ ] Load original logo and implement Header, Footer, MobileMenu, global typography, tokens, focus styles.
- [ ] Add central typed project data; validate all five routes and correct category definitions.
- [ ] Set metadata, responsive image strategy, fonts and accessible primitives.

**Acceptance:** basic routed pages render, logo is unchanged, all five projects exist in data, no critical TS/build errors.

### Phase 2 — Signature homepage

- [ ] Build art-directed responsive hero with actual or truthful editorial visuals.
- [ ] Implement interactive five-project stage with focus/keyboard/touch support.
- [ ] Build Worlds/Tools section, process section, credible recognition and closing CTA.
- [ ] Add purposeful Motion polish and reduced-motion fallback.

**Acceptance:** home feels custom-designed, all five projects can be discovered, mobile is independently polished, no inaccessible interactions.

### Phase 3 — Projects and editorial pages

- [ ] Projects index with filters and distinct card rhythms.
- [ ] Five project pages with accurate summaries and authentic media.
- [ ] Studio page with restrained founder story and correctly attributed recognition.
- [ ] Contact page with verified functional email/links.
- [ ] Styled not-found page and no broken internal routes.

**Acceptance:** complete path from home → index → each project → contact; no invented releases or functional claims.

### Phase 4 — Polish, optimization, verification

- [ ] Check responsive design across target widths.
- [ ] Run TypeScript, lint, production build and tests.
- [ ] Test reduced motion and keyboard flows.
- [ ] Optimize fonts, images, video loading and client bundles.
- [ ] Review SEO/social preview and link integrity.
- [ ] Verify color contrast, accessible labels, alt text, lightbox and mobile navigation.
- [ ] Compare the existing logo asset and rendered logo visually against original.
- [ ] Inspect actual rendered result with local browser screenshots where available and refine layout/spacing; do not declare visual quality from a build-only check.
- [ ] Provide handoff report with commands, changed files, verified interactions, and remaining owner decisions.

**Acceptance:** site builds and behaves correctly, meets the checklist below, and is ready for owner review; **do not auto-deploy**.

---

## 19. Testing scenarios

At a minimum, run or manually validate these scenarios:

1. `/`, `/projects`, `/studio`, `/contact`, and all five `/projects/<slug>` pages load without console exceptions.
2. The exact existing logo appears in header and links to `/`.
3. Selecting every project in the featured stage changes the expected image/title/description/CTA together.
4. Featured stage works with keyboard and touch, not only pointer hover.
5. `All`, `Games`, `Tools`, and `Featured Academic` filters return the correct set and support repeat clicks.
6. Every project detail page contains unique real content, accessible headings, and working next-project navigation.
7. Existing BØTHUN and ALKUT trailer links and Knight GitHub link function if accessible; otherwise visibly handled.
8. Mobile menu opens/closes, maintains correct focus behavior, and closes on route selection/Escape.
9. Media lightbox handles Escape, focus, image description, and next/previous navigation when multiple images exist.
10. No decorative motion interferes with content under `prefers-reduced-motion: reduce`.
11. No horizontal overflow at 360px and all primary actions are discoverable at touch sizes.
12. External links are valid, no `href="#"` dummy CTAs, no fake contact success UI.
13. All five pages generate meaningful title/description/social metadata and have no invented launch claims.
14. Static export or actual hosting build method works with nested project routes.
15. No false social proof and no misrepresentation of the Bilkent Cyberpark acceptance or CTIS award.

---

## 20. Definition of done

The work is complete only if:

- [ ] **Abyrax Studio**, not an individual CV, is unmistakably the site's identity.
- [ ] **Original logo is preserved exactly.**
- [ ] **BØTHUN, ALKUT, Amelos, Seshat, and Knight of the Alliance** are all included with dedicated, informative pages.
- [ ] The **Worlds + Tools** positioning is clear within the first viewport and throughout the site.
- [ ] Design is custom, cinematic and editorial, not a basic template or static HTML/CSS portfolio.
- [ ] Signature project stage and filters are interactive, responsive, accessible and working.
- [ ] Existing genuine project posters/trailers/source links are responsibly reused.
- [ ] No fabricated product features, AI integrations, institutional partnerships, traction or registrations.
- [ ] Performance and accessibility are measured; significant issues are fixed or reported.
- [ ] Build/typecheck/lint/testing evidence is provided honestly.
- [ ] No new paid services, secret keys, or unauthorized live deployments are introduced.
- [ ] Owner receives a clean summary of what was changed, commands to run, and which project materials still need to be supplied.

---

## 21. Final instruction to the agent

**Act as a senior product designer, creative director, and frontend architect executing one cohesive vision.** Do not treat this specification as a menu of random visual effects. Keep everything grounded in the real identity of Abyrax Studio: original games, useful creative tools, strong visual worldbuilding, and independent technical craftsmanship.

Your goal is a website that could credibly introduce Abyrax Studio to players, creators, prospective collaborators, and startup-program reviewers. The user should feel they have encountered a distinctive creative studio—not an over-designed resume and not a generic template.

**Inspect → plan briefly → build completely → visually verify → optimize → report.**
