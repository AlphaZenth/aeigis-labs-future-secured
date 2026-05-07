# Deploying to Vercel

This project is configured to build correctly in both Lovable and Vercel. Vercel is detected automatically through the `VERCEL=1` environment variable and uses Nitro's `vercel` preset.

## Deploy

1. Push your repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel will run `bun install` and `bun run build` from `vercel.json`
5. Nitro will generate `.vercel/output`, which Vercel serves directly

## References

- [TanStack Start on Vercel](https://vercel.com/docs/frameworks/full-stack/tanstack-start)
- [Nitro Vercel Provider](https://v3.nitro.build/deploy/providers/vercel)
