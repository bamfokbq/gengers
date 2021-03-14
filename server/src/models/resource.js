import mongoose from 'mongoose';
import User from './user.js';

const { Schema } = mongoose;

const resourceSchema = new Schema(
  {
    header: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    coverImage: {
      type: Buffer,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: User,
    },
  },
  { timestamps: true }
);

const Resource = mongoose.model(`Resource`, resourceSchema);
export default Resource;
