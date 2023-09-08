import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
  
    password: {
      type: String,
      required: true,
    },
    email: {
      type:String,
      required: true,
      unique:true,
      match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },

  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model("User", userSchema);