import express from "express";
import cors from 'cors';
import "dotenv/config";
import { roleRoute, userRoute } from "@Routes/index.ts";
import { connectToDatabase } from "@Database";
import { Logger} from '@Utils'

connectToDatabase();

const PORT = process.env.PORT || 3030;
const app = express();
app.use(cors());

app.use("/", userRoute());
app.use("/", roleRoute());

app.listen(PORT, () => {
  console.log(`Server listing at ${PORT}`);
  Logger.info('g')
});
