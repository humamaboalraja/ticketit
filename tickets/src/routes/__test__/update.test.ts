import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import mongoose  from 'mongoose';

it('Returns a 404 if the provided id doesn not exist', async () => {
   const id = new mongoose.Types.ObjectId().toHexString();
   const response = await request(app)
      .put(`/api/tickets/${id}`)
      .set('Cookie', global.getAuthCookie())
      .send({
         title: 'valid_title',
         price: 50
      });
   expect(404);
});

it('Returns a 401 if the user is not authenticated', async () => {
   const id = new mongoose.Types.ObjectId().toHexString();
   const response = await request(app)
      .put(`/api/tickets/${id}`)
      .send({
         title: 'valid_title',
         price: 50
      });
   expect(401);
});

it('Returns a 401 if the user does not own the ticket', async () => {

   const response = await request(app)
      .post('/api/tickets')
      .set('Cookie', global.getAuthCookie())
      .send({
         title: 'Ticket',
         price: 20
      })
      
   await request(app)
      .put(`/api/tickets/${response.body.id}`)
      .set('Cookie', global.getAuthCookie())
      .send({
         title: 'Ticket',
         price: 20
      })
      .expect(401);
   
})

it('Returns a 400 if the user provides an invalid title is provided', async () => {

   const cookie = global.getAuthCookie();
   const response = await request(app)
      .post('/api/tickets')
      .set('Cookie', cookie)
      .send({
         title: 'Ticket',
         price: 20
      })
      
   await request(app)
      .put(`/api/tickets/${response.body.id}`)
      .set('Cookie', cookie)
      .send({
         title: '',
         price: 50
      })
      .expect(400);

   await request(app)
      .put(`/api/tickets/${response.body.id}`)
      .set('Cookie', cookie)
      .send({
         title: '',
         price: -50
      })
      .expect(400);
});

it('updates the ticket provided valid inputs', async () => {
   const cookie = global.getAuthCookie();
 
   const response = await request(app)
     .post('/api/tickets')
     .set('Cookie', cookie)
     .send({
       title: 'asldkfj',
       price: 20,
     });
 
   await request(app)
     .put(`/api/tickets/${response.body.id}`)
     .set('Cookie', cookie)
     .send({
       title: 'new title',
       price: 100,
     })
     .expect(200);
 
   const ticketResponse = await request(app)
     .get(`/api/tickets/${response.body.id}`)
     .send();
 
   expect(ticketResponse.body.title).toEqual('new title');
   expect(ticketResponse.body.price).toEqual(100);
 });
 