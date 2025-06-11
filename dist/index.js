// server/index.ts
import { createServer } from "vite";
import path from "path";
async function startStaticSite() {
  const server = await createServer({
    server: {
      host: "0.0.0.0",
      port: 5e3
    },
    root: path.resolve(process.cwd(), "client"),
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "client", "src"),
        "@shared": path.resolve(process.cwd(), "shared"),
        "@assets": path.resolve(process.cwd(), "attached_assets")
      }
    }
  });
  await server.listen();
  console.log("\u2713 Static website running on http://0.0.0.0:5000");
}
startStaticSite().catch(console.error);
