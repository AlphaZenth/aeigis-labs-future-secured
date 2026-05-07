import { cp, rm } from "node:fs/promises";

if (process.env.VERCEL === "1") {
  await rm("public/.vercel", { recursive: true, force: true });
  await cp(".vercel/output", "public/.vercel/output", { recursive: true });
}