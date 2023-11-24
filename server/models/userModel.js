import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
    unique: true,
  },
  available: {
    type: Boolean,
    required: [true, "User availability is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const User = new mongoose.model("User", userSchema);

export default User;
