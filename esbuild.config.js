import { build } from "esbuild";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDev = process.env.NODE_ENV === "development";

const baseConfig = {
  bundle: true,
  format: "esm",
  target: "node18",
  platform: "node",
  external: ["better-sqlite3"],
};

// Development configuration
const devConfig = {
  ...baseConfig,
  minify: false,
  sourcemap: true,
  define: {
    "process.env.NODE_ENV": '"development"',
  },
};

// Production configuration
const prodConfig = {
  ...baseConfig,
  minify: true,
  sourcemap: false,
  define: {
    "process.env.NODE_ENV": '"production"',
  },
};

export const buildApp = () => {
  const config = isDev ? devConfig : prodConfig;

  return build({
    ...config,
    entryPoints: [resolve(__dirname, "main.ts")],
    outfile: "dist/main.bundle.js",
  });
};

// Default export for npm scripts
export default buildApp;
