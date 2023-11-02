import service from "./service.js";

import { transaction, generateAccess } from "../../../utils/index.js";
import { startSession, ClientSession } from "mongoose";
import { Request, Response } from "express";

const getAll = async (_req: Request, _res: Response) => {
  const data = await service.getAll();
  _res.send({
    data,
    status: "success",
    message: "Get customer success",
    meta: {
      access: generateAccess({}),
    },
  });
};

const getById = async (_req: Request, _res: Response) => {
  const { id } = _req.params;
  const data = await service.getById(id);

  if (!data) {
    _res.send({
      data: [],
      status: "failed",
      message: "Get customer fail",
      meta: {
        access: generateAccess({}),
      },
    });
  }

  _res.send({
    data: [data],
    status: "success",
    message: "Get customer success",
    meta: {
      access: generateAccess({}),
    },
  });
};
const add = async (_req: Request, _res: Response) => {
  const session: ClientSession = await startSession();
  const { email, password, ...res } = _req.body;
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.add({ ..._req.body }, session);
      },
      "Create customer"
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
      "Update customer"
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
      "Delete customer"
    )
  );
};

export { getAll, getById, add, update, removeOne };
