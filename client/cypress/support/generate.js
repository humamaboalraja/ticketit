import {build, fake} from 'test-data-bot';

const buildUser = build('User').fields({
   email: fake(f => f.internet.email()),
   password: fake(f => f.internet.password())
});

const buildTicket = build('Ticket').fields({
   ticket_title: fake(f => f.commerce.productName()),
   price: fake(f => f.commerce.price())
});


export {buildUser, buildTicket}