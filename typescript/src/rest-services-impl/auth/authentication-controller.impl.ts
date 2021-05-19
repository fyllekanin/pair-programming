import { Controller, Get, Post } from '@overnightjs/core';
import { Response } from 'express';
import { InternalRequest } from '../../utilities/internal.request';
import { StatusCodes } from 'http-status-codes';

@Controller('api/auth')
export class AuthenticationControllerImpl {
    private static readonly TOKEN_SECRET = 'a95d8e70bf0b967df0c7e2a58981c388d9e19de834ff536097130ece404e86351ddd946a048fa0276ce6f0054e417ed67a87e053599d0b5942662ba6a1231f66';
    private static readonly LOGIN = {
        _id: 'objectId',
        username: 'test',
        password: '$2b$10$HUgXU.hI923Bqhz5FXvHyu12A/VQKciByRdoypUJHUPQZiGAFqmFe'
    };

    @Post('login')
    async doLogin (req: InternalRequest, res: Response): Promise<void> {
        res.status(StatusCodes.OK).json({
            token: null
        });
    }
}
