const isProduction = process.env.NODE_ENV === 'production';
export const DOMAIN = isProduction ? 'https://ttime.site' : 'http://localhost:3000';
