import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes'
import swaggerFile from "./swagger.json";

class App {
    constructor() {
        this.server = express();

        this.swagger();
        this.routes();
    }

    routes() {
        this.server.use(routes);
    }

    swagger() {
        this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    }
}

export default new App().server;