import request from 'supertest';
import { setOriginalNode } from 'typescript';
import { app } from '../../app';

it('fails when an email that does not exist is supplied', async () => {
   await request(app)
      .post('/api/users/signin')
      .send({
         email: 'humam@ticketit.com',
         password: '123456'
      })
      .expect(400)
});

it('fails when an incorrect password is supplied', async () => {
   await request(app)
      .post('/api/users/signup')
      .send({
         email: 'humam@ticketit.com',
         password: '123456'
      })
      .expect(201);
   
   await request(app)
      .post('/api/users/signin')
      .send({
         email: 'humam@ticketit.com',
         password: '1234112'
      })
      .expect(400);
});


it('reponds with a cookie when given valid credentials', async () => {
   await request(app)
      .post('/api/users/signup')
      .send({
         email: 'humam@ticketit.com',
         password: 'password'
      })
      .expect(201);
   
   const response = await request(app)
      .post('/api/users/signin')
      .send({
         email: 'humam@ticketit.com',
         password: 'password'
      })
      .expect(200);
   
   expect(response.get('Set-Cookie')).toBeDefined();
});