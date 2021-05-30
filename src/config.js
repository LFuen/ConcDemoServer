module.exports = {
    PORT: process.env.PORT || 8000,
    JWT_SECRET: 's3cr3tKey',
    NODE_ENV: process.env.NODE_ENV || 'development',
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://democlient.vercel.app', // http://localhost:3000
    DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://ailpibpwyoagvx:ce282fd299e9832b41dc2717eec03331d9605866f4403d672cd6894e119516f2@ec2-54-160-96-70.compute-1.amazonaws.com:5432/d46dlro4856gj1",
}