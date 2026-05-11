# AGENTS.md

## Overview

Example project for `@vpmedia/phixify`. Showcases four asset/manifest configurations (multi/single project × multi/single bundle) and how the produced bundles are consumed by Phaser v3 and Pixi.js v8 runtimes.

## Tech Stack

- **Language:** TypeScript (ESM)
- **Runtime:** Node.js / Browser
- **Package Manager:** pnpm (workspaces)
- **Domain:** Example project showcasing `@vpmedia/phixify` asset/manifest configurations
- **Game Engines:** `phaser` v3, `pixi.js` v8 (+ `@pixi/sound`)
- **Libs:** `fontfaceobserver`, `spectorjs` (WebGL inspector)
- **Asset Pipeline:** `@vpmedia/phixify`
- **Build/Dev Server:** Vite
- **Testing:** Vitest, @vitest/coverage-v8, jsdom
- **Lint/Format:** oxlint (+ `oxlint-tsgolint`), oxfmt
- **Type Checking:** TypeScript
- **Tooling:** lefthook (git hooks), commitlint (conventional commits)

## Commands

- **Install:** `pnpm install`
- **Dev server:** `pnpm start` (Vite, opens browser)
- **Build:** `pnpm build`
- **Preview build:** `pnpm preview`
- **Run all phixify examples:** `pnpm example-all` (or `example1`..`example4`)
- **Test:** `pnpm test`
- **Lint / Format / Typecheck:** `pnpm lint` / `pnpm format` / `pnpm typecheck`
- **All checks:** `pnpm check`

## Project Structure

- `src/index.html` — entry HTML
- `src/main.ts` — application entry point
- `src/phaser/`, `src/pixi/` — engine-specific demo code
- `src/style.css` — styles
- `config/` — phixify configuration variants (multi/single project & bundle)
- `public/` — static assets served as-is
- `types/` — local type augmentations
- `dist/` — Vite build output (gitignored)

## Conventions

- **Commits:** Conventional Commits with custom rules (header ≤ 100, body line ≤ 100, no sentence/start/pascal/upper-case subjects)
- **Modules:** ESM only
- **Style:** Enforced by oxlint + oxfmt

## Testing

- Vitest with coverage; configured to pass with no tests
- Place tests as `*.test.ts` co-located with source
