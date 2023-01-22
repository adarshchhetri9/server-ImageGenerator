import express from "express";
import * as dotenv from "dotenv";
import cros from "cors";

import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cros());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Backend Starting");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error );
  }
};

startServer();
