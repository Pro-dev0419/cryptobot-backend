import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const JobSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    identify_img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.set("useCreateIndex", true);
JobSchema.plugin(uniqueValidator);

export default mongoose.model("KycVerification", JobSchema);