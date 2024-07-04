import * as esbuild from "esbuild";

const config = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  format: "esm",
  outfile: "dist/index.js",
  external: ["@nillion/client-wasm", "debug", "crypto"],
  logLevel: "info",
};

if (process.argv.includes("--watch")) {
  const ctx = await esbuild.context(config);
  await ctx.watch();
} else {
  await esbuild.build(config);
}
