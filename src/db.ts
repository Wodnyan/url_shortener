import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default function connectToDb() {
  const { MONGO_USER, MONGO_PW, MONGO_DB } = process.env;
  mongoose.connect(
    `mongodb+srv://${MONGO_USER}:${MONGO_PW}@my-cluster.jv3bc.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) return console.log("Failed to connect to databse", error);
      console.log("Connected to DB");
    }
  );
}
