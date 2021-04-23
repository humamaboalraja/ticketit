import { Subjects, Publisher, OrderCancelledEvent } from '@ticketit/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
