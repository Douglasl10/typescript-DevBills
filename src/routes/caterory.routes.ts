import type { FastifyInstance } from "fastify";
import { getCategories } from "../controllers/category.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const categoryRoutes = async (fastify: FastifyInstance): Promise<void> => {
	fastify.get("/", getCategories);
	fastify.addHook("preHandler", authMiddleware);
};

export default categoryRoutes;
