import { router } from "@iki-dev/framework/http/router";
import { statusController } from "./controllers/status.js";

router.get("/").handler(statusController, "index");
