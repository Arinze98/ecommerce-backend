module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/your-database-name',
  jwtSecret: process.env.JWT_SECRET || 'yourSecretKey'
};
