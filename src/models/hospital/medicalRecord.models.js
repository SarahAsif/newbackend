import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const medicalRecord = mongoose.model(
  "medicalRecord",
  medicalRecordSchema
);
