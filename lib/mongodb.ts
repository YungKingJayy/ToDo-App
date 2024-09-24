import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if (process.env.MONGODB_URL) {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connected to MongoDB");
    } else {
      console.log("MONGODB_URL is not defined");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;