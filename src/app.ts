import cors from "@fastify/cors";
import fastify from "fastify";
import type { FastifyInstance } from "fastify";
import { env } from "./config/env";
import routes from "./routes";

const app: FastifyInstance = fastify({
	logger: {
		level: env.NODE_ENV === "dev" ? "info" : "error",
	},
});

app.register(cors, {
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
	origin: true,
});

app.register(routes, { prefix: "/api" });

export default app;
