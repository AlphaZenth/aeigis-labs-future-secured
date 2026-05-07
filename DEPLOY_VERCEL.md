# Deploying to Vercel

This project is configured for Lovable Cloud (Cloudflare Workers) by default. To deploy on Vercel, follow these steps:

## 1. Install Nitro

```bash
bun add nitro
```

## 2. Replace `vite.config.ts`

Replace the contents of `vite.config.ts` with:

```ts
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { nitro } from 'nitro/vite';

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart(),
    nitro(),
    viteReact(),
  ],
});
```

## 3. Remove `wrangler.jsonc`

Delete the `wrangler.jsonc` file — it's only needed for Cloudflare.

## 4. Push to GitHub & Import in Vercel

1. Push your repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel will auto-detect TanStack Start + Nitro and deploy

## References

- [TanStack Start on Vercel](https://vercel.com/docs/frameworks/full-stack/tanstack-start)
- [Nitro Vercel Provider](https://v3.nitro.build/deploy/providers/vercel)
