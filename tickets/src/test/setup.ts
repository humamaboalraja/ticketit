import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';

// defining a global property
declare global {
  namespace NodeJS {
    interface Global {
      // Our promise is going to resolve itself with a cookie (string[])
      get_auth_cookie(): Promise<string[]>;
    }
  }
}

let mongo: any;

// Hook | Running before all tests
beforeAll(async () => {
   process.env.JWT_KEY = 'placeholder';
 
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
 
   for (let collection of collections) {
     await collection.deleteMany({});
   }
 });


// Hook | Running before each test
afterAll(async () => {
   await mongo.stop();
   await mongoose.connection.close();
 });

// Globally scoped function
global.get_auth_cookie = async () => {
  const email = 'test@ticketit.com';
  const password = 'password';

  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email, password
    })
    .expect(201);
  
  const cookie = response.get('Set-Cookie');
  return cookie;
}