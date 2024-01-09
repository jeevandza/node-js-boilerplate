import mongoose from "mongoose";

function connectToDatabase() {
  try {
    const connect = mongoose
      .connect(process.env.MONGO_URI || '')
      .then(() => console.log("Connected to Database"));
  } catch (err: any) {
    throw new Error(err);
  }
}


export {
    connectToDatabase
}
