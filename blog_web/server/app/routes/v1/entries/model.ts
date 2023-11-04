import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { IEntryModel } from "../../../types";

const option = {
  timestamps: true,
};

const schema = new Schema<IEntryModel>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: RESOURCE.USERS,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default model(RESOURCE.ENTRIES, schema);
