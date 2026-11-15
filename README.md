# Erika Carvalho Design System

## Repositories

- **v1 legacy source:** https://github.com/erikacarvalh0/erikacarvalho-ds-v1
- **v2 evolution:** this repository, preserving selected v1 source files for migration alongside a modern React package.

> This is a source migration, not a Git mirror. Original commit history, tags and generated assets remain in the v1 repository.

## React v2 package

Located in `packages/react`, package name `@erikacarvalho/react`. Initial exported components: `Button`, `Card`, `Input`, `Select`. These typed primitives are intended for use by EC Finance and future React apps.

```bash
yarn install
yarn build:react-library
```

The package is not published yet. The existing `workspaces/react`, Vue and Svelte sources are available for incremental migration. Current v2 components use native HTML semantics, typed props, explicit styling variants and CSS design tokens.

## Git conventions

Use the established Conventional Commits + Gitmoji shortcode style:

```text
feat(react): :sparkles: add reusable button
fix(react): :bug: fix input focus handling
chore(ci): :wrench: validate component library
```

## Next steps

Add component tests, Storybook, package release automation, and integrate `@erikacarvalho/react` into EC Finance after validation.
