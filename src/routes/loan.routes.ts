import { Router } from "express";
import {
  createLoan,
  getLoans,
  updateLoan,
} from "../controllers/loan.controller";
const router = Router();

/* router.post("/", createLoan); */
router.get("/", getLoans);
router.put("/:id", updateLoan);

export default router;
