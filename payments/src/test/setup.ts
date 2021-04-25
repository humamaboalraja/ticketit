import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import jwt from 'jsonwebtoken';
// defining a global property
declare global {
  namespace NodeJS {
    interface Global {
      // Our promise is going to resolve itself with a cookie (string[])
      getAuthCookie(id?: string): string[];
    }
  }
}

// Mocking NATS Server
jest.mock('../nats-wrapper.ts')

process.env.STRIPE_KEY = 'sk_test_51IjzFtCoyMvipM4Vu0fJjXd6TnyeFhiM8QTrYdszxPIT5gAHtEgzDm7nVDvEBQLPpX11Cu93QVL4G9NdNw4WciNz00kMgqFda9';

let mongo: any;

// Hook | Running before all tests
beforeAll(async () => {
   process.env.JWT_KEY = 'placeholder';
   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
 
   mongo = new MongoMemoryServer();
   const mongoUri = await mongo.getUri();
 
   await mongoose.connect(mongoUri, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   });
 });



// Hook | Running before each test
beforeEach(async () => {
   jest.clearAllMocks();
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
global.getAuthCookie = (id?: string) => {
  
  // Building a JWT payload
  const payload = {
    id: id || new mongoose.Types.ObjectId().toHexString(),
    email: 'humam@ticketit.com'
  };

  // Creating the JWT!
  const token = jwt.sign(payload, process.env.JWT_KEY!)

  // Building session Object. { jwt:  MY_JWT }
  const session = { jwt: token }

  // Turning the session into JSON
  const sessionJSON = JSON.stringify(session)

  // Encoding JSON as base64
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // Returning a string that has a cookie with encoded data
  return [`express:sess=${base64}`]

}
