import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Loan } from "./Loan";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  code!: string;

  @Column()
  program!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  phone!: string;

  @Column({ default: "student" })
  role!: string;

  @Column({ default: true })
  active!: boolean;

  @OneToMany(() => Loan, (loan) => loan.user)
  loans!: Loan[];
}
