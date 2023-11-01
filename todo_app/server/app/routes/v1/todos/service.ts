import model from "./model.js";
import { ClientSession } from "mongoose";

async function getAll() {
  return await model.find({ deleted: false });
}

async function getById(_id: string) {
  return await model.findOne({ _id, deleted: false });
}

async function add(_body: any, session: ClientSession) {
  return await model.create([_body], { session });
}

async function update(filter: any, _body: any, session: ClientSession) {
  return await model.findOneAndUpdate(filter, _body, { new: true, session });
}

async function removeOne(filter: any, session: ClientSession) {
  return await model.findOneAndUpdate(
    filter,
    { deleted: true },
    { new: true, session }
  );
}

export default { getAll, getById, add, update, removeOne };
