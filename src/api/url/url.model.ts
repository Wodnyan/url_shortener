import { Schema, model, Document } from "mongoose";

interface Url extends Document {
  url: string;
  url_id?: string;
}

const UrlSchema = new Schema({
  url: { type: String, required: true, maxLength: 2000, minlength: 2 },
  url_id: {
    type: Schema.Types.String,
    maxLength: 10,
    unique: true,
  },
});

const Url = model<Url>("url", UrlSchema);

export default Url;
