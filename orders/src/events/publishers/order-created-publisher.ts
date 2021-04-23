import { Publisher, OrderCreatedEvent, Subjects } from '@ticketit/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
