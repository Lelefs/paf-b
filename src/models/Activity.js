const { Schema, model } = require('mongoose');

const ActivitySchema = new Schema(
  {
    activity: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: new Date(),
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Activity', ActivitySchema);
