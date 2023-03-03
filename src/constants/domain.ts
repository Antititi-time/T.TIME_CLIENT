const isProduction = process.env.NODE_ENV === 'production';
export const DOMAIN = isProduction ? 'https://t-time.vercel.app/' : 'http://localhost:3000';
