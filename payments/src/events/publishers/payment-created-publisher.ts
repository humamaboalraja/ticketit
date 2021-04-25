import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketit/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
