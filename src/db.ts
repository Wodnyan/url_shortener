import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default function connectToDb() {
  mongoose.connect(
    `mongodb://localhost:27017/${process.env.MONGO_DB}`,
    {
      auth: {
        user: process.env.MONGO_USER!,
        password: process.env.MONGO_PW!,
      },
      authSource: "admin",
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (err) => {
      if (err) console.log(err);
      console.log("Connected to Db");
    }
  );
}
