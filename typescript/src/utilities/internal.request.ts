import { Request } from 'express';

export interface InternalUser {
    _id: string;
    token: string;
}

export interface InternalRequest<T = void> extends Request {
    user: InternalUser;
    body: T;
}
