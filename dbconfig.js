
const config = {
    server: 'LAPTOP-TL3GVNP6\\SQLEXPRESS',
    database: 'Products',
    driver: 'msnodesqlv8',

    options: {
        trustedConnection: true,
        enableArithPort: true,
        // instancename: 'LAPTOP-TL3GVNP6\\SQLEXPRESS',

    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 3000,
    },
    port : 1433,
}

module.exports = config;