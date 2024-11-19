

// Connect to MongoDB
async function connectDB() {
    try {
      // Use the latest Mongoose connection method (without deprecated options)
      await mongoose.connect('mongodb://localhost:27017/mydatabase');
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection failed:', error);
      process.exit(1);
    }
  }

module.exports={
    connectDB
};