import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user with a stored cookie after a successful authentication', async () => {
   const cookie = await global.get_auth_cookie();
   
   const response = await request(app)
      .get('/api/users/currentuser')
      .set('Cookie', cookie)
      .send()
      .expect(200);
   
   expect(response.body.currentUser.email).toEqual('test@ticketit.com')
})