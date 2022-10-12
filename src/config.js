
require('dotenv').config()

const config = {
    port: process.env.PORT || 8000,
    nodeEnv: process.env.NODE_ENV ||'development',
    db:  {
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'postgress' ,
        password: process.env.DB_PASS || 'Nievelina2505' ,
        host: process.env.DB_HOST || 'Localhost',
        name: process.env.DB_NAME || 'movies_crud',
    }
}

module.exports = config;