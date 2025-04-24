import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
    hospitalHours: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Doctor = mongoose.model("Doctor", doctorSchema);
