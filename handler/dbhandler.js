// Connect to MongoDB
async function connectDB() {
    try {
      // Use the latest Mongoose connection method (without deprecated options)
      await mongoose.connect('mongodb://10.12.10.24:27017/jul_kalender');
      console.log('Connected to MongoDB');

    } catch (error) {
      console.error('MongoDB connection failed:', error);
      process.exit(1);
    }
    connect
  }

module.exports={
    connectDB
};