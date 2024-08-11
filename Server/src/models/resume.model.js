import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    resumeId: {
      type: String,
      required: true,
      unique: true,
    },
    userEmail: {
      type: String,
      required: [true, "Email is required"],
    },
    userName: {
      type: String,
      required: [true, "username is required"],
    },
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
