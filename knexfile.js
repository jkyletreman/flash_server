module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/flash'
  },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
  }
}
