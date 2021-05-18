import { NextFunction, Response } from 'express';
import { InternalRequest } from '../../utilities/internal.request';
import { verify } from 'jsonwebtoken';

export const INITIAL_MIDDLEWARE = async (req: InternalRequest, res: Response, next: NextFunction) => {
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
    const user = verify(token, process.env.TOKEN_SECRET) as { _id: string };

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
};
