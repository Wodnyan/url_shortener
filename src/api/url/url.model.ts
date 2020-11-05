import { Schema, model } from "mongoose";

const UrlSchema = new Schema({
  url: { type: String, required: true, maxLength: 2000, minlength: 2 },
  url_id: {
    type: Schema.Types.String,
    maxLength: 10,
    unique: true,
  },
});

const Url = model("url", UrlSchema);

export default Url;
