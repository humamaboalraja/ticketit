import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';


let mongo = any;

// Hook | Running before all tests
beforeAll(async () => {
   mongo = new MongoMemoryServer();
   const mongoUri = await mongo.getUri();

   await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   });
});



// Hook | Running before each test
beforeEach(async () => {
   const collections = await mongoose.connection.db.collections();
   for(let collection of collections){
      await collection.deleteMany({});
   }
});


// Hook | Running before each test
afterAll(async () => {
   await mongo.stop();
   await mongoose.connection.close();
});