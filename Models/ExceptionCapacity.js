const mongoose = require("mongoose");

const ExceptionCapacitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "name is required"],
      trime: true,
      // unique: [true, "This Name has been used"],
    },
    capicity: {
      type: Number,
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    WeekDay: {
      type: String,
    },
    sans: {
      item: [
        {
          StartTime: {
            type: Number,
            enum: [8, 10, 12],
          },
          EndTime: {
            type: Number,
            enum: [10, 12, 14],
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const EXCEPTION = mongoose.model("Exception", ExceptionCapacitySchema);
module.exports = EXCEPTION;
