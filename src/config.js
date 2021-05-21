module.exports = {
    PORT: process.env.PORT || 8000,
    JWT_SECRET: 'secretkey',
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://phalanx-client.vercel.app', // https://concretti-application.vercel.app/
    DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgresql://dundermiffling:1Pepperm%40n@localhost/phalanx",
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL || ''
}