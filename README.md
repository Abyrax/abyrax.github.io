# Abyrax Studio

A statically exported Next.js / React / TypeScript site for `abyrax.com`, styled with Tailwind CSS and local Space Grotesk / DM Sans fonts. Project content lives in `src/content/projects.ts`.

## Local development

Use Node.js 24 LTS and npm. The implementation was also verified with the workspace's Node 23 runtime, though some lint dependencies warn that this unsupported Node release is outside their engine range.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:3000`. To validate the production output:

```sh
npm run lint
npm run build
npm run typecheck
python3 -m http.server 3001 --bind 127.0.0.1 --directory out
```

The build produces `out/`, with all five project routes, Studio, Contact, metadata, sitemap, robots, and `404.html`. The simple Python preview serves normal nested routes but does not automatically use the branded 404 for missing URLs; inspect `/404.html` or use the Next development preview for that behavior.

## Assets and content

The original logo, project media, domain file, and license are preserved. `public/brand/logo.png` is byte-identical to `assets/images/minilogo.png`. Fonts are bundled locally; builds do not fetch Google Fonts. To regenerate project WebP derivatives from the original posters, run `npm run optimize:images`.

The former portfolio's HTML, CSS, and JavaScript are archived under `archive/portfolio/` for recovery and are excluded from the exported site. Original images remain under `assets/images/`; only selected optimized media is published.

Amelos and Seshat use labeled editorial concept illustrations. Their features are described as explorations, with unverified statuses and technology claims omitted. See `src/content/verification-notes.md` for remaining content and media checks. No analytics, external embeds, contact backend, or API keys are included.

## GitHub Pages

The custom domain remains `abyrax.com`. The source repository now requires a build; do not publish the repository root as a static site. Before deploying, verify the repository's Pages settings, select GitHub Actions as the publishing source, and preserve its custom-domain setting.

`.github/workflows/pages.yml` provides a **manual-only** build and deployment workflow using Node 24. Running “Publish Abyrax Studio” publishes `out/` to GitHub Pages. It does not run on pushes or pull requests. No remote settings, commits, pushes, or deployments were performed during implementation.

## Verification

Verified on 2026-10-08:

- Production build, strict TypeScript, and lint pass.
- All nine content routes have static HTML, unique headings, descriptions, canonical URLs, and sharing metadata. Internal exported links resolve; the logo is byte-identical to its original.
- All five stage selections, keyboard activation, previous/next wrapping, filter counts, repeated filter selection, and browser Back/Forward were checked.
- Mobile menu focus boundaries, Escape, focus return, scroll lock, and route dismissal were checked.
- Homepage and index have no horizontal overflow at 360, 375, 390, 430, 768, 1024, 1440, and 1920px. All five detail pages plus Studio and Contact were also checked at 360px.
- Production browser logs showed no console errors. Both trailer URLs resolve through YouTube's public metadata endpoint; playback was not tested.
- The projects index also scores 100 for accessibility. Its logo-link label/name audit passes after adding explicit spacing between the visible brand words.

Lighthouse 13.5.0 was run against the production export on a local gzip-capable static server, matching the verified live host's compression. Default simulated mobile throttling used a 412×823 viewport and 4× CPU slowdown; desktop used the standard desktop preset.

| Homepage audit | Mobile | Desktop |
| -------------- | ------ | ------- |
| Performance    | 92     | 100     |
| Accessibility  | 100    | 100     |
| Best practices | 100    | 100     |
| SEO            | 100    | 100     |
| LCP            | 3.3 s  | 0.6 s   |
| CLS            | 0      | 0       |

The uncompressed Python server scores lower on mobile (79), so its results are not representative of gzip delivery. These are lab results, not field Core Web Vitals; mobile lab LCP still exceeds the 2.5-second field goal. Reduced-motion CSS and Motion preference handling were reviewed, but OS preference emulation and physical touch swiping were not exercised. No new test framework or stored test suite was added. The Pages workflow is prepared but has not been run remotely.

`npm audit --omit=dev` reports zero vulnerabilities. The full advisory check currently reports five development-only findings in the Next ESLint plugin's glob dependency chain; the image optimizer uses patched sharp 0.35.5. Do not apply npm's suggested downgrade to an older Next ESLint configuration without reviewing compatibility.
