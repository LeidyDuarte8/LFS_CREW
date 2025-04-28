import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Book } from "./Book";

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.loans)
  user!: User;

  @ManyToOne(() => Book, (book) => book.loans)
  book!: Book;

  @Column({ type: "date" })
  loanDate!: string;

  @Column({ type: "date" })
  returnDate!: string;

  @Column({ default: false })
  returned!: boolean;

  @Column({ default: 0 })
  fine!: number;
}
