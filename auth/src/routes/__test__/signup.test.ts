import request from 'supertest';
import { app } from '../../app';

it('returns a 201 successful signup', async () => {
   return request(app)
      .post('/api/users/signup')
      .send({
         email: 'example@ticketit.com',
         password: 'password'
      })
      .expect(201);
});


it('returns a 400 with an invalid email', async() => {
   return request(app)
      .post('/api/users/signup')
      .send({
         email: 'invalid-input',
         password: 'password'
      })
      .expect(400);
});


it('returns a 400 with an invalid password', async() => {
   return request(app)
      .post('/api/users/signup')
      .send({
         email: 'invalid-input',
         password: 'p'
      })
      .expect(400);
}); 


it('returns a 400 with email and password', async() => {
   await request(app)
      .post('/api/users/signup')
      .send({
         email: 'humam@ticketit.com',
      })
      .expect(400);
   await request(app)
      .post('/api/users/signup')
      .send({
         password: '123456'
      })
      .expect(400);
}); 