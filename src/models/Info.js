const { Schema, model } = require('mongoose');

const InfoSchema = new Schema(
  {
    date: {
      type: Date,
      default: new Date(),
    },
    height: Number,
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    weight: Number,
  },
  {
    timestamps: true,
  },
);

module.exports = model('Info', InfoSchema);
