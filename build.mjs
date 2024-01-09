import * as esbuild from "esbuild";
import 'dotenv/config';


let ctx;

try {
  ctx = await esbuild.context({
    entryPoints: ["src/app.ts"],
    bundle: true,
    sourcemap: true,
    minify: false,
    platform: "node",
    target: ["node18.17.0"],
    packages: "external",
    tsconfig: './tsconfig.json',
    define: {
      "process.env.NODE_ENV": "'development'",
      "process.env.MONGO_URI":"process.env.MONGO_URI",
      "process.env.PORT": "process.env.PORT"
    },

    outfile: "dist/app.cjs",
  });

  await ctx.watch();
  console.log("Watching server...");
} catch (error) {
  console.error("An error occurred:", error);
  process.exit(1);
}

