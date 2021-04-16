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

