import { router } from "@iki-dev/framework/http/router";
import { helloWorld } from "./handlers/hello-world.js";

router.get("/", helloWorld());
