import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const ROUTES_ROOT_DIR = path.resolve(__dirname);

export async function configRoutes(server) {
    const CONTEXT = process.env.CONTEXT;
    let files = await fs.readdir(ROUTES_ROOT_DIR);

    // Excluindo o arquivo atual
    files = files.filter(current => current !== path.basename(__filename));

    for (const file of files) {
        const { default: route } = await import(path.join(ROUTES_ROOT_DIR, file));
        const { path: routePath, routes } = route;
        server.use(`${CONTEXT}${routePath}`, routes);
    }
}
