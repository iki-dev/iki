import { HttpStatus, Response, response } from "@iki-dev/framework";

class StatusController {
  public async index(): Promise<Response> {
    return response(HttpStatus.OK).json({
      name: "いき (Iki)",
      tagline: "Code with calm.",
      version: "0.1.0",
      uptime: process.uptime(),
      env: process.env.NODE_ENV,
      links: {
        documentation: "https://iki.dev/latest",
        github: "https://github.com/iki-dev/framework",
        discord: "https://discord.gg/iki-dev",
      },
    });
  }
}

export const statusController = new StatusController();
