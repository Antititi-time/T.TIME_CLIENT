const isProduction = process.env.NODE_ENV === 'production';
export const DOMAIN = isProduction ? 'https://tttime.store' : 'http://localhost:3000';
