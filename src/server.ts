import app from './app';
import mongoose from 'mongoose';
import { config } from './app/config';
const port = config.port;

async function main() {
  await mongoose.connect(config.databaseUrl);
  console.log('Database connected successfully!');
  app.listen(port, () => {
    console.log(`server is running on port no: ${port}`);
  });
}

main();
