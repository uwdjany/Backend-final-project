import mongoose from "mongoose";

// Schema of Application

const AppySchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phoneNumber: String,

    yourProvence: [String],
    residenceProvence: [String],

    gender: {
      type: String,
      enum: ["male", "female", "others"],
    },

    educationQualification: [String],
    doYouHaveExperienceWithSoftwareDevelopment: {
      type: String,
      enum: ["yes", "no"],
    },
    ifYesHowManyHoursDoYouspendCoding: String,
    doYouHaveGitHubAccount: {
      type: String,
      enum: ["yes", "no"],
    },
    ifYesPleaseIncludeYourGitHubLink: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const apply = mongoose.model("ApplicationDb", AppySchema);

export default apply;
