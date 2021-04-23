import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import { natsWrapper } from '../../nats-wrapper';

it('Has a route handler listening to /api/tickets for post requests', async () => {
   const response = await request(app)
      .post('/api/tickets')
      .send({})
   expect(response.status).not.toEqual(404);
});

it('Can only be accessed if the user is signed in', async () => {
   const response = await request(app)
      .post('/api/tickets')
      .send({})
      .expect(401);
   
});

it('Returns a status other that 401 if the user is signed in', async () => {
   const response = await request(app)
      .post('/api/tickets')
      .set('Cookie', global.getAuthCookie())
      .send({})
      
   expect(response.status).not.toEqual(401);
})

it('Returns an error if an invalid title is provided', async () => {
   await request(app)
      .post('/api/tickets')
      .set('Cookie', global.getAuthCookie())
      .send({
         title: '',
         price: 10
      })
      .expect(400);
   await request(app)
      .post('/api/tickets')
      .set('Cookie', global.getAuthCookie())
      .send({
         price: 10
      })
      .expect(400);
});

it('Returns an error if an invalid price is provided', async () => {
   await request(app)
      .post('/api/tickets')
      .set('Cookie', global.getAuthCookie())
      .send({
         title: 'example',
         price: -10
      })
      .expect(400);

   await request(app)
      .post('/api/tickets')
      .set('Cookie', global.getAuthCookie())
      .send({
         title: 'example'
      })
      .expect(400);
});

it('Creates a ticket with valid input', async () => {
   let tickets = await Ticket.find({});
   expect(tickets.length).toEqual(0);

   const title = 'Ticket example'

   await request(app)
      .post('/api/tickets')
      .set('Cookie', global.getAuthCookie())
      .send({
         title,
         price: 20
      })
      .expect(201);

      tickets = await Ticket.find({});
      expect(tickets.length).toEqual(1);
      expect(tickets[0].title).toEqual(title);
      expect(tickets[0].price).toEqual(20);
});

it('publishes an event', async () => {
   const title = 'asldkfj';
 
   await request(app)
     .post('/api/tickets')
     .set('Cookie', global.getAuthCookie())
     .send({
       title,
       price: 20,
     })
     .expect(201);
 
   expect(natsWrapper.client.publish).toHaveBeenCalled();
 });
 