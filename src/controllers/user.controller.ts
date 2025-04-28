import { Request, Response } from "express";
import { AppDataSource } from "../db/connection";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(User);
  const user = repo.create(req.body);
  await repo.save(user);
  res.status(201).json(user);
};

export const getUsers = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(User);
  const users = await repo.find();
  res.json(users);
};
