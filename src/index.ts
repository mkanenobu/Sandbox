import express from "express";
import { routes } from "./routes";
import { requestLogger } from "./Helpers/logger";

const port = process.env.PORT ?? 8080;

const app = express();

app.use(requestLogger);

// map routes
Object.entries(routes).forEach(([path, { handler, method }]) => {
  app[method](path, handler);
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
