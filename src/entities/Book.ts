import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Loan } from "./Loan";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: string;

  @Column()
  year!: number;

  @Column()
  publisher!: string;

  @Column()
  type!: string;

  @Column({ nullable: true })
  photo!: string;

  @Column({ default: 1 })
  copies!: number;

  @OneToMany(() => Loan, (loan) => loan.book)
  loans!: Loan[];
}
