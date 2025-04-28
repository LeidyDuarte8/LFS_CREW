import express from "express";
import { AppDataSource } from "./db/connection";
import bookRoutes from "./routes/book.routes";
import userRoutes from "./routes/user.routes";
import loanRoutes from "./routes/loan.routes";

const app = express();
app.use(express.json());

app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.use("/loans", loanRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log("Servidor corriendo en http://localhost:3000");
    });
  })
  .catch((err) => console.error(err));
