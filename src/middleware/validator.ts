import { Request, Response, NextFunction } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'];
    const STATIC_API_KEY = 'my-static-api-key'; // Hardcoded API key

    if (apiKey === STATIC_API_KEY) {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }
};