import app from "./app";
import { env } from "./config/env";
import initializeFirebaseAdmin from "./config/firebase";
import { prismaConnect } from "./config/prisma";
import { initializeGlobalCategories } from "./services/globalCategories.service";

const PORT = process.env.PORT || env.PORT || 3000;

initializeFirebaseAdmin();

const startServer = async () => {
	try {
		await prismaConnect();

		await initializeGlobalCategories();

		  await app.listen({ port: Number(PORT) });

    console.log(`🚀 Server is running on port ${PORT}`);
	} catch (error) {
		console.error("Error starting the server:", error);
	}
};

startServer();
