import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { IMemoryModel } from "../../../types";

const option = {
  timestamps: true,
};

const schema = new Schema<IMemoryModel>(
  {
    front: {
      type: String,
      required: true,
    },
    back: {
      type: String,
      required: true,
    },
    due: {
      type: Date,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default model(RESOURCE.Memories, schema);
