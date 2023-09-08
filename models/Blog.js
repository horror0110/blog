import mongoose from "mongoose";
import { Schema } from "mongoose";

const BlogSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
  detail: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
