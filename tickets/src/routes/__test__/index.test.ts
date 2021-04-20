import request from 'supertest';
import { app } from '../../app';

const createTicket = () => {
  return request(app).post('/api/tickets').set('Cookie', global.getAuthCookie()).send({
    title: 'asldkf',
    price: 20,
  });
};

it('can fetch a list of tickets', async () => {

   // generrating tickets
   let numberOfTickets = 3;
   for(let i = 0; i < numberOfTickets; i++) {
      await createTicket();
   }
   

  const response = await request(app).get('/api/tickets').send().expect(200);

  expect(response.body.length).toEqual(3);
});
