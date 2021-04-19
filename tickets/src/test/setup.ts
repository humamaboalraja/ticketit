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
      get_auth_cookie(): string[];
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
global.get_auth_cookie = () => {

  // Building a JWT payload
  const payload = {
    id: '3h4j2j28jwfnc',
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
