import { Request, Response } from "express";
import { AppDataSource } from "../db/connection";
import { Loan } from "../entities/Loan";
import { User } from "../entities/User";
import { Book } from "../entities/Book";

export const createLoan = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Loan);
  const userRepo = AppDataSource.getRepository(User);
  const bookRepo = AppDataSource.getRepository(Book);

  const user = await userRepo.findOneBy({ id: req.body.userId });
  const book = await bookRepo.findOneBy({ id: req.body.bookId });

  if (!user || !book)
    return res.status(404).json({ error: "User or book not found" });

  const loan = repo.create({
    user,
    book,
    loanDate: req.body.loanDate,
    returnDate: req.body.returnDate,
    returned: false,
    fine: 0,
  });
  await repo.save(loan);
  res.status(201).json(loan);
};

export const getLoans = async (_req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Loan);
  const loans = await repo.find({ relations: ["user", "book"] });
  res.json(loans);
};

export const updateLoan = async (req: Request, res: Response) => {
  const repo = AppDataSource.getRepository(Loan);
  await repo.update(req.params.id, req.body);
  const updated = await repo.findOne({
    where: { id: Number(req.params.id) },
    relations: ["user", "book"],
  });
  res.json(updated);
};
