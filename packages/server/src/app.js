import './bootstrap';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes'
import swaggerFile from "./swagger.json";
import cors from 'cors';

/**
 * Config database
 */
import './database'

class App {
    constructor() {
        this.server = express();

        this.swagger();
        this.middlewares();
        this.routes();
    }

    routes() {
        this.server.use(routes);
    }

    swagger() {
        this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    }

    middlewares() {
        // this.server.use(cors());
        this.server.use(express.json());
    }
}

export default new App().server;