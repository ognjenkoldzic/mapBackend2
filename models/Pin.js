import mongoose from "mongoose";

const PinSchema = new mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      //required: true,
      min: 3,
      max: 60,
    },
    type: {
      type: String,
      //required: true,
      min: 3,
      max: 60,
    },
    description: {
      type: String,
      //required: true,
      min: 3,
    },
    indoor: {
      type: Boolean,
    },
    public_access: {
      type: Boolean,
    },
    address: {
      type: String,
      //required: true, //really
      min: 3,
    },

    rating: {
      type: Number,
      //required: true, //really?
      min: 0,
      max: 5,
    },
    city: {
      type: String,
      //required: true,
      min: 3,
    },
    long: {
      type: Number,
      //required: true,
    },
    lat: {
      type: Number,
      //required: true,
    },
    // imgName:{
    //   type: String,
    //   //required: true,
    //   min: 3,

    // },
    // img: {
    //   data: Buffer,
    //   contentType: String,
    //},
    img_src: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
  },
  { timestamps: true }
);

const Pin = new mongoose.model("Pin", PinSchema);

export default Pin;
