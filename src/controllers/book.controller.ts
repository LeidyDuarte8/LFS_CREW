import { Request, Response } from "express";
import { AppDataSource } from "../db/connection";
import { Book } from "../entities/Book";

export const createBook = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Book);
  const book = repo.create(req.body);
  await repo.save(book);
  res.status(201).json(book);
};

export const getBooks = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Book);
  const books = await repo.find();
  res.json(books);
};

export const updateBook = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Book);
  await repo.update(req.params.id, req.body);
  const updated = await repo.findOneBy({ id: Number(req.params.id) });
  res.json(updated);
};

export const deleteBook = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Book);
  await repo.delete(req.params.id);
  res.status(204).send();
};
