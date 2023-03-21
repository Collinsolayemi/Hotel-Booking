const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: String,
    },
    desc: {
      type: Number,
      required: true,
    },
    roomsNumber: [{ number: Number, unavailableDate: { type: [Dates] } }],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Room', RoomSchema);
