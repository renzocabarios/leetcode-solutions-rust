import service from "./service.js";
import { transaction, generateAccess } from "../../../utils/index.js";
import { startSession, ClientSession } from "mongoose";
import users from "../users/service.js";
import { Request, Response } from "express";

const getAll = async (_req: Request, _res: Response) => {
  const data = await service.getAll();
  _res.send({
    data,
    status: "success",
    message: "Get entry success",
    meta: {
      access: generateAccess({}),
    },
  });
};

const add = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  _res.send(
    await transaction(
      session,
      async () => {
        const temp = await service.add({ ..._req.body }, session);
        await users.update(
          { _id: _req.body.user },
          {
            $push: {
              entries: temp[0]._id,
            },
          },
          session
        );

        return temp;
      },
      "Create entry"
    )
  );
};

const update = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  const { id } = _req.params;
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.update({ _id: id }, _req.body, session);
      },
      "Update entry"
    )
  );
};

const removeOne = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();

  const { id } = _req.params;
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.removeOne({ _id: id }, session);
      },
      "Delete entry"
    )
  );
};

export { getAll, add, update, removeOne };
