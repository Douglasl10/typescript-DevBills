import type { FastifyInstance } from "fastify";
import categoryRoutes from "./caterory.routes";
import transactionRoutes from "./transaction.routes";

async function routes(fastify: FastifyInstance): Promise<void> {
	fastify.get("/health", async () => {
		return {
			status: "OK",
			message: "Server is running",
		};
	});

	fastify.register(categoryRoutes, { prefix: "/categories" });
	fastify.register(transactionRoutes);
}

export default routes;
