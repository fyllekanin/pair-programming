import { NextFunction, Response } from 'express';
import { InternalRequest } from '../../utilities/internal.request';
import { verify } from 'jsonwebtoken';

const TOKEN_SECRET = 'a95d8e70bf0b967df0c7e2a58981c388d9e19de834ff536097130ece404e86351ddd946a048fa0276ce6f0054e417ed67a87e053599d0b5942662ba6a1231f66';

export async function INITIAL_MIDDLEWARE (req: InternalRequest, res: Response, next: NextFunction) {
    const authHeader = req.header('authorization');
    const token = authHeader ? authHeader.split(' ')[1] : null;

    if (!token) {
        req.user = {
            _id: null,
            token: null
        };
        next();
        return;
    }
    const user = verify(token, TOKEN_SECRET) as { _id: string };

    if (!user) {
        req.user = {
            _id: null,
            token: token
        };
        next();
        return;
    }
    req.user = {
        _id: user._id,
        token: token
    };
    next();
}
