import { Request, Response, NextFunction } from 'express';

export const i18nMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Use res.locals instead of req (no TypeScript issues)
  const lang = (req.query.lang as string) || 
    (req.headers['accept-language']?.includes('de') ? 'de' : 'en') || 'en';
  const currency = (req.query.currency as string) || 'EUR';
  
  (res.locals as any).lang = lang;
  (res.locals as any).currency = currency;
  (res.locals as any).t = (key: string) => key; // Simplified for now
  
  next();
};
