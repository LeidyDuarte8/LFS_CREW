import "reflect-metadata";
import { DataSource } from "typeorm";
import { Book } from "../entities/Book";
import { User } from "../entities/User";
import { Loan } from "../entities/Loan";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "library.db",
  synchronize: true,
  logging: false,
  entities: [Book, User, Loan],
});
