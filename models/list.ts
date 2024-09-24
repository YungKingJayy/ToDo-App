import mongoose, { Schema } from "mongoose";

const listSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isDone: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const List = mongoose.models.List || mongoose.model("List", listSchema);

export default List;
