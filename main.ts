import { Application, config } from "@iki-dev/framework";
import { router } from "@iki-dev/framework/http";
import { CorsMiddleware } from "@iki-dev/framework/middleware/cors";
import { LoggerMiddleware } from "@iki-dev/framework/middleware/logger";
import "./http/routes.js";

const app = new Application();

// Create HTTP application
const httpApp = app.http();

// Add global middleware
httpApp.use(new CorsMiddleware());
httpApp.use(new LoggerMiddleware());

// Mount the router
httpApp.useRouter(router);

// Start the server using config
const port = config("app.port", 4649);
const appName = config("app.name", "Iki");

httpApp.listen(port, () => {
  console.log(`${appName} | [http://localhost:${port}]`);
});
