import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017/url_shortener",
  {
    auth: {
      user: "root",
      password: "example",
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

const schema = new mongoose.Schema({
  foo: { type: String, required: true },
});

export const Foo = mongoose.model("foo", schema);

Foo.create(
  {
    foo: "What is up retards",
  },
  (err) => {
    if (err) return console.log(err.message);
    console.log("Created");
  }
);
