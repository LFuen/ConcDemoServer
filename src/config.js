module.exports = {
    PORT: process.env.PORT || 8000,
    JWT_SECRET: 's3cr3tKey',
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000', //'https://democlient.vercel.app/',  
    DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://concretti:concrettiDB24@concretti-db.cqlz5glh6vqe.us-east-1.rds.amazonaws.com:5432/concretti-db",
}