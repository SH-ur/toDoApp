import "reflect-metadata";
import { AppDataSource } from "./db";
import app from "./app";

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(3000, ()=>{
      console.log("Server is running on port ", 3000)
    });
  
  } catch (error) {
    console.log(error);
  }
}
main();
