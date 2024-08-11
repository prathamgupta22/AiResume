import Resume from "../models/resumeModel.js";
import { v4 as uuidv4 } from "uuid";

export const createResume = async (req, res) => {
  try {
    const { title, userEmail, userName } = req.body;

    if (!title || !userEmail || !userName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Example email validation function (you can import this from a utility file)
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!validateEmail(userEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const resumeId = uuidv4();
    const newResume = new Resume({
      title,
      resumeId,
      userEmail,
      userName,
    });

    const savedResume = await newResume.save();
    res.status(201).json({ documentId: savedResume._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
