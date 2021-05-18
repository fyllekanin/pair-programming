import 'reflect-metadata';
import { Server } from '@overnightjs/core';
import { AuthenticationControllerImpl } from './rest-services-impl/auth/authentication-controller.impl';
import { INITIAL_MIDDLEWARE } from './rest-services-impl/middlewares/initial.middleware';
import * as express from 'express';
import compression from 'compression';
import { PageControllerImpl } from './rest-services-impl/page-controller.impl';

class MainServer extends Server {

    constructor () {
        super();
        this.app.use(express.json());
        this.app.use(compression());
        this.app.use('/', express.static(__dirname + '/public'));
    }

    start (port: number): void {
        this.setupControllers();
        this.app.get('/*', (req, res) => {
            res.sendFile(__dirname + '/public/index.html');
        });
        this.app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    }

    private setupControllers (): void {
        super.addControllers(
            [
                new AuthenticationControllerImpl(),
                new PageControllerImpl()
            ],
            null,
            INITIAL_MIDDLEWARE
        );
    }
}

const server = new MainServer();
server.start(3000);
