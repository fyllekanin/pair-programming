import { Controller, Get } from '@overnightjs/core';
import { Response } from 'express';
import { InternalRequest } from '../utilities/internal.request';
import { StatusCodes } from 'http-status-codes';

@Controller('api/page')
export class PageControllerImpl {

    @Get('secret')
    async getSecret(req: InternalRequest, res: Response): Promise<void> {
        const isUserLoggedIn = req.user && req.user._id;
        res.status(StatusCodes.OK).json(isUserLoggedIn ? `You got access to this resource` : 'Forbidden ');
    }
}
